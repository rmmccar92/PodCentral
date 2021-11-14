import * as React from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";

import PublishNewPodcast from "../components/PublishNewPodcast";
const Publish = () => {
  return (
    <div>
      <WidgetLoader />
      <PublishNewPodcast />;
    </div>
  );
};

export default Publish;
