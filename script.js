let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissor = document.getElementById("scissor");
const results = document.getElementById("results");

// Computer choice
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;

    if(num === 1) {
        return "rock";
    } else if(num === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Human plater choice
// function getHumanChoice() {
//     let input = prompt("Enter your choice: (Rock, Paper or Scissors)\nYou can also type 1=Rock, 2=Paper, 3=Scissor", "Rock");

//     if(!input) return "";
    
//     input = input.trim().toLowerCase();

//     if(input === "1") input = "rock";
//     else if(input === "2") input = "paper";
//     else if(input === "3") input = "scissor";

//     const validChoices = ["rock", "paper", "scissor"];

//     if(!validChoices.includes(input)) {
//         console.log("Invalid choice. Please try again.");
//         return getHumanChoice();
//     }

//     return input;
// }

// Score variables
let humanScore = 0;
let computerScore = 0;

// Round logic
function playRound(playerChoice, computerChoice) {
    // console.log(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

    // Check if theres a winner
    if(humanScore >= 5 || computerScore >= 5) return;

    let message = '';

    if(playerChoice === computerChoice) {
        message = 'It\'s a tie';
    } else if(
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        message = `You win this round! ${playerChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        message = `You lose this round! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    results.textContent = `${message}\nYour score: ${humanScore} | Computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            if(humanScore === 5) {
                alert("Congratulations! You reached 5 points and won the match!");
            } else {
                alert("The computer reached 5 points and wins this time. Better luck next round!");
            }
            resetGame()
        }, 100);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "New game started! Choose rock, paper or scissor";
}

// Events
buttonRock.addEventListener('click', () => playRound("rock", getComputerChoice()));
buttonPaper.addEventListener('click', () => playRound("paper", getComputerChoice()));
buttonScissor.addEventListener('click', () => playRound("scissor", getComputerChoice()));