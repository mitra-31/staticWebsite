from flask import Flask,render_template



app = Flask(__name__)



@app.route("/")
def home():
    return render_template("home.html")

@app.route("/cpp")
def cpp():
    return render_template("cpp.html")

@app.route("/c")
def c():
    return render_template("develop.html")


@app.route("/java")
def java():
    return render_template("develop.html")


@app.route("/python")
def python():
    return render_template("develop.html")


@app.route("/cpp-quiz")
def cppQuiz():
    return render_template("cpp.html")

@app.route("/c-quiz")
def cQuiz():
    return render_template("develop.html")


@app.route("/java-quiz")
def javaQuiz():
    return render_template("develop.html")


@app.route("/python-quiz")
def pythonQuiz():
    return render_template("develop.html")

@app.route("/python_compiler")
def python_compiler():
    return render_template("editor.html")


@app.route("/java_compiler")
def java_compiler():
    return render_template("editor1.html")



if __name__ == "__main__":
    app.run(threaded=True, port=5000)