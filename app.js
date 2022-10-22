const choices = [`Rock`, `Paper`, `Scissors`];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();

function getPlayerChoice() {
  let choice = prompt(`Please pick from rock, paper or scissors: `);
  let titleCase = choice.slice(0, 1).toUpperCase + choice.slice(1).toLowerCase;
  return titleCase;
}

getPlayerChoice();

