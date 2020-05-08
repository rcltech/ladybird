import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, makeStyles } from "@material-ui/core";
import Cookies from "universal-cookie";
import { Header } from "./Header";
import Typography from "@material-ui/core/Typography";
import { withAuthConfigApollo } from "./withAuthConfigApollo";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../gql/login";
import { CookiesPopup } from "./CookiesPopup";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "3vh auto",
  },
  text: {
    margin: "4vh",
  },
  redirect: {
    margin: "40px auto",
  },
}));

const Login = ({
  googleUser,
  setGoogleUser,
  clientID,
  location,
  history,
  redirectUrl,
}) => {
  const classes = useStyles();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [login] = useMutation(LOGIN);

  const cookies = new Cookies();
  const cookieValue = cookies.get("RCTC_USER");
  const cookiesExist = !cookieValue && cookieValue !== "";

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

        // If the login was successful
        if (login_status) {
          const cookieDomain =
            process.env.REACT_APP_ENV === "development"
              ? "localhost"
              : ".rctech.club";

          cookies.set("RCTC_USER", token, { path: "/", domain: cookieDomain });
          if (redirectUrl.length > 0) {
            window.location.replace(`${redirectUrl}?id=${token}`);
          }
        }

        // If the user needs to register
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
      <div>
        <Typography variant="h2">Login</Typography>
      </div>
      <div className={classes.text}>
        <Typography variant="h3">Welcome RC Lee Hall mate!</Typography>
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

      <div className={classes.redirect}>
        {redirectUrl !== "" ? (
          <Typography variant="body1">
            If you keep coming back here after login, please{" "}
            <a href={redirectUrl}>click here</a>
          </Typography>
        ) : (
          <Typography variant="body1">
            Please re-visit the application that redirected you here. We
            apologize for losing that information.
          </Typography>
        )}
      </div>

      <CookiesPopup isOpen={cookiesExist} />
    </Container>
  );
};

export default withAuthConfigApollo(Login);
