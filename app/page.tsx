"use client";

import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Recommendations from '@/sections/Recommendations';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';
import { useState } from 'react';

const Home = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  return (
    <div style={{ position: 'relative' }}>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;