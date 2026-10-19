import React from 'react';
import { Check, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import {
  WA_URL_CONSULTA,
  WA_URL_ONDA,
  trackWhatsAppClick,
} from '../utils/analytics';

export const TreatmentsSection: React.FC = () => {
  return (
    <section id="tratamientos" className="py-20 md:py-28 bg-[#F1F2F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
            TRATAMIENTOS MÉDICOS INTEGRALES
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            Dos caminos, un mismo médico
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            Atención clínica especializada para el tratamiento del sobrepeso y la remodelación corporal sin cirugía en La Florida.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Consulta de Obesidad (Destacada) */}
          <div className="bg-white rounded-2xl border-2 border-[#3072E0] shadow-xl overflow-hidden flex flex-col justify-between relative group hover:shadow-2xl transition-all duration-300">
            {/* Top featured badge */}
            <div className="bg-[#3072E0] text-white px-4 py-2 text-xs font-tag font-bold uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Tratamiento Principal
              </span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">
                Incluye Bioimpedanciometría InBody
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Image preview with InBody bioimpedance */}
              <div className="mb-6 rounded-xl overflow-hidden bg-[#F1F2F7] border border-gray-100 flex items-center justify-center p-3 h-52">
                <img
                  src="https://www.medicalsalud.cl/demo_files/images/thematics/medical/bio_web.png"
                  alt="Examen de Bioimpedanciometría InBody en Medical Salud La Florida"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  width={340}
                  height={190}
                />
              </div>

              <span className="font-tag text-xs font-bold uppercase text-[#3072E0] tracking-wide mb-1 block">
                ATENCIÓN CON FONASA Y PARTICULAR
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#212121] mb-3">
                Consulta médica de sobrepeso y obesidad
              </h3>
              
              <p className="text-[#666666] text-base leading-relaxed mb-6">
                Evaluación médica completa + examen InBody de composición corporal. Sabrás exactamente
                qué segmentos de tu cuerpo tienen más grasa y dónde falta músculo, para armar un plan
                individualizado y medir tu avance en cada control.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-6 text-sm sm:text-base font-medium text-[#212121]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3072E0]/15 flex items-center justify-center text-[#3072E0] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Plan de alimentación realista</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3072E0]/15 flex items-center justify-center text-[#3072E0] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Seguimiento de tu composición corporal</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3072E0]/15 flex items-center justify-center text-[#3072E0] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Fonasa (código 0101305) y particular</span>
                </li>
              </ul>

              {/* Price placeholder tag */}
              <div className="mt-auto pt-4 border-t border-gray-100 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>[FALTA: valor consulta particular y copago Fonasa]</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={WA_URL_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('tratamientos', 'consulta')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar consulta (WhatsApp +56 9 4404 4891)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Onda Plus Remodelación */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
            {/* Top badge */}
            <div className="bg-gray-800 text-white px-4 py-2 text-xs font-tag font-bold uppercase tracking-wider flex items-center justify-between">
              <span>Tecnología Italiana Deka</span>
              <span className="text-gray-300 text-[11px]">No Invasivo</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Image preview */}
              <div className="mb-6 rounded-xl overflow-hidden bg-[#F1F2F7] border border-gray-100 flex items-center justify-center p-3 h-52">
                <img
                  src="https://www.medicalsalud.cl/OP/img109.jpg"
                  alt="Equipo Onda Plus Coolwaves de Deka en Medical Salud"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  width={340}
                  height={190}
                />
              </div>

              <span className="font-tag text-xs font-bold uppercase text-emerald-600 tracking-wide mb-1 block">
                REMODELACIÓN CORPORAL AMBULATORIA
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#212121] mb-3">
                Onda Plus — Remodelación corporal sin cirugía
              </h3>
              
              <p className="text-[#666666] text-base leading-relaxed mb-6">
                Tecnología italiana Onda Coolwaves Plus de Deka para grasa localizada, celulitis y
                flacidez en abdomen, caderas y muslos. No invasivo y sin tiempo de recuperación:
                vuelves a tu rutina el mismo día.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-4 text-sm sm:text-base font-medium text-[#212121]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Normalmente 4 sesiones</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Separadas por 20 a 30 días</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Ambulatorio, sin tiempo de recuperación</span>
                </li>
              </ul>

              {/* Note */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-[#666666] leading-relaxed mb-4">
                <strong className="text-[#212121] font-semibold">Criterio médico:</strong> Ideal para
                normopeso, sobrepeso u obesidad grado 1. Con más peso, el doctor recomienda primero bajar
                de peso y luego remodelar.
              </div>

              {/* Price placeholder tag */}
              <div className="mt-auto pt-4 border-t border-gray-100 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>[FALTA: valor por sesión o pack de Onda Plus]</span>
                </div>
              </div>

              {/* Action Button: routes to specific Onda WhatsApp */}
              <a
                href={WA_URL_ONDA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('tratamientos', 'onda_plus')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Onda Plus (WhatsApp +56 9 5730 0483)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Note on WhatsApp active status */}
        <div className="mt-6 text-center">
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl inline-block font-mono">
            [FALTA: confirmar que ambos números tienen WhatsApp activo; si no, usar tel: con los mismos números]
          </p>
        </div>

      </div>
    </section>
  );
};
