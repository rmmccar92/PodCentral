import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {

    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
  },
};

export default function Home() {
  return (
    <div>
      <Grow
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 2000 }}
        in={true}
      >
        <Typography
          variant="h2"
          component="div"
          align="center"
          pt={20}
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}

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
          component={Link}
          to="/profile"
          align="center"
          color="black"
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
          <a href="/profile"><img
            src={podcastLogo}
            alt="podcast microphone"
            style={styles.podcastLogo}
          /></a>
        </Box>
        {/* <Grow
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 4000 }}
          in={true}
        >
        <Typography
          variant="h4"
          component={Link}
          to="/profile"
          align="center"
          pt={5}
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
        >
          GET STARTED
        </Typography>
        </Grow> */}
      </Grow>
    </div >
  );
}
