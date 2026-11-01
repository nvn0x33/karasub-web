from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        result = request.files
        # print(result["video_file"])
        return result

if __name__ == "__main__":
    app.run(debug=True)