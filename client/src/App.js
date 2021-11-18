import * as React from "react";
import { PodCentralProvider } from "./utils/GlobalState";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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
        <Router>
          <PodCentralProvider>
            <GlobalAppBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/business" component={Business} />
              <Route exact path="/comedy" component={Comedy} />
              <Route exact path="/health" component={Health} />
              <Route exact path="/signup" component={Signup} />
              {Auth.loggedIn() ? (
                <Route exact path="/publish" component={Publish} />
              ) : (
                <Redirect to="/login" />
              )}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/podcast/:_id" component={PodCentralPodcast} />
              <Route
                exact
                path="/newsAndPolitics"
                component={NewsAndPolitics}
              />
              <Route exact path="/popCulture" component={PopCulture} />
              <Route exact path="/trueCrime" component={TrueCrime} />
              <Route exact path="/allCategories" component={AllCategories} />
              <Route component={NoMatch} />
              <cloudinaryWidget />
            </Switch>
          </PodCentralProvider>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
