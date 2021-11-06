import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import criminal from '../assets/podcast-image-criminal.png';
import darkHouse from '../assets/podcast-image-dark-house.jpeg';
import fatMascara from '../assets/podcast-image-fat-mascara.jpg';

const styles = {
  images: {
    height: '300px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

const Home = () => {
  const theme = createTheme({
    palette: {
      type: "dark",
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box >
        <AppBar position="static">
          <Toolbar >

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PodCentral
            </Typography>
            <Button component={Link} color="inherit" to="/login">Login</Button>
          </Toolbar>
        </AppBar>
      </Box >
      <Box pt={3}>
        <h2 align="center">Welcome to PodCentral, where creators can collaborate and showcase their podcasts.</h2>
      </Box>
      <Box pt={10}>
        <h3 align="center">Featured Podcasts</h3>
      </Box>
      <Grid container spacing={2} pt={10}>
        <Grid item xs={4}>
          <img src={criminal} alt="cover art - criminal" style={styles.images} align="center" />
        </Grid>
        <Grid item xs={4}>
          <img src={darkHouse} alt="cover art - dark house" style={styles.images} align="center" />
        </Grid>
        <Grid item xs={4}>
          <img src={fatMascara} alt="cover art - fat mascara" style={styles.images} align="center" />
        </Grid>
      </Grid>
    </ThemeProvider >
  );
};

export default Home;