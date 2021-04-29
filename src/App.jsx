import React, { useState } from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Icon,
  Button,
} from "semantic-ui-react";
import singlePlayerLogic from "./modules/Singleplayerlogic";

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState(0);
  const [champion, setResult] = useState("")

  

  const playGame = (userChoice) => {
    setUserChoice(userChoice);
    let computerChoice = singlePlayerLogic.computerChoice();
    setComputerChoice(computerChoice);
    setResult(singlePlayerLogic.gameWinner(computerChoice, userChoice));
    
  };

  return (
    <Container>
      <Segment placeholder size="huge" vertical data-cy="options-menu">
        <Grid columns={3} stackable textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Header data-cy="rock" icon>
                <Icon name="hand rock" />
                Rock
              </Header>
              <Button data-cy="rock-button" onClick={() => playGame("rock")}>Choose</Button>
            </Grid.Column>

            <Grid.Column>
              <Header data-cy="scissors" icon>
                <Icon name="hand scissors" />
                Scissors
              </Header>
              <Button data-cy="scissors-button" onClick={() => playGame("scissors")}>Choose</Button>
            </Grid.Column>

            <Grid.Column>
              <Header data-cy="paper" icon>
                <Icon name="hand paper" />
                Paper
              </Header>
              <Button data-cy="paper-button" onClick={() => playGame("paper")}>Choose</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div data-cy="results">The winner is {`${champion}`}</div>
      <div>The player chose {`${userChoice}`}</div>
      <div>The computer chose {`${computerChoice}`}</div>
    </Container>
  );
};

export default Game;
