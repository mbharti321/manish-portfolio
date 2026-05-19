import React from "react";
import { Card, CardContent, Container, Typography, Grid, Box, Chip } from "@mui/material";
import "./Skills.css";

const skills = {
  "Programming Languages": [
    "Python",
    "C#",
    "JavaScript",
    "TypeScript",
  ],
  "Backend Development": [
    "FastAPI",
    ".NET",
    "REST APIs",
    "Microservices",
    "SQL",
    "SQLAlchemy",
    "ORM",
    "Redis",
  ],
  "AI/GenAI": [
    "Retrieval-Augmented Generation (RAG)",
    "Vector Databases",
    "Large Language Models (LLMs)",
    "Azure AI Search",
    "LangChain",
    "Agentic AI",
  ],
  "Cloud & DevOps": [
    "Azure Function App",
    "Azure ServiceBus",
    "Azure EventHub",
    "Azure Storage Account",
    "Azure AppConfig",
    "Azure Managed Identity",
    "Azure DevOps",
    "CI/CD Pipelines",
    "GitHub",
    "Application Insights",
    "Opsgenie",
  ],
  "Data & Platforms": [
    "AWS Foundations",
    "Azure Synapse",
    "PySpark",
  ],
  "Frontend Development": [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  "Tools & Utilities": [
    "Git",
    "Jira",
    "Linux",
    "Postman",
  ],
};

function Skills() {
  return (
    <section id="skills">
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          gutterBottom 
          className="skills-title"
          sx={{ mb: 4 }}
        >
          Skills
        </Typography>
        <Grid container spacing={3} className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4}
              key={index} 
              className="skills-grid-item"
              sx={{ display: "flex" }}
            >
              <Card 
                className="skill-category"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 24px rgba(25, 118, 210, 0.2)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 2.5 }}>
                  <Typography 
                    gutterBottom 
                    className="skill-category-title"
                    sx={{ mb: 2 }}
                  >
                    {category}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: 1,
                      flexGrow: 1,
                      alignContent: "flex-start"
                    }}
                  >
                    {skillList.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        className="skill-chip"
                        sx={{
                          backgroundColor: "#e3f2fd",
                          color: "#1976d2",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                          "&:hover": {
                            backgroundColor: "#1976d2",
                            color: "#fff",
                          },
                          transition: "all 0.2s ease",
                        }}
                      />
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