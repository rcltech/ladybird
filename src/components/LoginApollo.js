import React, { useEffect } from "react";
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
  console.log("Wrapped");
  const classes = useStyles();
  const [login, { data }] = useMutation(LOGIN);

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
    setGoogleUser(googleUserLogin);
    login();
  };

  const handleFailure = () => {
    console.log("Failed to login");
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      const {
        login: { token, login_status, register },
      } = data;
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
            token: googleUser.getAuthResponse().id_token,
          },
        });
      }
    }
  }, [data, googleUser, history]);

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
        onFailure={handleFailure}
        clientId={clientID}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default withAuthConfigApollo(Login);
