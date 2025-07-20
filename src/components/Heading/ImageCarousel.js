import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

const images = [
  "https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289321_640.png",
  "https://cdn.pixabay.com/photo/2023/09/10/15/15/flowers-8245210_640.png",
  "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_640.png"
];

function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, margin: 'auto', mt: 5 }}>
      <Carousel>
        {images.map((image, i) => (
          <Paper key={i} elevation={10}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '500px',
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${i}`}
            />
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;