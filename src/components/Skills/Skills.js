import React from "react";
import "./Skills.css"; // You'll need to create this CSS file

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>.NET</li>
            <li>REST APIs</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Material UI</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Data Engineering</h3>
          <ul>
            <li>Azure Synapse</li>
            <li>PySpark</li>
            <li>ETL</li>
            <li>Data Pipelines</li>
            <li>Power BI</li>
            <li>Automation</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DevOps & Cloud</h3>
          <ul>
            <li>Azure (Function Apps, Storage, etc.)</li>
            <li>Azure DevOps</li>
            <li>CI/CD Pipelines</li>
            <li>GitHub</li>
            <li>AWS Foundations</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Other Skills</h3>
          <ul>
            <li>Data Structures</li>
            <li>Selenium</li>
            <li>Jira</li>
            <li>Blockchain Fundamentals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
