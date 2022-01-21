import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const withAuthConfigApollo = ChildComponent => {
  const HOST_URL = `${process.env.REACT_APP_PHOENIX_URL}/graphql`;

  return props => {
    const link = new HttpLink({
      uri: HOST_URL,
      credentials: "include",
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
