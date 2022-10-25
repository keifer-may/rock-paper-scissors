const choices = [`Rock`, `Paper`, `Scissors`];
const buttons = document.querySelectorAll('.game-buttons #button');
const result = document.querySelector('.results h2');
let computerScore = 0;
let playerScore = 0;
const computerResults = document.querySelector('.computer-score');
const playerResults = document.querySelector('.player-score');
computerResults.textContent = `Computer: ${computerScore}`;
playerResults.textContent = `Player: ${playerScore}`;
const gameover = 5;
const finalScore = document.querySelector('.final-score');

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = `You tied!`;
    return outcome;
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[1]
  ) {
    let outcome = `You lose this round!`;
    computerScore++;
    return outcome;
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[2]
  ) {
    let outcome = `You win this round!`;
    playerScore++;
    return outcome;
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[0]
  ) {
    let outcome = `You win this round!`;
    playerScore++;
    return outcome;
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[2]
  ) {
    let outcome = `You lose this round!`;
    computerScore++;
    return outcome;
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[0]
  ) {
    let outcome = `You lose this round!`;
    computerScore++;
    return outcome;
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[1]
  ) {
    let outcome = `You win this round!`;
    playerScore++;
    return outcome;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (playerScore < gameover && computerScore < gameover){
      let play = playRound(e.target.classList.value, getComputerChoice());
      result.textContent = play;
      computerResults.textContent = `Computer: ${computerScore}`;
      playerResults.textContent = `Player: ${playerScore}`;
    }
    else if (playerScore === gameover) {
      computerResults.textContent = `Computer: ${computerScore}`;
      playerResults.textContent = `Player: ${playerScore}`;
      finalScore.textContent = 'You have triumphed!';
      button.removeEventListener('click', e);
    }
    else if (computerScore === gameover) {
      computerResults.textContent = `Computer: ${computerScore}`;
      playerResults.textContent = `Player: ${playerScore}`;
      finalScore.textContent = 'You lost. Where can we find a hero?';
      button.removeEventListener('click', e);
    }
  });
});
