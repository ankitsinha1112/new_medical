import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // Import the carousel styles
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const testimonials = [
  { quote: "This service is amazing!", user: "John Doe", img: "/path-to-avatar.jpg" },
  { quote: "Helped me organize my medical records.", user: "Jane Smith", img: "/path-to-avatar2.jpg" },
  { quote: "Highly recommend it to anyone!", user: "Michael Brown", img: "/path-to-avatar3.jpg" },
  { quote: "A great tool for managing health info.", user: "Emily White", img: "/path-to-avatar4.jpg" }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if screen is mobile size

  // Function to render testimonials in groups
  const renderTestimonials = () => {
    if (isMobile) {
      return testimonials.map((testimonial, index) => (
        <Card key={index} sx={{ maxWidth: 300, margin: '0 auto' }}>
          <CardContent>
            <Avatar src={testimonial.img} sx={{ marginBottom: 2 }} />
            <Typography variant="body2" gutterBottom>{testimonial.quote}</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {testimonial.user}
            </Typography>
          </CardContent>
        </Card>
      ));
    } else {
      // Group testimonials in pairs for desktop view
      return testimonials.reduce((result, _, index, array) => {
        if (index % 2 === 0) {
          result.push(
            <Grid container spacing={4} key={index}>
              {array.slice(index, index + 2).map((testimonial, idx) => (
                <Grid item xs={6} key={idx}>
                  <Card sx={{ maxWidth: 300, margin: '0 auto' }}>
                    <CardContent>
                      <Avatar src={testimonial.img} sx={{ marginBottom: 2 }} />
                      <Typography variant="body2" gutterBottom>{testimonial.quote}</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {testimonial.user}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          );
        }
        return result;
      }, []);
    }
  };

  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        What Our Users Say
      </Typography>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {renderTestimonials().map((testimonialGroup, index) => (
          <div key={index}>
            {testimonialGroup}
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
