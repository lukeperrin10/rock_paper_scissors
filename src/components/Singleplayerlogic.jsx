import React from "react";

const ComputerChoice = () => {
  let computerResult;
  let computerDecision = Math.floor(Math.random() * 3);

  if (computerDecision === 0) {
    computerResult = "rock";
  } else if (computerDecision === 1) {
    computerResult = "paper";
  } else {
    computerDecision === 2;
    computerResult = "scissors";
  }
  return computerResult;
};

const gameWinner = () => {
  let computer = ComputerChoice()
  let winner 

  if (computer === "paper" && player === "scissors") {
    winner = "player"
  } else if (computer === "rock" && player === "scissors") {
    winner = "computer"
  } else if (computer === "scissors" && player === "paper") {
    winner = "computer"
  } else if (computer === "scissors" && player === "rock") {
    winner = "player"
  } else if (computer === "rock" && player === "paper") {
    winner = "player"
  } else if (computer === "paper" && player === "rock") {
    winner = "computer"
  }
}

export { ComputerChoice, gameWinner}