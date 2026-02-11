import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BookOpen, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAFAFA]">

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border-[1px] border-vtx-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            x: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border-[1px] border-vtx-accent/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 mb-8">
              <span className="w-12 h-[2px] bg-gradient-to-r from-vtx-primary to-vtx-accent"></span>
              <span className="text-vtx-primary font-bold uppercase tracking-[0.2em] text-sm">Gələcəyini Qur</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-10">
              Xaricdə <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vtx-primary to-vtx-accent">
                Təhsil
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-neutral-600 max-w-lg leading-relaxed mb-12 border-l-2 border-vtx-secondary/30 pl-8">
              Dünyanın ən nüfuzlu universitetlərində yerinizi indidən bron edin.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group flex items-center justify-between px-10 py-5 bg-neutral-900 text-white rounded-full hover:bg-vtx-primary transition-colors duration-300 w-full sm:w-auto shadow-2xl shadow-neutral-900/20"
              >
                <span className="font-medium tracking-wide mr-4">Müraciət Et</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="group flex items-center justify-center px-10 py-5 bg-white border border-neutral-200 text-neutral-900 rounded-full hover:border-vtx-secondary hover:text-vtx-primary transition-all duration-300 w-full sm:w-auto shadow-lg shadow-neutral-200/50"
              >
                <span className="font-medium tracking-wide">Xidmətlər</span>
              </motion.a>
            </div>
          </motion.div>

          {/* 3D Visual Composition */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Main Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-10 left-10 w-[80%] h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10 border-[6px] border-white"
            >
              <img
                src="https://picsum.photos/800/1000?grayscale"
                alt="Student"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vtx-primary/80 to-transparent mix-blend-multiply"></div>
            </motion.div>

            {/* Floating Glass Stats Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-20 right-0 glass p-6 rounded-2xl w-48 z-20"
            >
              <Globe className="text-vtx-accent mb-3" size={32} />
              <div className="text-3xl font-bold text-neutral-900">50+</div>
              <div className="text-sm text-neutral-500 font-medium">Ölkə</div>
            </motion.div>

            {/* Floating Glass Stats Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-20 left-0 glass p-6 rounded-2xl w-56 z-20 flex items-center space-x-4"
            >
              <div className="bg-vtx-primary/10 p-3 rounded-full">
                <GraduationCap className="text-vtx-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">100%</div>
                <div className="text-xs text-neutral-500 font-medium">Qəbul Zəmanəti</div>
              </div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-[-20px] w-32 h-32 bg-vtx-accent/20 rounded-full blur-2xl z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
