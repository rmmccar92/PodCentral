import * as React from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";

// import FileUploadIcon from '@mui/icons-material/FileUploadIcon';

import PublishNewPodcast from "../components/PublishNewPodcast";
const Publish = () => {
  return (
    <>
      <WidgetLoader />
      <PublishNewPodcast />;
    </>
  );
};

export default Publish;
