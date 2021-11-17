import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useState, useEffect } from "react";
import Cards from '../components/Cards'


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


const Comedy = () => {
    const [comedyPodcastData, setPodcastData] = useState('');
    useEffect(() => {
        fetch('/api/comedy')
            .then(res => res.json())
            .then(data => {
                setPodcastData(data)
            })
    }, [])

    let loading = true;
    if (comedyPodcastData[0] !== undefined) {
        loading = false;
    }

    if (loading) {
        return (
            <Box flexGrow={1} sx={{ bgcolor: '#f0eeeb', height: '100vh' }} >
                <Typography
                    variant="h2"
                    component="div"
                    align="center"
                    pt={20}
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}

                >
                    LOADING...
                </Typography>
            </Box>
        )
    }

    return (
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
                <p className="wYl-font">COMEDY</p>
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
                    spacing={2}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{ pb: "50px", pl: "50px", pr: "50px" }}
                >
                    {comedyPodcastData.map((podcast) => {
                        return (
                            <Grid item xs={12} md={6} lg={2} key={podcast.id}>
                                <Cards title={podcast.title} image={podcast.image} link={podcast.listennotes_url} description={podcast.description} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Comedy;