import { CloudinaryContext, Image } from "cloudinary-react";

<CloudinaryContext cloudName="ryanmcc">
  <div>
    <Image publicId="sample" width="50" />
  </div>
  <Image publicId="sample" width="0.5" />
</CloudinaryContext>;
