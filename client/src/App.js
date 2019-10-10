import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { UserContext } from "./UserContext";

class App extends React.Component {
  state = {
    isGoogleLogin: false,
  };

  render() {
    console.log(this.state.isGoogleLogin);
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <UserContext.Provider
              value={{
                user: this.state.isGoogleLogin,
                toggleUser: () => {
                  this.setState({
                    isGoogleLogin: true,
                  });
                },
              }}
            >
              <Route path="/" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </UserContext.Provider>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
