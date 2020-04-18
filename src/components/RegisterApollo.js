import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "../gql/register";
import { withAuthConfigApollo } from "./withAuthConfigApollo";

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

const Register = ({ setGoogleUser, location, history }) => {
  const classes = useStyles();
  const [form, setForm] = useState({});
  const [register, { error: registerError }] = useMutation(REGISTER);

  useEffect(() => {
    if (location.state && location.state.googleUserLogin) {
      setGoogleUser(location.state.googleUserLogin);
    }
    if (registerError) {
      alert(
        "There was an error completing registration. Please register again."
      );
      history.replace({ location: "/" });
    }
  }, [registerError, location, history, setGoogleUser]);

  const validateForm = form => {
    const isEmpty = value => !value || value === "";
    const fields = [
      {
        id: "username",
        method: value => RegExp("^[0-9A-z]{4,20}$").test(value),
      },
      {
        id: "phone",
        method: value => RegExp("^[0-9]{8}$").test(value),
      },
      {
        id: "room_no",
        name: "room number",
        method: value => RegExp("^[0-9]{3,4}[A-Z]$").test(value),
      },
    ];
    for (const field of fields) {
      const value = form[field.id];
      if (isEmpty(value) || !field.method(value))
        return {
          validation: false,
          field: { id: field.name ? field.name : field.id, value },
        };
    }
    return { validation: true };
  };

  const handleChange = e => {
    form[e.target.id] = e.target.value;
    setForm(form);
  };

  const handleSubmit = async () => {
    const { validation, field } = validateForm(form);
    if (validation) {
      try {
        const response = await register({ variables: form });
        const regData = response.data;
        if (regData && regData.register && regData.register.username) {
          // register is successful, now go back to login
          alert("Registration complete! Login again to continue");
          history.replace({ location: "/" });
        } else {
          alert("There was an error with registration. Please try again.");
          history.replace({ location: "/" });
        }
      } catch (e) {
        alert("There was an error with registration. Please try again");
        history.replace({ location: "/" });
      }
    } else alert(`${field.id} of value ${field.value} is not allowed.`);
  };

  if (location.state === undefined) return <Redirect to="/" />;
  const user = location.state.user;

  return (
    <Container className={classes.container}>
      <Typography variant="h3">{`Hello, ${user.first_name}`}</Typography>
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
            inputProps={{ maxLength: 20 }}
          />
          <FormHelperText id="username-helper-text">
            For example: iamawesome. Only alphanumeric characters are allowed
            with a minimum length of 4 and a maximum length of 20.
          </FormHelperText>
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="phone">Phone (Hong Kong)</InputLabel>
          <Input
            id="phone"
            aria-describedby="phone-helper-text"
            onChange={handleChange}
            type={"number"}
            inputProps={{ maxLength: 8 }}
          />
          <FormHelperText id="phone-helper-text">
            For example: 12345678
          </FormHelperText>
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="room_no">Room number</InputLabel>
          <Input
            id="room_no"
            aria-describedby="room-helper-text"
            onChange={handleChange}
            inputProps={{ maxLength: 5 }}
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

export default withAuthConfigApollo(Register);
