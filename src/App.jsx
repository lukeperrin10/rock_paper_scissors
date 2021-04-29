import React, { Component } from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Icon,
  Button,
} from "semantic-ui-react";

 class App extends Component {
  render() {
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
                <Button>Choose</Button>
              </Grid.Column>

              <Grid.Column>
                <Header data-cy="scissors" icon>
                  <Icon name="hand scissors" />
                  Scissors
                </Header>
                <Button>Choose</Button>
              </Grid.Column>

              <Grid.Column>
                <Header data-cy="paper" icon>
                  <Icon name="hand paper" />
                  Paper
                </Header>
                <Button>Choose</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default App