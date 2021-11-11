import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CategoryCard from '../components/CategoryCard';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

export default function AllCategories({
  categoryName,
  categoryImage,
  categoryRedirect,
}) {
  return (
    <>
      {/* <Box
        sx={{
          flexGrow: 1,
          width: 'auto',
          fontSize: 64,
          fontWeight: 'bold',
          ml: '50px',
          mt: '50px',
          mb: '50px',
          letterSpacing: 8,
        }}
      >
        <p className="wYl-font">DISCOVER</p>
        <p className="wYl-font2">PODCASTS</p>
      </Box> */}

      <Box
        className="boxColor"
        sx={{
          width: 'auto',
          pt: '100px',
          pl: '50px',
          pr: '50px',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ ml: '35px', mb: '20px' }}
        >
          <p className="categories">All Categories</p>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '75px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '75px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ pb: '100px', pl: '50px', pr: '50px' }}
        >
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}