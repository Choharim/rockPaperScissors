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

function computerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  return randomNumber;
 }
 

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

   let compChoice = computerChoice();
   compare(userChoice,compChoice);
 }


 function compare(userChoice,compChoice){
  
  const smallUser = "user".fontsize(5).sup();
  const smallComp = "comp".fontsize(5).sup();
  if(userChoice === compChoice){
    resultText.innerHTML = `${array[userChoice]}${smallUser} vs ${array[compChoice]}${smallComp} Draw ~ try again *_*`;
  }else if (userChoice - compChoice === 1 || userChoice - compChoice === -2){
    resultText.innerHTML = `${array[userChoice]}${smallUser} vs ${array[compChoice]}${smallComp} you are win!! ^_^`;
    userTotal += 1;
    userScore.innerText = userTotal;
  }else{
    resultText.innerHTML = `${array[userChoice]}${smallUser} vs ${array[compChoice]}${smallComp} you are lose ㅠ^ㅠ`;
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