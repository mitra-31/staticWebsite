

function checkAnswer(id) {
    //block.querySelector("input[type='checkbox']:checked").style.css = "Red"
    var buttonBox = document.createElement('div');
    buttonBox.innerHTML += '<div class="collapse" id="answerBox-' + (parseInt(id) + 1) + '">'

        + ' </div>';
    document.getElementById(parseInt(id) + 1).appendChild(buttonBox);
    var block = document.getElementById("answers-" + (parseInt(id) + 1));
    var checked = block.querySelector("input[type='radio']:checked").getAttribute("valid");
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


function Answer() {
    var buttonBox = document.createElement('div');
    buttonBox.innerHTML += '<div class="collapse" id="answerBox-' + (parseInt(id) + 1) + '">'

        + ' </div>';
    document.getElementById(parseInt(id) + 1).appendChild(buttonBox);
    var block = document.getElementById("answers-" + (parseInt(id) + 1));
    var checked = block.querySelector("input[type='radio']:checked").getAttribute("valid");
    var correctAnswer = block.querySelector("input[type='radio']").getAttribute("valid");
    console.log(checked);
    console.log(checkAnswer);
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
    var element = document.getElementById("MainBlock");
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
        formBox.innerHTML = "<form>"
        if (option == answer) {
            formBox.innerHTML += '<input class="form-check-input" type="radio" name="question-' + parseInt(questionNo) + 1 + '" id="exampleRadios1" value=' + option + ' valid="valid">';
            formBox.innerHTML += '<label class="form-check-label" for="exampleRadios1">' + choices[option] + '</label>';
            formBox.innerHTML += "</form>"
            answerBlock.appendChild(formBox);
        }
        else {
            formBox.innerHTML = '<input class="form-check-input" type="radio" name="question-' + parseInt(questionNo) + 1 + '" id="exampleRadios1" value=' + option + '>';
            formBox.innerHTML += '<label class="form-check-label" for="exampleRadios1">' + choices[option] + '</label>';
            formBox.innerHTML += "</form>"
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
    buttonBox.innerHTML += '&nbsp;&nbsp;<button type="button" id="btn-answer" class="btn btn-secondary" onclick="Answer()">Submit</button>';
    buttonBox.innerHTML += '<hr>';

    document.getElementById(parseInt(questionNo) + 1).appendChild(buttonBox);
}


function genrateQuiz(i) {
    //var CurrentSet = document.getElementsByClassName("active").item(0).getAttribute("name");
    fetch("/static/js/pyquiz.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

           /* var MainBlock = document.createElement("div");
            MainBlock.setAttribute("id", "MainBlock");*/

            for (ques in data[i]) {
                console.log(ques)
                addQuestions(data[i][ques].question, ques);
                addChoices(data[i][ques].choices, data[i][ques].answer, ques);
                addButtons(ques);
            }
        });
}

genrateQuiz(0);






