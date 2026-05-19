import React from "react";
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LaunchIcon from "@mui/icons-material/Launch";
import "./About.css";

function About() {
  return (
    <section id="about">
      <Box className="about-content">
        <Box className="about-card">
          <div className="about-header">
            <Box className="about-avatar-container">
              <Box className="about-avatar-background">
                <Avatar
                  src={process.env.PUBLIC_URL + "/images/manish-profile.png"}
                  alt="Manish Bharti"
                  className="about-avatar"
                />
              </Box>
            </Box>

            <div>
              <Typography variant="h3" component="h1" className="about-name">
                Manish Bharti
              </Typography>

              <Typography variant="h6" className="about-role">
                AI Engineer | GenAI & Backend Systems
              </Typography>

              <Box className="about-divider" />

              <Box className="about-social-icons">
                <IconButton
                  component={Link}
                  href="mailto:manishbharti.work@gmail.com"
                  aria-label="Email"
                  className="social-icon"
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://linkedin.com/in/manish-bharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://github.com/mbharti321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://twitter.com/_manishbharti"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="social-icon"
                >
                  <TwitterIcon />
                </IconButton>
                {/* <IconButton
                  component={Link}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <InstagramIcon />
                </IconButton> */}
                <IconButton
                  component={Link}
                  href="https://manishbharti.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="social-icon"
                >
                  <LaunchIcon />
                </IconButton>
              </Box>

              <Typography variant="body1" className="about-tagline">
                Python | GenAI | RAG | Backend Systems | Azure Cloud | React
              </Typography>
            </div>
          </div>
          <Typography variant="body1" className="about-description">
            {/* <div className="about-location">📍 Bengaluru, India </div> */}
            Hi, I'm Manish Bharti, an AI Engineer with 4+ years of experience
            building scalable backend systems and GenAI solutions. I specialize
            in Python, FastAPI, .NET, SQL, and Azure cloud. I've delivered
            production-grade systems including Agentic AI chatbots, RAG
            platforms, and event-driven architectures processing 50K+
            transactions daily. I focus on solving complex operational problems,
            designing reliable systems, and building software that delivers
            measurable business impact. Full-stack capable with React,
            JavaScript, and TypeScript for end-to-end solution delivery.
          </Typography>

          <Typography variant="body2" className="about-research">
            Find my <b>research paper</b>:{" "}
            <Link
              href="https://link.springer.com/chapter/10.1007/978-981-19-3035-5_53"
              className="research-link"
              target="_blank"
            >
              Blockchain and Its Integration in IoT
            </Link>
          </Typography>

          <Button
            variant="contained"
            className="learn-more-button"
            endIcon={<LaunchIcon />}
            component={Link}
            href="https://flowcv.com/resume/onatmkulns"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about me
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default About;
