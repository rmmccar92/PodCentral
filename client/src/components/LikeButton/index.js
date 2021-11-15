import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const handleClick = (e) => {
  e.preventDefault();
  console.log("Like button clicked");
};
function LikeBtn(props) {
  return (
    <span
      {...props}
      className="likeButton"
      role="button"
      onClick={handleClick}
      tabIndex="0"
    >
      <StarBorderIcon />
    </span>
  );
}

export default LikeBtn;
