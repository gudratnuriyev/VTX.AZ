import React from 'react';

export const WhatsAppButton: React.FC = () => {
    const phoneNumber = "994102120308";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Contact us on WhatsApp"
        >
            <img
                src="/whatsapp.svg"
                alt="WhatsApp"
                className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300"
            />
            {/* Tooltip */}
            <span className="absolute right-20 bg-neutral-900 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10 uppercase tracking-widest font-bold">
                Bizimlə əlaqə
            </span>
        </a>
    );
};
