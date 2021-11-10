import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

// props to allow data to be pulled from database dynamically
export default function Cards({
  cardTitle,
  cardDescription,
  cardImage,
  podcastRedirect,
}) {
  return (
    <>
      {/* a tag to allow user to click on card and be redirected to that podcast */}
      <a className="" href="/">
        <Card
          className="podCard"
          style={{ backgroundColor: '#17141d', boxShadow: '-1rem 0 3rem #000' }}
          sx={{
            border: 1,
            borderColor: 'black',
            borderRadius: '5px',
            mt: '-20px',
          }}
        >
          <CardMedia
            sx={{ pl: '20px', pr: '20px', pt: '20px' }}
            component="img"
            height="150"
            image="https://safti.com/wp-content/uploads/2020/07/Podcast-Video-Thumbnail.jpg"
            alt="pink podcast image with microphone"
          />
          <CardContent>
            <Typography
              gutterBottom
              component={Link}
              to="/"
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '14px' }}
            >
              Podcast Title
            </Typography>
            <br />
            <Typography
              gutterBottom
              component={Link}
              to="/"
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '12px' }}
            >
              Podcast Description
            </Typography>
          </CardContent>
        </Card>
      </a>
    </>
  );
}
