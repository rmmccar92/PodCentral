import React from "react";
// import { createTheme, ThemeProvider } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import AudioPlayer from 'material-ui-audio-player';

// const Player = (props) => {
const Player = (props) => {
  // const muiTheme = createTheme({});
  return (
    <Box flexGrow={1} mx={5} pt={5}>
      <Typography
        variant="p"
        component="div"
        pt={2}
        pb={5}
        sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        align="center"
      >
        {props.title} - Season {props.seasonNum} Episode {props.episodeNum}
      </Typography>
      {/* <AudioPlayer src={props.audio} pt={5} /> */}
    </Box>
  );
};

export default Player;
