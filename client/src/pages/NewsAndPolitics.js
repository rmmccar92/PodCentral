import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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


const NewsAndPolitics = () => {
    const [newsPodcastData, setPodcastData] = useState('');
    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setPodcastData(data)
            })
    }, [])

    let loading = true;
    if (newsPodcastData[0] !== undefined) {
        loading = false;
    }

    if (loading) {
        return <h2>LOADING</h2>
    }

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
                    <p className="wYl-font">NEWS AND POLITICS</p>
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
                        {newsPodcastData.map((podcast) => {
                            return (
                                <Grid item xs={12} md={6} lg={2} key={podcast.id}>
                                    <Cards title={podcast.title} image={podcast.image} link={podcast.listennotes_url} description={podcast.description} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </ThemeProvider>
        </div >
    );
}

export default NewsAndPolitics;