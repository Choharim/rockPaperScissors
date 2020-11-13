const choices = document.querySelector(".choices");
const rock = choices.querySelector("#rock");
const paper = choices.querySelector("#paper");
const scissors = choices.querySelector("#scissors");
const result = document.querySelector(".result");
const resultText = result.querySelector("p");
const scoreBoard = document.querySelector(".score_bord");
const userScore = scoreBoard.querySelector("#user_score");
const compScore = scoreBoard.querySelector("#comp_score");

let array = [];
  let userChoice =0;
  let compChoice =0;
  let userTotal = 0;
  let compTotal = 0;

 function gameStart(event){
  
  array.push(rock.id);
  array.push(paper.id);
  array.push(scissors.id);
  let choicedId;
  
   if(event.target.id !== "")
   { 
    choicedId = event.target.id;
    choiced = event.target;
   }else{
    choicedId = event.target.parentNode.id;
    choiced = event.target.parentNode;
   }
    userChoice = array.indexOf(choicedId);
    compChoice = Math.floor(Math.random()*3);
    
    compare();
    function compare(){
      if(userChoice == compChoice){

        resultText.innerText="draw";
        
        
      }else if(userChoice-compChoice == 1 || userChoice-compChoice == -2 ){
        resultText.innerText="you are winner!";
        userScore.innerText= userTotal += 1;

      }else {
        resultText.innerText="you are loser!";
        compScore.innerText= compTotal += 1;
      }
    }
 }
 



 function init(){
 rock.addEventListener("click",gameStart);
 paper.addEventListener("click",gameStart);
 scissors.addEventListener("click",gameStart);
 }
 init();