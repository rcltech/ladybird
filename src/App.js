import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LoginApollo from "./components/LoginApollo";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginApollo} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
};
