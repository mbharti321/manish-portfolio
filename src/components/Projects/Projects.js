import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import "./Projects.css";

const projects = [
  {
    title: "InfoBridge AI - Enterprise Knowledge Assistant (RAG)",
    bullets: [
      "Built an enterprise RAG application using GPT-4o that reduced information lookup time by 70% for 100+ internal users, processing queries across 2,000+ documents.",
      "Implemented role-based access control, production monitoring via Application Insights, and cost optimization strategies reducing LLM API costs by 20%.",
      "Designed a FastAPI backend for document ingestion, embeddings, authentication, and secure API integration.",
      "Built vector search pipeline using Azure AI Search for semantic retrieval across structured and unstructured data.",
    ],
    featured: true,
  },
  {
    title: "Non-Conveyable Scan Facility (UI, APIs, Integrations)",
    bullets: [
      "Built an in-house facility replacing a third-party tool, saving ~10% in revenue and improving data visibility.",
      "Developed production-grade REST APIs and integrated with carrier systems for real-time package handling.",
    ],
  },
  {
    title: "Real-time Package Tracking System (BST 2.0)",
    bullets: [
      "Designed and implemented a real-time package tracking system eliminating manual tracking errors.",
      "Provided instant status updates and integrated with multiple courier providers for seamless event flow.",
    ],
  },
  {
    title: "Carrier Overage Webhook Service",
    bullets: [
      "Designed and owned production-grade REST APIs for carrier overage webhooks, automating package handling and order creation.",
      "Built webhook and event service for real-time package event flow between couriers and service providers, reducing manual intervention.",
    ],
  },
  {
    title: "USPS Parcel Postage Optimization",
    bullets: [
      "Implemented USPS parcel postage optimization logic (SSF Priority), contributing to a ~10% improvement in profit margin on 5000+ daily parcels.",
    ],
  },
  {
    title: "CI/CD Workflow for SQL DB Objects",
    bullets: [
      "Built a robust CI/CD workflow for SQL database objects, ensuring full version control and reliable production deployments.",
    ],
  },
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
        <Grid container spacing={3} className="projects-grid">
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={project.featured ? 12 : 6}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: project.featured
                    ? "0 4px 12px rgba(25, 118, 210, 0.15)"
                    : "0 2px 8px rgba(0,0,0,0.07)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: project.featured ? "2px solid #1976d2" : "none",
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant={project.featured ? "h5" : "h6"}
                    sx={{ fontWeight: 600, color: "#1976d2" }}
                  >
                    {project.title}
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 2, flexGrow: 1 }}>
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          {bullet}
                        </Typography>
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

export default Projects;
