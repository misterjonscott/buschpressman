'use client';

import React from 'react';
import Image from "next/image";

const SplashScreen: React.FC = () => {
  return (
    <div 
      className="relative z-0 w-full h-screen overflow-hidden transition-colors duration-500 ease-in-out bg-museum-dark"
    >
      {/* Centered Large Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full h-full max-w-6xl max-h-[70vh] bg-museum-surface/40 border-2 border-dashed border-accent-mahogany/80 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent-amber hover:bg-museum-surface/60">
          <Image 
            src="/images/2024-3_4_view.webp" 
            alt="Hero Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none text-stone-100 font-bold">
        <h1 
          className="text-center text-5xl md:text-7xl leading-tight font-display tracking-wide"
          style={{ 
            opacity: 1,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          The Missing Link: <br className="hidden md:block" /> Busch Press-Man #20247
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
