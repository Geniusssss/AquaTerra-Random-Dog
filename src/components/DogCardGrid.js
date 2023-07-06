import React from 'react';
import DogCard from './DogCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// a fluid grid to display all dogs
const DogCardGrid = ({ dogs }) => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={4}>
        {dogs.map((url, index) => (
          // 4 results in a row for desktop and 1 result in a row for mobile
          <Grid item key={index} xs={12} sm={6} md={3}>
            <DogCard url={url} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};

export default DogCardGrid;