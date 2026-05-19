import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "./WorkExperience.css";

const experiences = [
  {
    title: "AI Engineer",
    company: "AT&T (Via Insight Global)",
    duration: "Mar 2026 – Present | Bengaluru",
    details: [
      "Research & Experiment on tax credit automation using agentic AI, developing intelligent workflows for complex document processing.",
      "Automated report generation for 20+ questions using GPT-4o LLM, improving efficiency and reducing manual report creation time by 80%.",
      "Designed and implemented agentic AI systems with tool-based reasoning and safety guardrails to minimize hallucinations.",
    ],
    techStack:
      "Python, FastAPI, GPT-4o, LLM, RAG, Agentic AI, Azure AI Services, SharePoint, Azure Functions, Azure DevOps",
  },
  {
    title: "Sr. Software Engineer",
    company: "ACI Logistix (Seconded from Corestrat)",
    duration: "Sep 2025 – Jan 2026 | Bengaluru",
    details: [
      "Delivered production Agentic-AI chatbot (ParcelAtlas) for logistics use cases, achieving 75% CSAT score with tool-based reasoning and safety guardrails.",
      "Built in-house Non-Conveyable Scan facility (end-to-end: UI, APIs, integrations), replacing third-party tool and saving ~10% in revenue while improving data visibility by 80%.",
      "Fixed duplicate order failures for 5+ carriers, clearing 1,000+ packages from daily DLQs and stabilizing downstream workflows.",
      "Built and enhanced backend services and APIs supporting high-volume logistics operations processing 50K+ packages per day.",
    ],
    techStack:
      "Python, FastAPI, LLM, RAG, Agentic AI, Azure, .NET, C#, REST APIs, Azure Function Apps, Event-driven architecture",
  },
  {
    title: "Software Engineer",
    company: "Corestrat (Working for ACI Logistix, a logistics firm)",
    duration: "Sep 2022 – Aug 2025 | Bengaluru",
    details: [
      "Built InfoBridge AI, a RAG-based enterprise chatbot using GPT-4o, reducing information lookup time by 70% for 100+ users across 2,000+ documents.",
      "Implemented role-based access control (RBAC), production monitoring via Application Insights, and cost optimization reducing LLM API costs by 20%.",
      "Built robust CI/CD workflow for SQL DB objects, ensuring full version control and reliable production deployments with automated validation.",
      "Designed and owned production-grade REST APIs for carrier overage webhooks, automating order creation and reducing manual intervention by 60%+.",
      "Ensured 100% uptime for facility operations applications via proactive Raspberry Pi (RPi) log monitoring.",
      "Implemented USPS parcel postage optimization logic (SSF Priority), contributing to ~10% profit margin improvement on 5,000+ daily parcels.",
      "Developed webhook and event service for real-time package event flow between couriers and service providers.",
      "Designed real-time package tracking system (BST 2.0), eliminating manual errors and providing instant status updates.",
    ],
    techStack:
      "Python, FastAPI, RAG, Vector Databases, Azure AI Search, GPT-4o, SQL, .NET, C#, REST APIs, Azure Functions, Event Hub, Service Bus, Azure DevOps, CI/CD, Application Insights",
  },
  {
    title: "Software Engineer Intern",
    company: "Telaverge Communications",
    duration: "May 2022 – Aug 2022 | Bengaluru",
    details: [
      "Developed the company's official website from scratch to launch, contributing to 50% of the project's implementation.",
    ],
    techStack: "JavaScript, Node.js, React.js, HTML5, CSS",
  },
  {
    title: "Software Engineer Intern",
    company: "SysCloud (SaaS Data Protection Platform)",
    duration: "Dec 2021 – May 2022 | Chennai",
    details: [
      "Created Node.js scripts to generate test data automatically, saving 100+ hours of manual work per month.",
      "Collaborated with senior engineers to debug and troubleshoot issues, ensuring smooth product functionality.",
    ],
    techStack: "Node.js, Automation, Testing",
  },
];

function WorkExperience() {
  return (
    <section id="work-experience">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          className="workexp-title"
        >
          Work Experience
        </Typography>
        <Grid container spacing={3}>
          {experiences.map((experience, index) => (
            <Grid
              item
              xs={12}
              key={index}
              className="workexp-grid-item"
            >
              <Card className="workexp-card">
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="workexp-role"
                  >
                    {experience.title}
                  </Typography>
                  <Box className="workexp-row">
                    <Typography variant="subtitle1" color="textSecondary">
                      {experience.company}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {experience.duration}
                    </Typography>
                  </Box>
                  <Box component="ul" className="workexp-list">
                    {experience.details.map((detail, idx) => (
                      <li key={idx}>
                        <Typography variant="body2">{detail}</Typography>
                      </li>
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="workexp-tech"
                  >
                    <strong>Tech Stack:</strong> {experience.techStack}
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

export default WorkExperience;
