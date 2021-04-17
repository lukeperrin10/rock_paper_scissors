import React from "react";
import {
  Divider,
  Grid,
  Segment,
  Header,
  Icon,
  Button,
} from "semantic-ui-react";

const HomePageFeatures = () => {
  return (
    <Segment placeholder inverted size="massive">
      <Grid columns={2} stackable textAlign="center">
        <Divider vertical>Choose your Side</Divider>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header inverted icon data-cy="singleplayer">
              <Icon inverted name="fire" />
              SinglePlayer
            </Header >
            <Button inverted data-cy="start-singleplayer">Come on</Button>
          </Grid.Column>

          <Grid.Column>
            <Header inverted icon data-cy="multiplayer">
              <Icon inverted name="gamepad" />
              MultiPlayer
            </Header>
            <Button inverted data-cy="start-multiplayer">Let's Go</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomePageFeatures;
