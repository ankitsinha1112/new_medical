import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log(formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactSection;
