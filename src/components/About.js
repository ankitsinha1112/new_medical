import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        The Importance of Documenting Your Medical History
      </Typography>
      <Typography variant="body1" paragraph>
        Documenting your medical history is essential for effective health management.
      </Typography>
      <img src="/path-to-infographic.jpg" alt="Medical History Infographic" style={{ maxWidth: '100%' }} />
    </Box>
  );
};

export default About;
