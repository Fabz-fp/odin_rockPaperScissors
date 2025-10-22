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
function getHumanChoice() {
    let input = prompt("Enter your choice: (Rock, Paper or Scissors)\nYou can also type 1=Rock, 2=Paper, 3=Scissor", "Rock");

    if(!input) return "";
    
    input = input.trim().toLowerCase();

    if(input === "1") input = "rock";
    else if(input === "2") input = "paper";
    else if(input === "3") input = "scissor";

    const validChoices = ["rock", "paper", "scissor"];

    if(!validChoices.includes(input)) {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }

    return input;
}

// Score variables
let humanScore = 0;
let computerScore = 0;

// Round logic
function playRound(playerChoice, computerChoice) {
    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

    if(playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if(
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`);
        computerScore++;
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

// Play game: 5 rounds
for(let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("=== Final Scores ===");
console.log(`You: ${humanScore}, Computer ${computerScore}`);

if (humanScore > computerScore) {
  console.log("🏆 You win the game!");
} else if (humanScore < computerScore) {
  console.log("💀 You lose the game!");
} else {
  console.log("🤝 It's a tie!");
}