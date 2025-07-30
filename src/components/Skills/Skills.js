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
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom className="skills-title">
          Skills
        </Typography>
        <Grid container spacing={3} className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="skills-grid-item">
              <Card className="skill-category">
                <CardContent>
                  <Typography gutterBottom className="skill-category-title">
                    {category}
                  </Typography>
                  <Box component="ul" className="skill-list">
                    {skillList.map((skill, idx) => (
                      <li key={idx} className="skill-list-item">
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