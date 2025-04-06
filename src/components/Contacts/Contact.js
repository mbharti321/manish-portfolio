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

function Contact() {
  return (
    <section id="contact">
      <Container style={{ marginTop: "2rem" }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Contact Me
            </Typography>
            <Grid
              // container
              spacing={4}
              justifyContent="space-between"
              // alignItems="center"
              style={{ "display": "flex","flex-direction": "row", "gap": "1rem"}}
            >
              {/* Left Column: Contact Details */}
              <Grid item xs={12} md={5}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Get in Touch
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Feel free to reach out to me via email or connect with me
                      on LinkedIn or GitHub.
                    </Typography>
                    <br />
                    <Box>
                      <Typography
                        variant="body1"
                        display="flex"
                        alignItems="center"
                        gutterBottom
                      >
                        <EmailIcon style={{ marginRight: "0.5rem" }} />
                        <strong>Email:</strong>{" "}
                        <Link
                          href="mailto:manishbharti.work@gmail.com"
                          underline="hover"
                          style={{ marginLeft: "0.5rem" }}
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
                        <LinkedInIcon style={{ marginRight: "0.5rem" }} />
                        <strong>LinkedIn:</strong>{" "}
                        <Link
                          href="https://linkedin.com/in/manish-bharti"
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                          style={{ marginLeft: "0.5rem" }}
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
                        <GitHubIcon style={{ marginRight: "0.5rem" }} />
                        <strong>GitHub:</strong>{" "}
                        <Link
                          href="https://github.com/mbharti321"
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                          style={{ marginLeft: "0.5rem" }}
                        >
                          github.com/mbharti321
                        </Link>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Right Column: Contact Form */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
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
                        rows={1}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1rem" }}
                      >
                        Send
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
