import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ShaderBackground from "./components/ShaderBackground";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "transparent", // Changed to transparent to let the shader show
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: {
      fontWeight: 800, // Extra bold for About section
      fontSize: "3.5rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Shader background with reduced opacity */}
      <ShaderBackground opacity={0.5} />
      
      {/* Transparent Header */}
      <Header />      
      
      {/* Landing section with prominent About */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Box 
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: 6,
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <About />
          </Box>
        </Container>
      </Box>
      
      {/* Other sections with regular styling */}
      <Container 
        sx={{ 
          marginTop: "2rem", 
          marginBottom: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: 4,
          paddingBottom: 6,
          borderRadius: 2,
        }}
      >
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