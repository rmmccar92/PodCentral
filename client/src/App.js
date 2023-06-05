import * as React from "react";
import { PodCentralProvider } from "./utils/GlobalState";
import { Route, Routes } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Auth from "./utils/auth";

import GlobalAppBar from "./components/GlobalAppBar";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Publish from "./pages/Publish";
import PodCentralPodcast from "./pages/PodCentralPodcast";
import Discover from "./pages/Discover";
import Business from "./pages/Business";
import Comedy from "./pages/Comedy";
import Health from "./pages/Health";
import NewsAndPolitics from "./pages/NewsAndPolitics";
import PopCulture from "./pages/PopCulture";
import TrueCrime from "./pages/TrueCrime";
import AllCategories from "./pages/AllCategories";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

document.body.style = "background-color: #f0eeeb";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Oswald",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <PodCentralProvider>
          <GlobalAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/discover" element={<Discover />} />
            <Route exact path="/business" element={<Business />} />
            <Route exact path="/comedy" element={<Comedy />} />
            <Route exact path="/health" element={<Health />} />
            <Route exact path="/signup" element={<Signup />} />
            {Auth.loggedIn() ? (
              <Route exact path="/publish" element={<Publish />} />
            ) : (
              // () => redirect("/login")
              <Route exact path="/publish" element={<Login />} />
            )}
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/podcast/:_id" element={<PodCentralPodcast />} />
            <Route
              exact
              path="/newsAndPolitics"
              element={<NewsAndPolitics />}
            />
            <Route exact path="/popCulture" element={<PopCulture />} />
            <Route exact path="/trueCrime" element={<TrueCrime />} />
            <Route exact path="/allCategories" element={<AllCategories />} />
            <Route element={NoMatch} />
          </Routes>
          {/* <cloudinaryWidget /> */}
        </PodCentralProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
