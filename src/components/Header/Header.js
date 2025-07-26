import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    setMobileOpen(false);
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
  
  const navLinks = [
    { label: "About", id: "#about" },
    { label: "Skills", id: "#skills" },
    { label: "Work Experience", id: "#work-experience" },
    { label: "Projects", id: "#projects" },
    { label: "Contact", id: "#contact" },
  ];

  return (
    <AppBar position="sticky" color="primary" component="header" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Manish Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map(link => (
              <Button key={link.id} color="inherit" onClick={() => handleScroll(link.id)}>
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={() => setMobileOpen(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ minWidth: 180 }}>
          {navLinks.map(link => (
            <ListItem button key={link.id} onClick={() => handleScroll(link.id)}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;