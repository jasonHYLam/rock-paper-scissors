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

function rockWins() {
	console.log("Rock beats scissors");
}

function scissorsWins() {
	console.log("Scissors beats paper");
}

function paperWins() {
	console.log("Paper beats rock");
}
function singleTurn(playerSelection, computerSelection, playerScore, computerScore) {
	let playerSelectionLower = playerSelection.toLowerCase();

	if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
		computerWinsRound();
		rockWins();
		computerScore ++;
		return computerScore;
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
		computerWinsRound();
		scissorsWins();
		computerScore ++;
		return computerScore;
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
		computerWinsRound();
		paperWins();
		computerScore ++;
		return computerScore;
	}
	else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
		playerWinsRound();
		rockWins()
		playerScore++;
		return playerScore;
	}
	else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
		playerWinsRound();
		scissorsWins();
		playerScore++;
		return playerScore;
	}
	else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
		playerWinsRound();
		paperWins();
		playerScore++;
		return playerScore;
	}
	else { return "Draw!" };
}

function game() {
		let playerScore = 0;
		let computerScore = 0;
	for (let i = 0; i < 5; i++) {

		var computerSelection = computerPlay();
		var playerSelection = prompt("Please choose: rock, paper, scissors").toLowerCase();
		console.log(playerSelection);
		while ( playerSelection != "rock" && playerSelection != 'scissors' && playerSelection != 'paper' ) {
			alert("Please pick rock, paper, scissors");
			var playerSelection = prompt("Please choose: rock, paper, scissors").toLowerCase;
		}
		singleTurn(playerSelection, computerSelection, playerScore=playerScore, computerScore=computerScore);
		console.log(playerScore);
		console.log(computerScore);
	}

}

game();
