'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { Brush, Code, UserRound } from "lucide-react"; 
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    icon: UserRound,
    title: "User Research",
    description: "My natural curiosity and empathy help me uncover critical details that lead to winning product strategies.",
    color: "bg-purple-600/50",
    inputRange: [0.4, 0.5, 0.6],
  },
  {
    icon: Brush,
    title: "UI Design",
    description: "I design seamless user journeys, rapidly validate designs, and deliver UX that drives tangible business outcomes.",
    color: "bg-purple-600/50",
    inputRange: [0.45, 0.55, 0.65],
  },
  {
    icon: Code,
    title: "Development",
    description: "I build robust front-end systems, enforce uncompromising UI standards, and empower teams to deliver stunning solutions.",
    color: "bg-purple-600/50",
    inputRange: [0.5, 0.6, 0.7],
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  // Use Framer Motion's useScroll hook directly on the section's ref
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div 
      ref={sectionRef}
      id="about" // Add ID for navigation
      className="section-container relative min-h-screen flex items-center justify-center flex-col" 
    >
      <div className="flex flex-col md:flex-row items-center text-center gap-4 pb-8 max-w-[90%] md:max-w-[60%] mx-auto">
        <Image
          src="/images/jon-scott.webp"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-full flex-none max-w-[40%] md:max-w-full"
        />
        <div className="text-left">
          <h1 className="text-5xl">Staff Design Engineer & UX Architect</h1>
            <p className="mt-4 flex-1 text-l md:text-2xl">
            My 20 years in UI engineering and 10 in UX design transform bold visions into impactful, accessible interfaces that drive peak user engagement. 🚀
            </p>
        </div>
      </div>
      <div className="container max-w-[80%] mx-auto px-4 py-4 md:py-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            // Use useTransform hooks locally for each feature
            const iconScale = useTransform(scrollYProgress, feature.inputRange, [1, 2, 1]);
            const circleScale = useTransform(scrollYProgress, feature.inputRange, [1, 1.2, 1]);
            const circleOpacity = useTransform(scrollYProgress, feature.inputRange, [0, 1, 0]);

            return (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center p-2 rounded-lg bg-card/50 hover:bg-card/75 transition-colors w-full md:w-1/3 h-full"
              >
                <div className="relative mb-2 md:flex flex-col items-center justify-center hidden">
                  <motion.div style={{ scale: iconScale }}>
                    <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />
                  </motion.div>
                  <motion.div 
                    style={{ opacity: circleOpacity, scale: circleScale, zIndex: -10 }}
                    className={`absolute h-16 w-16 ${feature.color} rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                  />
                </div>
                <div className="flex flex-row md:flex-col items-center space-x-2">
                  <IconComponent className="h-8 w-8 text-primary md:hidden" aria-hidden="true" />
                  <h3 className="text-3xl font-medium offside-font text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;