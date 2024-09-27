import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // Import the carousel styles
import img1 from '../assets/1.jpeg';  
import img2 from '../assets/2.jpg';  
import img3 from '../assets/3.jpeg';  

const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={3000}
    >
      {[img1, img2, img3].map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',  // Important for the overlay
            height: '400px',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Overlay to darken the background */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% dark overlay
              zIndex: 1,
            }}
          />
          
          {/* Content (Text + Button) */}
          <Box 
            sx={{
              position: 'relative',
              zIndex: 2,  // Place content above the overlay
              textAlign: 'center'
            }}
          >
            <Typography variant="h2" color="white" gutterBottom>
              Secure Your Medical History
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Easily document and upload your medical records.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Start Now
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default Hero;
