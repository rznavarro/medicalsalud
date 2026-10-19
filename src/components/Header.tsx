import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { WA_URL_CONSULTA, PHONE_CONSULTA_RAW, trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tratamientos', href: '#tratamientos' },
    { name: 'El doctor', href: '#doctor' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#3072E0] text-white font-semibold rounded-lg shadow-lg outline-none ring-2 ring-white"
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#3072E0] rounded-lg">
            <img
              src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/logo_MS.png"
              alt="Medical Salud - Consulta Dr. Jorge Álvarez Quintero"
              className="h-10 sm:h-12 w-auto object-contain"
              width={160}
              height={48}
              onError={(e) => {
                // Graceful text fallback if external host is ever restricted
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-[#212121] tracking-tight leading-none group-hover:text-[#3072E0] transition-colors">
                Medical Salud
              </span>
              <span className="font-tag text-[10px] text-[#666666] tracking-wider uppercase mt-1">
                Dr. Jorge Álvarez Quintero
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#666666] hover:text-[#3072E0] font-medium text-sm transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE_CONSULTA_RAW}`}
              onClick={() => trackPhoneClick(PHONE_CONSULTA_RAW)}
              className="flex items-center gap-2 text-sm font-semibold text-[#212121] hover:text-[#3072E0] transition-colors px-2 py-1 rounded"
              title="Llamar a consulta médica"
            >
              <Phone className="w-4 h-4 text-[#3072E0]" />
              <span className="hidden lg:inline">+56 9 4404 4891</span>
            </a>

            <a
              href={WA_URL_CONSULTA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header', 'consulta')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <span>Agenda tu hora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${PHONE_CONSULTA_RAW}`}
              onClick={() => trackPhoneClick(PHONE_CONSULTA_RAW)}
              aria-label="Llamar por teléfono a Medical Salud"
              className="p-2.5 text-[#3072E0] bg-[#3072E0]/10 rounded-full hover:bg-[#3072E0]/20 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 text-[#212121] hover:text-[#3072E0] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col gap-3" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-[#212121] hover:bg-gray-50 rounded-lg text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={WA_URL_CONSULTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick('header', 'consulta');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#3072E0] text-white text-center font-bold text-base shadow flex items-center justify-center gap-2"
                >
                  <span>Agenda tu hora por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PHONE_CONSULTA_RAW}`}
                  onClick={() => {
                    trackPhoneClick(PHONE_CONSULTA_RAW);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-[#666666] hover:text-[#3072E0]"
                >
                  Llamar al +56 9 4404 4891
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
