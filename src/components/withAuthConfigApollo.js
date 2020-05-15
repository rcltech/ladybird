import React, { useContext } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { GoogleUserContext } from "../config/GoogleUserContext";

export const withAuthConfigApollo = ChildComponent => {
  const HOST_URL =
    process.env.REACT_APP_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://phoenix.rctech.club/graphql";

  return props => {
    const { googleUser } = useContext(GoogleUserContext);

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

    return (
      <ApolloProvider client={client}>
        <ChildComponent {...props} />
      </ApolloProvider>
    );
  };
};
