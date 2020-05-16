import React, { useContext, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, Link, makeStyles } from "@material-ui/core";
import Cookies from "universal-cookie";
import { Header } from "./Header";
import Typography from "@material-ui/core/Typography";
import { GoogleUserContext } from "../config/GoogleUserContext";
import qs from "query-string";
import { useToast } from "@chakra-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    flexDirection: "column",
    margin: "3vh auto",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  },
  text: {
    margin: "4vh",
  },
  redirect: {
    margin: "40px auto",
  },
}));

const Login = ({ location, history }) => {
  const classes = useStyles();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { setCurrentGoogleUser } = useContext(GoogleUserContext);
  const toast = useToast();

  const clientID =
    "798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com";

  const redirectUrl = sessionStorage.getItem("redirectTo");
  const cookies = new Cookies();

  useEffect(() => {
    if (redirectUrl === null || redirectUrl === "")
      if (
        qs.parse(location.search).redirectTo &&
        qs.parse(location.search).redirectTo !== ""
      ) {
        sessionStorage.setItem(
          "redirectTo",
          qs.parse(location.search).redirectTo
        );
      }
  }, [location.search, redirectUrl]);

  const sendLoginRequest = async token => {
    const URL =
      process.env.REACT_APP_ENV === "development"
        ? "http://localhost:4000/oauth/user/login"
        : "https://phoenix.rctech.club/oauth/user/login";
    try {
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          authorization: token,
        },
      });
      return JSON.parse(await response.text());
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const handleLogin = async googleUserLogin => {
    setCurrentGoogleUser(googleUserLogin);
    const response = await sendLoginRequest(
      googleUserLogin.getAuthResponse().id_token
    );
    if (response) {
      const { registered, logged_in, token } = response;
      console.log(response);
      if (registered) {
        if (logged_in) {
          const cookieDomain =
            process.env.REACT_APP_ENV === "development"
              ? "localhost"
              : ".rctech.club";
          cookies.set("RCTC_USER", token, { path: "/", domain: cookieDomain });
          toast({
            title: "You are logged in",
            description: "",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          if (redirectUrl && redirectUrl.length > 0) {
            window.location.replace(
              `${
                process.env.REACT_APP_ENV === "development"
                  ? "http://"
                  : "https://"
              }${redirectUrl}?id=${token}`
            );
          }
        }
      } else {
        toast({
          title: "You need to register",
          description: "Please enter some registration information.",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
        history.push({
          pathname: "register",
          state: {
            googleUserLogin,
            token: googleUserLogin.getAuthResponse().id_token,
          },
        });
      }
    } else {
      toast({
        title: "User login error",
        description:
          "The user login details did not work. Try logging in again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleFailure = () => {
    toast({
      title: "Google login did not work!",
      description:
        "Please close the application and re-open it too see if this works.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleClicked = () => {
    setButtonDisabled(true);
  };

  return (
    <Container className={classes.container}>
      <Header />
      <Container>
        <Typography variant="h2">Login</Typography>
      </Container>
      <Container className={classes.text}>
        <Typography variant="h3">Welcome RC Lee Hall mate!</Typography>
        <Typography variant="h5">
          To continue using our app, please sign in using your HKU account.
        </Typography>
      </Container>

      <GoogleLogin
        onSuccess={handleLogin}
        onRequest={handleClicked}
        onFailure={handleFailure}
        isSignedIn
        clientId={clientID}
        disabled={buttonDisabled}
        cookiePolicy={"single_host_origin"}
        uxMode={"redirect"}
      />

      <Container className={classes.redirect}>
        {redirectUrl && redirectUrl !== "" ? (
          <Typography variant="body1">
            If you keep coming back here after login, please{" "}
            <Link href={redirectUrl}>click here</Link>
          </Typography>
        ) : (
          <Typography variant="body1">
            Please re-visit the application that redirected you here. We
            apologize for losing that information.
          </Typography>
        )}
      </Container>
    </Container>
  );
};

export default Login;
