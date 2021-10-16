var startEl = document.querySelector("#start-quize");
var viewHighScoreEl = document.querySelector("#highscore-Btn")
answers = []
score = []
var quize = [
    {
        question: "Commonly used datas do not include:",
        choices: ["commas", "", "three", "fpor"],
        answer: "dog"
  
      },
      {
        question: "what is my name",
        choices: ["almsdfvsek", "dogsdfs", "three", "fpor"],
        answer: "three"
      },
      {
        question: "what is my name",
        choices: ["almek454", "d4545og", "three", "fpor"],
        answer: "fpor"
      }
  ]
  console.log(quize)
  console.log(quize[1].choices[1]);
  



function startQuize() {
    questions();
    alert("quize test");
    console.dir(startQuize);
};

function questions() {
    
    for (let i = 0; i < quize.length; i++) {
        var response = response.
        askedquestions.push()
    }



};

function highScoreHolder() {
    alert("view highscore")
    console.log(highScoreHolder)
};













startEl.addEventListener("click", startQuize)
viewHighScoreEl.addEventListener("submit", highScoreHolder)