const choices = [`Rock`, `Paper`, `Scissors`];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let choice = prompt(`Please pick from rock, paper or scissors: `);
  let titleCase =
    choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase();
  return titleCase;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = `You tied!`;
    return outcome;
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[1]
  ) {
    let outcome = `You lose!`;
    return outcome;
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[2]
  ) {
    let outcome = `You win!`;
    return outcome;
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[0]
  ) {
    let outcome = `You win!`;
    return outcome;
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[2]
  ) {
    let outcome = `You lose!`;
    return outcome;
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[0]
  ) {
    let outcome = `You lose!`;
    return outcome;
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[1]
  ) {
    let outcome = `You win!`;
    return outcome;
  }
}

for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();

  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
