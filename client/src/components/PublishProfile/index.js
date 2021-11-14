import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

import DarkHouse from "../../assets/podcast-image-dark-house.jpeg";

// import { WidgetLoader } from "react-cloudinary-upload-widget";
import CloudinaryWidget from "../Cloudinary";
import { GET_ME } from "../../utils/queries";
import { ADD_EPISODE } from "../../utils/mutations";

const styles = {
  coverArt: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "250px",
    marginTop: "10px",
  },
  coverArtFav: {
    display: "block",
    marginRight: "5px",
    width: "115px",
    padding: "5px 5px 5px",
    aspectRatio: "1 / 1",
  },
};

const PublishProfile = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    season: "",
    episode: "",
  });
  const [addEpisode] = useMutation(ADD_EPISODE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Works for now but should be changed to be dynamic
    const podcastImage = localStorage.getItem("podcastImage");
    console.log(podcastImage);
    try {
      const { data } = await addEpisode({
        variables: {
          input: {
            title: formState.title,
            description: formState.description,
            episode: parseInt(formState.episode),
            season: parseInt(formState.season),
            audio: podcastImage,
          },
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div>
      <Grow
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 2000 }}
        in={true}
      >
        <Typography
          variant="h2"
          component="div"
          align="center"
          pt={2}
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block", fontWeight: "400" } }}
        >
          Welcome Back {userData.firstName}!
        </Typography>
      </Grow>
      <Box>
        <Grid xs={12} md={6}>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h4"
              component="div"
              align="center"
              pt={5}
              mx={3}
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              color="black"
            >
              Your Podcast: {userData.addedPodcast.title}
            </Typography>
          </Grow>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <img
              src={userData.addedPodcast.image}
              alt="podcast cover art - dark house"
              style={styles.coverArt}
            />
          </Grow>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            pt={2}
          >
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <TextField
                  placeholder="Title"
                  label="Episode Title"
                  name="title"
                  type="title"
                  id="title"
                  onChange={handleChange}
                />
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <TextField
                  multiline
                  rows={5}
                  placeholder="Description"
                  label="Episode Description"
                  name="description"
                  type="description"
                  id="description"
                  onChange={handleChange}
                />
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <TextField
                  placeholder="Season"
                  label="Season Number"
                  name="season"
                  type="season"
                  id="season"
                  onChange={handleChange}
                />
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <TextField
                  placeholder="Episode"
                  label="Episode Number"
                  name="episode"
                  type="episode"
                  id="episode"
                  onChange={handleChange}
                />
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black" }}
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Typography
                  variant="p"
                  component="div"
                  pt={2}
                  sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                  align="center"
                >
                  Upload New Episode
                </Typography>
              </Grow>
            </Grid>
            <Grid item pt={2}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <div>
                  <CloudinaryWidget />
                </div>
              </Grow>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={6}>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h4"
              component="div"
              align="center"
              pt={5}
              mx={3}
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              color="black"
            >
              Your Favorites
            </Typography>
            {/* We should map over these */}
          </Grow>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            pt={2}
          >
            <Grid md={4}>
              <Box pt={2}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <img
                    // src={userData.likedPodcasts[0].image}
                    alt="podcast cover art"
                    style={styles.coverArtFav}
                  />
                </Grow>
              </Box>
            </Grid>
            <Grid md={8}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Typography
                  variant="h5"
                  // component={Link}
                  align="left"
                  pt={5}
                  mx={3}
                  sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                  color="black"
                >
                  Podcast 1
                </Typography>
              </Grow>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid md={4}>
              <Box pt={2}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <img
                    // src={userData.likedPodcasts[1].image}
                    alt="podcast cover art - dark house"
                    style={styles.coverArtFav}
                  />
                </Grow>
              </Box>
            </Grid>
            <Grid md={8}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Typography
                  variant="h5"
                  component="div"
                  align="left"
                  pt={5}
                  mx={3}
                  sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                  color="black"
                >
                  Podcast 1
                </Typography>
              </Grow>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid md={4}>
              <Box pt={2}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <img
                    // src={userData.likedPodcasts[2].image}
                    alt="podcast cover art - dark house"
                    style={styles.coverArtFav}
                  />
                </Grow>
              </Box>
            </Grid>
            <Grid md={8}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Typography
                  variant="h5"
                  // component={Link}
                  align="left"
                  pt={5}
                  mx={3}
                  sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                  color="black"
                >
                  Podcast 1
                </Typography>
              </Grow>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid md={4}>
              <Box pt={2}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <img
                    // src={userData.likedPodcasts[3].image}
                    alt="podcast cover art - dark house"
                    style={styles.coverArtFav}
                  />
                </Grow>
              </Box>
            </Grid>
            <Grid md={8}>
              <Grow
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
                in={true}
              >
                <Typography
                  variant="h5"
                  // component={Link}
                  align="left"
                  direction="column"
                  justifyContent="center"
                  pt={5}
                  mx={3}
                  sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                  color="black"
                >
                  Podcast 1
                </Typography>
              </Grow>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
};

export default PublishProfile;
