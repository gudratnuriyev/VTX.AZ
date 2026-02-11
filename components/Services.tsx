import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-vtx-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-vtx-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-8">
              Bizim <span className="text-vtx-primary">Xidmətlər</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-vtx-primary to-vtx-accent rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white border border-neutral-100 p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-vtx-primary/10 hover:-translate-y-2 ${service.colSpan}`}
            >
              {/* Background Image if available */}
              {service.bgImage && (
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                  <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover opacity-0 group-hover:opacity-10 grayscale transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-neutral-50 rounded-2xl group-hover:bg-vtx-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-vtx-accent group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-vtx-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed group-hover:text-neutral-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
