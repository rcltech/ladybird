import React from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import qs from "query-string";
import axios from "axios";

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
  return {
    id: profile.getId(),
    first_name: profile.getGivenName(),
    last_name: profile.getFamilyName(),
    image_url: profile.getImageUrl(),
    email_id: profile.getEmail(),
  };
}

const onLoginSuccess = async (location, history, googleUser) => {
  const user = readFromLocalStorage();
  const response = await axios.post("http://localhost:4000/graphql", {
    query: `
    mutation {
      login{
        login_status
        register
      }
    }
    `,
  },{
    headers: {
      'authorization': googleUser.getAuthResponse().id_token
    }
  });

  console.log(response.data);
  if (response.data.data.login.login_status)
    window.location.replace(
      `https://${sessionStorage.getItem("redirectTo")}?id=${
        googleUser.getAuthResponse().id_token
      }`
    );
  if (response.data.data.register) {
    history.push({
      pathname: "register",
      state: {
        user,
        token: googleUser.getAuthResponse().id_token,
      },
    });
  }
};

const Login = ({ history, location, googleUser }) => {
  const classes = useStyles();
  sessionStorage.setItem(
    "redirectTo",
    qs.parse(location.search).redirectTo || ""
  );
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
        <h3>Welcome RC Lee Hallmate!</h3>
        <h4>To continue using our app, please sign in.</h4>
      </div>
      <GoogleLogin
        onSuccess={googleUser => onLoginSuccess(location, history, googleUser)}
        onSignIn={googleUser => onLoginSuccess(location, history, googleUser)}
        clientId={clientId}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default Login;
