const choices = document.querySelector(".choices");
const rock = choices.querySelector("#rock");
const paper = choices.querySelector("#paper");
const scissors = choices.querySelector("#scissors");

let compChoice = 0;
let userChoice = 0;
let array = [];

function computerChoice(){
 compChoice = Math.floor(Math.random()*3);
 return compChoice;
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
   return userChoice;
 }

 function compare(){
  
  
 }

console.log(compChoice);
console.log(userChoice);
 function init(){
 rock.addEventListener("click",personChoice);
 paper.addEventListener("click",personChoice);
 scissors.addEventListener("click",personChoice);
 
 computerChoice();
 compare();
 }
 init();