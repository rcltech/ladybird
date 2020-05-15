import React from "react";
import logo from "../images/logo.png";
import { Container, Link } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
  },
  logo: {
    maxHeight: "calc(112px + 1vmin)",
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Link href="https://www.rctech.club" rel="noopener noreferrer">
        <img className={classes.logo} src={logo} alt="RCTECH" />
      </Link>
    </Container>
  );
};
