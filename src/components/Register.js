import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  FormControlLabel,
  Checkbox,
  makeStyles,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "../gql/register";
import { withAuthConfigApollo } from "./withAuthConfigApollo";
import { GoogleUserContext } from "../config/GoogleUserContext";
import { useToast } from "@chakra-ui/react";

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
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
  const [form, setForm] = useState({});
  const [register, { error: registerError }] = useMutation(REGISTER);
  const { googleUser, user_details, setCurrentGoogleUser } = useContext(
    GoogleUserContext
  );

  useEffect(() => {
    if (googleUser) setCurrentGoogleUser(googleUser);
    else history.replace({ location: "/" });

    if (registerError) {
      toast({
        title: "Error in registration",
        description:
          "Please try to register again. Contact us at contact@rctech.club if this keeps happening",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      history.replace({ location: "/" });
    }
  }, [googleUser, history, registerError, setCurrentGoogleUser, toast]);

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
      try {
        const response = await register({ variables: form });
        const regData = response.data;
        if (regData && regData.register && regData.register.username) {
          // register is successful, now go back to login
          toast({
            title: "Account created.",
            description:
              "We've created your account for you. Please login again.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          history.replace({ location: "/" });
        } else {
          toast({
            title: "Error in registration",
            description:
              "Please try to register again. Contact us at contact@rctech.club if this keeps happening",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          history.replace({ location: "/" });
        }
      } catch (e) {
        toast({
          title: "Error in registration",
          description:
            "Please try to register again. Contact us at contact@rctech.club if this keeps happening",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        history.replace({ location: "/" });
      }
    } else alert(message);
  };

  if (location.state === undefined) return <Redirect to="/" />;

  return (
    <Container className={classes.container}>
      <Typography variant="h3">{`Hello, ${user_details.first_name}`}</Typography>
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
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormGroup>
    </Container>
  );
};

export default withAuthConfigApollo(Register);
