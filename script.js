function getPlayerChoice() {
    let playerSelection = prompt("Choose rock, paper, scissors:").toLowerCase();
    const validPick = ['rock', 'paper', 'scissors'];

    while (!validPick.includes(playerSelection)) {
        alert("Invalid choice. Pick between rock, paper, scissors.");
        playerSelection = prompt("Choose rock, paper, scissors:").toLowerCase();
    }

    console.log("Player: " + playerSelection);
    return playerSelection;
}

function getComputerChoice() {
    const validPick = ['rock', 'paper', 'scissors'];
    const randomPick = Math.floor(Math.random() * 3);
    const computerSelection = validPick[randomPick];
    
    console.log("Computer: " + computerSelection);
    return computerSelection;
}

/*
function playRound() {
    let round = 1;
    let Pscore = 0;
    let Cscore = 0;
    const validPick = ['rock', 'paper', 'scissors'];

    for (let i = 0; i < 5; i++) {
        console.log("Round: " + round);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const playerIndex = validPick.indexOf(playerSelection);
        const computerIndex = validPick.indexOf(computerSelection);

        if (playerIndex === computerIndex) {
            console.log("It's a tie!");
        }
        else if ((playerIndex + 1) %3 === computerIndex) {
            Cscore ++
            console.log("Computer wins this round!")
        }
        else {
            Pscore ++
            console.log("Player wins this round!")
        }
        round ++;
    }
    
    console.log("Final score: Player: " + Pscore + " Computer: " + Cscore);
}
playRound();
*/