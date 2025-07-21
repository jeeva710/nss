import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

// ✅ Step 1: Import your local images
import image1 from '../../image/Carouselcook.png';
import image2 from '../../image/Carouselhousekeeping.png'; 
import image3 from '../../image/Carouselsecurity.png'; 
import image4 from '../../image/Carouseltree.png'; 
import image5 from '../../image/CarouselHorticulture.png'; 
// You can add more local images here

// ✅ Step 2: Combine local and online image paths
const images = [
  image3,
  image2,
  image1,
  image4,
  image5
  
];

function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, margin: 'auto', mt: 0 }}>
      <Carousel>
        {images.map((image, index) => (
          <Paper key={index} elevation={10}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${index}`}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
