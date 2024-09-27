import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = ({ heroRef, aboutRef, uploadRef, servicesRef, testimonialsRef, resourcesRef, contactRef }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust for mobile view

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const drawer = (
    <List>
      {[
        { text: 'Home', ref: heroRef },
        { text: 'About', ref: aboutRef },
        { text: 'Upload', ref: uploadRef },
        { text: 'Services', ref: servicesRef },
        { text: 'Testimonials', ref: testimonialsRef },
        { text: 'Resources', ref: resourcesRef },
        { text: 'Contact', ref: contactRef },
      ].map(({ text, ref }) => (
        <ListItem button key={text} onClick={() => handleScrollToSection(ref)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MedDoc
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              {[
                { text: 'Home', ref: heroRef },
                { text: 'About', ref: aboutRef },
                { text: 'Upload', ref: uploadRef },
                { text: 'Services', ref: servicesRef },
                { text: 'Testimonials', ref: testimonialsRef },
                { text: 'Resources', ref: resourcesRef },
                { text: 'Contact', ref: contactRef },
              ].map(({ text, ref }) => (
                <Button key={text} color="inherit" onClick={() => handleScrollToSection(ref)}>
                  {text}
                </Button>
              ))}
              <div style={{ position: 'relative', marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <SearchIcon />
                <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
