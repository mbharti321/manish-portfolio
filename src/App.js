import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Manish Bharti | Software Engineer & Blockchain Explorer</title>
        <meta name="description" content="Portfolio of Manish Bharti - Software Engineer, Blockchain Explorer, Data Engineer, Azure Developer. Explore my projects, skills, and experience." />
        <meta name="keywords" content="Manish Bharti, Software Engineer, Blockchain, Azure, Data Engineer, React, Python, Portfolio, Developer, Bengaluru, Full Stack, Cloud, DevOps, Projects, Resume" />
        <meta name="author" content="Manish Bharti" />
        <link rel="canonical" href="https://manishbharti.in/" />
        <meta property="og:title" content="Manish Bharti | Software Engineer & Blockchain Explorer" />
        <meta property="og:description" content="Portfolio of Manish Bharti - Software Engineer, Blockchain Explorer, Data Engineer, Azure Developer. Explore my projects, skills, and experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manishbharti.in/" />
        <meta property="og:image" content="https://manishbharti.in/images/manish-profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manish Bharti | Software Engineer & Blockchain Explorer" />
        <meta name="twitter:description" content="Portfolio of Manish Bharti - Software Engineer, Blockchain Explorer, Data Engineer, Azure Developer. Explore my projects, skills, and experience." />
        <meta name="twitter:image" content="https://manishbharti.in/images/manish-profile.png" />
        <meta name="twitter:site" content="@_manishbharti" />
      </Helmet>
      <Header />
      <Box className="about-section">
        {/* <Container maxWidth="md">
          <Box className="about-box">
          </Box>
        </Container> */}
            <About />
      </Box>
      <Container className="main-section">
        <Skills />
        <WorkExperience />
        {/* <Projects /> */}
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;