import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import logo from "./images/logo.png";

import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Container className="App-header">
          <div>
            <a
              href="https://www.rctech.club"
              rel="noopener noreferrer"
            >
              <img className="logo" src={logo} alt="RCTECH" />
            </a>
          </div>
          <div className="header-text">Ladybird</div>
        </Container>

        <div>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
