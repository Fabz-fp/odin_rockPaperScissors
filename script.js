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
    const playerChoice = prompt("Enter your choice: (Rock, Paper or Scissors)", "Rock").toLowerCase();
    const computerChoice = getComputerChoice();

    if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor") {
        console.log("Invalid choice.");
    } else if(playerChoice === computerChoice) {
        return "It's a tie!";
    } else if(playerChoice === "rock") {
        if(computerChoice === "paper") {
            return "You lose!";
        } else {
            return "You win!";
        }
    } else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            return "You win!";
        } else {
            return "You lose!";
        }
    } else {
        if(computerChoice === "rock") {
            return "You lose!";
        } else {
            return "You win!";
        }
    }
}

// Player score variables

console.log(getHumanChoice());