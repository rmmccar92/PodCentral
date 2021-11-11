import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {

const Home = () => {
  return (

    <>
    <Box className="boxColor" sx={{ flexGrow: 1, height: '1000px' }}>
      <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
    <Box sx={{ flexGrow: 1 }}>

      <Grow
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 2000 }}
        in={true}
      >

        <Typography
          variant="h2"
          component="div"
          align="center"
          color="white"

          pt={20}
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}

          pt="100px"
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}

          pt={2}
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}


        >
          Interacting with podcast content has never been easier
        </Typography>
      </Grow>
      <Grow
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 2000 }}
        in={true}
      >
        <Typography
          variant="h4"
          component="div"
          align="center"
          color="white"
          pt={5}
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
        >
          PodCentral is an easy way to manage your own podcast and discover
          podcasts that you’ll love
        </Typography>
      </Grow>
      <Grow
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 2000 }}
        in={true}
      >
        <Box pt={5}>
          <img
            src={podcastLogo}
            alt="podcast microphone"
            style={styles.podcastLogo}
          />
        </Box>
      </Grow>
    </Box>
    </>
  );
};

export default Home;
