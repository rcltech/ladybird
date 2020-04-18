import React, { useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export const withAuthConfigApollo = ChildComponent => {
  const clientID =
    "798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com";

  const HOST_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://phoenix.rctech.club/graphql";

  return props => {
    const [googleUser, setGoogleUser] = useState();

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

    console.log(googleUser);

    return (
      <ApolloProvider client={client}>
        <ChildComponent
          googleUser={googleUser}
          setGoogleUser={setGoogleUser}
          clientID={clientID}
          {...props}
        />
      </ApolloProvider>
    );
  };
};
