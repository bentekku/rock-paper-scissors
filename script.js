// VARIABLES
let playerPoints = 0;
let computerPoints = 0;
let userMove;
let computerChoice;

// ADDING REFERENCE TO THE p TAGS WHICH ARE RESPONSIBLE FOR DISPLAYING SCORES
const USERSCORE = document.querySelector("#user-score");
const COMPUTERSCORE = document.querySelector("#computer-score");

// SETTING THE DEFAULT VALUES OF THE SCORES TO ZERO
USERSCORE.innerHTML = `Your Score : 0`;
COMPUTERSCORE.innerHTML = `Computer Score : 0`;

const ENEMYMOVE = document.querySelector("#computer-move");

// NUMBER OF CHOICES COMPUTER HAS,
// STORED WITHIN AN ARRAY
const CHOICES = ["rock", "paper", "scissor"];

// FUNCTION FOR RETRIEVING RANDOM VALUE
// BY USING math.random AND MULTIPLYING IT WITH THE LENGTH OF THE ARRAY
// SO THE RANGE, OR NUMBER IS WITHIN THE TOTAL ITEM COUNT, I.E., 3
// math.floor ROUNDS UP THE RECIEVED VALUES, LET'S SAY IF WE GET A 1.5 OR MAYBE 1.75 BY USING  math.random
// THEN math.floor ROUNDS IT UP TO 1 OR 2 DEPENDING ON THE MATHS LOGIC; AS THE INDEX VALUE OF THE ARRAY ITEMS IS IN WHOLE NUMBER
// WE NEED WHOLE NUMBER VALUE FROM math.random, THIS IS THE REASON FOR UTILIZING math.floor
//  [ phew, pretty long description, i hope i dont forget this even after explaining this much ]
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

//  COLLECTING ALL THE BUTTONS UNDER AN ARRAY NAMED `CHOICES`
const choiceBtns = document.querySelectorAll("button");

// THOUGHT I HAVE TO USE THIS APPROACH, BUT NO MORE!
// AS THE EVENT IS ADDED OVER THE BUTTONS, WHICH IS THE PARENT OF THE IMAGE AND
// SO, event.target PRODUCES TARGET NAME, WHICH CAN BE COMPARED, SO YEAH
// const choiceBtnsImg = document.querySelectorAll("img");

// ADDING eventListener TO ALL THE BUTTONS, BY RUNNING THEM THROUGH forEach loop
choiceBtns.forEach((choiceBtn) =>
  choiceBtn.addEventListener("click", (event) => {
    // CALLING getUserChoice function AND PASSING THE event.target.id FOR COMPARISION
    getUserChoice(event.target.id);

    //  STORING THE VALUE OF COMPUTER MOVE
    computerMove = getComputerChoice().toLowerCase();

    ENEMYMOVE.innerHTML = `Computer Picked : ${computerMove.toUpperCase()}`;

    // PASSING USER MOVE & COMPUTER MOVE VALUES TO moveSetComparision function
    moveSetComparision(userMove, computerMove);
  })
);

// ASSIGNS VALUE TO userMove VARIABLE BASED UPON THE BUTTON CLICKED
// IMG IS ALSO CONSIDERED AS THE `bubbling effect?` IS TAKING PLACE, I.E., IMG TAG IS WRAPPED BY BUTTON TAG AND IN SOME CASES, BUTTON CLICK
// BY USER CAN BE INTERPRETED AS A CLICK ON THE IMG
function getUserChoice(targetName) {
  if (targetName === "btn-rock" || targetName === "img-rock") {
    userMove = "rock";
    // console.log(targetName);
    // console.log(userMove);
  } else if (targetName === "btn-paper" || targetName === "img-paper") {
    userMove = "paper";
    // console.log(targetName);
    // console.log(userMove);
  } else if (targetName === "btn-scissor" || targetName === "img-scissor") {
    userMove = "scissor";
    // console.log(targetName);
    // console.log(userMove);
  }
}

function moveSetComparision(userChoice, computerChoice) {
  // COMPARING WHETHER BOTH THE CHOICES ARE SIMILAR,
  // IF YES THEN IT'S A TIE, AND BOTH
  // PLAYER AND COMPUTER ARE REWARDED ONE POINT
  if (userChoice.toLowerCase() === computerChoice) {
    // alert("its a tie!");

    playerPoints++;
    computerPoints++;

    USERSCORE.innerHTML = `Your Score : ${playerPoints}`;
    COMPUTERSCORE.innerHTML = `Computer Score : ${computerPoints}`;
  }

  // USER WINNING LOGIC
  else if (
    userChoice.toLowerCase() === "rock" &&
    computerChoice.toLowerCase() === "scissor"
  ) {
    // alert(
    //   `${userMove.toUpperCase()} beats ${computerChoice.toUpperCase()}. Hence you won!`
    // );

    playerPoints++;
    USERSCORE.innerHTML = `Your Score : ${playerPoints}`;
  } else if (
    userChoice.toLowerCase() === "paper" &&
    computerChoice.toLowerCase() === "rock"
  ) {
    // alert(
    //   `${userMove.toUpperCase()} beats ${computerChoice.toUpperCase()}. Hence you won!`
    // );

    playerPoints++;
    USERSCORE.innerHTML = `Your Score : ${playerPoints}`;
  } else if (
    userChoice.toLowerCase() === "scissor" &&
    computerChoice.toLowerCase() === "paper"
  ) {
    // alert(
    //   `${userMove.toUpperCase()} beats ${computerChoice.toUpperCase()}. Hence you won!`
    // );

    playerPoints++;
    USERSCORE.innerHTML = `Your Score : ${playerPoints}`;
  }

  // USER LOSSING LOGIC
  else if (
    userChoice.toLowerCase() === "scissor" &&
    computerChoice.toLowerCase() === "rock"
  ) {
    // alert(
    //   `${computerChoice.toUpperCase()} beats ${userMove.toUpperCase()}. Hence you lost!`
    // );

    computerPoints++;
    COMPUTERSCORE.innerHTML = `Computer Score : ${computerPoints}`;
  } else if (
    userChoice.toLowerCase() === "rock" &&
    computerChoice.toLowerCase() === "paper"
  ) {
    // alert(
    //   `${computerChoice.toUpperCase()} beats ${userMove.toUpperCase()}. Hence you lost!`
    // );

    computerPoints++;
    COMPUTERSCORE.innerHTML = `Computer Score : ${computerPoints}`;
  } else if (
    userChoice.toLowerCase() === "paper" &&
    computerChoice.toLowerCase() === "scissor"
  ) {
    // alert(
    //   `${computerChoice.toUpperCase()} beats ${userMove.toUpperCase()}. Hence you lost!`
    // );

    computerPoints++;
    COMPUTERSCORE.innerHTML = `Computer Score : ${computerPoints}`;
  }
}
