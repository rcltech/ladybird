import React, { useContext, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { Container, Link, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import qs from "query-string";
import { useToast } from "@chakra-ui/react";

import { Header } from "./Header";
import { GoogleUserContext } from "../config/GoogleUserContext";
import { setTokenInCookie } from "./setTokenInCookie";

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

  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const [redirectUrl, setRedirectUrl] = useState(
    sessionStorage.getItem("redirectTo")
  );

  useEffect(() => {
    const parsedRedirectTo = qs.parse(location.search).redirectTo;
    if (parsedRedirectTo) {
      sessionStorage.setItem("redirectTo", parsedRedirectTo);
      setRedirectUrl(parsedRedirectTo);
    }
  }, [location.search]);

  useEffect(() => {
    // check login status
    const check = async () => {
      try {
        const url = `${process.env.REACT_APP_PHOENIX_URL}/oauth/user/check`;
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 200) {
          const { registered } = await response.json();

          if (registered) {
            window.location.href = redirectUrl;
          } else {
            history.push({ location: "/register" });
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    // check().then();
  }, [history, location.search, redirectUrl]);

  const sendLoginRequest = async token => {
    const URL = `${process.env.REACT_APP_PHOENIX_URL}/oauth/user/login`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          authorization: token,
        },
      });
      return await response.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const handleLogin = async googleUserLogin => {
    console.log("on success");

    console.log(googleUserLogin);
    // setCurrentGoogleUser(googleUserLogin);
    //
    // const googleUserLoginToken = googleUserLogin.getAuthResponse().id_token;

    // const response = await sendLoginRequest(googleUserLoginToken);
    //
    // console.log(response);
    //
    // if (response) {
    //   const { registered, logged_in, token } = response;
    //   if (registered) {
    //     if (logged_in) {
    //       setTokenInCookie(token);
    //       toast({
    //         title: "You are logged in",
    //         status: "success",
    //         duration: 9000,
    //         isClosable: true,
    //       });
    //       if (redirectUrl) {
    //         window.location.href = redirectUrl;
    //       }
    //     }
    //   } else {
    //     toast({
    //       title: "You need to register",
    //       description: "Please enter some registration information.",
    //       status: "info",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //     history.push({ location: "/register" });
    //   }
    // } else {
    //   toast({
    //     title: "User login error",
    //     description:
    //       "The user login details did not work. Try logging in again.",
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
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
        hostedDomain={"connect.hku.hk"}
        onSuccess={handleLogin}
        onRequest={handleClicked}
        onFailure={handleFailure}
        clientId={clientID}
        disabled={buttonDisabled}
        cookiePolicy={"single_host_origin"}
        uxMode={"redirect"}
        isSignedIn={true}
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
