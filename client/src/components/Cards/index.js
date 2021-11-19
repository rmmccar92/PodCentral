import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { LikeBtn } from "../LikeButton";
import { LikeBtnFull } from "../LikeButton";
import { useMutation } from "@apollo/client";
import { LIKE_PODCAST } from "../../utils/mutations";
import { getPodcastIds, savePodcastIds } from "../../utils/localStorage";
import Auth from "../../utils/auth";

export default function Cards(props) {
  const [likedPodcastIds, setLikedPodcastIds] = useState(getPodcastIds());
  useEffect(() => {
    return () => savePodcastIds(likedPodcastIds);
  });
  // const podcastData = { ...props };

  const [likePodcast] = useMutation(LIKE_PODCAST);
  const handleLike = async (podcastId) => {
    const likedPodcast = {
      title: props.title,
      description: props.description,
      image: props.image,
    };
    // console.log(props.podcastId);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await likePodcast({
        variables: { input: likedPodcast },
      });

      setLikedPodcastIds([...likedPodcastIds, likedPodcast.podcastId]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card
      className="podCard"
      style={{ backgroundColor: "#17141d", boxShadow: "-1rem 0 3rem #000" }}
      sx={{
        border: 1,
        borderColor: "black",
        borderRadius: "5px",
        mt: "-20px",
      }}
    >
      <CardMedia
        sx={{ pl: "20px", pr: "20px", pt: "20px" }}
        component="img"
        height="150"
        image={props.image}
        alt="cover art"
      />
      <a href={props.link} onClick={props.id}>
        <CardContent>
          <Typography
            gutterBottom
            color="white"
            sx={{ ml: "5px", fontWeight: "", fontSize: "14px" }}
          >
            {props.title}
          </Typography>
          <br />
          <Typography
            noWrap
            gutterBottom
            color="white"
            sx={{ ml: "5px", fontWeight: "", fontSize: "12px" }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </a>
      {likedPodcastIds?.some(
        (likedPodcast) => likedPodcast === props.podCastId
      ) ? (
        <LikeBtnFull onClick={() => handleLike(props.podCastId)} />
      ) : (
        <LikeBtn onClick={() => handleLike(props.podCastId)} />
      )}
    </Card>
  );
}
