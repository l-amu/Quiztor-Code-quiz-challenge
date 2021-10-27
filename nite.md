var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
var timerEl = document.getElementById("countdown")
var questionPage = document.questionPage;
var wins = 0;
var losses = 0;
answers = []
score = []
var questionNumber = 0;
var currentQuestion;
var answerNumber = 0;
// console.log("error", questionNumber);

let quize = [
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
  
  console.log(quize)
  // console.log(quize[1].choices[1]);
// starts everything
function startQuize() {
  // var hideStartQuize = document.querySelector('.start-holder')
  // var questionHolder = document.getElementById('questions')
  // hideStartQuize.classList.add('hide');
  // var displayQuestions = document.createElement('h2');
  // displayQuestions.textContent = quize[0].question
  // questionHolder.appendChild(displayQuestions);
  // questionHolder.classList.remove('hide')
  //   // countdown();
    // startQuestions();  
    var test = quize[questionNumber]
    test++
    console.log(test)
};

// function checkAnswers() {
//   if(choices[0].some(item => item === "alerts")) {
//       alert('true')
//     }else if(quize[0].choices[0][1][3] === false){
//       alert('false')
//     }
// };
// var currentQuestion = questions[indexQuestion];
// for(var i = 0; i < currentQuestion.choices.length; i++) {
//   var currentChoice = currentQuestion.choices[i];
//   //Now write code to display each individual choice
// }

function startQuestions() {
  
  currentQuestion = quize[questionNumber]
  // grab my questions from displayquestion(h2) use that var 
  // use grabbed var.textcontent = currentquestion.question
  // answerselement.innerHTML = ""
  // currentquestion.choices.forEach(choice, i)
  // inside the function body create.element give it class and set attribute of value
  Element.setAttribute("value", choice)
  element.textContent= i + 1 + "." + choice
  // this peice of code is added with the suggestion of my tutor
  var answerEl = document.getElementById('answers')
  for (let index = 0; index < 4; index++) {
    var displayAnswers = document.createElement('button')
    displayAnswers.setAttribute("class","test")
    // how does this not go to one button?
    displayAnswers.textContent = index + 1 + "." + quize[0].choices[index]
    // indexQuestion++;
    answerEl.appendChild(displayAnswers) 
    answerEl.classList.remove('hide')
    // displayAnswers = displayQuestions
    
    displayAnswers.addEventListener('click', function() {
      // questionNumber++;
      var q = this.innerHTML
  if(q !== quize[index].answer ) {
    alert('wrong answer');
  }else{
      alert("correct answer")
    }

      console.log(this.innerHTML)
      console.log("it worked");
      // displayQuestions++;
      // nextQuestion();
      // test();
    })
  console.log("for user reponse?", displayAnswers);
  } 
};

function questionLoop() {
  for( const x of quize.quesion){ 
    displayQuestions++;
    // test();
  }
};
    



// && quize[i].answer === true

// var userAnswer = ;
// function nextQuestion(event) {
//   var q = event.target.innerHTML
//   if(q !== quize[0].answer ) {
//     alert('wrong answer');
//   }else{
//       alert("correct answer")
//     }  

// };
  
  


function test() {
    alert("it passed")
    console.log(test)
};


startEl.addEventListener("click", startQuize)
// displayAnswers.addEventListener('submit', nextQuestion())

// viewHighScoreEl.addEventListener("submit", highScoreHolder)
var 



/* 
.question-box {
    background-color: rebeccapurple;
    display: flex;
    justify-content: center;
    display: flex;
    margin: auto;
    height: 24px;
    width: 24px;


} */


/* .start-page p {
    display: flex;
    justify-content: center;
} */



/* buttons */



/* 
#highscore-Btn {
    color: purple;
    /* margin-top: 10px;
    margin-right: 100px;
    border-radius: 5px; */
} */

/* .start-holder {
    margin-left: 304px;
    margin-top: 100px;
    text-align: center;
    
}

#start-quize {
    color: purple;
    margin-top: 4px;
    margin-left: 70px;
} */

/* #question-page{

} */

/* .hide {
    display: none;
}

.answer-container {
    display: flex;
    
    flex-direction: column;
    color: red;

} */

/* .test {
    margin-bottom: 5px;
} */

/* .timer-holder {
    color: black;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 5px;

} */


   // if (currentAnswer === correctAnswer) {
    //     alert("correctAnswer")     
    // } else {
    //     alert("wrong")
    // }

    // questionCounter++;
    // if (questionCounter === question.length) {
    //     endgame();    
    // } else {
    //     generateQuestion();
    // }