import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
  },
  lowerImage: {
    display: 'block',
    width: '150px',
  },
};


export default function Home() {

  return (
    <Grid container>
      <Box
        sx={{
          flexGrow: 1,
          height: 'auto',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
        >
          <Box mt={10} mb={12}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box display="flex" justifyContent="center">
                <Typography
                  fontSize="70px"
                  letterSpacing="3px"
                  fontWeight="lighter"
                >
                  PodCentral
                </Typography>
              </Box>
            </Grid>
            <Typography fontSize="24px">
              Share your interests and discover new ones at the same time.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>

          <Box
            display="flex"
            // justifyContent="space-between"
            sx={{ height: 'auto', backgroundColor: '#17141d', border: 1 }}
          >
            <img
              src="https://cdn.dribbble.com/users/1230681/screenshots/3783389/tnodribble.jpg"
              alt="podcast cover art"
              height="100%"
              width="50%"
              sx={{ border: 1}}
            ></img>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                display="flex"
                pt={3}
                pl={3}
                pr={3}
                ml={24}
                mt={10}
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: 1,
                  width: '400px',
                  height: '400px',
                  border: 1,
                  borderColor: 'black',
                  backgroundColor: '#17141d',
                  boxShadow: '-1rem 0 3rem #000',
                  // borderRadius: '5px'
                }}
              >
                <Box sx={{ width: '500px' }}>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      fontSize="60px"
                      letterSpacing="2px"
                      color="white"
                      color="#f5b727"
                      fontWeight="lighter"
                    >
                      Publish
                    </Typography>
                  </Box>
                  <Box mb={6}>
                    <Typography
                      // pt={4}
                      className="textShadow"
                      fontSize="28px"
                      fontWeight="lighter"
                      textAlign="center"
                      color="white"
                    >
                      Upload your own podcast in just a few easy steps. We take
                      care of the hard parts so you can focus on making your
                      best podcast.
                    </Typography>
                    <Box
                      mt={4}
                      display="flex"
                      justifyContent="center"
                      // sx={{ border: 1 }}

                    >
                      <Button
                        className="hoverLeft"
                        size="large"
                        component={Link}
                        to="/publish"
                        sx={{
                          backgroundColor: '#f5b727',
                          border: 1,
                          borderColor: 'black',
                        }}
                        variant="contained"
                      >
                        <Typography color="black" fontWeight="bold">
                          Publish
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

            </Grid>

          </Box>
        </Grid>

        <Grid item>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ height: 'auto', backgroundColor: '#17141d' }}
          >
            <Grid item>
              <Box
                // className="grow2"
                display="flex"
                pt={3}
                pl={3}
                pr={3}
                ml={23}
                mt={11}
                // mb={10}
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: 1,
                  width: '400px',
                  height: '400px',
                  borderColor: 'black',
                  backgroundColor: '#17141d',
                  boxShadow: '-1rem 0 3rem #000',
                  // borderRadius: '5px'
                }}
              >
                <Box sx={{ width: '500px' }}>
                  <Box display="flex" justifyContent="center" mb={1}>
                    <Typography
                      fontSize="60px"
                      letterSpacing="1px"
                      color="white"
                      fontWeight="lighter"
                      color="#f5b727"
                    >
                      Discover
                    </Typography>
                  </Box>
                  <Box pb={6} pt={1}>
                    <Typography
                      // pt={4}
                      className="textShadow"
                      fontSize="26px"
                      fontWeight="lighter"
                      textAlign="center"
                      color="white"
                      letterSpacing="1px"
                    >
                      Browse through our extensive library of podcasts to find
                      something you love. We have a podcast for everyone.
                    </Typography>
                    <Box
                      mt={3}
                      pt={2}
                      display="flex"
                      justifyContent="center"
                      // sx={{ border: 1 }}
                    >
                      <Button
                        className="hoverLeft"
                        size="large"
                        component={Link}
                        to="/discover"
                        // mb={4}
                        sx={{
                          backgroundColor: '#f5b727',
                          border: 1,
                          borderColor: 'black',
                        }}
                        variant="contained"
                      >
                        <Typography color="black" fontWeight="bold">
                          Discover
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <img
              src="https://ossacollective.com/wp-content/uploads/2019/08/Untitled-design-4-Edited.png"
              alt="podcast cover art"
              height="565px"
              width="50%"
              sx={{ border: 1 }}
            ></img>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
