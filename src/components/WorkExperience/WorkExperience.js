import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const experiences = [
  {
    title: "Software Engineer",
    company: "Corestrat (Working for ACI Logistix, a logistics company)",
    duration: "Sep 2022 – Present | Bengaluru",
    details: [
      "Built a robust CI/CD workflow for SQL DB objects, streamlining production deployments with 100% version control.",
      "Implemented SSFPriority for postage calculation, increasing profit margin by 10%.",
      "Designed and implemented BST 2.0, eliminating manual tracking errors and enhancing real-time package status updates.",
      "Developed a webhook and event service for real-time package event flow between couriers and service providers.",
      "Automated Cainiao Ticket Processing, resulting in a 100% reduction in manual task completion time.",
      "Implemented authentication and logging for APIs and migrated applications to manage identity, improving security and debugging.",
      "Developed and deployed 4 internal projects using Python and Flask for REST API creation.",
    ],
    techStack:
      "Python, Flask, SQL, .NET, C#, Azure Function Apps, Event Hub, Service Bus Queue, Stored Procedures, Virtual Machines, Azure DevOps, CI/CD",
  },
  {
    title: "Data Engineer",
    company: "Corestrat (Working for ACI Logistix, a logistics company)",
    duration: "Apr 2023 – Sep 2023 | Bengaluru",
    details: [
      "Built data pipelines, automating archive data retrieval, improving efficiency by 90%, and reducing manual intervention.",
      "Achieved 40% cost reduction by converting archived Azure blob files to data lake parquet files.",
      "Developed Power BI dashboards, reducing manual data lookup time by ~40% and improving decision-making.",
    ],
    techStack:
      "Python, Azure Synapse, Pipelines, Apache Spark, Selenium, Stored Procedures, Automation",
  },
  {
    title: "Software Engineer Intern",
    company: "SysCloud (SaaS Data Protection Platform, Chennai)",
    duration: "Dec 2021 – Aug 2022",
    details: [
      "Created Node.js scripts to generate test data automatically, saving 100+ hours of manual work per month.",
      "Developed automated testing scripts using Cypress, improving test coverage by 15%.",
      "Collaborated with senior engineers to debug and troubleshoot issues, ensuring smooth product functionality.",
    ],
    techStack: "Node.js, Cypress, Automation",
  },
  {
    title: "Software Engineer Intern",
    company: "Telaverge Communications, Bengaluru",
    duration: "",
    details: [
      "Developed the company’s official website from scratch to launch, contributing to 50% of the project's implementation.",
    ],
    techStack: "JavaScript, Node.js, REST API, WordPress, CSS, React.js, HTML5",
  },
];

function WorkExperience() {
  return (
    <section id="work-experience">
      <Container style={{ marginTop: "2rem" }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Work Experience
            </Typography>
            <Grid container spacing={3}>
              {experiences.map((experience, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {experience.title}
                      </Typography>
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
                      <Box component="ul" sx={{ pl: 2 }}>
                        {experience.details.map((detail, idx) => (
                          <li key={idx}>
                            <Typography variant="body1">{detail}</Typography>
                          </li>
                        ))}
                      </Box>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 2 }}
                      >
                        <strong>Tech Stack:</strong> {experience.techStack}
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

export default WorkExperience;
