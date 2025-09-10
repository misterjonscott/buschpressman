'use client';

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { MotionValue, useMotionValue } from 'framer-motion';

interface ScrollContextType {
  scrollY: number;
  scrollYProgress: MotionValue<number>;
  activeSection: string;
  sectionRefs: Map<string, React.RefObject<HTMLElement | null>>;
  registerSection: (id: string, ref: React.RefObject<HTMLElement | null>) => void;
  unregisterSection: (id: string) => void;
  getSectionProgress: (id: string) => MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: React.ReactNode;
  sectionIds: string[];
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children, sectionIds }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const scrollYProgress = useMotionValue(0);
  const sectionRefs = useRef(new Map<string, React.RefObject<HTMLElement | null>>());
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Pre-create MotionValues for all sections
  const sectionProgressValues = useRef(
    new Map(sectionIds.map(id => [id, useMotionValue(0)]))
  );

  const registerSection = useCallback((id: string, ref: React.RefObject<HTMLElement | null>) => {
    sectionRefs.current.set(id, ref);
    
    // Start observing if element exists
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
    }
  }, []);

  const unregisterSection = useCallback((id: string) => {
    const ref = sectionRefs.current.get(id);
    if (ref?.current && observerRef.current) {
      observerRef.current.unobserve(ref.current);
    }
    sectionRefs.current.delete(id);
    sectionProgressValues.current.delete(id);
  }, []);

  const getSectionProgress = useCallback((id: string): MotionValue<number> => {
    const progressValue = sectionProgressValues.current.get(id);
    if (!progressValue) {
      console.warn(`Section progress for '${id}' not found. Make sure the section ID is in the sectionIds array.`);
      // Return a fallback MotionValue - this should not happen in normal usage
      return scrollYProgress;
    }
    return progressValue;
  }, [scrollYProgress]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let ticking = false;

    const updateScrollValues = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      setScrollY(currentScrollY);
      scrollYProgress.set(progress);
      
      // Update section-specific progress
      sectionRefs.current.forEach((ref, sectionId) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionTop = rect.top + currentScrollY;
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;
          
          // Match framer-motion's offset: ["start end", "end start"]
          // "start end" = when section start hits viewport end (section enters from bottom)
          // "end start" = when section end hits viewport start (section exits from top)
          const rangeStart = sectionTop - viewportHeight;  // section start at viewport end
          const rangeEnd = sectionTop + sectionHeight;     // section end at viewport start
          const totalRange = rangeEnd - rangeStart;
          
          let sectionProgress = 0;
          if (totalRange > 0) {
            sectionProgress = Math.max(0, Math.min(1, (currentScrollY - rangeStart) / totalRange));
          }
          
          const progressValue = sectionProgressValues.current.get(sectionId);
          if (progressValue) {
            progressValue.set(sectionProgress);
          }
        }
      });
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollValues);
        ticking = true;
      }
    };

    // Set up Intersection Observer for section detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    // Observe existing sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call
    updateScrollValues();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, scrollYProgress]);

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        scrollYProgress,
        activeSection,
        sectionRefs: sectionRefs.current,
        registerSection,
        unregisterSection,
        getSectionProgress,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
