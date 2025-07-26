import React from "react";
import { Card, CardContent, Container, Typography, Grid, Box } from "@mui/material";
import "./Skills.css";

const skills = {
  "Backend Development": [
    "Python",
    "Flask",
    "Node.js",
    ".NET",
    "REST APIs",
    "SQL",
    "NoSQL",
  ],
  "Frontend Development": [
    "JavaScript",
    "React.js",
    "Material UI",
    "WordPress",
  ],
  "Data Engineering": [
    "Azure Synapse",
    "PySpark",
    "ETL",
    "Data Pipelines",
    "Power BI",
    "Automation",
  ],
  "Other Skills": [
    "Data Structures",
    "Selenium",
    "Jira",
    "Blockchain Fundamentals",
  ],
  "DevOps & Cloud": [
    "Azure (Function App, StorageAccount, ServiceBusQueue, EventHub, AppConfig, Managed Identity)",
    "Azure DevOps",
    "CI/CD Pipelines",
    "GitHub",
    "AWS Foundations",
  ],
};

function Skills() {
  return (
    <section id="skills">
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: "#1976d2" }}>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {Object.entries(skills).map(([category, skillList], index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                <CardContent>
                  <Typography gutterBottom sx={{ fontWeight: 600, fontSize: "1.2rem", color: "#1976d2" }}>
                    {category}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {skillList.map((skill, idx) => (
                      <li key={idx} style={{ marginBottom: "0.25rem", color: "#333" }}>
                        <Typography variant="body1">{skill}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Skills;