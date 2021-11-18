const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

require("dotenv").config({ path: "./.env" });

const proxy = require("http-proxy-middleware");

const { Client } = require("podcast-api");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const client = Client({ apiKey: process.env.API_KEY });

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

const sendGetRequest = async () => {
  try {
    app.get("/api/popularPodcasts", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/business", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/Comedy", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/health", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/news", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/popCulture", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    app.get("/api/trueCrime", (req, res) => {
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
    });
  } catch (err) {
    console.error(err);
  }
};

sendGetRequest();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
