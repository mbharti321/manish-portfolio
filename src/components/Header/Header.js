import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      // Get the header height to use as offset
      const headerHeight = document.querySelector('header') ? 
                          document.querySelector('header').offsetHeight : 64; // 64px is a fallback
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Scroll to element position minus header height
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <AppBar position="sticky" color="primary" component="header">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Manish Portfolio
          </Typography>
          <Button color="inherit" onClick={() => handleScroll('#about')}>About</Button>
          <Button color="inherit" onClick={() => handleScroll('#skills')}>Skills</Button>
          <Button color="inherit" onClick={() => handleScroll('#projects')}>Projects</Button>
          <Button color="inherit" onClick={() => handleScroll('#contact')}>Contact</Button>
          <Button color="inherit" onClick={() => handleScroll('#work-experience')}>Work-Experience</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;