import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import "./About.css";

function About() {
  return (
    <section id="about">
      <Box className="about-content">
        <Box className="about-main-row">
          <Box className="about-avatar-box">
            <Avatar
              src={process.env.PUBLIC_URL + "images/manish-profile.png"}
              alt="Manish Bharti"
              className="about-avatar"
            />
          </Box>
          <Box className="about-title-box">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="left"
              color="primary"
              className="about-title"
            >
              Manish Bharti
            </Typography>
            <Typography variant="h5" gutterBottom className="about-subtitle">
              Software Engineer & Blockchain Explorer
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" className="about-description">
          <span className="about-italic">Exploring, learning, building.</span>
          <br />
          Hi, I'm Manish Bharti — a passionate Software Engineer with close to 3 years of experience in building scalable web applications and backend systems.
          I specialize in Python, .NET, Flask, and Azure, and have worked across full-stack technologies including React and Node.js.
          I enjoy solving real-world problems with clean, efficient code and love turning ideas into practical, user-friendly solutions.
          My background spans both frontend and backend development, with a focus on React, Node.js, and cloud technologies.
        </Typography>
      </Box>
    </section>
  );
}

export default About;
