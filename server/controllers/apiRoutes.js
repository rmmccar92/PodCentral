const router = require("express").Router();
const { Client } = require("podcast-api");

require('dotenv').config({ path: './.env' });

const client = Client({ apiKey: process.env.API_KEY });

router.get("/popularPodcasts", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

router.get("/business", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 93,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

router.get("/comedy", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 133,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

router.get("/health", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 88,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

router.get("/news", (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 99,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

router.get("/popCulture", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 244,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});
router.get("/trueCrime", async (req, res) => {
  try {
    client
      .fetchBestPodcasts({
        genre_id: 135,
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        // Get response json data here
        res.json(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
});

// module.exports = router;
