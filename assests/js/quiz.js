var displayQuestion=-1;

var questions =[
    {
        question:"Which is not not a way JavaScript code can be involved in an HTML file?",
        choices: ["Inline","Internal","Offset","External"],
        answer: "Offset"
            },
    {
question:"What is NaN in JavaScript?",
choices: ["Not a Number","New attributes Number","Null and Not"],
answer:"Not a Number"
    },
    {
    question:"Is JavaScript a case-senstive language?",
choices: ["True", "False"],
answer:"True"
    },
    {
        question: "What is a local Variable?",
        choices: ["A varible that is visble everywhere in your code","Only visible within a function where it's defined","Only visble in local storage"],
        answer:"Only visible within a function where it's defined"
            }, 
{
    question:"Which company developed JavaScipt",
    choices: ["Google","Java", "Netscape","Goodyear"],
    answer:"Netscape"
},
{
question:"What does it mean to be a full-stack web developer?",
choices:["Knowledgeable in both the front end and back end of an application","Eats pancakes once a week","Only knows hows to plug in ethernet cord", "Not a real thing"],
answer:"Knowledgeable in both the front end and back end of an application"
}

];
var questionsel=0
var startBtn=document.querySelector("#start")
const currenttime=document.querySelector("#timer");
var time =75;
var timer;
startBtn.addEventListener("click", ()=>{
timer=setInterval(()=>{
    time=time-1
    currenttime.textContent=time
},1000)
displayQuestion();
})


function displayQuestion(){
    displayQuestion++;
    if (displayQuestion>questions.length-1){
       quizDone();
        return;
    }
    var quiz="<h2>"+questions[displayQuestion].question+"</h2>"
   for (var i=0;i<questions[displayQuestion].choices.length;i++) {
    choiceBtn=choiceBtn.replace("[CHOICE]",questions[displayQuestion].choices[i]);
    if(questions[displayQuestion].choices[i]=== questions[displayQuestion].answer) {
        choiceBtn=choiceBtn.replace("[anwerchoice]","rightAnswer()"); 
    }else{
        choiceBtn=choiceBtn.replace("[anwerchoice]", "wrongAnswer()"); 
    } 
    quiz+=choiceBtn
}
document.getElementsByClassName("quiz").innerHTML=quiz;
}
// var currentquestion=questions[questionsel]
// var showquestion=currentquestion.question
// var showchoices=currentquestion.choices
// document.querySelector(".question").textContent=showquestion
// }

var respondsEl=document.querySelector("#responds");

function rightAnswer(){
    respondsEl.textContent ="You are Correct!:"+questions[nextQuestion].answer;
respondsEl.setAttribute("class","responds");
setTimeout(function(){
    respondsEl.setAttribute("class","hide");
},0)
displayQuestion();

}

function quizDone(){
    clearInterval(quizTimer);
    var scoreinfo=~("Highscore", "");
    <h2>~+localStorage.getItem</h2>
};

function resetGame(){
    clearInterval(quizDone);
    displayQuestion=-1;
}