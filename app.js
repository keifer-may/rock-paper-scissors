const choices = [`Rock`, `Paper`, `Scissors`];
const buttons = document.querySelectorAll(".game-buttons #button img");
const result = document.querySelector(".results h2");
const computerResults = document.querySelector(".computer-score");
const playerResults = document.querySelector(".player-score");
const gameover = 5;
const finalScore = document.querySelector(".final-score");
const startGameButton = document.getElementById("play-button");

let computerScore = 0;
let playerScore = 0;
let playing = false;
let gamesPlayed = 0;

function startPlaying(numberOfGames) {
  if (numberOfGames === 0) {
    computerResults.textContent = `Computer: ${computerScore}`;
    playerResults.textContent = `Player: ${playerScore}`;
    playing = true;
  } else {
    computerScore = 0;
    playerScore = 0;
    computerResults.textContent = `Computer: ${computerScore}`;
    playerResults.textContent = `Player: ${playerScore}`;
    playing = true;
    finalScore.textContent = "";
    result.textContent = "";
  }
}

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

startGameButton.textContent = `Would you like to play to the best of ${gameover} games?`;

startGameButton.addEventListener("click", (e) => {
  if (playing === false) {
    startPlaying(gamesPlayed);
    startGameButton.style.display = 'none';
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playing === true) {
      let play = playRound(e.target.classList.value, getComputerChoice());
      result.textContent = play;
      computerResults.textContent = `Computer: ${computerScore}`;
      playerResults.textContent = `Player: ${playerScore}`;
      if (computerScore === gameover) {
        finalScore.textContent = "You lost. Where can we find a hero?";
        gamesPlayed++;
        playing = false;
        startGameButton.style.display = 'block';
        startGameButton.textContent = `Would you like to try another ${gameover} games?`;
      } else if (playerScore === gameover) {
        finalScore.textContent = "You have triumphed!";
        gamesPlayed++;
        playing = false;
        startGameButton.style.display = 'block';
        startGameButton.textContent = `Would you like to try another ${gameover} games?`;
      }
    }
  });
});
