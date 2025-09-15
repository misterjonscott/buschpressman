'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/sections/About';
import Snapshots from '@/sections/Snapshots';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Recommendations from '@/sections/Recommendations';
import Contact from '@/sections/Contact';
import Footer from '@/components/footer';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('home');

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const snapshotsRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const recommendationsRef = useRef(null);
  const contactRef = useRef(null);

  // Use useInView hook for each section
  const isHomeInView = useInView(homeRef, { margin: "-50% 0px -50% 0px" });
  const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const isSnapshotsInView = useInView(snapshotsRef, { margin: "-50% 0px -50% 0px" });
  const isProjectsInView = useInView(projectsRef, { margin: "-50% 0px -50% 0px" });
  const isSkillsInView = useInView(skillsRef, { margin: "-50% 0px -50% 0px" });
  const isRecommendationsInView = useInView(recommendationsRef, { margin: "-50% 0px -50% 0px" });
  const isContactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isHomeInView) setCurrentSection('home');
    else if (isAboutInView) setCurrentSection('about');
    else if (isSnapshotsInView) setCurrentSection('snapshots');
    else if (isProjectsInView) setCurrentSection('projects');
    else if (isSkillsInView) setCurrentSection('skills');
    else if (isRecommendationsInView) setCurrentSection('recommendations');
    else if (isContactInView) setCurrentSection('contact');
  }, [
    isHomeInView,
    isAboutInView,
    isSnapshotsInView,
    isProjectsInView,
    isSkillsInView,
    isRecommendationsInView,
    isContactInView,
  ]);
  
  return (
    <div style={{ position: 'relative' }}>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <section id="home" ref={homeRef} className="relative">
        <Hero />
      </section>
      <section id="about" ref={aboutRef} className="relative">
        <About />
      </section>
      <section id="snapshots" ref={snapshotsRef} className="relative">
        <Snapshots />
      </section>
      <section id="projects" ref={projectsRef} className="relative">
        <Projects />
      </section>
      <section id="skills" ref={skillsRef} className="relative">
        <Skills />
      </section>
      <section id="recommendations" ref={recommendationsRef} className="relative">
        <Recommendations />
      </section>
      <section id="contact" ref={contactRef} className="relative">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;