import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import qs from "query-string";
import { Header } from "./Header";
import Typography from "@material-ui/core/Typography";
import { withAuthConfigApollo } from "./withAuthConfigApollo";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../gql/login";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "3vh auto",
  },
  text: {
    marginBottom: "2vh",
  },
}));

const Login = ({ googleUser, setGoogleUser, clientID, location, history }) => {
  const classes = useStyles();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [login] = useMutation(LOGIN);

  sessionStorage.setItem(
    "redirectTo",
    qs.parse(location.search).redirectTo || ""
  );

  const readFromLocalStorage = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const profile = auth2.currentUser.get().getBasicProfile();
    return {
      id: profile.getId(),
      first_name: profile.getGivenName(),
      last_name: profile.getFamilyName(),
      image_url: profile.getImageUrl(),
      email_id: profile.getEmail(),
    };
  };

  const handleLogin = googleUserLogin => {
    console.log(googleUserLogin);
    setGoogleUser(googleUserLogin);
    login()
      .then(res => {
        const {
          login: { token, login_status, register },
        } = res.data;
        if (login_status) {
          if (sessionStorage.getItem("redirectTo").length > 0) {
            window.location.replace(
              process.env.NODE_ENV === "development"
                ? `http://${sessionStorage.getItem("redirectTo")}?id=${token}`
                : `https://${sessionStorage.getItem("redirectTo")}?id=${token}`
            );
          }
        }
        if (register) {
          const user = readFromLocalStorage();
          history.push({
            pathname: "register",
            state: {
              user,
              googleUserLogin,
              token: googleUserLogin.getAuthResponse().id_token,
            },
          });
        }
      })
      .catch(_ => {
        console.log(_);
        alert("There was an error logging you in");
      });
  };

  const handleFailure = () => {
    alert("Failed Google Login. Please try again.");
  };

  const handleClicked = () => {
    setButtonDisabled(true);
  };

  return (
    <Container className={classes.container}>
      <Header />
      <div className={classes.text}>
        <Typography variant="h2">Welcome RC Lee Hall mate!</Typography>
        <Typography variant="h5">
          To continue using our app, please sign in using your HKU account.
        </Typography>
      </div>

      <GoogleLogin
        onSuccess={handleLogin}
        onRequest={handleClicked}
        onFailure={handleFailure}
        clientId={clientID}
        disabled={buttonDisabled}
        cookiePolicy={"single_host_origin"}
      />
      <Typography variant="h6" style={{ margin: "40px 0" }}>
        If you keep coming back here after login, please{" "}
        <a
          href={
            process.env.NODE_ENV === "development"
              ? `http://${sessionStorage.getItem("redirectTo")}`
              : `https://${sessionStorage.getItem("redirectTo")}`
          }
        >
          click here
        </a>
      </Typography>
    </Container>
  );
};

export default withAuthConfigApollo(Login);
