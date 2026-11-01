from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from fileinput import filename

app = Flask(__name__)

@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        if 'video_file' not in request.files:
            app.logger.error("message: video_file not found in request.files")
            return jsonify({"error": "No file part in this request!"})
        
        file = request.files['video_file']
        filename = secure_filename(file.filename)
        file.save(filename)
        return "success"

if __name__ == "__main__":
    app.run(debug=True)