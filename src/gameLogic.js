const choices = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function getResult(playerChoice, computerChoice) {
  const outcomes = {
    rock: { rock: 'draw', paper: 'lose', scissors: 'win' },
    paper: { rock: 'win', paper: 'draw', scissors: 'lose' },
    scissors: { rock: 'lose', paper: 'win', scissors: 'draw' },
  };

  return outcomes[playerChoice][computerChoice];
}
