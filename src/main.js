import { getComputerChoice, getResult } from './gameLogic.js';

const startScreen = document.getElementById('startscreen');
const startButton = document.getElementById('startbutton');
const rulesButton = document.getElementById('rulesbutton');
const scoreDisplay = document.getElementById('score');
const resultsScreen = document.getElementById('results');
const resultText = document.getElementById('result');
const userChoiceDisplay = document.getElementById('userchoice');
const computerChoiceDisplay = document.getElementById('computerchoice');
const choiceButtons = document.querySelectorAll('button[data-choice]');

let score = 0;

function startGame() {
  startScreen.classList.add('hidden');
}

startButton.addEventListener('click', startGame);

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    updateUI(userChoice, computerChoice, result);
  });
});

function updateUI(userChoice, computerChoice, result) {
  resultText.textContent =
    result === 'win'
      ? 'You win!'
      : result === 'lose'
        ? 'You lose!'
        : "It's a draw!";

  userChoiceDisplay.innerHTML = `<img src="/images/${userChoice}.svg" alt="${userChoice}" class="w-16 h-16">`;
  computerChoiceDisplay.innerHTML = `<img src="/images/${computerChoice}.svg" alt="${computerChoice}" class="w-16 h-16">`;

  if (result === 'win') score++;
  scoreDisplay.textContent = score;

  resultsScreen.classList.remove('hidden');
}

const playAgainButton = document.getElementById('playagain');

playAgainButton.addEventListener('click', () => {
  resultsScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});
