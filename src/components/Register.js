import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { withAuthConfigApollo } from "./withAuthConfigApollo";
import { ME } from "../gql/me";
import { REGISTER } from "../gql/register";

const useStyles = makeStyles({
  container: {
    margin: "3vh auto",
  },
  disclaimer: {
    margin: "2vh auto",
    textAlign: "left",
  },
  form: {
    margin: "2vh auto",
  },
});

const Register = ({ location, history }) => {
  const classes = useStyles();
  const toast = useToast();

  const { data, loading, error } = useQuery(ME);

  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [form, setForm] = useState({});
  const [
    register,
    { data: registerData, loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER);

  useEffect(() => {
    if (error) {
      console.log(error);
      history.back();
    }
  }, [error, history]);

  useEffect(() => {
    if (registerError) {
      toast({
        title: "Error in registration",
        description:
          "Please try to register again. Contact us at contact@rctech.club if this keeps happening",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [history, registerError, toast]);

  useEffect(() => {
    if (registerData?.register?.username) {
      // register is successful, now go back to login page
      toast({
        title: "Account registered successfully",
        description: "Redirecting",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      history.push({ location: "/" });
    }
  }, [registerData, toast, history]);

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
        method: value => RegExp("^[1-9][0-9]{2,3}([A,B])?$").test(value),
      },
    ];

    for (const field of fields) {
      const value = form[field.id];
      if (isEmpty(value) || !field.method(value))
        return {
          validation: false,
          message: `Your ${field.name ||
            field.id} of ${value} is not accepted.`,
        };
    }

    if (!privacyAgreement)
      return {
        validation: false,
        message: "You need to agree to our privacy terms.",
      };
    return { validation: true };
  };

  const handleChange = e => {
    form[e.target.id] = e.target.value;
    setForm(form);
  };

  const handleSubmit = async () => {
    const { validation, message } = validateForm(form);
    if (validation) {
      await register({ variables: form });
    } else alert(message);
  };

  if (loading) return <></>;

  return (
    <Container className={classes.container}>
      <Typography variant="h3">{`Hello, ${data.me.first_name}`}</Typography>
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
        <Container className={classes.disclaimer}>
          <Typography variant={"h5"}>Privacy Agreement</Typography>
          <Typography variant={"body1"}>
            To continue using our services, we require you to sign in with
            Google, in which you have successfully completed that step. While we
            implicitly have access to your Google account information, other
            important details such as your room number are needed to deliver the
            best user experience. We will not share your personal data with any
            other 3rd party applications and services.
          </Typography>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={privacyAgreement}
                onChange={() => setPrivacyAgreement(!privacyAgreement)}
                name="privacyAgreement"
                color="primary"
              />
            }
            label="I agree to the privacy agreement."
          />
        </Container>
        <Button type="submit" onClick={handleSubmit} disabled={registerLoading}>
          Submit
        </Button>
      </FormGroup>
    </Container>
  );
};

export default withAuthConfigApollo(Register);
