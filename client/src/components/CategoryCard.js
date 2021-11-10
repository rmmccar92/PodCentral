import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export default function CategoryCard({ categoryName, categoryRedirect }) {
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
              sx={{ ml: '5px', fontWeight: '', fontSize: '16px' }}
            >
              Example Category
            </Typography>
          </CardContent>
        </Card>
      </a>
    </>
  );
}
