import * as React from "react";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import { GET_ME } from "../../utils/queries";
import { ADD_PODCAST } from "../../utils/mutations";
import PublishProfile from "../PublishProfile";
import CloudinaryWidget from "../Cloudinary";

const PublishNewPodcast = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  // console.log(userData);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [addPodcast] = useMutation(ADD_PODCAST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const podcastImage = localStorage.getItem("podcastImage");
    // console.log(podcastImage);
    try {
      const { data } = await addPodcast({
        variables: {
          input: { ...formState, image: podcastImage },
        },
      });
      window.location.reload();
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
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!userData?.addedPodcast) {
    return (
      <div>
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
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Hello!
          </Typography>
        </Grow>
        <Grow
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 6000 }}
          in={true}
        >
          <Typography
            variant="h3"
            component="div"
            align="center"
            pt={2}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            It looks like you're new here
          </Typography>
        </Grow>
        <Grow
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 10500 }}
          in={true}
        >
          <Typography
            variant="h3"
            component="div"
            align="center"
            pt={2}
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            let's start a podcast profile!
          </Typography>
        </Grow>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          pt={5}
        >
          <Grid item>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 11000 }}
              in={true}
            >
              <TextField
                placeholder="Your Podcast"
                label="Title"
                name="title"
                type="title"
                id="title"
                onChange={handleChange}
              />
            </Grow>
          </Grid>
          <Grid item pt={1}>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 11000 }}
              in={true}
            >
              <TextField
                multiline
                rows={5}
                label="Description"
                placeholder="Descriptiom"
                name="description"
                type="description"
                id="description"
                onChange={handleChange}
              />
            </Grow>
          </Grid>
          <Grid item>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 11000 }}
              in={true}
            >
              <Typography
                variant="p"
                component="div"
                pt={2}
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                align="center"
              >
                Upload Image
              </Typography>
            </Grow>
          </Grid>
          <Grid item>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 11000 }}
              in={true}
            >
              <div>
                <CloudinaryWidget />
              </div>
            </Grow>
          </Grid>
          <Grid item pt={1}>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 11000 }}
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
      </div>
    );
  }
  return (
    // The view if a user has a podcast
    <>
      <PublishProfile />
    </>
  );
};

export default PublishNewPodcast;
