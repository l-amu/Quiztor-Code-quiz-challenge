var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("countdown")
var questionHolder = document.getElementById('questions');
var answerEl = document.getElementById('answers')
var answerContainerEl = document.querySelector('.answer-container')
var quizeData = [
    {
        question: "Commonly used data types Do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        question: "The condtion in an if/else statment is enclosed with______.",
        choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
        answer: "paranthesis"
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
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: ["javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        question: "String values must be enclosed within_________when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "quotes"
    }
]

var timerInnerText = 76;
var score = 0
var highScore = []
var questionCounter = 0;
// var currentChoices = 0;
// answerBtn.textContent = "";





function startQuize() {
    score = 0
    timer();
    generateQuestion();
};
//   check the statues of the game concurrent to the time
function timer() {
    var timeInterval = setInterval(function () {
        if (timerInnerText > 1) {
            timerInnerText--;
            timerEl.textContent = "Time: " + timerInnerText;
        } else {
            // alert ("game over");
            clearInterval(timeInterval);
        }
    }, 1000);
    console.log("timer", timeInterval)
};

function generateQuestion() {
    // set currentquestion tracker
    var currentQuestion = quizeData[questionCounter]
    // hide the start button and it's text and show question
    var hideStartQuize = document.querySelector('.start-holder');
    hideStartQuize.classList.add('hide');
    var displayQuestions = document.createElement('h2');
    displayQuestions.textContent = currentQuestion.question;
    questionHolder.appendChild(displayQuestions);
    questionHolder.classList.remove('hide');
    //  console.log(displayQuestions);

    // for each question create 4 butons
    currentQuestion.choices.forEach(function (choice, i) {
        var answerBtn = document.createElement('button')
        answerBtn.classList.add('answerBtnStyle')
        //  answerBtn.textContent= i + 1 + "." + choice
        answerBtn.textContent = choice
        answerContainerEl.classList.remove('hide')
        answerEl.appendChild(answerBtn);
        // console.log(choice)
        console.log(answerBtn)

        answerBtn.addEventListener('click', () => {
            checkAnswer(answerBtn);
        })
    })
};

// reset/ start from beganing
// reset/ start from beganing
// function resetState() {
//     while(answerBtn.firstChild) {
//         answerBtn.removeChild(answerBtn.firstChild)


// }



// loop through choice and return if the questions are finished
function checkAnswer(answerBtn) {

    console.log(answerBtn.textContent)
    if (quizeData[questionCounter].answer === answerBtn.textContent) {
        alert('it passed')
        questionCounter++;
        // generateQuestion()
        console.log("questioncounter", questionCounter)
        score += timerInnerText;
    } else {
        // alert('it failed')
        score -= 10;
        timerInnerText = timerInnerText - 15;
    }
    // questionHolder.textContent = "";
    // console.log(questionHolder)

    if (questionCounter === questions.length -1) {
        resetState()
        return;
    } else {
        questionCounter++;
        generateQuestion();
    }
};


function endgame() {
    alert("game over")

};

startEl.addEventListener('click', startQuize)
