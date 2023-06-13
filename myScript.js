const body = document.querySelector('body');
const playAgainButton = document.querySelector('#play-again-button');
let playerScoreVariable = 0;
let computerScoreVariable = 0;

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

playerScore.innerText = playerScoreVariable;
computerScore.innerText = computerScoreVariable;

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
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
		computerWinsRound();
		scissorsWins();
		roundWinner = "computer";
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
		computerWinsRound();
		paperWins();
		roundWinner = 'computer';
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
		playerWinsRound();
		rockWins()
		roundWinner = "player";
	}
	else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
		playerWinsRound();
		scissorsWins();
		roundWinner = "player";
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
		playerWinsRound();
		paperWins();
		roundWinner = "player";
	}
	else { draw();
		roundWinner = "draw";
	};

	addScore(roundWinner);
	isEndGame();
}

function addScore(winner) {
	if (winner === "player") {
		playerScoreVariable ++;

		playerScore.innerText = playerScoreVariable;
	}

	else if (winner === "computer") {
		computerScoreVariable ++;
		computerScore.innerText = computerScoreVariable;
	}
}

function isEndGame() {
	if (playerScoreVariable === 5) {
		const playerVictory = document.createElement('p');
		endGame("player");
		displayPlayAgain();
	}
	else if (computerScoreVariable === 5) {
		endGame("computer");
		displayPlayAgain();
	}
}

function endGame(winner) {
	const victoryMessageDiv = document.querySelector("#victoryMessage");
	const playerVictory = document.createElement('p');
	if (winner == "player") {
		playerVictory.innerText = "Victory!";
		victoryMessageDiv.appendChild(playerVictory);
	} else if (winner == "computer") {
		playerVictory.innerText = "Loss";
		victoryMessageDiv.appendChild(playerVictory);
	}
	rock.disabled = true;
	paper.disabled = true;
	scissors.disabled = true;
}

function displayPlayAgain() {
	playAgainButton.style.display = "block";
}

playAgainButton.addEventListener('click', resetGame)

function resetGame() {
	playerScoreVariable = 0;
	computerScoreVariable = 0;
	rock.disabled = false;
	paper.disabled = false;
	scissors.disabled = false;
	playerScore.innerText = playerScoreVariable;
	computerScore.innerText = computerScoreVariable;
	playAgainButton.style.display = "none";
		playerVictory.innerText = "";

}