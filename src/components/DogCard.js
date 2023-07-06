import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

// display a card to show an image or a video
const DogCard = ({ url }) => {
  return (
    <Card sx={{ display: 'block', flexDirection: 'column' }}>
      {url.endsWith('.mp4')
        ?
        <CardMedia
          style={{ alignSelf: 'center' }}
          sx={{ height: 300 }}
          component="video"
          image={url}
          controls
        />
        :
        <CardMedia
          style={{ alignSelf: 'center' }}
          sx={{ height: 300 }}
          component="img"
          image={url}
        />}
    </Card>
  )
};

export default DogCard;
