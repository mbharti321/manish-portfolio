import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#1976d2" }}
        >
          Contact Me
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feel free to reach out to me via email or connect with me on LinkedIn
          or GitHub.
        </Typography>
        <Grid container spacing={3} className="udc-contact-grid">
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              <CardContent>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                    gutterBottom
                  >
                    <EmailIcon sx={{ mr: 1 }} />
                    <strong>Email:</strong>
                    <Link
                      href="mailto:manishbharti.work@gmail.com"
                      underline="hover"
                      sx={{ ml: 1 }}
                    >
                      manishbharti.work@gmail.com
                    </Link>
                  </Typography>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                    gutterBottom
                  >
                    <LinkedInIcon sx={{ mr: 1 }} />
                    <strong>LinkedIn:</strong>
                    <Link
                      href="https://linkedin.com/in/manish-bharti"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ ml: 1 }}
                    >
                      linkedin.com/in/manish-bharti
                    </Link>
                  </Typography>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                    gutterBottom
                  >
                    <GitHubIcon sx={{ mr: 1 }} />
                    <strong>GitHub:</strong>
                    <Link
                      href="https://github.com/mbharti321"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ ml: 1 }}
                    >
                      github.com/mbharti321
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                  Send a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Your Name"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Contact;
