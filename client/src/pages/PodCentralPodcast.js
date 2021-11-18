import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Player from "../components/PlayerCopy";
import { QUERY_SINGLE_PODCAST } from "../utils/queries";

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
    const { loading, data } = useQuery(QUERY_SINGLE_PODCAST);
    const podcastData = data?.podcast || [];
    console.log('podcastData:', podcastData);
    return (
        <Box flexGrow={1} >
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

                </Typography>
            </Grow>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
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
                            Podcast Title
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
                            Your Episodes
                        </Typography>
                    </Grow>
                    {podcastData.map((episode) => {
                        return (
                            <Box flexGrow={1} key={episode._id} pt={3}>
                                <Player
                                    title={episode.title}
                                    audio={episode.audio}
                                    episodeName={episode.title}
                                    seasonNum={episode.season}
                                    episodeNum={episode.episode}
                                // image={podcastImage}
                                // podcastName={podcastName}

                                />
                            </Box>
                        );
                    })}
                </Grid>
            </Grid>
        </Box >
    );
};

export default PodCentralPodcast;
