'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    year: "1941",
    name: "Stolen Blueprint",
    content: "Seeking to break into the lucrative press camera market, a darkroom chemical company named Fink-Roselieve (FR) boldly reverse-engineers the 1941 Graflex 2x3 Anniversary Speed Graphic. Lacking Graflex's decades of institutional knowledge and precision tooling, they build an unauthorized, wooden clone.",
    image: "/images/borrowed-blueprints-01.webp"
  },
  {
    year: "1942",
    name: "The FR Reporter",
    content: "In October 1942, at the height of WWII material rationing, FR audaciously publishes an advertisement for the 'Reporter'. It is functionally a wooden knock-off of the Anniversary Speed Graphic, but is quickly plagued by the weaknesses of a poorly manufactured copy of Graflex's proprietary Graphic Back spring mechanism.",
    image: "/images/FRReporterfromOctober1942PopularPhotographymagazine.webp"
  },
  {
    year: "1942-1943",
    name: "The Parts-Bin Transition",
    content: "Historical evidence suggests that when Busch bought the remaining stock, they simply continued the sequential serial numbers directly from the leftover FR Reporter bodies.  Graflex executives examine these illegal wooden clones but never sue—arrogantly concluding the copied spring backs and slipping rails were so badly machined that Busch would fail trying to sell them.",
    image: "/images/20247-detail.webp"
  },
  {
    year: "1943",
    name: "The Press-Man",
    content: "Busch publishes an October 1943 ad to legitimize their inherited FR stock. Behind the scenes, standard inherited production bodies like 'Unit 20247' are pulled from the line and repurposed as factory test-beds. Engineers experiment with alternative hardware to fix the mechanical flaws, even removing the functional lens standard grip plates just to attach their new, experimental 'Press-Man' branding.",
    image: "/images/1943-busch-ad.webp"
  },
  {
    year: "1949",
    name: "The Salvation",
    content: "Having learned that reverse-engineered mechanisms fail on soft wood, Busch abandons the stolen FR blueprints. Alfred E. Little is granted US Patent 2,482,348 for a superior cam-operated locking mechanism, birthing the legendary, aircraft-grade aluminum Busch Pressman Model C and Model D cameras.",
    image: "/images/patent-screenshot.webp"
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineData[activeIndex];

  return (
    <section id="timeline" className="section-container relative min-h-screen flex flex-col justify-between py-12 md:py-20 z-0 bg-transparent text-stone-300">
      {/* Top 1/3: Header & Horizontal Timeline */}
      <div className="container mx-auto px-4 max-w-5xl flex flex-col items-center justify-center pt-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center font-display uppercase tracking-widest border-b border-accent-mahogany/60 pb-4 w-full text-stone-100">
          The Timeline
        </h2>

        {/* Timeline Nav Bar */}
        <div className="relative w-full max-w-5xl flex justify-between items-center px-6 my-6">
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-accent-mahogany/40 -translate-y-1/2 z-0" />
          {timelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex flex-col items-center group transition-all duration-300 bg-transparent border-0 cursor-pointer"
              style={{ outline: "none", boxShadow: "none", WebkitTapHighlightColor: "transparent" }}
              aria-label={`Select ${item.name}`}
            >
              <span className={`absolute -top-6 text-xs font-display tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                index === activeIndex ? "text-accent-amber font-bold" : "text-stone-400 group-hover:text-stone-200"
              }`}>
                {item.year}
              </span>
              <div className={`w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center border-2 ${
                index === activeIndex 
                  ? "bg-accent-mahogany border-accent-amber scale-125 shadow-md" 
                  : "bg-museum-surface border-stone-700 group-hover:border-accent-mahogany"
              }`} />
              <span className={`absolute top-7 text-xs font-display tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                index === activeIndex ? "text-accent-amber font-bold" : "text-stone-400 group-hover:text-stone-200"
              }`}>
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom 2/3: Preview Window */}
      <div className="container mx-auto px-4 max-w-5xl flex-grow flex items-center pb-12 mt-16 md:mt-12">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-museum-surface p-8 md:p-12 rounded-2xl border border-accent-mahogany/40 shadow-2xl relative overflow-hidden"
        >
          {/* Image Side (Left - 5 cols) - Only render if image exists */}
          {activeItem.image && (
            <div className="md:col-span-5 relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-accent-mahogany/30 shadow-inner group">
              <Image
                src={activeItem.image}
                fill
                alt={activeItem.name}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/60 via-transparent to-transparent opacity-60" />
            </div>
          )}

          {/* Text Side (Right - 7 cols when image exists, full width when no image) */}
          <div className={`flex flex-col justify-center text-left space-y-6 ${activeItem.image ? 'md:col-span-7' : 'md:col-span-12'}`}>
            <div>
              <span className="text-xs font-display tracking-widest text-accent-amber uppercase block mb-2">
                Milestone Record
              </span>
              <h3 className="text-2xl md:text-4xl font-black font-display tracking-tight text-stone-100 uppercase">
                {activeItem.name}
              </h3>
            </div>
            <div className="w-16 h-0.5 bg-accent-mahogany" />
            <p className="text-stone-300 font-body leading-relaxed text-base md:text-lg">
              {activeItem.content}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
