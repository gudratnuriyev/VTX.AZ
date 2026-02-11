import React from 'react';
import { SERVICES_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 mb-6">
            Bizim Xidmətlər
          </h2>
          <div className="w-full h-[1px] bg-neutral-200 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-neutral-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 ${service.colSpan}`}
            >
              {/* Background Image if available */}
              {service.bgImage && (
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                  <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 grayscale transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-neutral-50 rounded-2xl group-hover:bg-vtx-accent group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="text-neutral-300 group-hover:text-vtx-accent transition-colors" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed group-hover:text-neutral-700">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};