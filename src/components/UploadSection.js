import React, { useState } from 'react';
import { Box, Typography, Button, LinearProgress, Card, CardMedia, Modal } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadSection = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null); // State to store uploaded image
  const [open, setOpen] = useState(false); // State to control modal visibility

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Read the file as a data URL
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Set the uploaded image
      };
      reader.readAsDataURL(file); // Convert the file to base64

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
    }
  };

  const handleImageClick = () => {
    setOpen(true); // Open the modal when the image is clicked
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <Box sx={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Medical Documents
      </Typography>
      <Typography variant="body1" paragraph>
        Easily upload your medical records, prescriptions, and more.
      </Typography>
      {/* <Button variant="contained" component="label"> */}
      <Button
        component="label"
        size="large"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload Documents
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
      {uploadProgress > 0 && (
        <LinearProgress variant="determinate" value={uploadProgress} sx={{ marginTop: 2 }} />
      )}

      {/* Show uploaded image after successful upload */}
      {uploadProgress === 100 && uploadedImage && (
        <Card sx={{ marginTop: 3, maxWidth: 300, margin: '0 auto', cursor: 'pointer' }} onClick={handleImageClick}>
          <CardMedia
            component="img"
            alt="Uploaded Document"
            height="200"
            image={uploadedImage}
          />
        </Card>
      )}

      {/* Modal for image preview */}
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ outline: 'none' }}>
          <img src={uploadedImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default UploadSection;
