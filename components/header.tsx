"use client";

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from "react";
import Image from "next/image";

// Define the props interface
interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setIsOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 20; // 20px offset
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  if (!isClient) {
    return null;
  }

  const renderTitle = () => {
    switch (currentSection) {
      case "home": return "Welcome to My Portfolio";
      case "about": return "About Me";
      case "snapshots": return "Snapshots";
      case "projects": return "My Projects";
      case "skills": return "Skills & Expertise";
      case "recommendations": return "What Others Say";
      case "contact": return "Get in Touch";
      default: return "";
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background shadow-md z-10">
      <div className="flex items-center justify-between mx-auto px-4 py-2 h-12"> {/* h-12 sets height to 50px */}
        {currentSection === "home" ? (
          <Image 
        src="/images/jon-scott-portfolio-logo.png" 
        alt="Jon Scott UX Portfolio Logo" 
        style={{ width: "auto", height: "auto" }}
        width={267}
        height={47}
          />
        ) : (
          <h1 className="pacifico-font text-xl md:text-2xl">
        {renderTitle()}
          </h1>
        )}
        <div className="block md:hidden">
          <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle Menu"
        className="p-2 rounded-md hover:bg-muted"
          >
        <Menu size={24} />
          </button>
        </div>
        <div className="hidden md:flex gap-4">
          {["home", "about", "snapshots", "projects", "skills", "recommendations", "contact"].map((section) => (
        <button
          key={section}
          onClick={() => handleNavigation(section)}
          className={`px-3 py-1.5 rounded-md ${
            currentSection === section 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-muted"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 w-full h-full bg-background z-20 
                    flex md:hidden flex-col items-end justify-end p-4 pb-20"
        >
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          <div className="mt-4 flex flex-col items-end"> {/* Stack buttons */}
            {["home", "about", "snapshots", "projects", "skills", "recommendations", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`px-3 py-1.5 rounded-md mb-2 ${
                  currentSection === section 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
