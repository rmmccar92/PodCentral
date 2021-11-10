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
import CategoryCard from '../components/CategoryCard';
import Paper from '@mui/material/Paper';
// import Grow from '@mui/material/Grow';

// import podcastLogo from '../assets/podcast-logo.png';

// const styles = {
//   podcastLogo: {
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     width: '300px',
//   },
// };

export default function MediaCard() {
  return (
    <>
      <Box
      
        sx={{
          flexGrow: 1,
          width: 'auto',
          fontSize: 64,
          fontWeight: 'bold',
          ml: '50px',
          mt: '50px',
          mb: '50px',
          letterSpacing: 8,
          // backgroundColor: '#17141d'
        }}
      >
        <p className="wYl-font">DISCOVER</p>
        <p className="wYl-font2">PODCASTS</p>

        {/* <p className='wYl-font'>WHAT YOU LOVE</p> */}
      </Box>

      <Box
        className="boxColor"
        sx={{
          width: 'auto',
          // height: '100%'
          mt: '30px',
          pt: '20px',
        }}
      >
        <p className="categories">Categories</p>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mb: '50px ' }}
        >
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
        </Grid>

        <p className="categories">Popular</p>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mb: '50px ' }}
        >
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
        </Grid>

        <p className="categories">Family</p>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '50px' }}
        >
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
          <Grid item xs={1.5}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         benevolent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//     return (
//       <Box sx={{ minWidth: 275 }}>
//         <Card variant="outlined">{card}</Card>
//       </Box>
//     );
//   }
