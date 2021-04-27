import React from "react";

const ComputerChoice = () => {
  let computerResult;
  let computerDecision = Math.floor(Math.random() * 3);

  if (computerDecision === 0) {
    computerResult = "rock";
  } else if (computerDecision === 1) {
    computerResult = "paper";
  } else computerDecision === 2;
  computerResult = "scissors";
};
return computerResult;

