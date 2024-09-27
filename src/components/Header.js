import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MedDoc
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Resources</Button>
        <Button color="inherit">Contact</Button>
        <div style={{ position: 'relative', marginLeft: 'auto' }}>
          <SearchIcon />
          <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
