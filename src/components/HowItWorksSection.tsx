import React from 'react';
import { MessageSquare, Stethoscope, LineChart, ArrowRight, MessageCircle } from 'lucide-react';
import { WA_URL_CONSULTA, trackWhatsAppClick } from '../utils/analytics';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      icon: MessageSquare,
      title: 'Escríbenos por WhatsApp',
      description: 'Te damos una hora de lunes, martes, jueves o viernes en la tarde.',
      badge: 'Agendamiento rápido',
    },
    {
      step: '2',
      icon: Stethoscope,
      title: 'Consulta + Bioimpedanciometría',
      description: 'El doctor te evalúa y mide tu composición corporal con InBody.',
      badge: 'Examen InBody incluido',
    },
    {
      step: '3',
      icon: LineChart,
      title: 'Tu plan y seguimiento',
      description: 'Recibes un plan personalizado y en cada control vemos tu avance real.',
      badge: 'Evolución medible',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#F1F2F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            PASO A PASO
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            Empezar es simple
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            Un proceso claro, empático y orientado a cuidar tu salud desde el primer día.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3072E0]/10 text-[#3072E0] flex items-center justify-center group-hover:bg-[#3072E0] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-3xl text-gray-200 group-hover:text-[#3072E0]/30 transition-colors">
                      0{item.step}
                    </span>
                  </div>

                  <span className="font-tag text-[11px] font-bold text-[#3072E0] uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  
                  <h3 className="font-heading font-bold text-xl text-[#212121] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#666666] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-50 flex items-center text-xs font-semibold text-[#3072E0]">
                  <span>Paso {item.step} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={WA_URL_CONSULTA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('pasos', 'consulta')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Agenda tu hora por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
