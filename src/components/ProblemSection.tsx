import React from 'react';
import { RefreshCw, Activity, HeartPulse, ArrowRight, MessageCircle } from 'lucide-react';
import { WA_URL_CONSULTA, trackWhatsAppClick } from '../utils/analytics';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      icon: RefreshCw,
      title: 'Dietas que no duran',
      description: 'Bajas rápido y luego recuperas lo perdido.',
      highlight: 'Efecto rebote frustrante',
    },
    {
      icon: Activity,
      title: 'No sabes qué te pasa por dentro',
      description: 'La pesa no dice cuánta grasa y cuánto músculo tienes.',
      highlight: 'Falta de datos reales',
    },
    {
      icon: HeartPulse,
      title: 'Tu salud está en juego',
      description: 'El exceso de grasa aumenta el riesgo de hipertensión, diabetes, enfermedad cardíaca y artrosis.',
      highlight: 'Impacto médico a futuro',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            COMPRENSIÓN MÉDICA INTEGRAL
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-5">
            ¿Has probado de todo y el peso vuelve?
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
            No es falta de fuerza de voluntad. La obesidad es una condición médica donde influyen la
            herencia, el entorno, la alimentación y la actividad física. Por eso las dietas drásticas
            casi siempre fallan a largo plazo.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#F1F2F7] rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 group"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#3072E0]/10 flex items-center justify-center text-[#3072E0] mb-6 group-hover:bg-[#3072E0] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#3072E0] tracking-wide uppercase font-tag block mb-1">
                    {card.highlight}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#212121] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Banner & CTA */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#3072E0]/10 via-[#3072E0]/5 to-transparent rounded-2xl p-6 sm:p-8 border-l-4 border-[#3072E0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-xs uppercase font-tag font-bold text-[#3072E0] tracking-wider mb-1">
              ENFOQUE CLÍNICO REALISTA
            </p>
            <p className="font-heading font-bold text-lg sm:text-xl text-[#212121] leading-snug">
              La buena noticia: bajar entre un 5% y un 10% de tu peso ya mejora tu salud de forma real.
            </p>
          </div>
          
          <a
            href={WA_URL_CONSULTA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero', 'consulta')}
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px] w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Quiero empezar mi tratamiento</span>
          </a>
        </div>

      </div>
    </section>
  );
};
