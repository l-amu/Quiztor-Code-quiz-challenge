var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("#countdown")

let quizeData = [
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

  var timeLeft = 10;

  function startQuize() {
    timer();
    generateQuestion();
  };

  function timer() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
          clearInterval(timeInterval);
        } else {
            // console.log(timeInterval--)
            alert("time over");
        }
      }, 1000);
      console.log("function", timeInterval)
  };

  function generateQuestion() {
    // .forEach(element => console.log(element));

      
  };

  


startEl.addEventListener('click', startQuize)  