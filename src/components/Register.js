import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    margin: "3vh auto",
  },
  disclaimer: {
    margin: "1vmax",
  },
  form: {
    margin: "2vh auto",
  },
});

const Register = ({ location, history }) => {
  const classes = useStyles();
  const [form, setForm] = useState({
    room: null,
    year: null,
  });

  const handleChange = e => {
    form[e.target.id] = e.target.value;
    setForm(form);
  };

  const handleSubmit = async () => {
    const HOST_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/graphql"
        : "https://phoenix.rctech.club/graphql";
    const response = await axios.post(
      HOST_URL,
      {
        query: `
      mutation{
        register(
          user: {
            username: "${form.username}"
            phone: "${form.phone}"
            room_no: "${form.room}"
          }
        ){
          username
        }
      }
      `,
      },
      {
        headers: {
          authorization: location.state.token,
        },
      }
    );
    if (response.data.data.register === null) {
      history.replace({ location: "/" });
    } else {
      if (sessionStorage.getItem("redirectTo").length > 0) {
        window.location.replace(
          process.env.NODE_ENV === "development"
            ? `http://${sessionStorage.getItem("redirectTo")}?id=${
                location.state.token
              }`
            : `https://${sessionStorage.getItem("redirectTo")}?id=${
                location.state.token
              }`
        );
      }
    }
  };

  if (location.state === undefined) return <Redirect to="/" />;
  const user = location.state.user;

  return (
    <Container className={classes.container}>
      <h3>{`Hello, ${user.first_name}`}</h3>
      <div className={classes.disclaimer}>
        To continue using our services, we require you to sign in with Google,
        in which you have successfully completed that step. While we implicitly
        have access to your Google account information, other important details
        such as your room number are needed to deliver the best user experience.
        <br />
        By submitting the form below, you agree that we are allowed to store
        your info in our database. We will not share your personal data with any
        other 3rd party applications and services.
      </div>
      <FormGroup className={classes.form}>
        <FormControl required>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            aria-describedby="username-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="username-helper-text">
            For example: iamawesome
          </FormHelperText>
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="phone">Phone (Hong Kong)</InputLabel>
          <Input
            id="phone"
            aria-describedby="phone-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="phone-helper-text">
            For example: +85212345678
          </FormHelperText>
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="room">Room number</InputLabel>
          <Input
            id="room"
            aria-describedby="room-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="room-helper-text">
            For example: 924A
          </FormHelperText>
        </FormControl>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormGroup>
    </Container>
  );
};

export default Register;
