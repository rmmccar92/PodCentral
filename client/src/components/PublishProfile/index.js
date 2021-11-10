import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Axios from "axios";

import DarkHouse from "../../assets/podcast-image-dark-house.jpeg";

import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

const styles = {
  coverArt: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
    marginTop: "10px",
  },
  coverArtFav: {
    display: "block",
    marginRight: "5px",
    width: "115px",
    padding: "5px 5px 5px",
    aspectRatio: "1 / 1",
  },
};

const PublishProfile = () => {
  // Cloudinary upload function using Axios api call
  const [fileSelected, setFileSelected] = useState();
  //   const uploadImage = () => {
  //     const formData = new FormData();
  //     formData.append("file", fileSelected);
  //     formData.append("upload_preset", "us_upload");

  //     Axios.post(
  //       "https://api.cloudinary.com/v1_1/ryanmcc/raw/upload",
  //       formData
  //     ).then((response) => {
  //       console.log(response);
  //     });
  //   };

  const successCallBack = () => {
    alert("Success!");
  };

  const failureCallBack = () => {
    alert("Failure!");
  };

  return (
    <>
      <WidgetLoader />
      <Box sx={{ flexGrow: 1 }}>
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
            Welcome Back!
          </Typography>
        </Grow>
        <Grid container spacing={5}>
          <Grid xs={12} md={6}>
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
                Your Podcast
              </Typography>
            </Grow>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <img
                src={DarkHouse}
                alt="podcast cover art - dark house"
                style={styles.coverArt}
              />
            </Grow>
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
              in={true}
            >
              <Typography
                variant="h5"
                //   component={Link}
                align="center"
                pt={5}
                mx={3}
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                color="black"
              >
                Upload New Episode
                <Widget
                  sources={["local"]} // set the sources available for uploading -> by default
                  // all sources are available. More information on their use can be found at
                  // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                  //   For now we'll just stick with local uploads
                  //   sourceKeys={{
                  //     dropboxAppKey: "1dsf42dl1i2",
                  //     instagramClientId: "d7aadf962m",
                  //   }} // add source keys
                  // and ID's as an object. More information on their use can be found at
                  // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                  resourceType={"auto"} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                  cloudName={"ryanmcc"}
                  // Located on https://cloudinary.com/console/
                  uploadPreset={"us_upload"} // check that an upload preset exists and check mode is signed or unisgned
                  buttonText={"Upload"} // default 'Upload Files'
                  style={{
                    color: "white",
                    border: "none",
                    width: "120px",
                    backgroundColor: "green",
                    borderRadius: "4px",
                    height: "25px",
                  }} // inline styling only or style id='cloudinary_upload_button'
                  folder={"my_folder"} // set cloudinary folder name to send file
                  cropping={false} // set ability to crop images -> default = true
                  onSuccess={successCallBack} // add success callback -> returns result
                  onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
                  logging={false} // logs will be provided for success and failure messages,
                  // set to false for production -> default = true
                  customPublicId={"sample"} // set a specific custom public_id.
                  // To use the file name as the public_id use 'use_filename={true}' parameter
                  eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"} // add eager transformations -> deafult = null
                  use_filename={false} // tell Cloudinary to use the original name of the uploaded
                  // file as its public ID -> default = true,
                />
              </Typography>
            </Grow>
          </Grid>
          <Grid xs={12} md={6}>
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
                Your Favorites
              </Typography>
            </Grow>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    component={Link}
                    align="left"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid md={4}>
                <Box pt={2}>
                  <Grow
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 2000 }}
                    in={true}
                  >
                    <img
                      src={DarkHouse}
                      alt="podcast cover art - dark house"
                      style={styles.coverArtFav}
                    />
                  </Grow>
                </Box>
              </Grid>
              <Grid md={8}>
                <Grow
                  style={{ transformOrigin: "0 0 0" }}
                  {...{ timeout: 2000 }}
                  in={true}
                >
                  <Typography
                    variant="h5"
                    component={Link}
                    align="left"
                    direction="column"
                    justifyContent="center"
                    pt={5}
                    mx={3}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                    color="black"
                  >
                    Podcast 1
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PublishProfile;
