import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }} mx={8}>
      <Typography variant="h6" component={Link} to="/login">← Go to Login</Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }} mx={20}>Signup</Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          pt={2}
        >
          <Grid item>
            <TextField
              placeholder="First"
              label="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item pt={2}>
            <TextField
              placeholder="Last"
              label="Last Name"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item pt={2}>
            <TextField
              placeholder="youremail@mail.com"
              label="Email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item pt={2}>
            <TextField
              placeholder="******"
              label="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </Grid>
          <Grid item pt={2}>
            <Button variant="contained" sx={{ backgroundColor: "black" }} type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Signup;
