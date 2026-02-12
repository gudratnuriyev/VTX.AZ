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
                  <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/80 via-35% to-transparent to-65%"></div>
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="mb-4 text-electric-500 group-hover:text-electric-600 transition-colors duration-300 bg-white/50 w-fit p-3 rounded-xl backdrop-blur-sm shadow-sm group-hover:shadow-md">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-electric-600 transition-colors duration-300 drop-shadow-sm">
                  {service.title}
                </h3>

                <p className="text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300 font-medium leading-relaxed max-w-[90%]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
