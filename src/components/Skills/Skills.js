import React from "react";
import { Card, CardContent, Container, Typography, Grid, Box } from "@mui/material";

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
      <Container style={{ marginTop: "2rem" }}>
      <Card>
                <CardContent>
        <Typography variant="h4" gutterBottom >
          Skills
        </Typography>
        <Grid container spacing={4}>
          {Object.entries(skills).map(([category, skillList], index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Ensures all cards have the same height
                }}
              >
                <CardContent>
                  <Typography gutterBottom style={{ fontWeight: 600 }}>
                    {category}
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: 2 }}>
                    {skillList.map((skill, idx) => (
                      <li key={idx}>
                        <Typography variant="body1">{skill}</Typography>
                      </li>
                    ))}
                  </Box>
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

export default Skills;