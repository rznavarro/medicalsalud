import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Award,
  GraduationCap,
  Calendar,
  Building,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { WA_URL_CONSULTA, trackWhatsAppClick } from '../utils/analytics';

export const DoctorSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countYears, setCountYears] = useState(0);
  const [countSpecs, setCountSpecs] = useState(0);
  const [countCountries, setCountCountries] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCountYears(25);
      setCountSpecs(5);
      setCountCountries(2);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate years to 25
          let startY = 0;
          const timerY = setInterval(() => {
            startY += 1;
            setCountYears(startY);
            if (startY >= 25) clearInterval(timerY);
          }, 35);

          // Animate specs to 5
          let startS = 0;
          const timerS = setInterval(() => {
            startS += 1;
            setCountSpecs(startS);
            if (startS >= 5) clearInterval(timerS);
          }, 160);

          // Animate countries to 2
          let startC = 0;
          const timerC = setInterval(() => {
            startC += 1;
            setCountCountries(startC);
            if (startC >= 2) clearInterval(timerC);
          }, 350);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const timeline = [
    {
      year: '1996',
      title: 'Doctor en Medicina y Cirugía',
      institution: 'Universidad de Guayaquil',
      details: 'Título homologado en Chile (1997) y en España (2008).',
    },
    {
      year: '2004',
      title: 'Especialista en Medicina Familiar',
      institution: 'CONACEM N° 9641',
      details: 'Certificación oficial de especialista médico en Chile.',
    },
    {
      year: '2012',
      title: 'Especialista en Medicina Estética',
      institution: 'Universitat de les Illes Balears (Mallorca, España)',
      details: 'Formación de postgrado en técnicas estéticas no invasivas.',
    },
    {
      year: '2017',
      title: 'Specialist Certification of Obesity Professional Education (SCOPE)',
      institution: 'World Obesity Federation',
      details: 'Acreditación internacional especializada en el manejo de la obesidad.',
    },
    {
      year: '2022',
      title: 'Máster en Nutrición Clínica',
      institution: 'Universidad CEU Cardenal Herrera (Valencia, España)',
      details: 'Especialización avanzada en soporte y prescripción nutricional médica.',
    },
  ];

  return (
    <section id="doctor" ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            RESPALDO PROFESIONAL COMPROBABLE
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            Te atiende el Dr. Jorge Álvarez Quintero
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            Médico Cirujano y especialista en Medicina Familiar, con formación en obesidad, nutrición
            clínica y medicina estética en Chile y España. Lleva más de 25 años acompañando a pacientes
            con sobrepeso y obesidad.
          </p>
        </div>

        {/* Doctor Grid: Photo + Counters & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Photo & Superintendent Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F1F2F7]">
              <img
                src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/t99.jpeg"
                alt="Dr. Jorge Álvarez Quintero, especialista en sobrepeso y obesidad en La Florida"
                loading="lazy"
                className="w-full h-[420px] object-cover object-top"
                width={400}
                height={420}
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-tag font-bold text-[#3072E0] shadow-sm">
                MÉDICO CONACEM N° 9641
              </div>
            </div>

            {/* Superintendencia de Salud Verification Box */}
            <div className="mt-6 w-full max-w-sm bg-[#F1F2F7] rounded-2xl p-5 border border-gray-200 flex items-center gap-4">
              <img
                src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/super.jpg"
                alt="Sello Superintendencia de Salud Chile"
                loading="lazy"
                className="w-14 h-14 object-contain shrink-0 rounded-lg bg-white p-1 border border-gray-200"
                width={56}
                height={56}
              />
              <div className="text-left">
                <p className="text-xs font-tag font-bold text-[#212121] uppercase tracking-wide">
                  Registro Colegio Médico: 25394-4
                </p>
                <p className="text-xs text-[#666666] mb-1.5">
                  Prestador individual acreditado en Chile
                </p>
                <a
                  href="https://rnpi.superdesalud.gob.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3072E0] hover:underline"
                >
                  <span>Verificar en Superintendencia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio, Animated Counters & Practice Highlights */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Animated Counters (Only real verified numbers) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="bg-[#F1F2F7] p-4 sm:p-5 rounded-2xl text-center border border-gray-100">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#3072E0] block">
                  {countYears}+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#212121] leading-tight block mt-1">
                  Años de experiencia
                </span>
              </div>

              <div className="bg-[#F1F2F7] p-4 sm:p-5 rounded-2xl text-center border border-gray-100">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#3072E0] block">
                  {countSpecs}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#212121] leading-tight block mt-1">
                  Especializaciones y títulos
                </span>
              </div>

              <div className="bg-[#F1F2F7] p-4 sm:p-5 rounded-2xl text-center border border-gray-100">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#3072E0] block">
                  {countCountries}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#212121] leading-tight block mt-1">
                  Países homologado
                </span>
                <span className="text-[11px] text-[#666666]">(Chile y España)</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-4 text-base text-[#666666] leading-relaxed mb-8">
              <p>
                Más de 25 años tratando pacientes con sobrepeso y obesidad con un enfoque médico,
                humano y basado en evidencia científica. Participa activamente en congresos
                nacionales e internacionales de obesidad, nutrición clínica y medicina familiar.
              </p>
              <div className="bg-[#3072E0]/5 border-l-4 border-[#3072E0] p-4 rounded-r-xl">
                <p className="text-sm font-medium text-[#212121]">
                  <strong>Trayectoria clínica continua:</strong> Desde 2014 se desempeña como Médico
                  Familiar en Cesfam Bernardo Leighton (Puente Alto), Médico de Familia y patologías GES en
                  Integramédica Tobalaba, y en consultas exclusivas de sobrepeso y obesidad en Medical Salud
                  (La Florida).
                </p>
              </div>
              <p className="text-sm">
                Miembro activo de la Sociedad Española de Médicos de Familia (SEMG).
              </p>
            </div>

            {/* Credential Timeline Header */}
            <h3 className="font-heading font-bold text-xl text-[#212121] mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#3072E0]" />
              Línea de tiempo de formación y especializaciones
            </h3>

            {/* Credential Timeline */}
            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#3072E0]/30 mb-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-[#3072E0] border-2 border-white ring-2 ring-[#3072E0]/20" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <span className="font-tag text-xs font-bold px-2 py-0.5 rounded bg-[#3072E0]/10 text-[#3072E0]">
                        {item.year}
                      </span>
                      <h4 className="font-heading font-bold text-base text-[#212121]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm font-semibold text-[#3072E0]">{item.institution}</p>
                    <p className="text-xs text-[#666666] mt-0.5">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={WA_URL_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('doctor', 'consulta')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agenda con el Dr. Álvarez</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
