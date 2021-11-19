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
        <Grid item display="flex" justifyContent="center">
          <Box mt={10} mb={12}>
            <Box display="flex" justifyContent="center">
              <Typography
                fontSize="70px"
                letterSpacing="3px"
                fontWeight="lighter"
              >
                PodCentral
              </Typography>
            </Box>
            <Typography fontSize="24px">
              Share your interests and discover new ones at the same time.
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ height: 'auto' }}
          >
            <img
              src="https://cdn.dribbble.com/users/1230681/screenshots/3783389/tnodribble.jpg"
              alt="podcast cover art"
              height="100%"
              width="50%"
            ></img>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                // border: 1,
                width: '760px',
                height: 'auto',
              }}
            >
              <Box sx={{ width: '500px' }}>
                <Box mb={2} mt={5} display="flex" justifyContent="center">
                  <Typography fontSize="60px" letterSpacing="2px">
                    Publish
                  </Typography>
                </Box>
                <Box mb={6}>
                  <Typography fontSize="30px" fontWeight="lighter">

                    Upload your own podcast in just a few easy steps. We take
                    care of the hard parts so you can focus on making your best
                    podcast.
                  </Typography>
                  <Box mt={5} display="flex" justifyContent="center">
                    <Button
                      size="large"
                      component={Link}
                      to="/publish"
                      sx={{ backgroundColor: '#f5b727' }}
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
          </Box>
        </Grid>

        <Grid item>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ height: 'auto' }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                // border: 1,
                width: '760px',
                height: 'auto',
              }}
            >
              <Box sx={{ width: '500px' }}>
                <Box mb={2} mt={5} display="flex" justifyContent="center">
                  <Typography fontSize="50px" letterSpacing="1px">
                    Discover
                  </Typography>
                </Box>
                <Box mb={6}>
                  <Typography fontSize="30px" fontWeight="lighter">
                    Browse through our extensive library of podcasts to find something that you will love. We have a podcast for everybody.
                  </Typography>
                  <Box mt={5} display="flex" justifyContent="center">
                    <Button
                      size="large"
                      component={Link}
                      to="/discover"
                      sx={{ backgroundColor: '#f5b727' }}
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
            <img
              src="https://ossacollective.com/wp-content/uploads/2019/08/Untitled-design-4-Edited.png"
              alt="podcast cover art"
              height="100%"
              width="50%"
            ></img>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
