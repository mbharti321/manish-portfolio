import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import "./Projects.css";

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio website." },
  { title: "E-commerce App", description: "A full-stack e-commerce app." },
];

function Projects() {
  return (
    <section id="projects">
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#1976d2" }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#1976d2" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Projects;
