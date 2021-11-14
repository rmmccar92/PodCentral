
import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import PodcastsIcon from "@mui/icons-material/Podcasts";


import Button from '@mui/material/Button';


import podcastLogo from '../../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    height: '25px',
    aspectRatio: '1 / 1',
  },
};


const GlobalAppBar = () => {
  const darkBar = createTheme({
    palette: {
      secondary: {
        main: '#17141d',
        contrastText: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: [
        'Oswald',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "12ch",
  //       "&:focus": {
  //         width: "20ch",
  //       },
  //     },
  //   },
  // }));

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={'secondary'}>
              <Toolbar>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid>
                    <Typography
                      // component={Link}
                      // to="/"
                      variant="h6"
                    >
                      <Button
                        size="large"
                        component={Link}
                        color="inherit"
                        to="/profile"
                      >
                        PodCentral
                      </Button>
                    </Typography>
                  </Grid>

                  <IconButton
                    component={Link}
                    to="/profile"
                    size="large"
                    align="center"
                    aria-label="menu"
                    sx={{ ml: 2, color: '#f5b727' }}
                  >
                    <PodcastsIcon />
                  </IconButton>

                  <Button
                    href="/"
                    color="inherit"
                    size="large"
                    onClick={() => Auth.logout()}
                  >
                    <MenuItem>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Badge badgeContent={17} color="error">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                    </MenuItem>
                    Logout
                  </Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </div>
      );
    } else {
      return (
        <div>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={'secondary'}>
              <Toolbar>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid>
                    <Button
                      size="large"
                      component={Link}
                      color="inherit"
                      to="/"
                    >
                      PodCentral
                    </Button>
                  </Grid>

                  <IconButton
                    component={Link}
                    to="/"
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2, color: '#f5b727' }}
                  >
                    <PodcastsIcon />
                  </IconButton>

                  <Button
                    size="large"
                    component={Link}
                    color="inherit"
                    to="/login"
                  >
                    Login
                  </Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </div>
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;
