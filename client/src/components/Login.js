import React from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import { UserContext } from "../UserContext";
import qs from "query-string";

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
  const user = {
    "id": profile.getId(),
    "first_name": profile.getGivenName(),
    "last_name": profile.getFamilyName(),
    "image_url": profile.getImageUrl(),
    "email_id": profile.getEmail()
  };
  sessionStorage.setItem("user", JSON.stringify(user))
}

const onLoginSuccess = (toggleUser, history) => {
  readFromLocalStorage();
  toggleUser();
  history.push("/register");
};

const Login = ({ history, location }) => {
  const classes = useStyles();
  sessionStorage.setItem("redirectTo", qs.parse(location.search).redirectTo || "");
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
        <h3>Welcome RC Lee Hallmate!</h3>
        <h4>To continue using our app, please sign in.</h4>
      </div>
      <UserContext.Consumer>
        {({ toggleUser }) => (
          <GoogleLogin
            onSuccess={() => onLoginSuccess(toggleUser, history)}
            clientId={clientId}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </UserContext.Consumer>
    </Container>
  );
};

export default Login;
