import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function CategoryCard({ categoryName }) {
  return (
    <>
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
              variant="h5"
              component={Link}
              to="/"
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '20px' }}
            >
              Example
            </Typography>
          </CardContent>
        </Card>
      </a>
    </>
  );
}
