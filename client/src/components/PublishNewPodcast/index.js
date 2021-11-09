import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
// import FileUploadIcon from '@mui/icons-material/FileUploadIcon';

import { ADD_PODCAST } from '../utils/mutations';

const PublishNewPodcast = () => {
    const [formState, setFormState] = useState({ title: '', description: '', image: '' });
    const [addPodcast] = useMutation(ADD_PODCAST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
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
                    Hello!
                </Typography>
            </Grow>
            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 6000 }} in={true}>
                <Typography
                    variant="h3"
                    component="div"
                    align="center"
                    pt={2}
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    It looks like you're new here
                </Typography>
            </Grow>
            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 10500 }} in={true}>
                <Typography
                    variant="h3"
                    component="div"
                    align="center"
                    pt={2}
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    let's start a podcast profile!
                </Typography>
            </Grow>
            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 11000 }} in={true}>
                <Box sx={{ flexGrow: 1 }} justify="center">
                    <div className="flex-row space-between my-2">
                        <label htmlFor="title">Title: </label>
                        <Input
                            placeholder="Your Podcast"
                            name="title"
                            type="title"
                            id="tile"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="description">Description: </label>
                        <TextField
                            multiline
                            rows={5}
                            variant="standard"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci eu elit aliquam maximus."
                            name="description"
                            type="description"
                            id="description"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="image">Upload Image: </label>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" sx={{ backgroundColor: "black" }} component="span">
                            Upload
                        </Button>
                    </div>
                    <div className="flex-row flex-end">
                        <Button variant="contained" sx={{ backgroundColor: "black" }} type="submit">Submit</Button>
                    </div>
                </Box>
            </Grow >
        </Box >
    );
};

export default PublishNewPodcast;