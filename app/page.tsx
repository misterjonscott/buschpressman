"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/sections/About';
import Snapshots from '@/sections/Snapshots';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Recommendations from '@/sections/Recommendations';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';
import { ScrollProvider, useScrollContext } from '@/contexts/ScrollContext';

const SECTION_IDS = ["home", "about", "snapshots", "projects", "skills", "recommendations", "contact"];

const HomeContent = () => {
  const { activeSection } = useScrollContext();
  const [currentSection, setCurrentSection] = useState('home');
  
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
      <section id="snapshots" className="relative">
        <Snapshots />
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
  return (
    <ScrollProvider sectionIds={SECTION_IDS}>
      <HomeContent />
    </ScrollProvider>
  );
};

export default Home;