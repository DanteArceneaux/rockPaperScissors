let userScore = 0;
let computerScore = 0;
let round = 1;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const footer_div = document.getElementById("footer");

const smallUserWord = "(user)".fontsize(3).sup();
const smallCompWord = "(comp)".fontsize(3).sup();

footer_div.innerHTML = "Round: " + round;

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function gameOver() {
	if (userScore === 5) {
		userScore = "0";
		computerScore = "0";
		footer_div.innerHTML = "Round: 1";
		round = 0;
		alert("You Win!");
	}
	if (computerScore === 5) {
		userScore = "0";
		computerScore = "0";
		footer_div.innerHTML = "Round: 1";
		round = 0;
		alert("You lose! Please play again.");
	}
}

function win(userChoice, computerChoice) {
	userScore++;
	round++;
	footer_div.innerHTML = "Round: " + round;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
		beats  
		${convertToWord(computerChoice)}${smallCompWord}
		. You Win!`;

	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add("green-glow");
	setTimeout(function () {
		userChoice_div.classList.remove("green-glow");
	}, 600);

	if (userScore === 5) {
		footer_div.innerHTML = "Game Over.  You Win!";
		gameOver();
	}
}

function lose(userChoice, computerChoice) {
	round++;
	footer_div.innerHTML = "Round: " + round;
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;

	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
		loses to
		${convertToWord(computerChoice)}${smallCompWord}
		. You lost :(`;

	userChoice_div.classList.add("red-glow");
	setTimeout(function () {
		userChoice_div.classList.remove("red-glow");
	}, 600);

	if (computerScore === 5) {
		footer_div.innerHTML = "Game Over.  You Win!";
		gameOver();
	}
}

function draw(userChoice, computerChoice) {
	round++;
	footer_div.innerHTML = "Round: " + round;
	const userChoice_div = document.getElementById(userChoice);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
		beats
		${convertToWord(computerChoice)}${smallCompWord}
		. Draw`;
	userChoice_div.classList.add("grey-glow");
	setTimeout(function () {
		userChoice_div.classList.remove("grey-glow");
	}, 600);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();

	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;

		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	});

	paper_div.addEventListener("click", function () {
		game("p");
	});

	scissors_div.addEventListener("click", function () {
		game("s");
	});
}
main();
