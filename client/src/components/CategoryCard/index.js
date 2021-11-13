import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export default function CategoryCard(props) {

  return (
    <div>
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
          image={props.image}
          alt="category image"
        />
        <CardContent>
          <Typography
            gutterBottom
            component={Link}
            to={props.redirect}
            variant="h5"
            color="white"
            sx={{ ml: '5px', fontWeight: '', fontSize: '16px' }}
          >
            {props.category}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
