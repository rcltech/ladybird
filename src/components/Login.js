import React from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import qs from "query-string";
import withAuthConfig from "./withAuthConfig";
import { Header } from "./Header";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "3vh auto",
  },
  text: {
    marginBottom: "2vh",
  },
}));

const Login = ({ onLoginSuccess, clientID, location, history }) => {
  const classes = useStyles();

  sessionStorage.setItem(
    "redirectTo",
    qs.parse(location.search).redirectTo || ""
  );

  return (
    <Container className={classes.container}>
      <Header />
      <div className={classes.text}>
        <Typography variant="h2">Welcome RC Lee Hallmate!</Typography>
        <Typography variant="h5">
          To continue using our app, please sign in using your HKU account.
        </Typography>
      </div>

      <GoogleLogin
        onSuccess={googleUser => {
          onLoginSuccess(location, history, googleUser);
        }}
        clientId={clientID}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default withAuthConfig(Login);
