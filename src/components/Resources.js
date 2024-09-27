import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const resources = [
  { 
    title: "How to Keep Your Medical Records Safe", 
    description: "Learn best practices for securely storing and managing your medical history.", 
    img: "https://via.placeholder.com/300x200?text=Medical+Records+Safety",
    link: "#"
  },
  { 
    title: "Understanding Data Privacy in Healthcare", 
    description: "Explore how healthcare providers ensure your personal information is kept secure.", 
    img: "https://via.placeholder.com/300x200?text=Data+Privacy+in+Healthcare",
    link: "#"
  },
  { 
    title: "Tips for Managing Family Medical History", 
    description: "Organize and track your family's health information effectively.", 
    img: "https://via.placeholder.com/300x200?text=Family+Medical+History",
    link: "#"
  }
];

const Resources = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Helpful Resources
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Explore articles, guides, and tools to better understand medical documentation, data privacy, and health management.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
              <CardMedia
                component="img"
                alt={resource.title}
                height="140"
                image={resource.img}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
              <Button 
                size="small" 
                href={resource.link}
                sx={{ margin: 2 }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resources;
