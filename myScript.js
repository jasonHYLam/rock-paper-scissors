function computerPlay() {
	const playOptions = ['rock','paper','scissors'];
	let computerChoice = playOptions[Math.floor(Math.random()*3)]; 
	return computerChoice;
}

const gameResultsDiv = document.querySelector('#gameResults');
function playerWinsRound() {
	console.log("You win!");
	const winLossMessage = document.createElement('p');
	winLossMessage.textContent = "You win!";
	while(gameResultsDiv.firstChild) {
		gameResultsDiv.removeChild(gameResultsDiv.firstChild);
	}
	gameResultsDiv.appendChild(winLossMessage);
}

function computerWinsRound() {
	console.log("You lose!");
	const winLossMessage = document.createElement('p');
	winLossMessage.textContent = "You lose!";
	while(gameResultsDiv.firstChild) {
		gameResultsDiv.removeChild(gameResultsDiv.firstChild);
	}
	gameResultsDiv.appendChild(winLossMessage);
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => playRound('rock', computerPlay()));
paper.addEventListener('click', () => playRound('paper', computerPlay()));
scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

function playRound(playerSelection, computerSelection) {
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
