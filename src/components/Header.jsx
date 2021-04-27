import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing>
        <Menu.Item
          id="header"
          name="home"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item 
          data-cy="singleplayer"
          name="singleplayer"
          as={NavLink}
          to={{ pathname: "/singleplayer" }}
        /> 
      </Menu>
    </Segment>
  );
};

export default Header;