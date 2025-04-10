import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio website." },
  { title: "E-commerce App", description: "A full-stack e-commerce app." },
];

function Projects() {
  return (
    <section id="projects">
      <Container style={{ marginTop: "2rem" }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography variant="body2">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export default Projects;
