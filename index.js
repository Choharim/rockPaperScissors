const choices = document.querySelector(".choices");
const rock = choices.querySelector("#rock");
const paper = choices.querySelector("#paper");
const scissors = choices.querySelector("#scissors");
const result = document.querySelector(".result");
const resultText = result.querySelector("p");
const scoreBord = document.querySelector(".score_bord");
const userScore =  scoreBord.querySelector("#user_score");
const compScore =  scoreBord.querySelector("#comp_score");

let compChoice = 0;
let userChoice = 0;
let compTotal = 0;
let userTotal = 0;
let array = [];


 function personChoice(event){
  array.push(rock.id);
  array.push(paper.id);
  array.push(scissors.id);
  let choicedId;

   if(event.target.id !== "")
   { 
    choicedId = event.target.id;
   }else{
    choicedId = event.target.parentNode.id;
   }
   userChoice = array.indexOf(choicedId);

   function computerChoice(){
    compChoice = Math.floor(Math.random()*3);
   }
   computerChoice();
   compare(userChoice,compChoice);
 }

 function compare(userChoice,compChoice){
  
  if(userChoice === compChoice){
    resultText.innerText = "Draw ~ try again *_*";
  }else if (userChoice - compChoice === 1 || userChoice - compChoice === -2){
    resultText.innerText = "you are win!! ^_^";
    userTotal += 1;
    userScore.innerText = userTotal;
  }else{
    resultText.innerText = "you are lose ㅠ^ㅠ";
    compTotal += 1;
    compScore.innerText = compTotal;
  }
  
 }

 function init(){
 rock.addEventListener("click",personChoice);
 paper.addEventListener("click",personChoice);
 scissors.addEventListener("click",personChoice);
 }
 init();