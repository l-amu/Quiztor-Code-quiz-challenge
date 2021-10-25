var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("countdown")
var questionHolder = document.getElementById('questions');
var answerEl = document.getElementById('answers')
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

var timerInnerText = 70;
var score = 0
var highScore = []
var questionCounter = 0;
var currentChoices = 0;
answerEl.innerHTML = ""




function startQuize() {
    timer();
    generateQuestion();
};
//   check the statues of the game concurrent to the time
function timer() {
    var timeInterval = setInterval(function () {
        if (timerInnerText >= 60) {
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
    
//     
//     displayQuestions.textContent = questions[currentQuestion]
    var hideStartQuize = document.querySelector('.start-holder');
    hideStartQuize.classList.add('hide');
    var currentQuestion = quizeData[questionCounter]
    var displayQuestions = document.createElement('h2');
    displayQuestions.textContent = currentQuestion.question;
    questionHolder.appendChild(displayQuestions);
    questionHolder.classList.remove('hide');
    console.log(displayQuestions);
    questionCounter++;

    // multipleChoices1.textContent = currentQuestion.answer[0]
    // multipleChoices2.textContent = currentQuestion.answer[1] 
    // multipleChoices3.textContent = currentQuestion.answer[2] 
    // multipleChoices4.textContent = currentQuestion.answer[3] 


    // answerEl.appendChild(multipleChoices)
};
// for each quesstion create 4 butons
quizeData.forEach(function(choice, i) {
    var answerBtn = document.createElement('button')
    // answerBtn.textContent = quizeData.choices
    answerBtn.textContent= 1 + "." + choice
    answerBtn.appendChild(answerEl)
    console.log(choice)
    console.log(answerBtn)
})


function checkAnswer (event) {
    var correctAnswer = question[questionCounter].answer
    var currentAnswer = event.taget.textContent

    if (currentAnswer === correctAnswer) {
        alert("correctAnswer")     
    } else {
        alert("wrong")
    }

    questionCounter++;
    if (questionCounter === question.length) {
        endgame();    
    } else {
        generateQuestion();
    }
};

function endgame() {
    alert("game over")

};

startEl.addEventListener('click', startQuize)
answerBtn.addEventListener('click', checkAnswer)









