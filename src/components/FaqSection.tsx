import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: '¿Qué incluye la consulta de obesidad en Medical Salud?',
    answer:
      'La consulta con el Dr. Jorge Álvarez Quintero incluye la evaluación médica y un examen de Bioimpedanciometría con equipo InBody, que mide tu composición corporal (grasa y músculo por segmento) para crear un plan individualizado y hacer seguimiento.',
  },
  {
    question: '¿Atienden con Fonasa?',
    answer:
      'Sí. La consulta médica se atiende con Fonasa (código 0101305) y también de forma particular.',
  },
  {
    question: '¿Quién puede hacerse Onda Plus?',
    answer:
      'Personas con normopeso, sobrepeso u obesidad grado 1 que quieren reducir grasa localizada en zonas específicas. Con un grado mayor de obesidad, se recomienda primero bajar de peso y luego remodelar la figura.',
  },
  {
    question: '¿Cuántas sesiones de Onda Plus necesito y cuánto tarda la recuperación?',
    answer:
      'Normalmente 4 sesiones, separadas por 20 a 30 días, según la piel y el área a tratar. Es ambulatorio: vuelves a tu rutina el mismo día. Se recomienda alimentación equilibrada y actividad física regular.',
  },
  {
    question: '¿Dónde y cuándo atienden?',
    answer:
      'En Vicuña Mackenna Poniente 6843, oficina 511, Edificio Máxima, La Florida, Santiago. Lunes, martes, jueves y viernes de 16:00 a 20:30 hrs. Se agenda por WhatsApp o al +56 9 4404 4891.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 md:py-28 bg-[#F1F2F7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            Todo lo que necesitas saber antes de tu primera consulta médica o sesión.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all duration-200 hover:border-[#3072E0]/40"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3072E0]"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#212121]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#3072E0] text-white rotate-45'
                        : 'bg-gray-100 text-[#666666] rotate-0'
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-96 pb-6 pt-1 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-[#666666] text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
