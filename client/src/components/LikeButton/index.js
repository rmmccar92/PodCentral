import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const LikeBtn = (props) => {
  return (
    <span {...props} className="likeButton" role="button" tabIndex="0">
      <StarBorderIcon />
    </span>
  );
};

export const LikeBtnFull = (props) => {
  return (
    <span {...props} className="likeButton" role="button" tabIndex="0">
      <StarIcon />
    </span>
  );
};
