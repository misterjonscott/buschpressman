'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MyStory() {
  return (
    <section id="mystory" className="section-container relative min-h-screen flex flex-col items-center py-20 bg-transparent text-stone-300">
      
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center pt-8">
        
        {}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display uppercase tracking-widest border-b border-accent-mahogany/60 pb-4 text-stone-100">
            My Story
          </h2>
          <p className="text-stone-400 font-body text-base md:text-lg max-w-2xl mx-auto">
            The personal journey behind the discovery, research, and preservation of Busch Pressman Unit 20247.
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full bg-museum-surface p-8 md:p-12 rounded-2xl border border-accent-mahogany/40 shadow-2xl relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-mahogany/80"></div>
          <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wider text-stone-100 mb-6 flex items-center gap-4">
            <span className="text-accent-amber text-sm block pt-1">01.</span> 
            The Rubbermaid Tote
          </h3>
          <div className="space-y-6 text-stone-300 font-body text-base md:text-lg leading-relaxed">
            <p>
              For two decades, Unit 20247 sat in a plastic Rubbermaid tote in the back of my bedroom closet. It survived multiple moves, nestled safely alongside a 2-foot-tall Darth Vader figure, an old coin collection, and a handful of childhood toys. 
            </p>
            <p>
              The collection came to me after my Great Grandfather passed away. I was told he had been a passionate camera collector, a hobby sparked during his travels in the war. Unfortunately, I never really got the chance to know him. In the late 1970s, he suffered a severe brain injury from a traffic accident and was moved to an assisted living facility for the remainder of his life. 
            </p>
            <p>
              I looked after my portion of his collection out of a sense of familial obligation. To me, this particular piece was just a heavy, mysterious &quot;old land camera.&quot; It wasn&apos;t until twenty years had passed that I finally realized I didn&apos;t have to hold onto everything forever. It was time to figure out exactly what I had.
            </p>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="w-full bg-museum-surface p-8 md:p-12 rounded-2xl border border-accent-mahogany/40 shadow-2xl relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-mahogany/80"></div>
          <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wider text-stone-100 mb-6 flex items-center gap-4">
            <span className="text-accent-amber text-sm block pt-1">02.</span> 
            The Rabbit Hole
          </h3>
          <div className="space-y-6 text-stone-300 font-body text-base md:text-lg leading-relaxed">
            <p>
              The mystery began with a simple Google Lens search, which confidently identified the boxy antique as a &quot;Busch Pressman&quot;. But as I looked closer, the confidence faded. The logo on my camera - a hyphenated &quot;Press-Man&quot; - didn&apos;t match any of the standard models online. Furthermore, almost none of the physical features aligned with the all-metal Busch Pressman cameras that dominate the vintage market today.
            </p>
            <blockquote className="border-l-4 border-accent-amber pl-6 py-2 my-8 italic text-xl text-stone-400 font-display">
              Once I realized I had something unusual, I couldn&apos;t resist the draw to learn more. <em>What was this camera, and why wasn&apos;t there another one like it?</em>
            </blockquote>
            <p>
              I spent hours scouring eBay, diving into obscure photography auction sites, and reading through old publications. Finally, in an archived edition of the <em>Graflex Historic Quarterly</em>, I spotted a reference to it. One clue led to another, and I eventually tracked down an original, printed 1943 advertisement featuring the exact, unusual model sitting on my desk. Naturally, I bought the ad immediately.
            </p>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="w-full bg-museum-surface p-8 md:p-12 rounded-2xl border border-accent-mahogany/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-mahogany/80"></div>
          <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wider text-stone-100 mb-6 flex items-center gap-4">
            <span className="text-accent-amber text-sm block pt-1">03.</span> 
            The Display & The Future
          </h3>
          <div className="space-y-6 text-stone-300 font-body text-base md:text-lg leading-relaxed">
            <p>
              &quot;I&apos;m a maker by trade, and my immediate plan for Unit 20247 is to construct a museum-quality display case that hangs on the wall, proudly featuring the camera alongside the original 1943 print ad I tracked down.&quot; 
            </p>
            <p>
              But building a physical box wasn&apos;t enough; the history surrounding this camera was too rare not to document. I built this website wondering: <em>What if there are others out there who are seeking the exact same story I sought?</em> I wanted a place where they could find the answers, explore the forensic history, and reach out to connect.
            </p>
            <p>
              Will I sell it? Probably, eventually. I absolutely love the mystery, the research, and the satisfaction of shining a light on forgotten history. But at the end of the day, I&apos;m a maker - not a camera collector. When the time is right, Unit 20247 will likely move on to someone who can truly appreciate its place in the lineage of American photography. Until then, it finally has a story.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}