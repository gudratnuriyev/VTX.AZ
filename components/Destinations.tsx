import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DESTINATIONS } from '../constants';

export const Destinations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DESTINATIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length);
  };

  return (
    <section id="destinations" className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between relative z-10">
        <div>
          <span className="text-vtx-accent font-bold tracking-widest uppercase text-sm mb-4 block">Dünyanı Kəşf Et</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            Destinasiyalar
          </h2>
        </div>
        <p className="text-neutral-400 font-light mt-6 md:mt-0 max-w-md md:text-right text-lg">
          Sərhədləri aşın. Dünyanın müxtəlif ölkələrində təhsil imkanlarını kəşf edin.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={DESTINATIONS[currentIndex].image}
                alt={DESTINATIONS[currentIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="h-1 w-24 bg-vtx-accent mb-8"></div>
                  <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
                    {DESTINATIONS[currentIndex].name}
                  </h3>
                  <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-xl">
                    Bu ölkədə təhsil almaq xəyallarınızı reallaşdırmaq üçün bizə müraciət edin.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-vtx-primary hover:border-vtx-primary transition-all duration-300 group/btn"
              aria-label="Previous destination"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-vtx-primary hover:border-vtx-primary transition-all duration-300 group/btn"
              aria-label="Next destination"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slide Indicator */}
          <div className="absolute top-12 right-12 hidden md:flex space-x-2">
            {DESTINATIONS.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-12 bg-vtx-accent" : "w-6 bg-white/20"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vtx-primary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};
