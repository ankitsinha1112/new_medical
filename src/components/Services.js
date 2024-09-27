import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MedicationIcon from '@mui/icons-material/Medication';
import FamilyHistoryIcon from '@mui/icons-material/FamilyRestroom';

const services = [
  { icon: <MedicalServicesIcon />, title: 'Digital Record Management', description: 'Securely store and access your medical history.' },
  { icon: <MedicationIcon />, title: 'Medication Tracking', description: 'Manage prescriptions and dosages easily.' },
  { icon: <FamilyHistoryIcon />, title: 'Family Health History', description: 'Document and share your family’s medical history.' },
];

const Services = () => {
  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box textAlign="center">
              {service.icon}
              <Typography variant="h6">{service.title}</Typography>
              <Typography>{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
