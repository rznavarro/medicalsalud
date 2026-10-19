import React from 'react';
import { MessageCircle, Phone, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { WA_URL_CONSULTA, PHONE_CONSULTA_RAW, trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

export const Hero: React.FC = () => {
  const h1Words = [
    'Baja', 'de', 'peso', 'con', 'un', 'médico', 'que', 'se', 'especializa', 'en', 'ti,', 'no', 'en', 'dietas', 'de', 'moda'
  ];

  return (
    <section className="relative overflow-hidden bg-[#F1F2F7] pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative organic blue SVG blobs floating smoothly */}
      <div
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#3072E0]/12 blur-2xl pointer-events-none animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[#3072E0]/10 blur-3xl pointer-events-none animate-blob"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Image (shown first on mobile for immediate human connection) */}
          <div className="lg:hidden w-full flex justify-center mb-2">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/t4-min.jpg"
                alt="Dr. Jorge Álvarez Quintero, médico especialista en sobrepeso y obesidad en La Florida"
                className="w-full h-80 object-cover object-top"
                fetchPriority="high"
                width={400}
                height={320}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#212121]">
                  Dr. Jorge Álvarez Quintero
                </span>
                <span className="text-[11px] text-[#666666] ml-auto">La Florida</span>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3072E0]/15 border border-[#3072E0]/20 text-[#3072E0] font-tag text-xs font-bold uppercase mb-4 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#3072E0]" />
              MÉDICO ESPECIALISTA EN OBESIDAD · LA FLORIDA
            </div>

            {/* H1 with word-by-word fade animation (under 600ms total) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#212121] leading-[1.15] mb-5 tracking-tight">
              {h1Words.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-1.5 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.4s ease-out forwards`,
                    animationDelay: `${index * 35}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-[#666666] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-body">
              Consulta médica de sobrepeso y obesidad con examen de{' '}
              <strong className="text-[#212121] font-semibold">Bioimpedanciometría incluido</strong>, plan
              personalizado y seguimiento. Más de 25 años de experiencia.{' '}
              <span className="text-[#3072E0] font-semibold">Atiende Fonasa y particular en La Florida.</span>
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={WA_URL_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero', 'consulta')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agenda tu hora por WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_CONSULTA_RAW}`}
                onClick={() => trackPhoneClick(PHONE_CONSULTA_RAW)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[#212121] font-semibold text-base hover:text-[#3072E0] hover:border-[#3072E0]/40 transition-all duration-200 min-h-[48px] shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#3072E0]" />
                <span>Llamar al +56 9 4404 4891</span>
              </a>
            </div>

            {/* Trust Chips Row */}
            <div className="w-full pt-4 border-t border-gray-200/80">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-[#212121]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#3072E0] shrink-0" />
                  <span>+25 años tratando obesidad</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
                  <Award className="w-4 h-4 text-[#3072E0] shrink-0" />
                  <span>Certificado World Obesity Federation</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-xs border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#3072E0] shrink-0" />
                  <span>Fonasa código 0101305</span>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Image Column */}
          <div className="hidden lg:col-span-5 lg:flex justify-end">
            <div className="relative w-full max-w-md">
              {/* Soft decorative shadow frame */}
              <div className="absolute inset-0 bg-[#3072E0]/15 rounded-3xl transform rotate-2 translate-x-2 translate-y-2" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/t4-min.jpg"
                  alt="Dr. Jorge Álvarez Quintero, médico especialista en sobrepeso y obesidad en La Florida"
                  className="w-full h-[480px] object-cover object-top hover:scale-102 transition-transform duration-500"
                  fetchPriority="high"
                  width={480}
                  height={560}
                />
                
                {/* Floating caption badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-base text-[#212121]">
                        Dr. Jorge Álvarez Quintero
                      </p>
                      <p className="text-xs text-[#666666] font-medium">
                        Médico Cirujano · Medicina Familiar
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#3072E0]/10 text-[#3072E0] font-tag text-[10px] font-bold">
                        REG. 25394-4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
