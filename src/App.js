import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import "./App.css";

function App() {
  return (
    <>
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