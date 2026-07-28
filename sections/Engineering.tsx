'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Engineering = () => {
  return (
    <motion.section
      id="engineering"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen flex flex-col justify-center items-center py-24 bg-transparent text-stone-300 border-t border-b border-accent-mahogany/30"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-text-aluminum font-mono mb-3 block">
            Chapter 4: The Fix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-widest text-stone-100 mb-4">
            The Fix
          </h2>
          <div className="w-16 h-1 bg-accent-mahogany mx-auto mb-6"></div>
          <p className="text-stone-400 font-body text-lg max-w-2xl mx-auto">
            Transitioning from flawed wooden chassis to precision aircraft-grade aluminum.
          </p>
        </div>

        {/* Split-pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The Realization (The Scars) */}
          <div className="bg-surface-aluminum border border-stone-300 p-8 md:p-10 rounded-xl shadow-lg flex flex-col justify-between h-full text-stone-900">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-300">
                <span className="text-xs font-mono tracking-widest text-text-aluminum uppercase">
                  Evidence // Unit 2024
                </span>
                <span className="text-xs font-mono px-2.5 py-1 bg-red-100 text-red-800 rounded font-bold">
                  FLAW DETECTED
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-stone-900 mb-6">
                The Wood Fails
              </h3>
              <p className="font-body text-stone-800 leading-relaxed text-base md:text-lg mb-6">
                The extraneous screw holes inside Unit 2024&apos;s wooden chassis tell a story of frustration. The wood was too soft. As engineers attempted to mount complex, heavy-duty rotating backs and precise focusing tracks, the mahogany stripped and warped.
              </p>
              <p className="font-body text-stone-800 leading-relaxed text-base md:text-lg">
                Unit 2024 was the crucible that proved reverse-engineering the wooden Graflex was a dead end.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-300 text-xs font-mono text-text-aluminum flex items-center justify-between">
              <span>MATERIAL: MAHOGANY CHASSIS</span>
              <span>STATUS: DEPRECATED</span>
            </div>
          </div>

          {/* Right Column: The Salvation (The Patent) */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-text-aluminum uppercase block mb-2">
                Engineering Solution
              </span>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-stone-100 mb-4">
                The Aluminum Pivot
              </h3>
            </div>

            {/* Patent Card */}
            <div className="patent-card p-6 md:p-8 rounded-lg shadow-xl border border-stone-300 bg-surface-aluminum text-stone-900">
              <div className="flex justify-between items-start border-b border-stone-300 pb-4 mb-6">
                <div>
                  <span className="text-xs tracking-widest text-text-aluminum block mb-1 font-mono">PATENT DOCUMENT</span>
                  <span className="text-sm font-bold font-mono text-stone-900">US 2,482,629</span>
                </div>
                <div className="text-right">
                  <span className="text-xs tracking-widest text-text-aluminum block mb-1 font-mono">DATE ISSUED</span>
                  <span className="text-sm font-bold font-mono text-stone-900">SEPTEMBER 20, 1949</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-text-aluminum uppercase block font-mono">Title</span>
                  <h4 className="text-base font-bold font-display text-stone-900 uppercase tracking-wide mt-1">
                    &ldquo;Cam Operated Locking Means For Camera Focusing Mechanisms&rdquo;
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-xs text-text-aluminum uppercase block font-mono">Inventor</span>
                    <span className="text-sm font-medium font-body text-stone-800">Alfred E. Little</span>
                  </div>
                  <div>
                    <span className="text-xs text-text-aluminum uppercase block font-mono">Assignee</span>
                    <span className="text-sm font-medium font-body text-stone-800">Busch Precision Camera Corp.</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-300 pt-4 flex items-center justify-between text-xs text-text-aluminum font-mono">
                <span>OFFICIAL RECORD</span>
                <span className="text-emerald-700 font-bold">APPROVED &amp; PATENTED</span>
              </div>
            </div>

            {/* Copy below card */}
            <p className="font-body text-stone-300 leading-relaxed text-base md:text-lg">
              To accommodate Alfred E. Little&apos;s advanced locking mechanisms and a new rotating back, Busch was forced to abandon wood entirely. This pivot birthed the Model C and Model D—cameras built from aircraft-grade aluminum that were smaller, tougher, and more advanced than Graflex models of the era.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Engineering;
