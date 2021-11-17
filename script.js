let arrayChoice = ["Rock", "Paper", "Scissors"];
let choice = arrayChoice[Math.floor(Math.random() * arrayChoice.length)];

// This is the computer's choice of Rock, Paper, Scissors.
let computerPlay = function () {
	return choice;
};

let singleRound(playerSelection, computerSelection) {

	computerSelection = arrayChoice[Math.floor(Math.random() * arrayChoice.length)];

}

