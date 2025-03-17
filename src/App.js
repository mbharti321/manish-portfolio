import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import WorkExperience from "./components/WorkExperience/WorkExperience"; // Import WorkExperience
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <WorkExperience /> {/* Add WorkExperience component */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
