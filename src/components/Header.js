import React from "react";
import logo from "../images/logo.png";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  logo: {
    maxHeight: "calc(112px + 1vmin)"
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <a href="https://www.rctech.club" rel="noopener noreferrer">
          <img className={classes.logo} src={logo} alt="RCTECH" />
        </a>
      </div>
      <div>
        <Typography variant="h1">Login</Typography>
      </div>
    </Container>
  );
};
