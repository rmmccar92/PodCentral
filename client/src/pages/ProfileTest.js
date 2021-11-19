import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';

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
    <Grid container display="flex">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="center"
          height="auto"
          pt={5}
          pb={5}
          mt={4}
          ml={20}
          mr={20}
          sx={{
            bgcolor: '#17141d',
            boxShadow: '-1rem 0 3rem #000',
            border: 1,
            borderRadius: '5px',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr={15}
            sx={{
              bgcolor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
              border: 1,
              borderRadius: '5px',
              width: '300px',
              height: '200px',
            }}
          >
            <span>
              <Typography
                color="white"
                fontSize="20px"
                fontWeight="lighter"
                fontSpacing="1px"
              >
                Discover something new
              </Typography>
              <br />
              <Box display="flex" justifyContent="center">
                <Button
                  className="grow1"
                  component={Link}
                  to="/discover"
                  display="flex"
                  justifyContent="center"
                  variant="contained"
                  sx={{
                    color: 'black',
                    backgroundColor: '#f5b727',
                    fontWeight: 'bold',
                  }}
                >
                  Discover
                </Button>
              </Box>
            </span>
          </Box>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                height: 'auto',
                width: 'auto',
              }}
            >
              <Grid item>
                <Box>
                  <Avatar
                    alt="Travis Howard"
                    src="/broken-image.jpg"
                    sx={{ height: '90px', width: '90px' }}
                  />
                </Box>
              </Grid>
            </Box>

            <Typography variant="h4" color="white">
              <Grid item>
                <Box display="flex" justifyContent="center" mt={2}>
                  <Typography>
                    <span className="profileName">Joey Swafford</span>
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
                    ml="-100px"
                    mr="-100px"
                    mt={3}
                    height="250px"
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
          <Grid item>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              ml={15}
              sx={{
                bgcolor: '#17141d',
                boxShadow: '-1rem 0 3rem #000',
                border: 1,
                borderRadius: '5px',
                width: '300px',
                height: '200px',
              }}
            >
              <span>
                <Typography color="white" fontSize="20px" fontWeight="lighter">
                  Upload and share your own podcasts.
                </Typography>
                <br />
                <Box display="flex" justifyContent="center">
                  <Button
                    className="grow1"
                    component={Link}
                    to="/publish"
                    display="flex"
                    justifyContent="center"
                    variant="contained"
                    sx={{
                      color: 'black',
                      backgroundColor: '#f5b727',
                      fontWeight: 'bold',
                    }}
                  >
                    Publish
                  </Button>
                </Box>
              </span>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileTest;
