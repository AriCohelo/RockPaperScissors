const aiChoice = ["rock", "paper", "scissors"];
function getAiChoice() {
  const choice = Math.floor(Math.random() * aiChoice.length);
  return aiChoice[choice];
}
let humanResult = 0;
let aiResult = 0;

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
    humanResult++;
    return "You Win! Rock beats Scissors";
  }
  if (humanChoice === "rock" && aiChoice === "paper") {
    aiResult++;
    return "You loose! Paper beats Rock";
  }
  if (humanChoice === "paper" && aiChoice === "rock") {
    humanResult++;
    return "You Win! Paper beats Rock";
  }
  if (humanChoice === "paper" && aiChoice === "scissors") {
    aiResult++;
    return "You loose! Scissors beats paper";
  }
  if (humanChoice === "scissors" && aiChoice === "paper") {
    humanResult++;
    return "You Win! Scissors beats Paper";
  }
  if (humanChoice === "scissors" && aiChoice === "rock") {
    aiResult++;
    return "You loose! Rock beats Scissors";
  }
}

results.textContent = `Let's Begin The Battle`;
let initHumanRes = 0;
let initAires = 0;
humanCount.textContent = `Human ${initHumanRes}`;
aiCount.textContent = `Ai ${initAires}`;

function resetBattle() {
  let humanCount = document.getElementById("humanCount");
  humanCount.textContent = `Human 0`;
  let aiCount = document.getElementById("aiCount");
  aiCount.textContent = `Ai 0`;
  results.textContent = `Let's Begin The Battle`;
}

let reset = document.getElementById("reset");
reset.addEventListener("click", resetBattle);

function humanChoiceRock() {
  let resultText = playRound("rock", getAiChoice());
  let results = document.getElementById("results");
  results.textContent = resultText;
  let humanCount = document.getElementById("humanCount");
  humanCount.textContent = `Human ${humanResult}`;

  if (resultText === "You loose! Paper beats Rock") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }
  if (resultText === "You Win! Rock beats Scissors") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }

  if (aiResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU LOOSE THE WAR!";
  }
  if (humanResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU WIN THE WAR!";
  }
}
let rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", humanChoiceRock);

function humanChoicePaper() {
  let resultText = playRound("paper", getAiChoice());
  let results = document.getElementById("results");
  results.textContent = resultText;
  let humanCount = document.getElementById("humanCount");
  humanCount.textContent = `Human ${humanResult}`;

  if (resultText === "You Win! Paper beats Rock") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }
  if (resultText === "You loose! Scissors beats paper") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }
  if (aiResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU LOOSE THE WAR!";
  }
  if (humanResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU WIN THE WAR!";
  }
}
let paprBtn = document.getElementById("paprBtn");
paprBtn.addEventListener("click", humanChoicePaper);

function humanChoiceScissors() {
  let resultText = playRound("scissors", getAiChoice());
  let results = document.getElementById("results");
  results.textContent = resultText;
  let humanCount = document.getElementById("humanCount");
  humanCount.textContent = `Human ${humanResult}`;

  if (resultText === "You Win! Scissors beats Paper") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }
  if (resultText === "You loose! Rock beats Scissors") {
    let aiCount = document.getElementById("aiCount");
    aiCount.textContent = `Ai ${aiResult}`;
  }
  if (aiResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU LOOSE THE WAR!";
  }
  if (humanResult === 3) {
    aiResult = 0;
    humanResult = 0;
    results.textContent = "YOU WIN THE WAR!";
  }
}
let scissBtn = document.getElementById("scissBtn");
scissBtn.addEventListener("click", humanChoiceScissors);
