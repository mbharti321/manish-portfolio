import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
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
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom className="contact-title">
          Contact Me
        </Typography>
        <Typography variant="h6" gutterBottom className="contact-subtitle">
          Let's Build, Connect & Innovate Together!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feel free to reach out to me via email or connect with me on LinkedIn
          or GitHub.
        </Typography>
        {/* Contact info & form */}
        <Box className="contact-row">
          {/* contact info */}
          <Box className="contact-info-col">
            <Card className="contact-card">
              <CardContent>
                {/* <Box className="contact-info-image-box">
                  <img
                    src="https://undraw.co/api/illustrations/undraw_mailbox_re_dvds.svg"
                    alt="Contact Illustration"
                    className="contact-info-image"
                  />
                </Box> */}
                <Box className="contact-info-list">
                  <Typography variant="body1" className="contact-info-item">
                    <div className="contact-info-label">
                      <EmailIcon className="contact-info-icon" />
                      <strong>Email:</strong>
                    </div>
                    <Link
                      href="mailto:manishbharti.work@gmail.com"
                      underline="hover"
                      className="contact-info-link"
                    >
                      manishbharti.work@gmail.com
                    </Link>
                  </Typography>
                  <Typography variant="body1" className="contact-info-item">
                    <div className="contact-info-label">
                      <LinkedInIcon className="contact-info-icon" />
                      <strong>LinkedIn:</strong>
                    </div>
                    <Link
                      href="https://linkedin.com/in/manish-bharti"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      className="contact-info-link"
                    >
                      linkedin.com/in/manish-bharti
                    </Link>
                  </Typography>
                  <Typography variant="body1" className="contact-info-item">
                    <div className="contact-info-label">
                      <GitHubIcon className="contact-info-icon" />
                      <strong>GitHub:</strong>
                    </div>
                    <Link
                      href="https://github.com/mbharti321"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      className="contact-info-link"
                    >
                      github.com/mbharti321
                    </Link>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* contact form */}
          <Box className="contact-form-col">
            <Card className="contact-card">
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="contact-form-title"
                >
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
                  <Button
                    variant="contained"
                    color="primary"
                    className="contact-send-btn"
                  >
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Contact;
