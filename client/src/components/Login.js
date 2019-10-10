import React from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import { UserContext } from "../UserContext";

const useStyles = makeStyles({
  container: {
    margin: "3vh auto",
  },
  text: {
    marginBottom: "2vh",
  },
});

const clientId =
  "798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com";

function readFromLocalStorage() {
  const auth2 = window.gapi.auth2.getAuthInstance();
  const profile = auth2.currentUser.get().getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
}

const onLoginSuccess = (toggleUser, history) => {
  readFromLocalStorage();
  toggleUser();
  history.push("/register");
};

const Login = ({ history }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
        <h3>Welcome RC Lee Hallmate!</h3>
        <h4>To continue using our app, please sign in.</h4>
      </div>
      <UserContext.Consumer>
        {({ user, toggleUser }) => (
          <GoogleLogin
            onSuccess={() => onLoginSuccess(toggleUser, history)}
            isSignedIn={readFromLocalStorage}
            clientId={clientId}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </UserContext.Consumer>
    </Container>
  );
};

export default Login;
