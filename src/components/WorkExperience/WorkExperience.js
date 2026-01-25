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
    title: "Sr. Software Engineer",
    company: "Corestrat (Working for ACI Logistix, a logistics firm)",
    duration: "Sep 2025 – Present | Bengaluru",
    details: [
      "Designed and deployed InfoBridge AI, a RAG-based chatbot for enterprise knowledge management using LLMs (GPT-4o), significantly reducing information lookup time.",
      "Built an in-house Non-Conveyable Scan facility (UI, APIs, integrations), replacing a third-party tool, saving ~10% in revenue and improving data visibility.",
      "Fixed duplicate order failures for 5+ carriers, clearing 1,000+ packages from the daily DLQs and stabilizing downstream workflows.",
    ],
    techStack:
      "Python, FastAPI, GPT-4o, RAG, Azure AI Search, Vector Databases, .NET, C#, Azure Function Apps, Application Insights, Azure DevOps, CI/CD",
  },
  {
    title: "Software Engineer",
    company: "Corestrat (Working for ACI Logistix, a logistics firm)",
    duration: "Sep 2022 – Aug 2025 | Bengaluru",
    details: [
      "Built a robust CI/CD workflow for SQL DB objects, ensuring full version control and reliable production deployments.",
      "Designed and owned production-grade REST APIs for carrier overage webhooks, automating package handling and order creation, reducing manual intervention.",
      "Ensured 100% uptime for facility operations via proactive Raspberry Pi (RPi) log monitoring.",
      "Implemented USPS parcel postage optimization logic (SSF Priority), contributing to a ~10% improvement in profit margin on 5000+ daily parcels.",
      "Developed a webhook and event service for real-time package event flow between couriers and service providers.",
      "Designed and implemented a real-time package tracking system (BST 2.0), eliminating manual tracking errors and providing instant status updates.",
      "Automated Cainiao ticket processing, eliminating manual effort and reducing task completion time by 100%.",
    ],
    techStack:
      "Python, FastAPI, SQL, .NET, C#, REST APIs, Azure Function Apps, Event Hub, Service Bus Queue, Stored Procedures, Azure DevOps, CI/CD",
  },
  {
    title: "Software Engineer Intern",
    company: "Telaverge Communications",
    duration: "May 2022 – Aug 2022 | Bengaluru",
    details: [
      "Developed the company's official website from scratch to launch, contributing to 50% of the project's implementation.",
    ],
    techStack: "JavaScript, Node.js, REST API, WordPress, CSS, React.js, HTML5",
  },
  {
    title: "Software Engineer Intern",
    company: "SysCloud (SaaS Data Protection Platform)",
    duration: "Dec 2021 – May 2022 | Chennai",
    details: [
      "Created Node.js scripts to generate test data automatically, saving 100+ hours of manual work per month.",
      "Developed automated testing scripts using Cypress, improving test coverage by 15%.",
      "Collaborated with senior engineers to debug and troubleshoot issues, ensuring smooth product functionality.",
    ],
    techStack: "Node.js, Cypress, Automation",
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
