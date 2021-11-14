import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
    podcastLogo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '150px',
    },
};


const itemData = [
    {
        img: 'https://thumbs.dreamstime.com/b/young-man-recording-podcast-smiling-to-camera-close-up-young-men-recording-podcast-smiling-to-camera-close-up-104865306.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://st4.depositphotos.com/13193658/27296/i/600/depositphotos_272967952-stock-photo-cropped-shot-radio-host-speaking.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
];

export default function Home({ }) {
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
                            height: '100px',
                            backgroundColor: 'white',
                            letterSpacing: 7,
                            flexGrow: 1,
                            width: 'auto',
                            fontSize: 69,
                            // fontWeight: 'bold',
                            // fontColor: '#17141d',
                            // ml: '50px',
                            // mt: '50px',
                            mb: '110px',
                        }}
                    >
                        <div className="title">PODCENTRAL</div>
                    </Box>
                </Grid>
                <Grid item xs={6} md={12} lg={12}>
                    <Box
                        className="boxColor"
                        // ml={20}
                        // mr={20}
                        sx={{
                            backgroundColor: '#17141d',
                            boxShadow: '-1rem 0 3rem #000',
                            border: 1,
                            borderColor: 'black',
                            borderRadius: '0px',
                        }}
                    >
                        <Grow
                            style={{ transformOrigin: '0 0 0' }}
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
                            style={{ transformOrigin: '0 0 0' }}
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
                                    style={{ transformOrigin: '0 0 0' }}
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
                                            display: { xs: 'block', sm: 'block' },
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
                            sx={{ width: '100%', height: '100%' }}
                        // ml={20}
                        // mr={100}
                        // mt={10}
                        // mb={10}
                        >
                            <Box className="flex">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs09z6iKS33RJuFggxwiFZc_-D5rknAZ7bjg&usqp=CAU" />

                                <Box
                                    className="grow"
                                    pl={1}
                                    component={Link}
                                    to="/publish"
                                    pr={1}
                                    sx={{
                                        backgroundColor: '#17141d',
                                        boxShadow: '-1rem 0 3rem #000',
                                        border: 1,
                                        borderColor: 'black',
                                        // borderRadius: '5px',
                                    }}
                                >
                                    <Typography color="white" fontSize="18px" fontWeight="normal">
                                        <p className="publish">PUBLISH</p>
                                        Upload your own podcast in just a few easy steps. We take
                                        care of the hard parts so you can focus on making your best
                                        podcast.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '47px' }}></Box>
                            <Box className="flex">
                                <Box
                                    className="grow1"
                                    component={Link}
                                    to='/discover'
                                    pl={1}
                                    pr={1}
                                    sx={{
                                        backgroundColor: '#17141d',
                                        boxShadow: '-1rem 0 3rem #000',
                                        borderColor: 'black',
                                        // borderRadius: '5px',
                                    }}
                                >
                                    <Typography color="white" fontSize="18px" fontWeight="normal">
                                        <p className="discover">DISCOVER</p>
                                        Browse through our extensive library of podcasts to find
                                        something you love. We have a podcast for everyone.
                                    </Typography>
                                </Box>

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs09z6iKS33RJuFggxwiFZc_-D5rknAZ7bjg&usqp=CAU" />
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Box
                    // ml={20}
                    // mr={20}
                    // mt={10}
                    p={1}
                    style={{
                        backgroundColor: '#17141d',
                        boxShadow: '-1rem 0 3rem #000',
                    }}
                    sx={{
                        height: '200px',
                        border: 1,
                        // borderRadius: '5px',
                    }}
                ></Box>
            </Box>
        </Grid>

    );
}