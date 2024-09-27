import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      sx={{ 
        height: '400px', 
        backgroundImage: 'url(/path-to-background-image.jpg)', 
        backgroundSize: 'cover',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
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
  );
};

export default Hero;
