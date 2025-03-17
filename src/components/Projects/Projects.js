import React from "react";
import "./Projects.css"; // You'll need to create this CSS file

function Projects() {
  const projects = [
    {
      title: "LocalBuzz",
      description:
        "A community-driven platform connecting local businesses with residents, featuring user-friendly design and real-time updates.",
      //   image: 'path/to/localbuzz.jpg', // Add your image path
      //   link: '#', // Add your project link
    },
    {
      title: "CI/CD Workflow for SQL DB",
      description:
        "Streamlined production deployments with full version control at Corestrat, improving efficiency.",
      //   image: 'path/to/cicd.jpg', // Add your image path
      //   link: '#', // Add your project link
    },
    {
      title: "BST 2.0 for Logistics",
      description:
        "Eliminated manual tracking errors and enhanced real-time package status updates at ACI Logistix.",
      //   image: 'path/to/bst.jpg', // Add your image path
      //   link: '#', // Add your project link
    },
    {
      title: "PowerBI Dashboards",
      description:
        "Developed dashboards to reduce manual data lookup time by ~40% and improve decision-making.",
      //   image: 'path/to/powerbi.jpg', // Add your image path
      //   link: '#', // Add your project link
    },
    {
      title: "Automated Cainiao Ticket Processing",
      description:
        "Built automation that achieved 100% task completion time reduction.",
      //   image: 'path/to/cainiao.jpg', // Add your image path
      //   link: '#', // Add your project link
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* {project.image && <img src={project.image} alt={project.title} />} */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
