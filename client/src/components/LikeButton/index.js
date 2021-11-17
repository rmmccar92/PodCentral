import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function LikeBtn(props) {
  return (
    <span {...props} className="likeButton" role="button" tabIndex="0">
      <StarBorderIcon />
    </span>
  );
}

export default LikeBtn;
