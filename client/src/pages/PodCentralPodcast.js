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
import { QUERY_ALL_PODCASTS } from "../utils/queries";

const PodCentralPodcast = () => {
    const { loading, data } = useQuery(QUERY_SINGLE_PODCAST, {
        variables: { input: { _id: '619455d4f26a803d8c466ff2' } }
    });
    const podcastData = data?.podcast || [];
    // console.log('podcastData:', podcastData);
    // const [querySinglePodcast] = useQuery(QUERY_SINGLE_PODCAST);
    // try {
    //     querySinglePodcast({ variables: { input: { _id: '619455d4f26a803d' } } });
    // } catch (err) {
    //     console.error(err);
    // }


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
                    {/* {podcastData.map((episode) => {
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
                    })} */}
                </Grid>
            </Grid>
        </Box >
    );
};

export default PodCentralPodcast;
