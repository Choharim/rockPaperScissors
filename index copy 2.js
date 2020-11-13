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
let array = ["rock","paper","scissors"];

function win(userChoice,compChoice){
  const smallUser = "user".fontsize(5).sup();
  const smallComp = "comp".fontsize(5).sup();
  resultText.innerHTML = ` ${userChoice}${smallUser} vs ${compChoice}${smallComp}  you Win!`;
  userTotal += 1;
  userScore.innerText= userTotal;
}

function draw(userChoice,compChoice){
  const smallUser = "user".fontsize(5).sup();
  const smallComp = "comp".fontsize(5).sup();
  resultText.innerHTML = ` ${userChoice}${smallUser} vs ${compChoice}${smallComp}  Draw!`;
}

function lose(userChoice,compChoice){
  const smallUser = "user".fontsize(5).sup();
  const smallComp = "comp".fontsize(5).sup();
  resultText.innerHTML = ` ${userChoice}${smallUser} vs ${compChoice}${smallComp}  you Lose!`;
  compTotal += 1;
  compScore.innerText= compTotal;
}

function computerChoice(){
  const randomNumber = Math.floor(Math.random()*3);
  return array[randomNumber];
}

 function compare(userChoice){
  const compChoice = computerChoice(); 
  switch (userChoice + compChoice) {
  case "rockrock":
  case "paperpaper":
  case "scissorsscissors":
    draw(userChoice,compChoice);
    break;
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
    win(userChoice,compChoice);
    break;
  case "rockpaper":
  case "paperscissors":
  case "scissorsrock":
    lose(userChoice,compChoice);
    break;
}
 }

 function init(){
 rock.addEventListener("click",()=> compare("rock"));
 paper.addEventListener("click",()=> compare("paper"));
 scissors.addEventListener("click",()=> compare("scissors"));
 }
 init();