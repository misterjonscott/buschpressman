'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Conclusion = () => {
  return (
    <motion.section
      id="conclusion"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative min-h-screen flex flex-col justify-center items-center py-24 bg-transparent text-stone-300 border-t border-accent-mahogany/30"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Part 1: The Summary (Centered) */}
        <div className="max-w-4xl mx-auto text-center bg-museum-surface text-stone-100 p-10 md:p-14 rounded-2xl shadow-2xl border border-accent-mahogany/40 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-stone-800 font-mono text-9xl opacity-25 select-none pointer-events-none">
            2024
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent-amber font-mono mb-4 block">
            Enduring Significance
          </span>
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic tracking-wide text-stone-100 leading-relaxed">
            &ldquo;Unit 20247 is the physical fingerprint of the moment Busch stopped being a copycat and started being an innovator.&rdquo;
          </blockquote>
        </div>

      </div>
    </motion.section>
  );
};

export default Conclusion;
