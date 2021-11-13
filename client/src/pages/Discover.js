import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CategoryCard from "../components/CategoryCard";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { Client } from 'podcast-api'
import { useState, useEffect } from "react";

require('dotenv').config();

// import podcastLogo from '../assets/podcast-logo.png';

// const styles = {
//   podcastLogo: {
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     width: '300px',
//   },
// };

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#ffffff",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});


export default function MediaCard() {
  const [podcastData, setPodcastData] = useState('');
  const client = Client({ apiKey: process.env.API_KEY });

  client.fetchBestPodcasts({
    page: 0,
    region: 'us',
    sort: 'listen_score',
    safe_mode: 0,
  })
    .then((response) => {
      // Get response json data here
      setPodcastData('all data', response.data)
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('podcast', podcastData.podcast);


  // const cardPopulate = () => {
  //   for (let i = 0; i < 5; i++) {
  //     return <Cards title={podcastData.podcasts[i].title} image={podcastData.podcasts[i].image} redirect={podcastData.podcasts[i].redirect} description={podcastData.podcasts[i].description} />
  //   }
  // }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
            width: "auto",
            fontSize: 64,
            fontWeight: "bold",
            ml: "50px",
            mt: "50px",
            mb: "50px",
            letterSpacing: 8,
          }}
        >
          <p className="wYl-font">DISCOVER</p>
          <p className="wYl-font2">PODCASTS</p>
        </Box>

        <Box
          className="boxColor"
          sx={{
            width: "auto",
            mt: "30px",
            pt: "20px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <p className="categories">Categories</p>
            <Button
              className="allCategories"
              variant="text"
              size="medium"
              component={Link}
              to="/allCategories"
              sx={{ mr: "50px", mb: "10px" }}
            >
              BROWSE ALL
            </Button>
          </Grid>

          {/* <div>
            {cardPopulate}
          </div> */}

          <p className="categories">Popular</p>
          <Grid
            container
            spacing={7}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ pb: "50px", pl: "50px", pr: "50px" }}
          >
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
          </Grid>

          <p className="categories">Family</p>
          <Grid
            container
            spacing={7}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ pb: "50px", pl: "50px", pr: "50px" }}
          >
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Cards />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}
