import React from 'react';
import { DESTINATIONS } from '../constants';

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-32 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Destinasiyalar
        </h2>
        <p className="text-neutral-400 font-light mt-4 md:mt-0 max-w-md text-right">
          Sərhədləri aşın. Dünyanın müxtəlif ölkələrində təhsil imkanlarını kəşf edin.
        </p>
      </div>

      <div className="relative w-full">
        {/* Horizontal Marquee / Scroll Area */}
        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 no-scrollbar gap-4 md:gap-8 snap-x snap-mandatory">
          {DESTINATIONS.map((dest, index) => (
            <div 
              key={dest} 
              className="snap-start shrink-0 w-[280px] h-[360px] md:w-[400px] md:h-[500px] relative group overflow-hidden rounded-none md:rounded-lg"
            >
               <img 
                src={`https://picsum.photos/400/500?random=${index + 10}&grayscale`} 
                alt={dest} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-electric-600/20 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="h-[1px] w-full bg-white/20 mb-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <h3 className="text-4xl font-light tracking-wide text-white group-hover:translate-x-2 transition-transform duration-300">
                  {dest}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                   Təhsil imkanlarını araşdırın &rarr;
                </p>
              </div>
            </div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="w-12 shrink-0"></div>
        </div>
      </div>
    </section>
  );
};