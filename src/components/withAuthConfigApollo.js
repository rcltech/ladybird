import React, { useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import qs from "query-string";

export const withAuthConfigApollo = ChildComponent => {
  const clientID =
    "798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com";

  const HOST_URL =
    process.env.REACT_APP_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://phoenix.rctech.club/graphql";

  return props => {
    const [googleUser, setGoogleUser] = useState();
    const { location } = props;

    if (
      sessionStorage.getItem("redirectTo") === "" ||
      sessionStorage.getItem("redirectTo") === null ||
      qs.parse(location.search).redirectTo
    ) {
      sessionStorage.setItem(
        "redirectTo",
        qs.parse(location.search).redirectTo || ""
      );
    }

    const link = new HttpLink({
      uri: HOST_URL,
      headers: {
        authorization: googleUser ? googleUser.getAuthResponse().id_token : "",
      },
    });

    const cache = new InMemoryCache();

    const client = new ApolloClient({
      cache,
      link,
    });

    let redirectUrl = "";
    if (sessionStorage.getItem("redirectTo") !== "")
      redirectUrl =
        process.env.REACT_APP_ENV === "development"
          ? `http://${sessionStorage.getItem("redirectTo")}`
          : `https://${sessionStorage.getItem("redirectTo")}`;

    return (
      <ApolloProvider client={client}>
        <ChildComponent
          googleUser={googleUser}
          setGoogleUser={setGoogleUser}
          clientID={clientID}
          redirectUrl={redirectUrl}
          {...props}
        />
      </ApolloProvider>
    );
  };
};
