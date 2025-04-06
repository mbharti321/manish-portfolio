import React from "react";
import { Card, CardContent, Typography, Container } from "@mui/material";

function About() {
  return (
    <section id="about">
      <Container style={{ marginTop: "2rem" }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I am a passionate software developer with expertise in building
              scalable and efficient web applications. I love working with
              modern technologies and solving challenging problems.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export default About;
