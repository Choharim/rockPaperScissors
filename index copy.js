const choices = document.querySelector(".choices");
const rock = choices.querySelector("#rock");
const paper = choices.querySelector("#paper");
const scissors = choices.querySelector("#scissors");



 function gameStart(event){
  let array = [];
  let userChoice =0;
  let compChoice =0;
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
    compChoice = Math.floor(Math.random()*3);
    
    compare();
    function compare(){
      if(userChoice == compChoice){
        
       console.log("draw");
      }else if(userChoice-compChoice == 1 || userChoice-compChoice == -2 ){
        console.log("you are winner!");
      }else {
       console.log("you are loser!");
      }
    }
 }
 



 function init(){
 rock.addEventListener("click",gameStart);
 paper.addEventListener("click",gameStart);
 scissors.addEventListener("click",gameStart);
 }
 init();