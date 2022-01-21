import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
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
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </GoogleUserContext.Provider>
  );
};
