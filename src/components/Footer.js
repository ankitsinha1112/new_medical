import React from 'react';
import { Box, Typography, Link, Grid, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: '40px' }}>
      <Grid container spacing={2}>
        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block', marginTop: '8px' }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block', marginTop: '8px' }}>
            Terms of Service
          </Link>
        </Grid>
        {/* Newsletter Signup */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Newsletter Signup</Typography>
          <form>
            <TextField
              label="Your Email"
              variant="filled"
              size="small"
              fullWidth
              sx={{ backgroundColor: 'white', borderRadius: '4px', marginTop: '8px' }}
            />
            <Button variant="contained" color="secondary" sx={{ marginTop: '8px' }}>
              Subscribe
            </Button>
          </form>
        </Grid>
        {/* Copyright */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Typography variant="body2">© 2024 MedDoc. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
