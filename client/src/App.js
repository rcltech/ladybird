import React from 'react';
import GoogleLogin from 'react-google-login';
import { Container } from '@material-ui/core';
import './App.css';

import logo from './images/logo.png';

function onSignIn(googleUser) {
  readFromLocalStorage();
}

function readFromLocalStorage() {
  const auth2 = window.gapi.auth2.getAuthInstance();
  const profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <div>
          <a
            href="http://rctech.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src={logo} alt="RCTECH" />
          </a>
        </div>
        <div className="header-text">Ladybird</div>
      </Container>
      <Container className="App-body">
        <div className="body-text">
          <h3>Welcome RC Lee Hallmate!</h3>
          <h4>To continue using our app, please login.</h4>
        </div>
        <GoogleLogin
          onSuccess={onSignIn}
          isSignedIn={() => {
            readFromLocalStorage();
          }}
          onFailure={() => {
            console.log('error');
          }}
          clientId={
            '798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com'
          }
          cookiePolicy={'single_host_origin'}
          uxMode={'redirect'}
          redirectUri={'https://www.rctech.club/sls'}
        />
      </Container>
    </div>
  );
}

export default App;
