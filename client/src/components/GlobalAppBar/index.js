import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const GlobalAppBar = () => {
  const darkBar = createTheme({
    palette: {
      secondary: {
        main: "#17141d",
        contrastText: "#FFFFFF",
      },
    },
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

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ThemeProvider theme={darkBar}>
          <AppBar position="static" color={"secondary"}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Typography variant="h6">
                    <Button
                      size="large"
                      component={Link}
                      color="inherit"
                      to="/"
                    >
                      PodCentral
                    </Button>
                  </Typography>
                </Grid>
                <IconButton
                  component={Link}
                  to="/publish"
                  size="large"
                  align="center"
                  aria-label="menu"
                  sx={{ ml: 2, color: "#f5b727" }}
                >
                  <PodcastsIcon />
                </IconButton>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    component={Link}
                    to="/profile"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => Auth.logout()}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={darkBar}>
          <AppBar position="static" color={"secondary"}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Button size="large" component={Link} color="inherit" to="/">
                    PodCentral
                  </Button>
                </Grid>
                <IconButton
                  component={Link}
                  to="/"
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, color: "#f5b727" }}
                >
                  <PodcastsIcon />
                </IconButton>
                <Grid item>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      size="large"
                      component={Link}
                      color="inherit"
                      to="/login"
                    >
                      <LoginIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;
