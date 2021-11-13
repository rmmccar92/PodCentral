import React from "react";
import { Widget } from "react-cloudinary-upload-widget";
import Axios from "axios";

const CloudinaryWidget = () => {
  const successCallBack = (response) => {
    console.log(response);
    localStorage.setItem("podcastImage", response.info.secure_url);
  };

  const failureCallBack = (response) => {
    console.log(response);
    return;
  };
  return (
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
      resourceType={"auto"}
      cloudName={"ryanmcc"}
      uploadPreset={"us_upload"}
      buttonText={"Upload"}
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
      logging={true} // logs will be provided for success and failure messages,
      // set to false for production -> default = true
      customPublicId={"sample"} // set a specific custom public_id.
      // To use the file name as the public_id use 'use_filename={true}' parameter
      eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"} // add eager transformations -> deafult = null
      use_filename={false} // tell Cloudinary to use the original name of the uploaded
      // file as its public ID -> default = true,
    />
  );
};

export default CloudinaryWidget;
