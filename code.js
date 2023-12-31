const gameChoice = ["rock", "paper", "scissors"];
function getAiChoice() {
  const choice = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[choice];
}

function playRound(humanChoice, aiChoice) {
  if (humanChoice === "scissors" && aiChoice === "scissors") {
    return "It's a Tie! You both picked Scissors";
  }
  if (humanChoice === "rock" && aiChoice === "rock") {
    return "It's a Tie! You both picked Rock";
  }
  if (humanChoice === "paper" && aiChoice === "paper") {
    return "It's a Tie! You both picked Paper";
  }
  if (humanChoice === "rock" && aiChoice === "scissors") {
    humanScore++;
    return "You Win! Rock beats Scissors";
  }
  if (humanChoice === "rock" && aiChoice === "paper") {
    aiScore++;
    return "You loose! Paper beats Rock";
  }
  if (humanChoice === "paper" && aiChoice === "rock") {
    humanScore++;
    return "You Win! Paper beats Rock";
  }
  if (humanChoice === "paper" && aiChoice === "scissors") {
    aiScore++;
    return "You loose! Scissors beats paper";
  }
  if (humanChoice === "scissors" && aiChoice === "paper") {
    humanScore++;
    return "You Win! Scissors beats Paper";
  }
  if (humanChoice === "scissors" && aiChoice === "rock") {
    aiScore++;
    return "You loose! Rock beats Scissors";
  }
}

function gameOver() {
  if (humanScore === 3) {
    finalResults.textContent = 'YOU WIN!';
    rockBtn.disabled = true;
    paprBtn.disabled = true;
    scissBtn.disabled = true;
    results.textContent = '';
    results.style.height = '20px'

  }
  if (aiScore === 3) {
    finalResults.textContent = 'YOU LOOSE';
    rockBtn.disabled = true;
    paprBtn.disabled = true;
    scissBtn.disabled = true;
    results.textContent = '';
    results.style.height = '20px'

  }
}
function toReset() {
  rockBtn.disabled = false;
  paprBtn.disabled = false;
  scissBtn.disabled = false;
  aiScore = 0;
  humanScore = 0;
  humanCount.textContent = humanScore;
  aiCount.textContent = aiScore;
  results.textContent = 'Let\'s Begin The Battle';
  finalResults.textContent = ''
}

let aiScore = 0;
let humanScore = 0;
let humanCount = document.getElementById('humanCount');
humanCount.textContent = humanScore;
let aiCount = document.getElementById('aiCount')
aiCount.textContent = aiScore;
let results = document.getElementById('results');
results.textContent = 'Let\'s Begin The Battle';
let finalResults = document.getElementById('finalResults');
let reset = document.getElementById('reset');
reset.addEventListener('click', toReset);

function humanChoiceRock() {
  results.textContent = playRound('rock', getAiChoice())
  humanCount.textContent = humanScore;
  aiCount.textContent = aiScore;
  gameOver();
}
let rockBtn = document.getElementById('rockBtn')
rockBtn.addEventListener('click', humanChoiceRock)

function humanChoicePaper() {
  results.textContent = playRound('paper', getAiChoice())
  humanCount.textContent = humanScore;
  aiCount.textContent = aiScore;
  gameOver();
}
let paprBtn = document.getElementById('paprBtn')
paprBtn.addEventListener('click', humanChoicePaper)

function humanChoiceScissors() {
  results.textContent = playRound('scissors', getAiChoice())
  humanCount.textContent = humanScore;
  aiCount.textContent = aiScore;
  gameOver();
}
let scissBtn = document.getElementById('scissBtn')
scissBtn.addEventListener('click', humanChoiceScissors)







