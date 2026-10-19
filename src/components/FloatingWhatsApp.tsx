import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_URL_CONSULTA, trackWhatsAppClick } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Appears after 1 second as specified
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out">
      <a
        href={WA_URL_CONSULTA}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('flotante', 'consulta')}
        aria-label="Contactar por WhatsApp para agendar consulta médica"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl animate-whatsapp-pulse transition-all duration-300 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] shrink-0" />
        
        {/* Label on desktop or tablet for maximum clarity */}
        <span className="hidden sm:inline font-heading font-bold text-sm tracking-wide">
          ¿Deseas agendar? Escríbenos
        </span>

        {/* Online Indicator Badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white" />
        </span>
      </a>
    </div>
  );
};
