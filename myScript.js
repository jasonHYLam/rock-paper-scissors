function computerPlay() {
	const playOptions = ['rock','paper','scissors'];
	let computerChoice = playOptions[Math.floor(Math.random()*3)]; 
	return computerChoice;
}

const winLossDiv = document.querySelector('#winLossDiv');
const roundResultsDiv = document.querySelector('#roundResultsDiv');

function playerWinsRound() {
	const winLossMessage = document.createElement('p');
	winLossMessage.textContent = "You win!";
	while(winLossDiv.firstChild) {
		winLossDiv.removeChild(winLossDiv.firstChild);
	}
	winLossDiv.appendChild(winLossMessage);
}

function computerWinsRound() {
	const winLossMessage = document.createElement('p');
	winLossMessage.textContent = "You lose!";
	while(winLossDiv.firstChild) {
		winLossDiv.removeChild(winLossDiv.firstChild);
	}
	winLossDiv.appendChild(winLossMessage);
}

function draw() {
	console.log("Draw!");
	const winLossMessage = document.createElement('p');
	winLossMessage.textContent = "Draw!";
	while(winLossDiv.firstChild) {
		winLossDiv.removeChild(winLossDiv.firstChild);
	}
	while(roundResultsDiv.firstChild) {
		roundResultsDiv.removeChild(roundResultsDiv.firstChild);
	}
	winLossDiv.appendChild(winLossMessage);
}

	
function rockWins() {
	const roundResult = document.createElement('p');
	roundResult.textContent = "Rock beats scissors!";
	while(roundResultsDiv.lastChild) {
		roundResultsDiv.removeChild(roundResultsDiv.firstChild);
	}
	roundResultsDiv.appendChild(roundResult);
}

function scissorsWins() {
	const roundResult = document.createElement('p');
	roundResult.textContent = "Scissors beats paper";
	while(roundResultsDiv.lastChild) {
		roundResultsDiv.removeChild(roundResultsDiv.firstChild);
	}
	roundResultsDiv.appendChild(roundResult);
}

function paperWins() {
	const roundResult = document.createElement('p');
	roundResult.textContent = "Paper beats rock";
	while(roundResultsDiv.lastChild) {
		roundResultsDiv.removeChild(roundResultsDiv.firstChild);
	}
	roundResultsDiv.appendChild(roundResult);
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
