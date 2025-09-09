'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Brush, Code, UserRound } from "lucide-react"; 
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    icon: UserRound,
    title: "User Research",
    description: "Insight to Impact: I unearth critical user truths that fuel winning product strategies and deliver undeniable clarity for user-centric innovation.",
    color: "bg-purple-600/50",
    inputRange: [0.4, 0.5, 0.6],
  },
  {
    icon: Brush,
    title: "UI Design",
    description: "Intuitive Engagement, Measurable Results: I architect seamless user journeys, rapidly validate designs, and deliver UX that drives tangible business outcomes.",
    color: "bg-purple-600/50",
    inputRange: [0.45, 0.55, 0.65],
  },
  {
    icon: Code,
    title: "Development",
    description: "Scalable UI Excellence: I build robust front-end systems, enforce uncompromising UI standards, and empower teams to deliver high-performing, stunning solutions.",
    color: "bg-purple-600/50",
    inputRange: [0.5, 0.6, 0.7],
  },
];

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-container py-[10em] md:my-[10rem]" 
      aria-labelledby="about-heading"
    >
      <div className="flex flex-row items-center text-center gap-4 pb-8 max-w-[60%] mx-auto">
        <Image
          src="/images/sardino.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-full flex-none"
        />
        <p className="mt-4 flex-1 text-2xl">
          UX/UI Leader: Delivering impactful realities from bold ideas, empowering teams to redefine user engagement.
        </p>
      </div>
      <div className="container max-w-[80%] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const iconScale = useTransform(scrollYProgress, feature.inputRange, [1, 2, 1]);
            const circleScale = useTransform(scrollYProgress, feature.inputRange, [1, 1.2, 1]);
            const circleOpacity = useTransform(scrollYProgress, feature.inputRange, [0, 1, 0]);

            return (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center p-4 rounded-lg bg-card/50 hover:bg-card/75 transition-colors w-full md:w-1/3 h-full"
              >
                <div className="relative mb-2 flex flex-col items-center justify-center">
                  <motion.div style={{ scale: iconScale }}>
                    <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />
                  </motion.div>
                  <motion.div 
                    style={{ opacity: circleOpacity, scale: circleScale, zIndex: -10 }}
                    className={`absolute h-16 w-16 ${feature.color} rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                  />
                </div>
                <h3 className="text-3xl font-medium pacifico-font text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;