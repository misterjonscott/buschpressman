"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Item {
  id: number;
  logo: string;
  title: string;
  text: string;
}

const items: Item[] = [
  { id: 1, logo: "images/logos/react.png", title: "React", text: "React and I have been building dynamic, component-based user interfaces for almost a decade. React' scalability and performance, coupled with countless open source components and libraries, make it my go-to choice for responsive UI." },
  { id: 2, logo: "images/logos/figma.png", title: "Figma", text: "I use Figma for UI/UX design, icon illustration, rapid-prototyping, design-system reference and much more.  Figma facilitates quick creation of wireframes, interactive prototypes, and high-fidelity mockups for user-centered design." },
  { id: 3, logo: "images/logos/node.png", title: "Node.js", text: "Node is a back-end for your front-end leveraging javascript to allow the creation of fast APIs and quick backends for prototyping a new UI." },
  { id: 4, logo: "images/logos/git.png", title: "Git", text: "My experiences with Git include fixing all sorts of 'oh no' moments for myself and my team.  Git is an amazing tool for version control and collaborative development, while the branching, merging, and resolving conflicts should all follow strict guidelines." },
  { id: 5, logo: "images/logos/mui.png", title: "Material UI", text: "When a project doesn't have an existing design library, I often leverage Material UI for rapid development of accessible and customizable UI components.  Much like Chakra, MUI allows me to focus on efficient and consistent UI implementation, building the custom components that we need instead of recreating common elements." },
  { id: 6, logo: "images/logos/next.png", title: "Next.js", text: "Next is capable of developing high-performance, SEO-friendly React applications using server-side rendering and static site generation.  It's not for every project, but when it fits, the value is quickly evident." },
  { id: 7, logo: "images/logos/sass.png", title: "Sass", text: "Many styling frameworks use the techniques that make Sass valuable like nesting blocks to acheive high specificity while eliminating the chance for unwanted collisions, and the ability to re-use blocks of code." },
  { id: 8, logo: "images/logos/typescript.png", title: "TypeScript", text: "Javascript has a wise partner in TypeScript, allowing me to  build robust and maintainable applications that use static typing to prevent errors and improve code quality." },
  { id: 9, logo: "images/logos/chakra.png", title: "Chakra UI", text: "When a project doesn't have an existing design library, I often leverage Chakra UI for rapid development of accessible and customizable UI components.  Chakra allows me to focus on efficient and consistent UI implementation, building the custom components that we need instead of recreating common elements." },
];

const topGroup = items.slice(0, 5);
const bottomGroup = items.slice(5, 9);

// Variants for the container and child items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for each icon
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const frameVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const Skills: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback((item: Item) => {
    setTooltipContent(item.text);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltipContent(null);
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  return (
    <section
      id="skills"
      className="section-container flex items-center justify-center min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 m-auto max-w-[1000px] h-[400px] border-4 border-blue-400 rounded-lg bg-blue-400/10 z-0 flex items-center justify-center p-4 md:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={frameVariants}
      >
        <motion.p
          className="text-black font-bold tracking-widest text-center pacifico-font text-2xl md:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Hover to learn more
        </motion.p>
      </motion.div>

      <div className="absolute w-full h-[100vh] flex flex-col items-center justify-center">
        <motion.div
          className="w-full flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 relative top-[-60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {topGroup.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Button
                className="group bg-transparent p-0 h-28 w-28 hover:bg-transparent"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col items-center p-4">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="w-full flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-16 relative top-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {bottomGroup.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Button
                className="group bg-transparent p-0 h-28 w-28 hover:bg-transparent"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col items-center p-4">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {tooltipContent && (
        <Card
          className="fixed z-50 p-4 max-w-xs transition-opacity duration-150 text-foreground shadow-lg
                    bg-white/30 backdrop-blur-sm dark:bg-black/30 border border-white/20 dark:border-black/20"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y + 20,
            transform: `translateY(${mousePosition.y > window.innerHeight / 2 ? "-100%" : "0"})`,
          }}
        >
          {tooltipContent}
        </Card>
      )}
    </section>
  );
};

export default Skills;