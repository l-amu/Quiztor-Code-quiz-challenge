var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("countdown")
var questionPage = document.questionPage;
var wins = 0;
var losses = 0;
answers = []
score = []
var quize = [
    {
        question: "Commonly used data types Do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: ["alerts", "true"]
  
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
  var indexQuestion = [0]
  console.log(quize)
  // console.log(quize[1].choices[1]);
// starts everything
function startQuize() {
    // countdown();
    startQuestions();  
};

// function countdown() {
//     var timeleft = 10;

//     var timeInterval = setInterval(function() {
//         if (timeleft > 1){
//             timerEl.textContent = timeleft + "seconds left"
//             timeleft--;
//         }
//         else if(timeleft === 1) {
//             timerEl.textContent = timeleft + "second left"
//             timeleft--;
//         }
//         else{
//             timerEl.textContent = "";
//             clearInterval(timeInterval)
//             timeOver();

//         }
        
//     }, 7000);
// };

// function timeOver() {
//     alert("timer test")

// }

function startQuestions() {
  var hideStartQuize = document.querySelector('.start-holder')
  var questionHolder = document.getElementById('questions')
  hideStartQuize.classList.add('hide');
  var displayQuestions = document.createElement('h1');
  displayQuestions.textContent = quize[0].question
  questionHolder.appendChild(displayQuestions);
  questionHolder.classList.remove('hide')

  // this peice of code is added with the suggestion of my tutor
  var answerEl = document.getElementById('answers')
  for (let index = 0; index < 4; index++) {
    var displayAnswers = document.createElement('button')
    displayAnswers.textContent = index + 1 + "." + quize[0].choices[index]
    answerEl.appendChild(displayAnswers) 
    answerEl.classList.remove('hide')
    
    displayAnswers.addEventListener('click', startQuestions)
    console.log(displayAnswers);

    if(quize[0].choices[2] === true) {
      alert('true')
    }else if(quize[0].choices[0][1][3] === false){
      alert('false')
    }
  }
};
  
  


function highScoreHolder() {
    alert("view highscore")
    console.log(highScoreHolder)
};

function answerBtn() {
  displayAnswers.addEventListener('click', alert("help"))
  console.log(displayAnswers)
};












startEl.addEventListener("click", startQuize)
// viewHighScoreEl.addEventListener("submit", highScoreHolder)