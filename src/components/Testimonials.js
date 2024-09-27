import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // Import the carousel styles

const testimonials = [
  { quote: "This service is amazing!", user: "John Doe", img: "/path-to-avatar.jpg" },
  { quote: "Helped me organize my medical records.", user: "Jane Smith", img: "/path-to-avatar2.jpg" },
];

const Testimonials = () => {
  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        What Our Users Say
      </Typography>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ maxWidth: 300, margin: '0 auto' }}>
            <CardContent>
              <Avatar src={testimonial.img} sx={{ marginBottom: 2 }} />
              <Typography variant="body2">{testimonial.quote}</Typography>
              <Typography variant="subtitle2">{testimonial.user}</Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
