import React from "react";
import { Widget } from "react-cloudinary-upload-widget";

const CloudinaryWidget = () => {
  const successCallBack = (response) => {
    localStorage.setItem("podcastImage", response.info.secure_url);
  };

  const failureCallBack = (response) => {
    console.log(response);
    return;
  };
  return (
    <Widget
      sources={["local"]}
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
      }}
      folder={"my_folder"}
      cropping={false}
      onSuccess={successCallBack}
      onFailure={failureCallBack}
      logging={true}
      customPublicId={"sample"}
      eager={"w_400,h_300,c_pad|w_260,h_200,c_crop"}
      use_filename={false}
    />
  );
};

export default CloudinaryWidget;
