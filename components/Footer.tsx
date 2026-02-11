import React from 'react';
import { CONTACT_INFO, BRAND_NAME, NAVIGATION_LINKS } from '../constants';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-50 border-t border-neutral-200 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-3 mb-8">
              <img src="/logo.png" alt={BRAND_NAME} className="h-12 w-auto" />
              <span className="text-3xl font-bold tracking-tighter text-neutral-900">
                {BRAND_NAME.toUpperCase()}
              </span>
            </a>
            <p className="text-xl text-neutral-600 font-light max-w-sm mb-8">
              Gələcəyinizi bu gündən planlaşdırın. Bizimlə əlaqə saxlayın.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-vtx-accent hover:border-vtx-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-vtx-accent hover:border-vtx-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-vtx-accent hover:border-vtx-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6">Naviqasiya</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-600 hover:text-vtx-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6">Əlaqə</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="mr-3 text-vtx-accent mt-1" size={18} />
                <span className="text-neutral-600">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-vtx-accent" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-neutral-600 hover:text-vtx-accent">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-vtx-accent" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-600 hover:text-vtx-accent">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-medium uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Bütün hüquqlar qorunur.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-600">Məxfilik Siyasəti</a>
            <a href="#" className="hover:text-neutral-600">Şərtlər</a>
          </div>
        </div>
      </div>
    </footer>
  );
};