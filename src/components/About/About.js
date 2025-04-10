import React from "react";
import { Typography, Box, Grid, Avatar } from "@mui/material";

function About() {
  return (
    <section id="about">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            {/* <Avatar
            src="/your-profile-image.jpg" // Replace with your image path
            alt="Your Name"
            sx={{
              width: 200,
              height: 200,
              border: "4px solid #1976d2",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          /> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={8} >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="left"
            color="primary"
          >
            Manish Bharti
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Software Engineer || Blockchain Explorer
          </Typography>
          <Typography variant="body1"  sx={{ fontSize: "1.2rem" }}>
          <p>Exploring, learning, building.</p>
          Hi, I'm Manish Bharti — a passionate Software Engineer with close to 3 years of experience in building scalable web applications and backend systems. 
          I specialize in Python, .NET, Flask, and Azure, and have worked across full-stack technologies including React and Node.js. 
          I enjoy solving real-world problems with clean, efficient code and love turning ideas into practical, user-friendly solutions. 
          My background spans both frontend and backend development, with a focus
            on React, Node.js, and cloud technologies.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
