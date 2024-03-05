let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound (playerSelection) {
    const computerSelection = computerPlay();

    round++;
    document.getElementById('round').textContent = "Round: " + round;

    let result;
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'You Win!';
        playerScore++;
    } else if (playerSelection === computerSelection) {
        result = "It's a tie";
    } else {
        result = 'Computer Wins!';
        computerScore++;
    }
        
    const computerChoiceTxt = `Computer chose: ${computerSelection}`;
    document.getElementById('computer-choice').textContent = computerChoiceTxt;

    document.getElementById('result').textContent = result;
    document.getElementById('scores').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
    if(playerScore === 5) {
        document.getElementById('result').textContent = "You win the game!";
        endGame();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "Game Over! Computer wins!";
        endGame();
    }
}

function restartGame () {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    document.getElementById('round').textContent = 'Round: 0';
    document.getElementById('result').textContent = '';
    document.getElementById('scores').textContent = 'Player: 0 - Computer: 0';
    document.getElementById('restartBtn').style.display = 'none';
}

function endGame () {
    document.getElementById('restartBtn').style.display = 'inline-block';
}