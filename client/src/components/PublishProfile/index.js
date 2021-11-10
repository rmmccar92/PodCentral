import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';

import DarkHouse from '../../assets/podcast-image-dark-house.jpeg'

const styles = {
    coverArt: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '250px',
        marginTop: '10px'
    },
    coverArtFav: {
        display: 'block',
        marginRight: '5px',
        width: '115px',
        padding: '5px 5px 5px',
        aspectRatio: '1 / 1'
    }
}

const PublishProfile = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                <Typography
                    variant="h2"
                    component="div"
                    align="center"
                    pt={2}
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    Welcome Back!
                </Typography>
            </Grow>
            <Grid container spacing={5}>
                <Grid xs={12} md={6}>
                    <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                        <Typography
                            variant="h4"
                            component="div"
                            align="center"
                            pt={5}
                            mx={3}
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                            color="black"
                        >Your Podcast</Typography>

                    </Grow>
                    <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                        <img src={DarkHouse} alt="podcast cover art - dark house" style={styles.coverArt} />
                    </Grow>
                    <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                        <Typography
                            variant="h5"
                            component={Link}
                            align="center"
                            pt={5}
                            mx={3}
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                            color="black"
                        >Upload New Episode</Typography>
                    </Grow>
                </Grid>
                <Grid xs={12} md={6}>
                    <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                        <Typography
                            variant="h4"
                            component="div"
                            align="center"
                            pt={5}
                            mx={3}
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                            color="black"
                        >Your Favorites</Typography>
                    </Grow>
                    <Grid container spacing={2}>
                        <Grid md={4}>
                            <Box pt={2}>
                                <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                    <img src={DarkHouse} alt="podcast cover art - dark house" style={styles.coverArtFav} />
                                </Grow>
                            </Box>
                        </Grid>
                        <Grid md={8}>
                            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                <Typography
                                    variant="h5"
                                    component={Link}
                                    align="left"
                                    pt={5}
                                    mx={3}
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                                    color="black"
                                >Podcast 1</Typography>
                            </Grow>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid md={4}>
                            <Box pt={2}>
                                <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                    <img src={DarkHouse} alt="podcast cover art - dark house" style={styles.coverArtFav} />
                                </Grow>
                            </Box>
                        </Grid>
                        <Grid md={8}>
                            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                <Typography
                                    variant="h5"
                                    component={Link}
                                    align="left"
                                    pt={5}
                                    mx={3}
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                                    color="black"
                                >Podcast 1</Typography>
                            </Grow>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid md={4}>
                            <Box pt={2}>
                                <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                    <img src={DarkHouse} alt="podcast cover art - dark house" style={styles.coverArtFav} />
                                </Grow>
                            </Box>
                        </Grid>
                        <Grid md={8}>
                            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                <Typography
                                    variant="h5"
                                    component={Link}
                                    align="left"
                                    pt={5}
                                    mx={3}
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                                    color="black"
                                >Podcast 1</Typography>
                            </Grow>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid md={4}>
                            <Box pt={2}>
                                <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                    <img src={DarkHouse} alt="podcast cover art - dark house" style={styles.coverArtFav} />
                                </Grow>
                            </Box>
                        </Grid>
                        <Grid md={8}>
                            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                                <Typography
                                    variant="h5"
                                    component={Link}
                                    align="left"
                                    pt={5}
                                    mx={3}
                                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                                    color="black"
                                >Podcast 1</Typography>
                            </Grow>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default PublishProfile;