import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Image Replacement */}
          <div className="relative">
            {/* Image Container */}
            <div className="aspect-square relative overflow-hidden bg-neutral-800">
              <img 
                src="https://res.cloudinary.com/dbaexdgd3/image/upload/v1767427992/Cresia_qhf1bs.png" 
                alt="Paridhi and Nandinee, Founders of CRESIA" 
                className="w-full h-full object-cover"
              />
              
              {/* Optional: Subtle dark overlay so the image blends with the dark theme */}
              <div className="absolute inset-0 bg-neutral-950/20"></div>
            </div>
            
            {/* Offset Border Effect (The outline behind the image) */}
            <div className="absolute top-4 -left-4 w-full h-full border border-neutral-700 -z-10"></div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase block mb-6 font-sans">
              About CRESIA
            </span>
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-8 font-serif">
              Built by founders,<br />for founders.
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed font-light text-lg font-sans">
              <p>
                We realized that most agencies treat startups like small versions of big corporations. They're not. Startups are chaotic, resource-constrained, and need velocity above all else.
              </p>
              <p>
                CRESIA was born to solve the "Growth Gap", that awkward phase where you're too big for DIY builders but not ready for a six-figure enterprise agency.
              </p>
              <p>
                We don't sell hours. We sell completed systems. Our goal isn't to keep you on a retainer forever; it's to build your digital foundation so strong that you can eventually outgrow us.
              </p>
            </div>
            
            {/* Footer / Signature */}
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-white font-serif text-sm">
                  P&N
                </div>
                <div>
                  <p className="text-white font-medium font-serif">Paridhi & Nandinee</p>
                  <p className="text-neutral-500 text-sm font-sans">
                    Founders, CRESIA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
