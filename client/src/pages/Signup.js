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
  const [addUser, { error }] = useMutation(ADD_USER);

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

    <>
      <Grid
        container
        spacing={0}
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor=""
        // sx={{ border: 1 }}
      >
        <Box
          flexGrow={1}
          display="flex"
          // alignItems="center"

          justifyContent="center"
          height={650}
          width={500}
          pt={5}
          mt={5}
          sx={{ bgcolor: '#17141d', boxShadow: '-1rem 0 3rem #000', border: 1 }}
        >
          <Grid item height={500} width={500}>
            <Grid item display="flex" justifyContent="center">
              <Typography
                variant="h4"
                color="white"
                sx={{
                  fontWeight: 'lighter',
                  fontSize: '26px',
                  letterSpacing: '1px',
                }}
              >
                Sign up to continue
              </Typography>
            </Grid>
            <Grid mt={4}>
              <form onSubmit={handleFormSubmit}>
                <Grid
                  item
                  mt={2}
                  display="flex"
                  justifyContent="center"
                  width={500}
                >
                  <TextField
                    inputProps={{
                      style: { fontFamily: 'Arial', color: 'white' },
                    }}
                    style={{ width: '350px' }}
                    variant="outlined"
                    placeholder="John"
                    label="First Name"
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    focused
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  mt={2}
                  display="flex"
                  justifyContent="center"
                  width={500}
                >
                  <TextField
                    inputProps={{
                      style: { fontFamily: 'Arial', color: 'white' },
                    }}
                    style={{ width: '350px' }}
                    variant="outlined"
                    placeholder="Doe"
                    label="Last Name"
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    focused
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  mt={2}
                  display="flex"
                  justifyContent="center"
                  width={500}
                >
                  <Box>
                    <TextField
                      inputProps={{
                        style: { fontFamily: 'Arial', color: 'white' },
                      }}
                      style={{ width: '350px' }}
                      variant="outlined"
                      placeholder="johndoe@email.com"
                      label="Email"
                      name="email"
                      type="email"
                      id="email"
                      focused
                      onChange={handleChange}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                  mt={2}
                  width={500}
                >
                  <Box>
                    <TextField
                      inputProps={{
                        style: { fontFamily: 'Arial', color: 'white' },
                      }}
                      style={{ width: '350px' }}
                      variant="outlined"
                      placeholder="********"
                      label="Password"
                      name="password"
                      type="password"
                      id="pwd"
                      focused
                      onChange={handleChange}
                    />
                  </Box>
                </Grid>
                {error ? (
                  <div>
                    <p className="error-text">
                      The provided credentials are incorrect
                    </p>
                  </div>
                ) : null}
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                  width={500}
                  mt={2}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    style={{ width: '350px' }}
                  >
                    <Button
                      className="grow"
                      variant="contained"
                      size="medium"
                      sx={{
                        backgroundColor: 'black',
                        // paddingLeft: '50px',
                        // paddingRight: '50px',
                        letterSpacing: '1px',
                        fontWeight: 'normal',
                        bgcolor: '#17141f',
                        boxShadow: '-1rem 0 3rem #000',
                        border: 1,
                        borderColor: 'black',
                        fontSize: '18px',
                      }}
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              mt={2}
              mb={3}
              ml={9}
              mr={9}
              pb={3}
              sx={{ borderBottom: 1 }}
            >
              {/* <Typography
                letterSpacing={1}
                fontSize="16px"
                color="white"
                fontWeight="lighter"
              >
                OR
              </Typography> */}
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Typography
                fontSize="22px"
                color="white"
                fontWeight="lighter"
                letterSpacing="1px"
              >
                Already have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  className=""
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/signin"
                  sx={{
                    paddingLeft: '54px',
                    paddingRight: '54px',
                    backgroundColor: '#f5b727',
                  }}
                >
                  <Typography color="black" fontWeight="bold" fontSize="18px">
                    Sign In to your account
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Signup;
