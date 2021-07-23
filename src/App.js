import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginApollo from "./components/Login";
import RegisterApollo from "./components/Register";
import { GoogleUserContext, useGoogleUser } from "./config/GoogleUserContext";
import { useToast } from "@chakra-ui/react";

export const App = () => {
  const toast = useToast();
  const googleUser = useGoogleUser();
  useEffect(() => {
    toast({
      position: "bottom-left",
      title: "We use cookies to help you login",
      description: "When you login on this website, you agree to use cookies",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  }, [toast]);

  return (
    <GoogleUserContext.Provider value={googleUser}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginApollo} />
          <Route path="/register" exact component={RegisterApollo} />
        </Switch>
      </Router>
    </GoogleUserContext.Provider>
  );
};
