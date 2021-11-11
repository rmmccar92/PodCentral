import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
  },
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default function Home({}) {
  return (
    <Box
      className="boxColor"
      pt={10}
      sx={{
        flexGrow: 1,
        height: '1800px',
      }}
    >
      <Box
        className="boxColor"
        ml={20}
        mr={20}
        sx={{
          backgroundColor: '#17141d',
          boxShadow: '-1rem 0 3rem #000',
          border: 1,
          borderColor: 'black',
          borderRadius: '5px',
        }}
      >
        <Grow
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 2000 }}
          in={true}
        >
          <Typography
            variant="h2"
            component="div"
            align="center"
            color="white"
            pt={5}
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
              fontWeight: 'bold',
              fontSize: '40px',
              letterSpacing: 1,
            }}
          >
            Designed for Podcasts with You in Mind
          </Typography>
        </Grow>

        <Grow
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 2000 }}
          in={true}
        >
          <Box pt={5} pb={5}>
            <img
              src={podcastLogo}
              alt="podcast microphone"
              style={styles.podcastLogo}
            />
          </Box>
        </Grow>
        <Box mr="650px" ml="50px" sx={{ position: 'relative', top: '170px' }}>
          <Grow
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 2000 }}
            in={true}
          >
            <Typography
              variant="h4"
              component="div"
              // align="center"
              color="white"
              // pb={5}
              pl={5}
              // mt={1}
              sx={{
                flexGrow: 1,
                display: { xs: 'block', sm: 'block' },
                fontSize: '24px',
                letterSpacing: 1,
                lineHeight: 1.5,
              }}
            >
              Whether you want to manage your own podcasts, discover new
              podcasts to enjoy or listen to your favorite podcast, it has never
              been easier with PodCentral.
            </Typography>
          </Grow>
        </Box>
        <Box
          // className="zIndex-1"
          // display="flex"
          // flexDirection="column"
          ml="52%"
          pr={10}
          sx={{ width: '50%', position: 'relative', bottom: '60px' }}
        >
          <Card
            style={{
              backgroundColor: '#17141d',
              boxShadow: '-1rem 0 3rem #000',
            }}
            sx={{
              border: 1,
              borderColor: 'black',
              borderRadius: '5px',
              height: '300px',
              // mt: '-20px',
            }}
          >
            <CardMedia
              sx={{ pl: '20px', pr: '20px', pt: '20px' }}
              component="img"
              height="150"
              image="https://safti.com/wp-content/uploads/2020/07/Podcast-Video-Thumbnail.jpg"
              alt="pink podcast image with microphone"
            />
          </Card>
        </Box>
      </Box>
      <Box
        ml={20}
        mr={20}
        mt="50px"
        pb="50px"
        pt="50px"
        style={{
          backgroundColor: '#17141d',
          boxShadow: '-1rem 0 3rem #000',
        }}
        sx={{
          border: 1, borderRadius: '5px'
        }}
      >
        <ImageList
          style={{
            backgroundColor: '#17141d',
            boxShadow: '-1rem 0 3rem #000',
          }}
          sx={{
            width: '1000px',
            height: '500px',
            position: 'relative',
            left: '8%',
            top: '5%',
            border: 1,
            borderRadius: '5px'
          }}
        >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">December</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
