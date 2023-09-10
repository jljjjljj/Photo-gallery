import React from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "../components/style.css"


const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/", { replace: true });
  }

  return (
    <AppBar position="fixed" style={{backgroundColor:'#1b1c1c'}}>
      <Toolbar>
        <Typography  className="title">
          &copy; {new Date().getFullYear()} 枫丹摄影展
              </Typography>
        <Button variant="outlined" href="#outlined-buttons" style={{ marginLeft: 'auto', color: 'white', border: '1px solid white', width: '10px' }}
        onClick={handleClick}
        >Back</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
