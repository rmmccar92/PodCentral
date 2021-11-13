import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';


const Cards = (props) => {
  return (
    <Grid
      container
      spacing={7}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ pb: "50px", pl: "50px", pr: "50px" }}
    >
      <Grid item xs={12} md={6} lg={2}>
        <Card
          className="podCard"
          component={Link}
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
            alt="pink podcast image with microphone"
          />
          <CardContent>
            <Typography
              gutterBottom
              component={Link}
              to={props.redirect}
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '14px' }}
            >
              {props.title}
            </Typography>
            <br />
            <Typography
              gutterBottom
              component={Link}
              to={props.redirect}
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '12px' }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Cards
