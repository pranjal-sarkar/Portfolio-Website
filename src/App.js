import React from 'react';

// importing stylesheet
import './App.css';

// importing components
import About from './Sections/About/About';
import Skills from './Sections/Skills/Skills';
import Work from './Sections/Work/Work';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact Me/Contact';
import Footer from './Sections/Footer/Footer.tsx';

const App = () => {
  return (
    <>
      <About />

      <Skills />

      <Work />

      <Projects />

      <Contact />

      <Footer />
    </>
  )
}

export default App