set1 = [
    {
        question: 'What is a correct syntax to output "Hello World" in Python?',
        choices: {
            'a': "echo 'Hello World' ",
            'b': "ec 'Hello World'",
            'c': "printf('Hello World')",
            'd': "print('Hello World')"
        },
        answer: 'd'
    },
    {
        question: 'What is a correct syntax to the comments in Python?',
        choices: {
            'a': "/* This is comment */ ",
            'b': "// This is comment ",
            'c': "# This is comment",
            'd': "&lt!-- This is comment -->"
        },
        answer: 'c'
    },
    {
        question: 'In Python, a variable must be declared before it is assigned a value:',
        choices: {
            'a': "True ",
            'b': "False"
        },
        answer: 'b'
    },
    {
        question: "Which one is NOT a legal variable name?",
        choices: {
            'a': "Myvar",
            'b': "my-var",
            'c': "my_var",
            'd': "_myvar"
        },
        answer: 'a'
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        choices: {
            'a': "x = 5",
            'b': "x = int(5)",
            'c': "Both the answers are correct"
        },
        answer: 'b'
    },
    {
        question: "What is the correct file extension for Python files?",
        choices: {
            'a': ".pyth",
            'b': ".pt",
            'c': ".py",
            'd': ".pyt"
        },
        answer: 'c'
    },
    {
        question: "How do you create a variable with the floating number 2.8?",
        choices: {
            'a': "x = 2.8",
            'b': "x = float(2.8)",
            'c': "both the answers are correct"
        },
        answer: 'b'
    },
    {
        question: "What is the correct syntax to output the type of a variable or object in Python?",
        choices: {
            'a': "print(type(x))",
            'b': "print(typeof(x))",
            'c': "print(typeofx)",
            'd': "print(typeOfx)"
        },
        answer: 'a'
    },
    {
        question: "What is the correct way to create a function in Python?",
        choices: {
            'a': "function myfunction(){..}",
            'b': "def myfunction():",
            'c': "create myfunction(){..}",
            'd': "void myfunction(){..}"
        },
        answer: 'b'
    },
    {
        question: "Which method can be used to return a string in upper case letters?",
        choices: {
            'a': "toUpperCase()",
            'b': "upper()",
            'c': "uppercase()",
            'd': "upperCase()"
        },
        answer: 'a'
    }]




function checkAnswer(id) {
    var buttonBox = document.createElement('div');
    buttonBox.innerHTML += '<div class="collapse" id="answerBox-' + (parseInt(id) + 1) + '">'
        
        + ' </div>';
    document.getElementById(parseInt(id) + 1).appendChild(buttonBox);
    var block = document.getElementById("answers-" + (parseInt(id) + 1));
    var checked = block.querySelector("input[type='checkbox']:checked").getAttribute("valid");
    if (checked == null) {

        var checkAnswer = document.getElementById('answerBox-' + (parseInt(id) + 1));
        checkAnswer.innerHTML = '<div class="card card-body p-3 mb-2 bg-danger text-white">'
        + ' Wrong Answer'
        + '</div>'
    }
    else if (checked == "valid") {
        var checkAnswer = document.getElementById('answerBox-' + (parseInt(id) + 1));
        checkAnswer.innerHTML = '<div class="card card-body p-3 mb-2 bg-success text-white">'
        + ' Correct Answer'
        + '</div>';
    }
}


function addQuestions(question, questionNo) {
    var block = document.createElement("div");
    block.classList.add("col-sm-12");
    block.setAttribute("id", parseInt(questionNo) + 1)
    var questionBlock = document.createElement("div");
    questionBlock.setAttribute("id", "questions")
    block.appendChild(questionBlock);
    var Question = (parseInt(questionNo) + 1) + ".  " + question;
    var text = document.createTextNode(Question);
    questionBlock.appendChild(text);
    var element = document.getElementById("row");
    element.appendChild(block);

}

function addChoices(choices, answer, questionNo) {
    /*  <div id="answers">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                <label class="form-check-label" for="exampleRadios1"> echo "Hello World"</label>
            </div>
        </div>
    */

    var answerBlock = document.createElement("div");
    answerBlock.classList.add("answerBlock");
    answerBlock.setAttribute("id", "answers-" + (parseInt(questionNo) + 1) + "");
    for (option in choices) {
        var formBox = document.createElement('div');
        formBox.classList.add("form-check");
        //formBox.classList.add("mt-15");
        formBox.setAttribute("id", option)
        if (option == answer) {
            formBox.innerHTML = '<input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value=' + option + ' valid="valid">';
            formBox.innerHTML += '<label class="form-check-label" for="exampleRadios1">' + choices[option] + '</label>';
            answerBlock.appendChild(formBox);
        }
        else {
            formBox.innerHTML = '<input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value=' + option + '>';
            formBox.innerHTML += '<label class="form-check-label" for="exampleRadios1">' + choices[option] + '</label>';
            answerBlock.appendChild(formBox);
        }
        var thisQuestionBlock = document.getElementById(parseInt(questionNo) + 1);
        thisQuestionBlock.appendChild(answerBlock);
    }

}




function addButtons(questionNo) {
    /* <div>
         <button type="button" id='btn' class="btn btn-primary" onclick="checkAnswer()">Check
             Answer</button>
         <button type="button" class="btn btn-secondary" onclick="Answer()">Submit</button>
     </div> */
    var buttonBox = document.createElement('div');
    buttonBox.classList.add("buttonGroup");
    buttonBox.setAttribute("id", "buttonGroup");
    buttonBox.innerHTML = '<button class="btn btn-primary"  type="button" data-toggle="collapse" data-target="#answerBox-' + (parseInt(questionNo) + 1) + '" aria-expanded="false" aria-controls="answer-' + (parseInt(questionNo) + 1) + '" onclick="checkAnswer(' + questionNo + ')">Check Answer</button>';
    buttonBox.innerHTML += '<button type="button" id="btn" class="btn btn-secondary" onclick="Answer()">Submit</button>';
    buttonBox.innerHTML += '<hr>';

    document.getElementById(parseInt(questionNo) + 1).appendChild(buttonBox);
}


function genrateQuiz(set) {
    for (ques in set) {
        addQuestions(set[ques].question, ques);
        addChoices(set[ques].choices, set[ques].answer, ques);
        addButtons(ques);
    }
}

genrateQuiz(set1);




