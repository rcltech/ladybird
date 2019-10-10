import React from "react";
import logo from "../images/logo.png";
import { Container } from "@material-ui/core";

function Header() {
  return (
    <Container className="App-header">
      <div>
        <a href="https://www.rctech.club" rel="noopener noreferrer">
          <img className="logo" src={logo} alt="RCTECH" />
        </a>
      </div>
      <div className="header-text">Ladybird</div>
    </Container>
  );
}

export default Header;
