import React, { useState } from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';

const UploadSection = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Simulate upload process
    const fakeUpload = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(fakeUpload);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Medical Documents
      </Typography>
      <Typography variant="body1" paragraph>
        Easily upload your medical records, prescriptions, and more.
      </Typography>
      <Button variant="contained" component="label">
        Upload Documents
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
      {uploadProgress > 0 && <LinearProgress variant="determinate" value={uploadProgress} sx={{ marginTop: 2 }} />}
    </Box>
  );
};

export default UploadSection;
