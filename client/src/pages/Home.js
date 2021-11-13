import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
  },
};

const itemData = [
  {
    img: 'https://thumbs.dreamstime.com/b/young-man-recording-podcast-smiling-to-camera-close-up-young-men-recording-podcast-smiling-to-camera-close-up-104865306.jpg',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://st4.depositphotos.com/13193658/27296/i/600/depositphotos_272967952-stock-photo-cropped-shot-radio-host-speaking.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
];

export default function Home({}) {
  return (
    <Grid container>
      <Box
        className="boxColor"
        pt={10}
        sx={{
          flexGrow: 1,
          height: '2000px',
        }}
      >
        <Grid item xs={10} md={10} lg={12}>
          <Box
            className="boxColor"
            ml={20}
            mr={20}
            sx={{
              backgroundColor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
              border: 1,
              borderColor: 'black',
              borderRadius: '5px',
            }}
          >
            <Grow
              style={{ transformOrigin: '0 0 0' }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <Grid item xs={12} md={12} lg={12}>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  color="white"
                  pt={2}
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'block', sm: 'block' },
                    fontSize: '70px',
                    fontWeight: 'bold',
                    letterSpacing: 3,
                    lineHeight: 1.5,
                  }}
                >
                  PODCENTRAL
                  <p className="pStyling1">
                    Designed for Podcasts with You in Mind
                  </p>
                </Typography>
              </Grid>
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
            <Grid item xs={12} md={12} lg={12}>
              <Box p={5} ml={5} mr={5}>
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
                    // pt={5}
                    sx={{
                      flexGrow: 1,
                      display: { xs: 'block', sm: 'block' },
                      fontWeight: 'bold',
                      fontSize: '40px',
                      letterSpacing: 1,
                    }}
                  >
                    <p className="pStyling">
                      Whether you want to manage your own podcasts, discover new
                      podcasts or listen to your favorite podcast, it has never
                      been easier with PodCentral.
                    </p>
                  </Typography>
                </Grow>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={12}>
          <Box
            className="boxCenter grow"
            component={Link}
            to="/publish"
            ml={20}
            mr={100}
            mt={10}
            // sx={{ border: 1 }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs09z6iKS33RJuFggxwiFZc_-D5rknAZ7bjg&usqp=CAU" />
            <Box ml={1} mr={1}>
              <Typography color="white" fontSize="18px">
                <p className="publish">PUBLISH</p>
                Upload your own podcast in just a few easy steps. We take care
                of the hard parts so you can focus on making your best podcast.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            className="boxCenter2 grow"
            component={Link}
            to="/discover"
            ml={100}
            mr={20}
            mt={10}
            // sx={{ border: 1 }}
          >
            <Box ml={1} mr={1}>
              <Typography color="white" fontSize="18px">
                <p className="discover">DISCOVER</p>
                Browse through our extensive library of podcasts to find
                something you love. We have a podcast for everyone.
              </Typography>
            </Box>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs09z6iKS33RJuFggxwiFZc_-D5rknAZ7bjg&usqp=CAU" />
          </Box>
        </Grid>
        <Box
          ml={20}
          mr={20}
          mt={10}
          p={1}
          style={{
            backgroundColor: '#17141d',
            boxShadow: '-1rem 0 3rem #000',
          }}
          sx={{
            border: 1,
            borderRadius: '5px',
          }}
        >
          <ImageList
            className="scrollBar"
            style={{
              backgroundColor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
            }}
            sx={{
              width: '600px',
              height: '400px',
              border: 1,
              borderRadius: '5px',
            }}
          >
            {itemData.map((item) => (
              <ImageListItem component={Link} to="/discover" key={item.img}>
                <img
                  className="podCardTwo"
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  sx={{ border: 1, borderRadius: '5px' }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Grid>
  );
}
