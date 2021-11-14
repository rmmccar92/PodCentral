import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { styled, useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

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

  const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
  }));

  const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
      width: '100%',
    },
  });

  const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Box flexGrow={1} sx={{ bgcolor: '#f0eeeb', height: '100vh' }} >
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        <Grid sm={12} md={6}>
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
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h6"
              component="div"
              align="center"
              pt={5}
              mx={3}
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              color="black"
            >
              Upload New Episode
            </Typography>
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
          </Grid>
        </Grid>
        <Grid item sm={12} md={6}>
          <Widget>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CoverImage>
                <img
                  alt="can't win - Chilling Sunday"
                  src="/static/images/sliders/chilling-sunday.jpg"
                />
              </CoverImage>
              <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  Jun Pulse
                </Typography>
                <Typography noWrap>
                  <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                  Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                </Typography>
              </Box>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 8,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                      }`,
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.28,
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: -2,
              }}
            >
              <TinyText>{formatDuration(position)}</TinyText>
              <TinyText>-{formatDuration(duration - position)}</TinyText>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song">
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                )}
              </IconButton>
              <IconButton aria-label="next song">
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>
            <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
              <VolumeDownRounded htmlColor={lightIconColor} />
              <Slider
                aria-label="Volume"
                defaultValue={30}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  '& .MuiSlider-track': {
                    border: 'none',
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    '&:before': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                      boxShadow: 'none',
                    },
                  },
                }}
              />
              <VolumeUpRounded htmlColor={lightIconColor} />
            </Stack>
          </Widget>

        </Grid>
      </Grid>
    </Box >
  );
};

export default PublishProfile;
