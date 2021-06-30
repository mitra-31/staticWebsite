from flask import Flask,render_template,jsonify
import jyserver.Flask as jf



app = Flask(__name__)


@jf.use(app)
class Python:
    
    def __init__(self):
        pass
    
    def hello(self,id):
        self.js.document.getElementById('MainBlock').innerHTML = self.js.genrateQuiz(id)





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
    return render_template("py.html")


@app.route("/cpp-quiz")
def cppQuiz():
    return render_template("cppquiz.html")



@app.route("/java-quiz")
def javaQuiz():
    return render_template("develop.html")


@app.route("/python-quiz")
def pythonQuiz1():
    return Python.render(render_template("pythonquiz.html"))



@app.route("/python_compiler")
def python_compiler():
    return render_template("editor.html")


@app.route("/java_compiler")
def java_compiler():
    return render_template("editor1.html")



if __name__ == "__main__":
    app.run(debug=True,threaded=True, port=5000)
