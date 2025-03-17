import React from 'react';
import './Header.css';

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header>
      <h1>Manish Bharti</h1>
      <nav>
        <ul>
          <li><a href="#about" onClick={() => handleScroll('#about')}>About</a></li>
          <li><a href="#skills" onClick={() => handleScroll('#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleScroll('#projects')}>Projects</a></li>
          <li><a href="#work-experience" onClick={() => handleScroll('#work-experience')}>Work Experience</a></li>
          <li><a href="#contact" onClick={() => handleScroll('#contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;