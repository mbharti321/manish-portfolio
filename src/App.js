import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "#f5f5f5", // Light gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />      
      <Container style={{ marginTop: "2rem" }}>
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
