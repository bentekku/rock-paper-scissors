function playRound (playerSelection, computerSelection)
{
    if(playerSelection === "")
        {
            alert("Player decision required to calculate the outcome.");
        }
    else {
        for (i = 0; i <= 5; i++)
        {
            if(playerSelection === computerSelection)
            {
                console.log("It's a tie!");
            }
                    // Win-scenarios
            else if (playerSelection === "rock" && computerSelection === "scissor")
            {
                console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}` );

                playerPoints++;
            }
            else if(playerSelection === "paper" && computerSelection === "rock")
            {
                console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}` );

                playerPoints++;
            }
            else if(playerSelection === "scissor" && computerSelection === "paper")
            {
                console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);

                playerPoints++;
            }

                    // Lose-scenarios
            else if(playerSelection === "paper" && computerSelection === "scissor")
            {
                console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}` );

                computerPoints++;
            }
            else if(playerSelection === "rock" && computerSelection === "paper")
            {
                console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);

                computerPoints++;
            }
            else if(playerSelection === "scissor" && computerSelection === "rock")
            {
                console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);

                computerPoints++;
            }
            else if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissor"){
                console.log("Please select one of the options: ROCK, PAPER OR SCISSOR");
            }
        }
    }
    // console.log(`Round one is over. \n Player Points: ${playerPoints} \n Computer Points: ${computerPoints}`);
}

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerPoints = 0;
let computerPoints = 0;

const choices = ["rock", "paper", "scissor"];

const playerSelection = prompt("Rock, Paper or Scissor?: ").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

playRound(playerSelection, computerSelection);