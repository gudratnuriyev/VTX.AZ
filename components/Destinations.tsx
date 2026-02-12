import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '../constants';

export const Destinations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DESTINATIONS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
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

      <div
        className="container mx-auto px-6 md:px-12 relative z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden group cursor-grab active:cursor-grabbing touch-pan-y focus:outline-none"
          role="region"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={DESTINATIONS[currentIndex].image}
                alt={DESTINATIONS[currentIndex].name}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end pointer-events-none">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
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

          {/* Slide Indicator */}
          <div className="absolute top-12 right-12 flex space-x-2 z-20">
            {DESTINATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-12 bg-vtx-accent" : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
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
