import React from 'react';
import GoogleLogin from 'react-google-login';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    margin: '3vh auto'
  },
  text: {
    marginBottom: '2vh'
  }
});

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

const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.text}>
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
  );
};

export default Login;
