import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Player from "../components/Player";
import { QUERY_SINGLE_PODCAST } from "../utils/queries";
import { QUERY_ALL_PODCASTS } from "../utils/queries";

const styles = {
  coverArt: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "250px",
    marginTop: "10px",
  },
};

const PodCentralPodcast = () => {
  const { _id } = useParams();
  // console.log("param: ", _id)
  const { loading, data } = useQuery(QUERY_SINGLE_PODCAST, {
    variables: { _id: _id },
  });
  const podcastData = data?.podcast || [];
  // console.log("podcastData:", podcastData);
  const podcastArr = Object.values(podcastData);
  // console.log(podcastArr)

  const title = podcastArr[2];
  const description = podcastArr[3];
  const image = podcastArr[4];
  const episodeData = podcastData.episodes;

  let loading2 = true;
  if (podcastArr[0] !== undefined) {
    loading2 = false;
  }

  if (loading2) {
    return (
      <Box flexGrow={1} sx={{ bgcolor: "#f0eeeb", height: "100vh" }}>
        <Typography
          variant="h2"
          component="div"
          align="center"
          pt={20}
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        >
          LOADING...
        </Typography>
      </Box>
    );
  }

  return (
    <Box flexGrow={1}>
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
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "block", fontWeight: "400" },
          }}
        >
          {title}
        </Typography>
      </Grow>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        <Grid item sm={12} md={6}>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Box flexGrow={1} pt={5}>
              <img src={image} alt="cover art" style={styles.coverArt} />
            </Box>
          </Grow>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h4"
              component="div"
              align="center"
              pt={2}
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block", fontWeight: "400" },
              }}
            >
              Description
            </Typography>
          </Grow>
          <Grow
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h5"
              component="div"
              align="center"
              pt={2}
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block", fontWeight: "400" },
              }}
            >
              {description}
            </Typography>
          </Grow>
        </Grid>
        <Grid item sm={12} md={6}>
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
              Episodes
            </Typography>
          </Grow>
          {episodeData.map((episode) => {
            return (
              <Box flexGrow={1} key={episode._id} pt={3}>
                <Player
                  title={episode.title}
                  audio={episode.audio}
                  episodeName={episode.title}
                  seasonNum={episode.season}
                  episodeNum={episode.episode}
                  image={image}
                  podcastName={title}
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PodCentralPodcast;
