import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CategoryCard from '../components/CategoryCard';
import { IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';

import podcastLogo from '../assets/podcast-logo-2.png';
import spaceShipLogo from '../assets/space-ship-logo.png';

const styles = {
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '125px',
  },
  spaceLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '190px',
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ProfileTest = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const { data } = useQuery(GET_ME);
  let user;

  if (data) {
    user = data.me;
  }

  return (
    <Grid
      container
      // spacing={0}
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor=""
    >
      <Box
        flexGrow={1}
        display="flex"
        // alignItems="center"
        justifyContent="center"
        height="auto"
        width={600}
        pt={5}
        pb={5}
        mt={4}
        // mb={4}
        sx={{ bgcolor: '#17141d', boxShadow: '-1rem 0 3rem #000', border: 1 }}
      >
        <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              // border: 1,
              // borderColor: 'error.main',
              height: 'auto',
              width: 'auto',
            }}
          >
            <Grid item>
              <Box>
                <Avatar
                  alt="Travis Howard"
                  src="/broken-image.jpg"
                  // display="flex"
                  sx={{ height: '90px', width: '90px' }}
                />
              </Box>
            </Grid>
          </Box>
          <Typography
            // display="flex"
            // alignItems="center"
            variant="h4"
            color="white"
          >
            <Grid item>
              <Box display="flex" justifyContent="center" mt={2}>
                <Typography>
                  <span className="profileName">Joey Swafford</span>
                  {/* <br />
                  <span className="profileFollowers">No Followers</span> */}
                </Typography>
              </Box>
              <Grid item>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={2}
                  height="auto"
                  width="300px"
                  sx={{ borderBottom: 2, borderColor: 'black' }}
                >
                  <IconButton
                    className="grow1"
                    component={Link}
                    to="/"
                    size="large"
                    align="center"
                    aria-label="menu"
                    sx={{ color: '#f5b727' }}
                  >
                    <NotificationsIcon sx={{ fontSize: '50px' }} />
                  </IconButton>
                  <IconButton
                    className="grow1"
                    component={Link}
                    to="/"
                    size="large"
                    align="center"
                    aria-label="menu"
                    sx={{ color: '#f5b727' }}
                  >
                    <ChatIcon sx={{ fontSize: '50px' }} />
                  </IconButton>
                  <IconButton
                    className="grow1"
                    component={Link}
                    to="/"
                    size="large"
                    align="center"
                    aria-label="menu"
                    sx={{ color: '#f5b727' }}
                  >
                    <SettingsIcon sx={{ fontSize: '50px' }} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  mt={2}
                  pl={2}
                  pr={2}
                  direction="row"
                  justifyContent="space-between"
                  // height="auto"
                  // width="auto"
                  // sx={{ border: 1 }}
                >
                  <Typography>
                    <span className="followerCount">2,360</span>
                    <br />
                    <span className="follower">followers</span>
                  </Typography>
                  <Typography>
                    <span className="followerCount">20,000</span>
                    <br />
                    <span className="follower">listens</span>
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  // display="flex"
                  // justifyContent="center"
                  ml="-100px"
                  mr="-100px"
                  mt={3}
                  height="250px"
                  // width="300px"
                  style={{
                    backgroundColor: '#17141d',
                    boxShadow: '-1rem 0 3rem #000',
                    border: 1,
                    borderRadius: '5px',
                    borderColor: 'black',
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Uploads" {...a11yProps(1)} />
                    <Tab label="About" {...a11yProps(2)} />
                  </Tabs>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      Home tab for recent news or any data
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      Users podcast upload tab
                      {/* <Grid
                        item
                        spacing={3}
                        display="flex"
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                      >
                        <Box
                          // container
                          // spacing={3}
                          display="flex"
                          direction="row"
                          justifyContent="space-evenly"
                          // alignItems="center"
                          // sx={{ pb: '75px', pl: '50px', pr: '50px' }}
                        >
                          <Grid item xs={12} md={4} lg={10}>
                            <CategoryCard />
                          </Grid>
                          <Grid item xs={12} md={4} lg={2}>
                            <CategoryCard />
                          </Grid>
                          <Grid item xs={12} md={4} lg={2}>
                            <CategoryCard />
                          </Grid>
                          <Grid item xs={12} md={4} lg={2}>
                            <CategoryCard />
                          </Grid>
                          <Grid item xs={12} md={4} lg={2}>
                            <CategoryCard />
                          </Grid>
                        </Box>
                      </Grid> */}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                      Bio or info tab
                    </TabPanel>
                  </SwipeableViews>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProfileTest;
