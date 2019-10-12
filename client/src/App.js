import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
