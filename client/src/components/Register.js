import React, { useState } from 'react';
import {
  Container,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  makeStyles
} from '@material-ui/core';
import { UserContext } from "../UserContext";

const useStyles = makeStyles({
  container: {
    margin: '3vh auto'
  },
  disclaimer: {
    margin: '1vmax'
  },
  form: {
    margin: '2vh auto'
  }
});

const Register = props => {
  const classes = useStyles();
  // const { user } = props;

  const [form, setForm] = useState({
    room: null,
    year: null
  });

  const handleChange = e => {
    form[e.target.id] = e.target.value;
    setForm(form);
  };

  const handleSubmit = () => {
    // TODO: send post request to server
    alert(`submitted: ${form}`);
  };

  return (
    <UserContext.Consumer>
      {({user}) => (
        user ? (
          <Container className={classes.container}>
            <h3>Hello, new user!</h3>
            <div className={classes.disclaimer}>
              To continue using our services, we require you to sign in with Google,
              in which you have successfully completed that step. While we implicitly
              have access to your Google account information, other important details
              such as your room number are needed to provide the best experience.
              <br />
              By submitting the form below, you agree that we are allowed to store
              your info in our database. We will not share your data with any other
              3rd party applications and services.
            </div>
            <FormGroup className={classes.form}>
              <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  aria-describedby="username-helper-text"
                  onChange={handleChange}
                />
                <FormHelperText id="username-helper-text">iamawesome</FormHelperText>
              </FormControl>
              <FormControl required>
                <InputLabel htmlFor="phone">Phone (Hong Kong)</InputLabel>
                <Input
                  id="phone"
                  aria-describedby="phone-helper-text"
                  onChange={handleChange}
                />
                <FormHelperText id="phone-helper-text">+85212345678</FormHelperText>
              </FormControl>
              <FormControl required>
                <InputLabel htmlFor="room">Room number</InputLabel>
                <Input
                  id="room"
                  aria-describedby="room-helper-text"
                  onChange={handleChange}
                />
                <FormHelperText id="room-helper-text">1010A</FormHelperText>
              </FormControl>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </FormGroup>
          </Container>
        ): null
      )}
    </UserContext.Consumer>

  );
};

export default Register;
