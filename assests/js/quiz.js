var displayQuestion=-1;
var finalscore=0;
var timeleft=0;


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
// var questionsel=0
var startBtn=document.querySelector("#start")
const currenttime=document.querySelector("#timer");
var time =26;
var timer;



function displayQuestionverb(){
    displayQuestion++;

    if (displayQuestion>questions.length-1){
       quizDone();
        return;
    }
    var quizDone="<h2>"+questions[displayQuestion].question+"</h2>"
   for (var i=0;i<questions[displayQuestion].choices.length;i++)  {
      var choiceBtn=`<button>"[CHOICE]"</button>`
      console.log(choiceBtn)
    choiceBtn=choiceBtn.replace("[CHOICE]",questions[displayQuestion].choices[i]);
    console.log(choiceBtn)
    if(questions[displayQuestion].choices[i]=== questions[displayQuestion].answer) {
        choiceBtn=choiceBtn.replace("[anwerchoice]","rightAnswer()"); 
    }else{
        choiceBtn=choiceBtn.replace("[anwerchoice]", "wrongAnswer()"); 
    } 
    quizDone+=choiceBtn
}
document.getElementsByClassName("quiz")[0].innerHTML=quizDone;
}


//this to start quiz

startBtn.addEventListener("click", ()=>{
    timeleft=5;
 
    // var questionsel=0
    var startBtn=document.querySelector("#start")
    const currenttime=document.querySelector("#timer");
    
    document.getElementById("timer").innerHTML=time+ " seconds";

    timer=setInterval(function() {
    time--;

    
    currenttime.textContent=time;
    time=time-1
    document.getElementById("timer").innerHTML="Time left "+time+ " seconds";
    if(time<=0){
        clearInterval(timer);
       
        window.alert("Time ran out, Game over");
        over();
    }
},1000);
displayQuestionverb();
})



// var currentquestion=questions[questionsel]
// var showquestion=currentquestion.question
// var showchoices=currentquestion.choices
// document.querySelector(".question").textContent=showquestion
// }

var respondsEl=document.querySelector("#responds");

function rightAnswer(){
    respondsEl.textContent ="You are Correct!:"+questions[displayQuestionverb].answer;
respondsEl.setAttribute("class","disappear");
setTimeout(function(){
    respondsEl.setAttribute("class","disappear");
},1500)
displayQuestionverb();

}

function over(){
    clearInterval(timer);

var details=` 
 <h2>Finished</h2> 
<p>Your score is  + finalscore + </p>
<p>Enter your intials</p>
<input type="text" id="scorer" class="intials" required>
<button onclick="savescore()" class="savescorebtn" title="Submit Score">Submit</button>`;
   
   document.getElementById("start").innerHTML=details;
}
    
    function winner() {
     var details=`("savescore", "");
   <h2>`+localStorage.getItem("scorer") + `Score is:</h2> `


    }

function resetGame(){
    clearInterval(qtimer);
    displayQuestion=-1;
    timeleft=0;
    time=null;
    document.getElementById("timeleft").innerHTML=timeleft+ "seconds";
    window.location.reload();
    document.getElementsById("start").innerHTML=details;
}
function clearscore(){
    var details
    localStorage.setItem("score",finalscore);
    localStorage.setItem("scorer", "");
    resetGame();
};
function wrongAnswer(){
    
} respondsEl.textContent ="Inncorrect"+questions[displayQuestionverb].answer;
respondsEl.style.color = "red";
respondsEl.style.fontWeight = "bold";
respondsEl.setAttribute("class","disappear");
setTimeout(function(){
    respondsEl.setAttribute("class","disappear");
},1500)
displayQuestionverb();

