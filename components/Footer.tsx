import React from 'react';
import { CONTACT_INFO, BRAND_NAME, NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 border-t border-white/10 pt-24 pb-12 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-vtx-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-3 mb-8">
              <img src="/logo.png" alt={BRAND_NAME} className="h-12 w-auto brightness-0 invert" />
              <span className="text-3xl font-bold tracking-tighter text-white">
                {BRAND_NAME.toUpperCase()}
              </span>
            </a>
            <p className="text-xl text-neutral-400 font-light max-w-sm mb-8 leading-relaxed">
              Gələcəyinizi bu gündən planlaşdırın. Bizimlə arzularınıza çatmaq daha asandır.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-vtx-primary hover:border-vtx-primary hover:scale-110 transition-all duration-300 bg-white/5 backdrop-blur-sm shrink-0"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vtx-accent mb-8">Naviqasiya</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-vtx-accent mb-8">Əlaqə</h4>
            <ul className="space-y-6">
              <li className="flex items-start group cursor-pointer">
                <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vtx-primary transition-colors shrink-0">
                  <MapPin className="text-white/70 group-hover:text-white" size={16} />
                </div>
                <span className="text-neutral-400 group-hover:text-white transition-colors leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <div className="mr-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vtx-primary transition-colors shrink-0">
                  <Phone className="text-white/70 group-hover:text-white" size={16} />
                </div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-neutral-400 group-hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center group cursor-pointer">
                <div className="mr-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vtx-primary transition-colors shrink-0">
                  <Mail className="text-white/70 group-hover:text-white" size={16} />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-400 group-hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Bütün hüquqlar qorunur.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Məxfilik Siyasəti</a>
            <a href="#" className="hover:text-white transition-colors">Şərtlər</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
