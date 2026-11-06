from flask import Flask, render_template
import os

app = Flask(__name__)

@app.context_processor
def inject_photo_count():
    folder = os.path.join(app.static_folder, "photos")
    count = len([f for f in os.listdir(folder) if f.lower().endswith(".jpg")])
    return {"photo_count": count}

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
