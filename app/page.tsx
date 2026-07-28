'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'framer-motion';
import Header from '@/components/header';
import SplashScreen from '@/components/hero';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archive 2024 | The Missing Link in Busch Pressman History',
  description: 'A digital forensic archive exploring the history, espionage, and engineering of the rare 1943 wooden Busch Pressman 20247 test mule.',
  keywords: ['Busch Pressman', 'Graflex', 'Large Format Camera', 'Vintage Camera', 'Camera History'],
}


// Dynamically import all sections
const Timeline = dynamic(() => import('@/sections/Timeline'), { ssr: false });
const Gallery = dynamic(() => import('@/sections/Gallery'), { ssr: false });
const Conclusion = dynamic(() => import('@/sections/Conclusion'), { ssr: false });
const Contact = dynamic(() => import('@/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const Home = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const activeSectionRef = useRef('home');

  const homeRef = useRef(null);
  const timelineRef = useRef(null);
  const galleryRef = useRef(null);
  const conclusionRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { margin: "-50% 0px -50% 0px" });
  const isTimelineInView = useInView(timelineRef, { margin: "-50% 0px -50% 0px" });
  const isGalleryInView = useInView(galleryRef, { margin: "-50% 0px -50% 0px" });
  const isConclusionInView = useInView(conclusionRef, { margin: "-50% 0px -50% 0px" });
  const isContactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    const newActiveSection = 
      (isHomeInView && 'home') ||
      (isTimelineInView && 'timeline') ||
      (isGalleryInView && 'gallery') ||
      (isConclusionInView && 'conclusion') ||
      (isContactInView && 'contact');

    if (newActiveSection && newActiveSection !== activeSectionRef.current) {
      activeSectionRef.current = newActiveSection;
      setCurrentSection(newActiveSection);
    }
  }, [
    isHomeInView,
    isTimelineInView,
    isGalleryInView,
    isConclusionInView,
    isContactInView,
  ]);
  
  return (
    <div style={{ position: 'relative' }} className='h-full'>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <section id="home" ref={homeRef} className="relative">
        <SplashScreen />
      </section>
      <section id="timeline" ref={timelineRef} className="relative">
        <Timeline />
      </section>
      <section id="gallery" ref={galleryRef} className="relative">
        <Gallery />
      </section>
      <section id="conclusion" ref={conclusionRef} className="relative">
        <Conclusion />
      </section>
      <section id="contact" ref={contactRef} className="relative">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
