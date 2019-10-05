import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    margin: '3vh auto'
  }
});

const Register = () => {
  const classes = useStyles();
  return <Container className={classes.container}>To do</Container>;
};

export default Register;
