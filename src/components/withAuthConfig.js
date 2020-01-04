import React from "react";
import axios from "axios";

const withAuthConfig = WrappedComponent => {
  const clientID =
    "798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com";

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

  const onLoginSuccess = async (location, history, googleUser) => {
    const user = readFromLocalStorage();
    const HOST_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/graphql"
        : "https://phoenix.rctech.club/graphql";

    const response = await axios.post(
      HOST_URL,
      {
        query: `
    mutation {
      login{
        token
        login_status
        register
      }
    }
    `,
      },
      {
        headers: {
          authorization: googleUser.getAuthResponse().id_token,
        },
      }
    );
    console.log(response.data);

    const {
      data: {
        login: { token, login_status, register },
      },
    } = response.data;
    if (login_status)
      if (sessionStorage.getItem("redirectTo").length > 0) {
        window.location.replace(
          process.env.NODE_ENV === "development"
            ? `http://${sessionStorage.getItem("redirectTo")}?id=${token}`
            : `https://${sessionStorage.getItem("redirectTo")}?id=${token}`
        );
      }
    if (register) {
      history.push({
        pathname: "register",
        state: {
          user,
          token: googleUser.getAuthResponse().id_token,
        },
      });
    }
  };

  return function(props) {
    return (
      <WrappedComponent
        onLoginSuccess={onLoginSuccess}
        clientID={clientID}
        {...props}
      />
    );
  };
};

export default withAuthConfig;
