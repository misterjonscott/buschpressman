"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";

interface Item {
  id: number;
  logo: string;
  title: string;
  text: string;
}

const items: Item[] = [
  { id: 1, logo: 'images/logos/react.png', title: 'React', text: 'React and I have been building dynamic, component-based user interfaces for almost a decade. React\' scalability and performance, coupled with countless open source components and libraries, make it my go-to choice for responsive UI.' },
  { id: 2, logo: 'images/logos/figma.png', title: 'Figma', text: 'I use Figma for UI/UX design, icon illustration, rapid-prototyping, design-system reference and much more.  Figma facilitates quick creation of wireframes, interactive prototypes, and high-fidelity mockups for user-centered design.' },
  { id: 3, logo: 'images/logos/node.png', title: 'Node.js', text: 'Node is a back-end for your front-end leveraging javascript to allow the creation of fast APIs and quick backends for prototyping a new UI.' },
  { id: 4, logo: 'images/logos/git.png', title: 'Git', text: 'My experiences with Git include fixing all sorts of "oh no" moments for myself and my team.  Git is an amazing tool for version control and collaborative development, while the branching, merging, and resolving conflicts should all follow strict guidelines.' },
  { id: 5, logo: 'images/logos/mui.png', title: 'Material UI', text: 'When a project doesn\'t have an existing design library, I often leverage Material UI for rapid development of accessible and customizable UI components.  Much like Chakra, MUI allows me to focus on efficient and consistent UI implementation, building the custom components that we need instead of recreating common elements.' },
  { id: 6, logo: 'images/logos/next.png', title: 'Next.js', text: 'Next is capable of developing high-performance, SEO-friendly React applications using server-side rendering and static site generation.  It\'s not for every project, but when it fits, the value is quickly evident.' },
  { id: 7, logo: 'images/logos/sass.png', title: 'Sass', text: 'Many styling frameworks use the techniques that make Sass valuable like nesting blocks to acheive high specificity while eliminating the chance for unwanted collisions, and the ability to re-use blocks of code.' },
  { id: 8, logo: 'images/logos/typescript.png', title: 'TypeScript', text: 'Javascript has a wise partner in TypeScript, allowing me to  build robust and maintainable applications that use static typing to prevent errors and improve code quality.' },
  { id: 9, logo: 'images/logos/chakra.png', title: 'Chakra UI', text: 'When a project doesn\'t have an existing design library, I often leverage Chakra UI for rapid development of accessible and customizable UI components.  Chakra allows me to focus on efficient and consistent UI implementation, building the custom components that we need instead of recreating common elements.' },
];

const topGroup = items.slice(0, 5);
const bottomGroup = items.slice(5, 9);

const Skills: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setTooltipContent(null);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateXTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['-100vw', '0vw', '100vw']
  );

  const translateXBottom = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['100vw', '0vw', '-100vw']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 0.5]
  );
  
  const frameOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );

  const frameScale = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0.9, 1, 0.9]
  );

  // NEW: Transform for the "Hover to learn more" text
  const textOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.5, 0.52],
    [0, 1, 0]
  );
  
  const handleMouseEnter = (item: Item) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    setTooltipContent(item.text);
  };

  const handleMouseLeave = () => {
    debounceTimeoutRef.current = window.setTimeout(() => {
      setTooltipContent(null);
    }, 50);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="section-container flex items-center justify-center min-h-[150vh] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* TODO: The box is shifting side to side */}
      <motion.div
        style={{ opacity: frameOpacity, scale: frameScale }}
        className="absolute inset-0 m-auto w-[1000px] h-[400px] border-4 border-blue-400 rounded-lg bg-blue-400/10 backdrop-blur-sm z-0 flex items-center justify-center"
      >
        {/* TODO: The text is missing on mobile */}
        <motion.p
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.45, 0.5, 0.55], // Expanded range for visibility
              [0, 1, 0]
            ),
          }}
          className="text-black font-bold tracking-widest text-center pacifico-font text-2xl md:text-6xl"
        >
          Hover to learn more
        </motion.p>
      </motion.div>
      
      <div className="absolute w-full h-[100vh] flex flex-col items-center justify-center">
        <motion.div 
          style={{ translateX: translateXTop, opacity }} 
          className="w-full flex justify-center gap-16 relative top-[-60px]"
        >
          {topGroup.map((item) => (
            <Button 
              key={item.id}
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
          ))}
        </motion.div>

        <motion.div 
          style={{ translateX: translateXBottom, opacity }} 
          className="w-full flex justify-center gap-16 relative top-[60px]"
        >
          {bottomGroup.map((item) => (
            <Button 
              key={item.id}
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
            transform: `translateY(${mousePosition.y > window.innerHeight / 2 ? '-100%' : '0'})`,
          }}
        >
          {tooltipContent}
        </Card>
      )}
    </section>
  );
};

export default Skills;