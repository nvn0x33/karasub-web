from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from fileinput import filename

app = Flask(__name__)

@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        if 'file' not in request.files:
            print("")
            return jsonify({"error": "No file part in this request!"})
        file = request.files['file']
        filename = secure_filename(file.filename)
        file.save(filename)
        return "success"

if __name__ == "__main__":
    app.run(debug=True)