import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '300px'
  }
}

const Home = () => {

  return (
    <div>
      <Typography
        variant="h2"
        component="div"
        align="center"
        pt={2}
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Interacting with podcast content has never been easier
      </Typography>
      <Typography
        variant="h4"
        component="div"
        align="center"
        pt={5}
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        PodCentral is an easy way to manage your own podcast and discover podcasts that you’ll love
      </Typography>
      <Box align="center" pt={5}>
        <img src={podcastLogo} alt="podcast microphone" style={styles.podcastLogo} />
      </Box>
    </div>
  );
};

export default Home;