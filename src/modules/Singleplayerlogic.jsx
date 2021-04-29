const computerChoice = () => {
  let computerResult;
  let computerDecision = Math.floor(Math.random() * 3);

  if (computerDecision === 0) {
    computerResult = "rock";
  } else if (computerDecision === 1) {
    computerResult = "paper";
  } else if (computerDecision === 2) {
    computerResult = "scissors";
  }

  return computerResult;
};

const gameWinner = (computerChoice, userChoice) => {
  let computer = computerChoice;
  let player = userChoice;
  let winner;
  if (computer === "paper" && player === "scissors") {
    winner = "player";
  } else if (computer === "rock" && player === "scissors") {
    winner = "computer";
  } else if (computer === "scissors" && player === "paper") {
    winner = "computer";
  } else if (computer === "scissors" && player === "rock") {
    winner = "player";
  } else if (computer === "rock" && player === "paper") {
    winner = "player";
  } else if (computer === "paper" && player === "rock") {
    winner = "computer";
  } else if (computer === player) {
    winner = "It's a tie";
  }
  
  return [winner];
};

export default { gameWinner, computerChoice };
