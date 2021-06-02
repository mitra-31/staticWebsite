from flask import Flask,render_template



app = Flask(__name__)



@app.route("/")
def home():
    return render_template("home.html")

@app.route("/cpp")
def cpp():
    return render_template("cpp.html")

if __name__ == "__main__":
    
    app.run(debug=True)