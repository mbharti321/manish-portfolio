import React from "react";
import {Card,CardContent, Container, Typography, Grid, Chip } from "@mui/material";

const skills = ["React", "Node.js", "Python", "Azure", "Power BI", "CSS"];

function Skills() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} color="primary" />
            </Grid>
          ))}
        </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Skills;
