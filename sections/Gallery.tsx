'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Focus, Search, Camera, FileText, ShieldAlert, Eye, Terminal } from 'lucide-react';

const forensicData = [
  {
    id: "hyphen",
    title: "The 'Hyphen' Nameplate",
    visual: "A tight shot of the Art Deco 'Press-Man' logo.",
    caption: "This hyphenated branding was a fleeting 1943 attempt to legitimize inherited stock. Notably, Busch prioritized this new flat badge over functionality, deliberately removing the 90-degree finger grip found on the original FR Reporter just to attach it.",
    icon: Search,
    image: "/images/workbench-nameplate.webp"
  },
  {
    id: "serial",
    title: "Serial No. 20247",
    visual: "A clear, lit shot of the stamped 20247 on the wood.",
    caption: "Originally misread as an internal tracker, this 5-digit sequence continues directly from the leftover FR Reporter bodies [cite: 1]. It proves this chassis was a standard inherited production unit pulled from the line to serve as a factory test-bed.",
    icon: FileText,
    image: "/images/20247-detail.webp"
  },
  {
    id: "viewfinder",
    title: "The Bare-Bones Top",
    visual: "Showing the absence of the pop-up viewfinder and rangefinder.",
    caption: "Unlike retail FR Reporters, this unit's top deck is completely stripped. The deliberate omission of expensive optical viewfinders or Kalart rangefinders points strictly to this camera being an internal engineering mule rather than a retail product.",
    icon: Eye,
    image: "/images/workbench-missingviewfinder.webp"
  },
  {
    id: "knobs",
    title: "The Experimental Knobs",
    visual: "A macro shot showing the linear knurling on the focusing knobs.",
    caption: "Unlike the thick, diamond-knurled knobs on the FR Reporter, this unit features thinner knobs with gridded knurling. This deviation proves Busch engineers were actively swapping hardware on this exact camera, most likely to try and fix track-slipping issues.",
    icon: Focus,
    image: "/images/workbench-knobs.webp"
  },
  {
    id: "handle",
    title: "The Pristine Handle",
    visual: "A shot of the unworn side-mounted leather carry handle.",
    caption: "The side-mounted leather handle matches the Fink-Roselieve clone design rather than Graflex's top-and-bottom lug mounts. Crucially, its pristine, unworn condition confirms this camera never saw rough field use by a press photographer.",
    icon: ShieldAlert,
    image: "/images/workbench-handle.webp"
  },
  {
    id: "scars",
    title: "The DIY Scars",
    visual: "A shot inside the wooden back showing the oversized, stripped screw holes.",
    caption: "Initially suspected to be factory prototyping marks, further inspection reveals split wood from blindly driven screws. This highlights the importance of forensic rigor, definitively proving these are likely an owner's DIY alteration in effort to upgrade the camera back.",
    icon: Camera,
    image: "/images/workbench-scars.webp"
  }
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(forensicData[0].id);
  const activeItem = forensicData.find(item => item.id === activeId) || forensicData[0];

  return (
    <section id="gallery" className="section-container relative min-h-screen flex flex-col justify-center py-20 bg-transparent text-stone-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display uppercase tracking-widest text-stone-100">
            Forensic Evidence Board
          </h2>
          <p className="text-stone-400 font-body text-base md:text-lg max-w-2xl mx-auto">
            Inspect the 6 structural anomalies and wartime artifacts discovered on Busch Pressman Unit 2024. Click any evidence file to examine the laboratory breakdown.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (The Grid / Evidence Files) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 px-2 mb-1 flex items-center justify-between">
              <span>Case Files ({forensicData.length})</span>
              <span>Status: Verified</span>
            </div>
            {forensicData.map((item, index) => {
              const IconComponent = item.icon;
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                    isSelected
                      ? 'bg-accent-mahogany/30 border-accent-mahogany shadow-lg shadow-accent-mahogany/20 translate-x-1'
                      : 'bg-museum-surface hover:bg-museum-surface/80 border-stone-800 hover:border-accent-mahogany/60 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border transition-colors shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-accent-mahogany text-white border-accent-amber'
                      : 'bg-museum-dark border-stone-800 text-accent-amber group-hover:border-accent-mahogany/60'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-mono uppercase tracking-wider ${isSelected ? 'text-accent-amber font-bold' : 'text-stone-400'}`}>
                        Evidence #{String(index + 1).padStart(2, '0')}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
                      )}
                    </div>
                    <h3 className={`font-display font-bold text-lg uppercase tracking-wide truncate ${isSelected ? 'text-stone-100' : 'text-stone-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-body truncate mt-0.5">
                      {item.visual}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (Sticky Detail Pane) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="bg-museum-surface backdrop-blur-md rounded-2xl border border-accent-mahogany/40 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Evidence header watermark stamp */}
              <div className="absolute top-4 right-6 text-accent-mahogany/20 font-mono text-5xl font-black pointer-events-none select-none tracking-tighter">
                #{activeItem.id.toUpperCase()}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-6 relative z-10"
                >
                  {/* Evidence Image */}
                  <div className="relative aspect-video w-full rounded-xl bg-museum-dark border border-accent-mahogany/30 overflow-hidden shadow-inner group">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/90 via-museum-dark/20 to-transparent" />                    
                  </div>

                  {/* Title and Badge */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-accent-mahogany/30 text-accent-amber border border-accent-mahogany/50">
                        Verified Artifact
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        ID: {activeItem.id}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-stone-100 uppercase">
                      {activeItem.title}
                    </h3>
                  </div>

                  <div className="w-16 h-0.5 bg-accent-mahogany" />

                  {/* Detailed Caption */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400">
                      Analyst Evaluation & Provenance
                    </h4>
                    <p className="text-stone-300 font-body text-base md:text-lg leading-relaxed">
                      {activeItem.caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
