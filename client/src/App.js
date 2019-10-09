import React from 'react';
import './App.css';
import GoogleLogin from "react-google-login";

function onSignIn(googleUser){
  readFromLocalStorage()
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
      <header className="App-header">
        <GoogleLogin
            onSuccess={onSignIn}
            isSignedIn={() => {readFromLocalStorage()}}
            onFailure={() => {console.log("error")}}
            clientId={"798725565697-sfibjdadpcan9ks908dnl8p5k1dncmoq.apps.googleusercontent.com"}
            cookiePolicy={'single_host_origin'}
            uxMode={"redirect"}
        />
      </header>
    </div>
  );
}

export default App;
