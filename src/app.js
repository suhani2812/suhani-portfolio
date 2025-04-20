import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollSpider from './components/ScrollSpider';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollPosition(position);
      setDocumentHeight(height);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <ScrollSpider 
        scrollPosition={scrollPosition} 
        documentHeight={documentHeight}
      />
    </div>
  );
}

export default App;
