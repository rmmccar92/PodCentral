import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Typography variant="h6" component={Link} to="/signup" mx={4}>← Go to Signup</Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }} mx={25}>Login</Typography>

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
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <Grid item pt={2}>
            <Button variant="contained" sx={{ backgroundColor: "black" }} type="submit">Submit</Button>
          </Grid>
        </Grid>

      </form>
    </div >
  );
}

export default Login;
