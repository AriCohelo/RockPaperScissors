const mano = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    const choice = Math.floor(Math.random() * mano.length)
    return mano[choice]

}

let humanInput = prompt('What\'s Your Choice?')
let humanChoice = humanInput.toLowerCase()
console.log(humanChoice);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a Tie! You both picked Scissors';
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a Tie! You both picked Rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a Tie! You both picked Paper';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You loose! Scissors beats paper';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You loose! Paper beats Rock';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You loose! Rock beats Scissors';
    }
}


function game() {
    let resultHuman = 0;
    let resultMachine = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        let prevRes = playRound(playerSelection, computerSelection);

        if (prevRes === 'You Win! Paper beats Rock' || prevRes === 'You Win! Rock beats Scissors' || prevRes === 'You Win! Scissors beats Paper') {
            resultHuman++;
        }
        else if (prevRes === 'You loose! Scissors beats paper' || prevRes === 'You loose! Paper beats Rock' || prevRes === 'You loose! Rock beats Paper') {
            resultMachine++;
        }
        else { }
            console.log(prevRes)
    }

    if (resultHuman > resultMachine) {
        return 'YOU WIN!!'
    }
    else if (resultMachine > resultHuman) {
        return 'YOU LOOSE!!'
    }
    else return 'IT\'S A TIE'
}
console.log(game());