import React from "react";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      <div className="experience">
        <h3>Software Engineer</h3>
        <p>
          Corestrat (Working for ACI Logistix, a logistics company) | Sep 2022 –
          Present | Bengaluru
        </p>
        <ul>
          <li>
            Built a robust CI/CD workflow for SQL DB objects, streamlining
            production deployments with 100% version control.
          </li>
          <li>
            Implemented SSFPriority for postage calculation, increasing profit
            margin by 10%.
          </li>
          <li>
            Designed and implemented BST 2.0, eliminating manual tracking errors
            and enhancing real-time package status updates.
          </li>
          <li>
            Developed a webhook and event service for real-time package event
            flow between couriers and service providers.
          </li>
          <li>
            Automated Cainiao Ticket Processing, resulting in a 100% reduction
            in manual task completion time.
          </li>
          <li>
            Implemented authentication and logging for APIs and migrated
            applications to manage identity, improving security and debugging.
          </li>
          <li>
            Developed and deployed 4 internal projects using Python and Flask
            for REST API creation.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> Python, Flask, SQL, .NET, C#, Azure
          Function Apps, Event Hub, Service Bus Queue, Stored Procedures,
          Virtual Machines, Azure DevOps, CI/CD
        </p>
      </div>

      <div className="experience">
        <h3>Data Engineer</h3>
        <p>
          Corestrat (Working for ACI Logistix, a logistics company) | Apr 2023 –
          Sep 2023 | Bengaluru
        </p>
        <ul>
          <li>
            Built data pipelines, automating archive data retrieval, improving
            efficiency by 90%, and reducing manual intervention.
          </li>
          <li>
            Achieved 40% cost reduction by converting archived Azure blob files
            to data lake parquet files.
          </li>
          <li>
            Developed Power BI dashboards, reducing manual data lookup time by
            ~40% and improving decision-making.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> Python, Azure Synapse, Pipelines, Apache
          Spark, Selenium, Stored Procedures, Automation
        </p>
      </div>

      <div className="experience">
        <h3>Software Engineer Intern</h3>
        <p>
          SysCloud (SaaS Data Protection Platform, Chennai) | Dec 2021 – Aug
          2022
        </p>
        <ul>
          <li>
            Created Node.js scripts to generate test data automatically, saving
            100+ hours of manual work per month.
          </li>
          <li>
            Developed automated testing scripts using Cypress, improving test
            coverage by 15%.
          </li>
          <li>
            Collaborated with senior engineers to debug and troubleshoot issues,
            ensuring smooth product functionality.
          </li>
        </ul>
      </div>

      <div className="experience">
        <h3>Software Engineer Intern</h3>
        <p>Telaverge Communications, Bengaluru</p>
        <ul>
          <li>
            Developed the company’s official website from scratch to launch,
            contributing to 50% of the project's implementation.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> JavaScript, Node.js, REST API, WordPress,
          CSS, React.js, HTML5
        </p>
      </div>
    </section>
  );
}

export default WorkExperience;
