import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";

import podcastLogo from "../assets/podcast-logo.png";

const styles = {
  podcastLogo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "150px",
  },
  lowerImage: {
    display: "block",
    width: "150px",
  },
};

export default function Home() {
  return (
    <Grid container>
      <Box
        pt="100px"
        sx={{
          flexGrow: 1,
          // height: '2000px',
        }}
      >
        <Grid item xs={6} md={12} lg={12}>
          <Box
            sx={{
              height: "100px",
              backgroundColor: "inherit",
              letterSpacing: 7,
              flexGrow: 1,
              width: "auto",
              fontSize: 69,
              // fontWeight: 'bold',
              // fontColor: '#17141d',
              // ml: '50px',
              // mt: '50px',
              mb: "110px",
            }}
          >
            <div className="title">PODCENTRAL</div>
          </Box>
        </Grid>
        <Box
          className="boxCenter"
          mt={10}
          mb={10}
          ml={20}
          mr={20}
          // sx={{
          //   backgroundColor: '#17141d',
          //   boxShadow: '-1rem 0 3rem #000',
          //   border: 1,
          //   borderColor: 'black',
          //   borderRadius: '0px',
          // }}
        >
          <Grid item xs={12} md={8} lg={12}>
            <Box
              className="boxCenter"
              sx={{ width: "100%", height: "100%" }}
              // ml={20}
              // mr={100}
              // mt={10}
              // mb={10}
            >
              <Box className="flex">
                <img
                  src="https://res.cloudinary.com/ryanmcc/image/upload/v1637004278/my_folder/banner_podcast_ciencia_2018_ecybtz.jpg"
                  alt="headphones and mic"
                  style={styles.lowerImage}
                />

                <Box
                  className=""
                  pl={1}
                  component={Link}
                  to="/publish"
                  pr={1}
                  sx={{
                    backgroundColor: "#17141d",
                    boxShadow: "-1rem 0 3rem #000",
                    border: 1,
                    borderColor: "black",
                    // borderRadius: '5px',
                  }}
                >
                  <Typography color="white" fontSize="18px" fontWeight="normal">
                    <b className="publish">PUBLISH</b>
                    Upload your own podcast in just a few easy steps. We take
                    care of the hard parts so you can focus on making your best
                    podcast.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: "47px" }}></Box>
              <Box className="flex">
                <Box
                  className=""
                  component={Link}
                  to="/discover"
                  pl={1}
                  pr={1}
                  sx={{
                    backgroundColor: "#17141d",
                    boxShadow: "-1rem 0 3rem #000",
                    borderColor: "black",
                    // borderRadius: '5px',
                  }}
                >
                  <Typography color="white" fontSize="18px" fontWeight="normal">
                    <b className="discover">DISCOVER</b>
                    Browse through our extensive library of podcasts to find
                    something you love. We have a podcast for everyone.
                  </Typography>
                </Box>

                <img
                  src="https://res.cloudinary.com/ryanmcc/image/upload/v1637004278/my_folder/banner_podcast_ciencia_2018_ecybtz.jpg"
                  alt="headphones and mic"
                  style={styles.lowerImage}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
        <Grid item xs={6} md={12} lg={12}>
          <Box
            className="boxColor"
            // ml={20}
            // mr={20}
            sx={{
              backgroundColor: "#17141d",
              boxShadow: "-1rem 0 3rem #000",
              border: 1,
              borderColor: "black",
              borderRadius: "0px",
            }}
          >
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <Grid item xs={12} md={12} lg={12}>
                <Box
                // m={20}
                // sx={{ border: 1, borderColor: 'error.main' }}
                // variant="h4"
                // component="div"
                // align="center"
                // color="white"
                // pt={2}
                // sx={{
                //   flexGrow: 1,
                //   display: { xs: 'block', sm: 'block' },
                //   fontSize: '70px',
                //   fontWeight: 'bold',
                //   letterSpacing: 3,
                //   lineHeight: 1.5,
                // }}
                >
                  <p className="pStyling1">
                    Designed for Podcasts with You in Mind
                  </p>
                </Box>
              </Grid>
            </Grow>

            <Grow
              style={{ transformOrigin: "0 0 0" }}
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
              <Box ml={5} mr={5} mb="50px">
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
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
                      display: { xs: "block", sm: "block" },
                      // fontWeight: 'bold',
                      // fontSize: '40px',
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
      </Box>
    </Grid>
  );
}
