from flask import Flask, request, jsonify, send_file
from werkzeug.utils import secure_filename
from pathlib import Path
from pipeline import main, jobs
import threading
import uuid, json

app = Flask(__name__)

threading.Thread(target=main.submit).start()

print("went beyond")

@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        # Video and Config are a necessary requirement.
        if 'video_file' not in request.files:
            return jsonify({"error": "No video file part in this request!"}), 404
        if 'config' not in request.form:
            return jsonify({"error": "No config data part in this request!"}), 404
        
        # Obtain all file handles
        video = request.files['video_file']
        config = json.loads(request.form['config'])
        font_file = request.files.get('font_file')
        
        # Job Id
        ID = str(uuid.uuid4())
        
        # Save and create paths
        base_path = Path(f"jobs/{ID}/")
        base_path.mkdir(parents=True, exist_ok=True)
        
        # Some extensions
        new_video_file_name = f"input{Path(video.filename).suffix}"
        fonts = [".ttc", ".ttf", ".otf"]
        
        # Saving the Files
        video.save(base_path / new_video_file_name)
        (base_path / "config.json").write_text(json.dumps(config))
        
        if font_file != None:
            ext = Path(font_file.filename).suffix
            if ext in fonts:
                font_file.save((base_path / f"font{ext}"))
                
        jobs.append(ID, "queue")
        
        return jsonify({"upload_status": "success", "job_id": f"{ID}"}), 200

@app.route('/jobs/<string:job_id>/status', methods=['GET'])
def job_status(job_id):
    if job_id in jobs.jobs:
        return jsonify({jobs.jobs[job_id]}), 200
    else:
        return jsonify({"error": "job id not found!"}), 404

@app.route('/jobs/<string:job_id>/download', methods=['GET'])
def download_video(job_id):
    if job_id not in jobs.jobs:
        return jsonify({"error": "job id not found!"}), 404
    
    if jobs.jobs[job_id]["status"] != "done":
        return jsonify({"message": "job is not done yet!"}), 409
    
    output_path = Path("output") / job_id / "output.mp4"
    if not output_path.exists():
        return jsonify({"error": "output file missing!"}), 404
    
    return send_file(output_path, as_attachment=True)
        

if __name__ == "__main__":
    app.run(debug=True)