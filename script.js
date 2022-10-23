// VARIABLES
let playerPoints = 0;
let computerPoints = 0;
let userMove;

let computerChoice = null;

const CHOICES = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

const choiceBtns = document.querySelectorAll("button");

// const choiceBtnsImg = document.querySelectorAll("img");

choiceBtns.forEach((choiceBtn) =>
  choiceBtn.addEventListener("click", (event) => {
    // console.log(event.target);
    getUserChoice(event.target.id);
    computerMove = getComputerChoice().toLowerCase();
    console.log(`computerChoice = ${computerMove}`);
  })
);

function getUserChoice(targetName) {
  if (targetName === "btn-rock" || targetName === "img-rock") {
    userMove = "rock";
    console.log(targetName);
    console.log(userMove);
  } else if (targetName === "btn-paper" || targetName === "img-paper") {
    userMove = "paper";
    console.log(targetName);
    console.log(userMove);
  } else if (targetName === "btn-scissor" || targetName === "img-scissor") {
    userMove = "scissor";
    console.log(targetName);
    console.log(userMove);
  }
}

function moveSetComparision(userChoice, computerChoice) {
  if (userChoice.toLowerCase() === computerChoice) {
    alert("its a tie!");
  } else if (
    userChoice.toLowerCase() === "rock" &&
    computerChoice === "scissor"
  ) {
    alert(
      `${userMove.toUpperCase()} beats ${computerChoice.toUpperCase()}. Hence you won!`
    );
  }
}

// const computerMove = getComputerChoice().toLowerCase();

console.log(getComputerChoice());
console.log(getUserChoice());
