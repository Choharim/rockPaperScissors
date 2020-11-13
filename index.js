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

array.push(rock.id);
array.push(paper.id);
array.push(scissors.id);


function greenGlow(userChoice){
  document.getElementById(array[userChoice]).classList.add("green");
}
function blueGlow(userChoice){
  document.getElementById(array[userChoice]).classList.add("blue");
}
function redGlow(userChoice){
  document.getElementById(array[userChoice]).classList.add("red");
}

function computerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  return randomNumber;
 }
 

 function personChoice(event){

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
    greenGlow(userChoice);
    setTimeout(()=> document.getElementById(array[userChoice]).classList.remove("green"),300);
  }else if (userChoice - compChoice === 1 || userChoice - compChoice === -2){
    resultText.innerHTML = `${array[userChoice]}${smallUser} vs ${array[compChoice]}${smallComp} you are win!! ^_^`;
    userTotal += 1;
    userScore.innerText = userTotal;
    blueGlow(userChoice);
    setTimeout(()=>document.getElementById(array[userChoice]).classList.remove("blue"),300);
  }else{
    resultText.innerHTML = `${array[userChoice]}${smallUser} vs ${array[compChoice]}${smallComp} you are lose ㅠ^ㅠ`;
    compTotal += 1;
    compScore.innerText = compTotal;
    redGlow(userChoice);
    setTimeout(()=>document.getElementById(array[userChoice]).classList.remove("red"),300);
  }
  
 }

 function init(){
 rock.addEventListener("click",personChoice);
 paper.addEventListener("click",personChoice);
 scissors.addEventListener("click",personChoice); 
 }
 init();