import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';



const Footer = () => {

  return (
    <AppBar>
      <Toolbar>
        <Typography >
          &copy; {new Date().getFullYear()} iii
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;