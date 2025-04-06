import React from "react";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "1rem 0",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Container>
          <Typography variant="body1" gutterBottom>
            &copy; {new Date().getFullYear()} Manish Bharti. All rights reserved.
          </Typography>
          <Box>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/manish-bharti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/mbharti321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:manishbharti.work@gmail.com"
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;