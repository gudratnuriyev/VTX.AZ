import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background with slight parallax or static image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="University Architecture" 
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-neutral-50/50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
             <span className="w-12 h-[1px] bg-electric-600"></span>
             <span className="text-electric-600 font-bold uppercase tracking-widest text-sm">Gələcəyini Qur</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-neutral-900 leading-[1.1] mb-8">
            Xaricdə Təhsil <br/>
            <span className="text-neutral-400">Sizin Gələcəyinizdir.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light text-neutral-600 max-w-xl leading-relaxed mb-12 border-l border-neutral-300 pl-6">
            Türkiyə, Rusiya və Avropanın ən nüfuzlu universitetlərində təhsil alın. 
            Peşəkar komandamızla xəyallarınıza bir addım daha yaxınsınız.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-between px-8 py-4 bg-electric-600 text-white rounded-full hover:bg-electric-500 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="font-medium tracking-wide mr-4">Müraciət Et</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#services" 
              className="group flex items-center justify-center px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="font-medium tracking-wide">Xidmətlər</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};