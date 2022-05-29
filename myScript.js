function computerPlay() {
	const playOptions = ['rock','paper','scissors'];
	let computerChoice = playOptions[Math.floor(Math.random()*3)]; 
	return computerChoice;
}

function playerWinsRound() {
	console.log("You win!");
}

function computerWinsRound() {
	console.log("You lose!");
}

function draw() {
	console.log("Draw!");
}
function rockWins() {
	console.log("Rock beats scissors");
}

function scissorsWins() {
	console.log("Scissors beats paper");
}

function paperWins() {
	console.log("Paper beats rock");
}
function singleTurn(playerSelection, computerSelection) {
	let playerSelectionLower = playerSelection.toLowerCase();

	let roundWinner;

	if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
		computerWinsRound();
		rockWins();
		roundWinner = "computer";
		return roundWinner;
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
		computerWinsRound();
		scissorsWins();
		roundWinner = "computer";
		return roundWinner;
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
		computerWinsRound();
		paperWins();
		roundWinner = 'computer';
		return roundWinner;
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
		playerWinsRound();
		rockWins()
		roundWinner = "player";
		return roundWinner;
	}
	else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
		playerWinsRound();
		scissorsWins();
		roundWinner = "player";
		return roundWinner;
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
		playerWinsRound();
		paperWins();
		roundWinner = "player";
		return roundWinner;
	}
	else { draw();
		return "Draw!" 
	};
}

function game() {
		let playerScore = 0;
		let computerScore = 0;
}

game();
