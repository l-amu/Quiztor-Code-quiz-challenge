var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("countdown")
var timerDiv = document.querySelector(".timer-holder")
var questionHolder = document.getElementById('questions');
var answerEl = document.getElementById('answers')
var answerContainerEl = document.querySelector('.answer-container')
var highScoreBtn = document.getElementById("highscore-Btn")
var submitBtnEl = document.getElementById("submitBtn")
var finalDivEl = document.querySelector('.final-score')
var textArea = document.getElementById("textarea-reslults")
var formHolderEl = document.querySelector('.form-holder')
var clearEl = document.getElementById('go-back')
var backBtn = document.querySelector(".go-backBtn")
var hideStartQuize = document.querySelector('.start-holder');



var quizeData = [
    {
        question: "Commonly used data types Do not include:",
        choices: ["a.strings", "b.booleans", "c.alerts", "d.numbers"],
        answer: "c.alerts"

    },
    {
        question: "The condtion in an if/else statment is enclosed with______.",
        choices: ["a.quotes", "b.curly brackets", "c.paranthesis", "d.square brackets"],
        answer: "c.paranthesis"
    },
    {
        question: "Array in javascript can be used to store___________.",
        choices: ["number and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within_________when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        question: "Code block in function is enclosed in______",
        choices: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "curly brackets"
    }
]


var timerInnerText = 76;
var score = 0
var highScoreArray = []
var questionCounter = 0;
var displayQuestions = document.createElement('h2');
var scoreDiv = document.querySelector(".Score-holder")
scoreDiv.classList.add('hide')

function startQuize() {
    score = 0
    // timer();
    generateQuestion();
};
// var timeInterval = setInterval(function () {
//     timerInnerText--;
//     timerEl.textContent = "Time: " + timerInnerText;
//     if (timerInnerText <= 0 || questionCounter < quizeData.length - 1) {
//         clearInterval(timeInterval);
//         alert("game over")
//         gameOver()

//         // alert ("game over");
//         // clearInterval(timeInterval);
//     }
// }, 1000);
// console.log("timer", timeInterval)

function generateQuestion() {
    //   check the statues of the game concurrent to the time
    var timeInterval = setInterval(function () {
        timerInnerText--;
        timerEl.textContent = "Time: " + timerInnerText;
        if (timerInnerText <= 0) {
            clearInterval(timeInterval);
            gameOver();
            if (questionCounter < quizeData.length - 1) {
                gameOver()
            }
            // alert ("game over");
            // clearInterval(timeInterval);
        }
    }, 1000);

    var currentQuestion = quizeData[questionCounter]
    // this empties the div for the next question
    questionHolder.innerHTML = ""
    answerEl.innerHTML = ""
    // console.log("current question",questionCounter)
    // hide the start button and it's text and show question
    hideStartQuize.classList.add('hide');
    displayQuestions.innerHTML = currentQuestion.question;
    // displayQuestions.textContent = currentQuestion

    displayQuestions.style.display = "block";
    questionHolder.appendChild(displayQuestions);
    questionHolder.classList.remove('hide');

    //  console.log(displayQuestions);

    // for each question create 4 butons
    currentQuestion.choices.forEach(function (choices) {
        var answerBtn = document.createElement('button')
        answerBtn.classList.add('answerBtnStyle')
        //  answerBtn.textContent= i + 1 + "." + choice
        answerBtn.textContent = choices
        answerContainerEl.classList.remove('hide')
        answerEl.appendChild(answerBtn);
        // console.log("what is this doing?",choice)
        // console.log(answerBtn)

        answerBtn.addEventListener('click', () => {
            checkAnswer(answerBtn);
        })
    })

};

// loop through choice and return if the questions are finished
function checkAnswer(answerBtn) {
    console.log(answerBtn.textContent)
    if (quizeData[questionCounter].answer === answerBtn.textContent) {
        // generateQuestion()
        console.log("questioncounter upper", questionCounter)
        score += 5
        console.log("checkanswer score", score)
        // timerInnerText = timerInnerText;
    } else {
        timerInnerText = timerInnerText - 10;
        console.log("wrong answer check", score)
    }
    // questionHolder.textContent = "";
    questionCounter++;
    
    generateQuestion();
};


function gameOver() {
    timerDiv.classList.add("hide")
    displayQuestions.classList.add("hide")
    displayQuestions.style.display = "none"
    answerContainerEl.style.display = 'none'
    resultBlock();
};

function resultBlock() {
    scoreDiv.classList.remove('hide');
    formHolderEl.classList.remove('hide')
    // scoreDiv.style.display = "";
    var showResult = document.createElement('p')
    showResult.innerHTML = 'Your final score is' + "" + score + ".";
    scoreDiv.innerHTML = "";
    scoreDiv.appendChild(showResult)
    // for the intial submit button
    window.localStorage.setItem("high-score", score)
    submitBtnEl.addEventListener('click', IntialFunction) 
}

function IntialFunction(event) {
    event.preventDefault();
    //  var UserResult = {
    //     intial = initialInput,
    //     score = score
    // }
    // UserResult.push(UserResult)
    
    var initialInput = document.getElementById('frm1').value;
    if (initialInput === "") {
        alert("Please Enter Your Intials")
        return;
    }
    console.log("intial input is", initialInput)
        scoreDiv.classList.add('hide');
        formHolderEl.classList.add('hide')
        finalDivEl.classList.remove('hide')
        backBtn.classList.remove('hide')
        getItem(initialInput);
}



// localStorage.setItem('score')
function getItem(initialInput) {
    // var highScore = score
    // localStorage.setItem('score', highScore);
    textArea.textContent = initialInput + "-" + localStorage.getItem("high-score")   


}

function goBack() {
    // showResult= "";
    // textArea = "";
    // console.log("clicked")
    // finalDivEl.style.display = 'none';
    // hideStartQuize.classList.remove('hide')
    // formHolderEl.style.display = 
    localStorage.clear();
    // startQuize();
    location.reload();


}







clearEl.addEventListener('click', goBack) 
startEl.addEventListener('click', startQuize)





