import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import CategoryCard from "../components/CategoryCard";
import { useQuery, useMutation } from "@apollo/client";
import { getPodcastIds, savePodcastIds } from "../utils/localStorage";
import Auth from "../utils/auth";
import { LIKE_PODCAST } from "../utils/mutations";
import { QUERY_ALL_PODCASTS } from "../utils/queries";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#ffffff",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Discover = () => {
  const { loading2, data } = useQuery(QUERY_ALL_PODCASTS);
  const podcastsData = data?.podcasts || [];

  const [popularPodcastData, setPodcastData] = useState("");

  useEffect(() => {
    fetch("/api/popularPodcasts")
      .then((res) => res.json())
      .then((data) => {
        setPodcastData(data);
        // console.log("all podcast data from data attribute", data);
        // console.log("title from data attribute", data[0].title);
      });
  }, []);

  // console.log("likedPodcasts: ", likedPodcastIds);
  const categoriesArr = [
    {
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_660,h_363/https://discoverpods.com/wp-content/uploads/2020/01/business-podcasts-1-660x363.jpg",
      redirect: "/business",
      category: "Business",
      key: 1,
    },
    {
      image:
        "https://www.rd.com/wp-content/uploads/2021/06/comedy-podcasts.jpg",
      redirect: "/comedy",
      category: "Comedy",
      key: 2,
    },
    {
      image:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_660,h_358/https://discoverpods.com/wp-content/uploads/2020/01/health-fitness-podcasts-660x358.jpg",
      redirect: "/health",
      category: "Health",
      key: 3,
    },
    {
      image:
        "https://pyxis.nymag.com/v1/imgs/286/025/dc4f0529f82ad17195e63099fbad011dcf-01-news-politics-pods-lede.2x.rhorizontal.w700.jpg",
      redirect: "/newsAndPolitics",
      category: "News and Politics",
      key: 4,
    },
    {
      image:
        "https://pyxis.nymag.com/v1/imgs/891/a22/7ddd38108845ea8321175185288a3a626e-03-pop-culture-podcasts-new.2x.rhorizontal.w700.jpg",
      redirect: "/popCulture",
      category: "Pop Culture",
      key: 5,
    },
    {
      image:
        "https://pyxis.nymag.com/v1/imgs/161/9ad/2fa13cfacb6d05dae39285ed2187a560c7-01-true-crime-pods-lede.rsquare.w700.jpg",
      redirect: "/trueCrime",
      category: "True Crime",
      key: 6,
    },
  ];
  // console.log(categoriesArr);
  const popularArr = [];
  const populateArr = () => {
    for (let i = 0; i < 6; i++) {
      popularArr.push(popularPodcastData[i]);
    }
  };

  populateArr();

  let loading = true;
  if (popularArr[0] !== undefined) {
    loading = false;
  }

  if (loading) {
    return (
      <Box flexGrow={1} sx={{ bgcolor: "#f0eeeb", height: "100vh" }}>
        <Typography
          variant="h2"
          component="div"
          align="center"
          pt={20}
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        >
          LOADING...
        </Typography>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          width: "auto",
          fontSize: 64,
          fontWeight: "bold",
          ml: "50px",
          mt: "50px",
          mb: "50px",
          letterSpacing: 8,
        }}
      >
        <p className="wYl-font">DISCOVER</p>
        <p className="wYl-font2">PODCASTS</p>
      </Box>

      <Box
        className="boxColor"
        sx={{
          width: "auto",
          mt: "30px",
          pt: "20px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <p className="categories">Categories</p>
          <Button
            className="allCategories"
            variant="text"
            size="medium"
            component={Link}
            to="/allCategories"
            sx={{ mr: "50px", mb: "10px" }}
          >
            BROWSE ALL
          </Button>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: "50px", pl: "50px", pr: "50px" }}
        >
          {categoriesArr.map((categories) => {
            return (
              <Grid item xs={12} md={6} lg={2} key={categories.key}>
                <CategoryCard
                  image={categories.image}
                  redirect={categories.redirect}
                  category={categories.category}
                />
              </Grid>
            );
          })}
        </Grid>

        <p className="categories">Popular</p>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: "50px", pl: "50px", pr: "50px" }}
        >
          {popularArr.map((podcast) => {
            return (
              <Grid item xs={12} md={6} lg={2} key={podcast.id}>
                <Cards
                  title={podcast.title}
                  image={podcast.image}
                  link={podcast.listennotes_url}
                  description={podcast.description}
                  podcastId={podcast.id}
                />
              </Grid>
            );
          })}
        </Grid>

        <p className="categories">PodCentral Originals</p>
        <Grid
          container
          spacing={7}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: "50px", pl: "50px", pr: "50px" }}
        >
          {podcastsData.map((podcast) => {
            return (
              <Grid item xs={12} md={6} lg={2} key={podcast._id}>
                <Cards
                  title={podcast.title}
                  image={podcast.image}
                  description={podcast.description}
                  id={podcast._id}
                  link={`/podcast/${podcast._id}`}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Discover;
