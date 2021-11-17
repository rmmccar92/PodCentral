import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
          height={535}
          width={500}
          pt={5}
          mt={12}
          sx={{ bgcolor: '#17141d', boxShadow: '-1rem 0 3rem #000', border: 1 }}
        >
          <Grid item height={500} width={500}>
            <Grid item display="flex" justifyContent="center">
              <Typography
                variant="h4"
                color="white"
                sx={{ fontWeight: 'lighter', fontSize: '26px', letterSpacing: "1px" }}
              >
                Log in to continue
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
                  <Box>
                    <TextField
                      inputProps={{
                        style: { fontFamily: 'Arial', color: 'white' },
                      }}
                      style={{ width: '350px' }}
                      variant="outlined"
                      placeholder="youremail@mail.com"
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
                    justifyContent="space-between"
                    style={{ width: '350px' }}
                  >
                    <Button
                      className="grow"
                      variant="contained"
                      size="medium"
                      sx={{
                        backgroundColor: 'black',
                        paddingLeft: '50px',
                        paddingRight: '50px',
                        letterSpacing: '1px',
                        fontWeight: 'normal',
                        bgcolor: '#17141f',
                        boxShadow: '-1rem 0 3rem #000',
                        border: 1,
                        borderColor: 'black',
                      }}
                      type="submit"
                    >
                      Log in
                    </Button>
                    <Button
                      variant="text"
                      size="medium"
                      component={Link}
                      to="/"
                    >
                      Forgot Password?
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              mt={5}
              mb={3}
              ml={9}
              mr={9}
              pb={3}
              sx={{ borderBottom: 1 }}
            >
              {/* <Typography letterSpacing={1} fontSize="16px" color="white" fontWeight="lighter">
                OR
              </Typography> */}
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Typography fontSize="22px" color="white" fontWeight="lighter" letterSpacing="1px">
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/signup"
                  sx={{
                    paddingLeft: '54px',
                    paddingRight: '54px',
                    backgroundColor: '#f5b727',
                  }}
                >
                  <Typography color="black" fontWeight="bold" fontSize="18px">
                    Sign up for PodCentral
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

export default Login;
