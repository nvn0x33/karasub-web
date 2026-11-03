from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from pathlib import Path
import uuid, json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        # Video and Config are a necessary requirement.
        if 'video_file' not in request.files:
            return jsonify({"error": "No video file part in this request!"})
        if 'config' not in request.form:
            return jsonify({"error": "No config data part in this request!"})
        
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
        
        return ID

if __name__ == "__main__":
    app.run(debug=True)