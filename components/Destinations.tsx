import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { DESTINATIONS } from '../constants';

export const Destinations: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} id="destinations" className="py-32 bg-neutral-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between relative z-10">
        <div>
          <span className="text-vtx-accent font-bold tracking-widest uppercase text-sm mb-4 block">Dünyanı Kəşf Et</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            Destinasiyalar
          </h2>
        </div>
        <p className="text-neutral-400 font-light mt-6 md:mt-0 max-w-md text-right text-lg">
          Sərhədləri aşın. Dünyanın müxtəlif ölkələrində təhsil imkanlarını kəşf edin.
        </p>
      </div>

      <div className="relative w-full h-[600px] flex items-center">
        <motion.div style={{ x }} className="flex gap-12 pl-12">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest}
              className="relative group w-[400px] h-[550px] shrink-0 rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02, rotate: -2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={`https://picsum.photos/400/550?random=${index + 10}&grayscale`}
                alt={dest}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="h-[2px] w-16 bg-vtx-accent mb-6 transition-all duration-500 group-hover:w-full"></div>

                <h3 className="text-6xl font-black tracking-tighter text-white text-stroke transition-all duration-300 group-hover:text-shadow-glow">
                  {dest}
                </h3>

                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-vtx-secondary mt-4 font-medium tracking-wide translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    Təhsil imkanlarını araşdırın &rarr;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[500px] bg-vtx-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};
