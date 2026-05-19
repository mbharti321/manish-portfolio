import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Box, Chip, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Projects.css";

const projects = [
  {
    title: "ParcelAtlas - Agentic AI for Parcel Tracking",
    description: "Production Agentic-AI chatbot for logistics use cases with tool-based reasoning",
    bullets: [
      "Built an agentic RAG chatbot for parcel tracking, proof-of-delivery explanation, and logistics ticket workflows.",
      "Implemented tool-based reasoning, evaluation, and safety guardrails to reduce hallucinations and ensure secure usage.",
      "Delivered a production system meeting latency performance benchmarks with 75% customer satisfaction.",
    ],
    impact: "75% CSAT | Production Ready | Real-time Performance",
    techStack: ["Python", "FastAPI", "LLM", "RAG", "Agentic AI", "Azure"],
    featured: true,
  },
  {
    title: "InfoBridge AI - Enterprise Knowledge Assistant (RAG)",
    description: "RAG-based enterprise platform reducing information lookup time by 70%",
    bullets: [
      "Built an enterprise RAG application using GPT-4o that reduced information lookup time by 70% for 100+ users processing queries across 2,000+ documents.",
      "Implemented role-based access control, production monitoring via Application Insights, and cost optimization reducing LLM API costs by 20%.",
      "Designed FastAPI backend for document ingestion, embeddings, authentication, and secure API integration.",
      "Built vector search pipeline using Azure AI Search for semantic retrieval across structured and unstructured data.",
    ],
    impact: "70% Faster Lookups | 100+ Users | 2000+ Documents | 20% Cost Reduction",
    techStack: ["FastAPI", "RAG", "Azure AI Search", "GPT-4o", "Vector DB", "Application Insights"],
    featured: true,
  },
  {
    title: "Non-Conveyable Scan System",
    description: "End-to-end scanning system replacing third-party tool",
    bullets: [
      "Built an end-to-end scanning system (UI + APIs + integrations) for managing non-conveyable shipments.",
      "Replaced a third-party tool, reducing operational cost by ~10% annually.",
      "Integrated with warehouse systems and carrier APIs for real-time tracking.",
      "Improved data visibility by ~80% enabling better operational insights.",
    ],
    impact: "10% Cost Savings | 80% Data Visibility | In-house Solution",
    techStack: [".NET", "SQL", "Warehouse APIs", "Carrier Integration"],
  },
  {
    title: "Carrier Overage Processing System",
    description: "Automated carrier billing and reconciliation platform",
    bullets: [
      "Developed REST APIs and webhook services to automate carrier overage handling.",
      "Integrated USPS and logistics partner systems for real-time reconciliation.",
      "Reduced manual processing by 60%+ and improved billing accuracy by 25%+.",
      "Enabled automated exception workflows and reporting to recover revenue faster.",
    ],
    impact: "60%+ Automation | 25%+ Accuracy | Real-time Reconciliation",
    techStack: [".NET", "REST APIs", "USPS Integration", "Event-driven"],
  },
  {
    title: "CI/CD Pipeline for Database SQL Object Versioning",
    description: "Automating SQL object deployment with version control",
    bullets: [
      "Created a Database Project to structure and manage SQL objects efficiently.",
      "Implemented automated validation to prevent errors before deployment.",
      "Developed a CI/CD pipeline to automate SQL object versioning and deployment.",
      "Successfully rolled out the solution to production, streamlining database updates.",
    ],
    impact: "Full Version Control | Automated Validation | Production Ready",
    techStack: ["Azure DevOps", "SQL", "CI/CD", "Version Control"],
  },
  {
    title: "SSFPriority - Postage Calculation Optimization",
    description: "Dynamic postage calculation logic for parcel shipping",
    bullets: [
      "Significantly enhanced postage calculation, a critical component of the parcel business.",
      "Developed a priority model for selecting package dimensions for USPS postage calculation.",
      "Achieved a notable 10% increase in profit margin by using measured dimensions.",
      "Optimized for 5,000+ daily parcels with improved cost efficiency.",
    ],
    impact: "10% Profit Margin Increase | 5000+ Parcels Daily",
    techStack: ["Python", ".NET", "Optimization Algorithms", "USPS Integration"],
  },
];

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects">
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#1976d2", mb: 4 }}
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
                className={`project-card ${project.featured ? "featured" : ""}`}
                sx={{
                  borderRadius: 3,
                  boxShadow: project.featured
                    ? "0 6px 20px rgba(102, 126, 234, 0.2)"
                    : "0 2px 8px rgba(0,0,0,0.07)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: project.featured ? "2px solid #667eea" : "1px solid #e0e0e0",
                  background: project.featured
                    ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)"
                    : "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: project.featured
                      ? "0 8px 28px rgba(102, 126, 234, 0.25)"
                      : "0 4px 12px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                    cursor: "pointer",
                  }}
                  onClick={() => toggleExpanded(index)}
                >
                  {project.featured && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#667eea",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        mb: 1,
                      }}
                    >
                      ⭐ Featured Project
                    </Typography>
                  )}

                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant={project.featured ? "h5" : "h6"}
                        sx={{ fontWeight: 700, color: project.featured ? "#667eea" : "#1976d2", mb: 0.5 }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "#666", fontStyle: "italic", mb: 1.5 }}
                      >
                        {project.description}
                      </Typography>
                    </Box>

                    <IconButton
                      aria-label={expanded[index] ? "collapse" : "expand"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpanded(index);
                      }}
                      sx={{ alignSelf: "start" }}
                    >
                      {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>

                  {expanded[index] && (
                    <Box component="ul" sx={{ mt: 1, pl: 2, flexGrow: 1, mb: 2 }}>
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" sx={{ mb: 0.8 }}>
                            {bullet}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  )}

                  <Typography
                    variant="caption"
                    sx={{
                      color: "#667eea",
                      fontWeight: 600,
                      mb: 1.5,
                      padding: "8px 12px",
                      backgroundColor: "rgba(102, 126, 234, 0.1)",
                      borderRadius: "4px",
                    }}
                  >
                    💡 Impact: {project.impact}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.techStack.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: project.featured ? "#f3f4ff" : "#e3f2fd",
                          color: project.featured ? "#667eea" : "#1976d2",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          border: project.featured ? "1px solid rgba(102, 126, 234, 0.3)" : "none",
                          "&:hover": {
                            backgroundColor: project.featured ? "#667eea" : "#1976d2",
                            color: "#fff",
                          },
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

export default Projects;
