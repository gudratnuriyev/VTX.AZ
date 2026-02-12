import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, NAVIGATION_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      >
        <div className="glass px-8 py-3 rounded-full mx-6 shadow-2xl border border-white/20 flex items-center justify-between w-full max-w-7xl">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt={BRAND_NAME} className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
            <span className="text-base sm:text-xl font-bold tracking-tighter text-vtx-primary transition-colors duration-300">
              {BRAND_NAME.toUpperCase()}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-6">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-full text-neutral-600 hover:text-vtx-primary hover:bg-vtx-primary/5 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-6 py-2 text-sm font-medium rounded-full bg-vtx-primary text-white shadow-lg hover:shadow-vtx-accent/25 hover:-translate-y-0.5 hover:bg-vtx-primary/90 transition-all duration-300"
            >
              Müraciət Et
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-neutral-900 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-white/60 z-40 flex flex-col justify-center items-center"
          >
            <motion.div
              className="flex flex-col space-y-8 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-light tracking-tighter text-neutral-900 hover:text-vtx-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
