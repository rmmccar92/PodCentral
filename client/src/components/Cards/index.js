import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function Cards(props) {

  return (
    <div>
      <a href={props.link}>
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
            alt="cover art"
          />
          <CardContent>
            <Typography
              gutterBottom
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '14px' }}
            >
              {props.title}
            </Typography>
            <br />
            <Typography
              noWrap
              gutterBottom
              color="white"
              sx={{ ml: '5px', fontWeight: '', fontSize: '12px' }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}

