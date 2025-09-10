"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Recommendations from '@/sections/Recommendations';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';
import { ScrollProvider, useScrollContext } from '@/contexts/ScrollContext';

const HomeContent = () => {
  const { activeSection } = useScrollContext();
  const [currentSection, setCurrentSection] = useState('home');
  
  // This useEffect ensures the header highlights the correct section on initial load or scroll
  // and keeps the state in sync with the scroll position
  useEffect(() => {
    if (activeSection) {
      setCurrentSection(activeSection);
    }
  }, [activeSection]);
  


  return (
    <div style={{ position: 'relative' }}>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <section id="home" className="relative">
        <Hero />
      </section>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="projects" className="relative">
        <Projects />
      </section>
      <section id="skills" className="relative">
        <Skills />
      </section>
      <section id="recommendations" className="relative">
        <Recommendations />
      </section>
      <section id="contact" className="relative">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

const Home = () => {
  const sectionIds = ["home", "about", "projects", "skills", "recommendations", "contact"];
  
  return (
    <ScrollProvider sectionIds={sectionIds}>
      <HomeContent />
    </ScrollProvider>
  );
};

export default Home;
