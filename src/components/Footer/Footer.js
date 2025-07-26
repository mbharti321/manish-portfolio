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
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: { xs: "1rem 0", md: "1.5rem 0" },
          textAlign: "center",
          borderTop: "1px solid #eee",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" gutterBottom sx={{ fontWeight: 500 }}>
            &copy; {new Date().getFullYear()} Manish Bharti. All rights reserved.
          </Typography>
          <Box>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/manish-bharti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/mbharti321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: "#fff" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:manishbharti.work@gmail.com"
              aria-label="Email"
              sx={{ color: "#fff" }}
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