import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CategoryCard from '../components/CategoryCard';

import podcastLogo from '../assets/podcast-logo-2.png';
import spaceShipLogo from '../assets/space-ship-logo.png';

const styles = {
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '125px',
  },
  spaceLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '190px',
  },
};
const ProfileTest = () => {
  const { data } = useQuery(GET_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <Grid container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent=""
        pl={35}
        sx={{
          borderTop: 1,
          height: '200px',
          width: '100%',
          backgroundColor: '#17111e',
          borderBottom: 1,
        }}
      >
        <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              // border: 1,
              // borderColor: 'error.main',
              height: 'auto',
              width: '300px',
            }}
          >
            <Grid item>
              <Box>
                <Avatar
                  alt="Travis Howard"
                  src="/broken-image.jpg"
                  display="flex"
                  sx={{ height: '90px', width: '90px' }}
                />
              </Box>
            </Grid>
            <Typography
              display="flex"
              alignItems="center"
              variant="h4"
              color="white"
            >
              <Grid item>
                <Box display="flex" alignItems="center" pl={3}>
                  <Typography>
                    <span className="profileName">Joey Swafford</span>
                    <br />
                    <span className="profileFollowers">No Followers</span>
                  </Typography>
                </Box>
              </Grid>
            </Typography>
          </Box>
        </Grid>
      </Box>

      <Grid item>
        <Box
          display="flex"
          justifyContent="center"
          pl={5}
          sx={{
            backgroundColor: '#17111e',
            width: '1536px',
            height: '150px',
            // borderBottom: 1,
          }}
        >
          <Box mr={5} sx={{ borderRadius: '5px' }}>
            <Button
              sx={{
                backgroundColor: '#17141d',
                border: 1,
                borderColor: 'black',
                fontSize: '16px',
                boxShadow: '-1rem 0 3rem #000',
              }}
              variant="contained"
            >
              Home
            </Button>
          </Box>
          <Box mr={5} sx={{ borderRadius: '5px' }}>
            <Button
              sx={{
                backgroundColor: '#17141d',
                border: 1,
                borderColor: 'black',
                fontSize: '16px',
                boxShadow: '-1rem 0 3rem #000',
              }}
              variant="contained"
            >
              Podcasts
            </Button>
          </Box>
          <Box mr={5} sx={{ borderRadius: '5px' }}>
            <Button
              sx={{
                backgroundColor: '#17141d',
                border: 1,
                borderColor: 'black',
                fontSize: '16px',
                boxShadow: '-1rem 0 3rem #000',
              }}
              variant="contained"
            >
              Outlined
            </Button>
          </Box>
          <Box mr={5} sx={{ borderRadius: '5px' }}>
            <Button
              sx={{
                backgroundColor: '#17141d',
                border: 1,
                borderColor: 'black',
                fontSize: '16px',
                boxShadow: '-1rem 0 3rem #000',
              }}
              variant="contained"
            >
              Outlined
            </Button>
          </Box>
          <Box mr={5} sx={{ borderRadius: '5px' }}>
            <Button
              sx={{
                backgroundColor: '#17141d',
                border: 1,
                borderColor: 'black',
                fontSize: '16px',
                boxShadow: '-1rem 0 3rem #000',
              }}
              variant="contained"
            >
              Outlined
            </Button>
          </Box>
        </Box>
        <Grid item>
          <Box
            pl={20}
            display="flex"
            alignItems="flex-start"
            sx={{ backgroundColor: '#17111e', height: '378px' }}
          >
            <Typography
              display="flex"
              alignItems="center"
              color="white"
              fontSize="24px"
              fontWeight="lighter"
              letterSpacing="2px"
            >
              Your Uploads
            </Typography>
            <br />
            <Box display="flex">
              <Grid item xs={12} md={8} lg={2}>
                <CategoryCard />
              </Grid>
              <Grid item xs={12} md={8} lg={2}>
                <CategoryCard />
              </Grid>
              <Grid item xs={12} md={8} lg={2}>
                <CategoryCard />
              </Grid>
              <Grid item xs={12} md={8} lg={2}>
                <CategoryCard />
              </Grid>
              <Grid item xs={12} md={8} lg={2}>
                <CategoryCard />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileTest;
