import React from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import qs from "query-string";
import withAuthConfig from "./withAuthConfig";

const useStyles = makeStyles({
  container: {
    margin: "3vh auto",
  },
  text: {
    marginBottom: "2vh",
  },
});

const Login = ({ onLoginSuccess, clientID, location, history }) => {
  const classes = useStyles();
  sessionStorage.setItem(
    "redirectTo",
    qs.parse(location.search).redirectTo || ""
  );
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
        <h3>Welcome RC Lee Hallmate!</h3>
        <h4>
          To continue using our app, please sign in using your hku account.
        </h4>
      </div>
      <GoogleLogin
        onSuccess={googleUser => onLoginSuccess(location, history, googleUser)}
        onSignIn={googleUser => onLoginSuccess(location, history, googleUser)}
        clientId={clientID}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default withAuthConfig(Login);
