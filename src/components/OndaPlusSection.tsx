import React, { useState } from 'react';
import { Play, Sparkles, AlertCircle, MessageCircle, Layers, CheckCircle2 } from 'lucide-react';
import { WA_URL_ONDA, trackWhatsAppClick } from '../utils/analytics';

export const OndaPlusSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            TECNOLOGÍA ONDA COOLWAVES PLUS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            ¿Cómo funciona Onda Plus?
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
            Usa microondas que actúan de forma selectiva sobre la grasa bajo la piel, mientras estimulan el colágeno para tensar y reafirmar. Es un procedimiento no invasivo y ambulatorio.
          </p>
        </div>

        {/* Content Grid: Video Lite + Scientific Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Video Column (Lite YouTube Embed) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video border border-gray-100 flex items-center justify-center">
              {!isVideoLoaded ? (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsVideoLoaded(true)}>
                  <img
                    src="https://img.youtube.com/vi/H9qqrnrNPEM/maxresdefault.jpg"
                    alt="Demostración y tecnología de Onda Coolwaves Plus de Deka"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={640}
                    height={360}
                    onError={(e) => {
                      // Fallback to standard quality if maxres is not available
                      (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/H9qqrnrNPEM/hqdefault.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center p-4">
                    <button
                      type="button"
                      aria-label="Reproducir video explicativo de Onda Coolwaves"
                      className="w-18 h-18 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Play className="w-8 h-8 ml-1 fill-white" />
                    </button>
                    <span className="mt-4 text-white text-sm font-semibold tracking-wide drop-shadow-md">
                      Ver cómo actúa la tecnología Coolwaves
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/H9qqrnrNPEM?autoplay=1&rel=0"
                  title="Video explicativo Onda Coolwaves Plus"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
            <p className="text-xs text-center text-[#666666] mt-3">
              Tecnología Coolwaves patentada por Deka (Florencia, Italia).
            </p>
          </div>

          {/* Explanation Points Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#212121] mb-1">
                    Acción selectiva en grasa subcutánea
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    Las microondas de 2,45 GHz atraviesan las capas superficiales protegiendo la piel con un sistema de enfriamiento integrado y concentran la energía en las células adiposas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3072E0]/15 text-[#3072E0] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#212121] mb-1">
                    Estimulación de nuevo colágeno
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    El calor controlado induce la remodelación de fibras de colágeno existentes y estimula la síntesis de nuevo colágeno, mejorando la firmeza y reduciendo la flacidez.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#212121] mb-1">
                    Zonas de aplicación
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    Especialmente indicado para tratar abdomen, flancos/caderas y muslos. Sesiones de aproximadamente 30 a 45 minutos según la zona.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button directly to Onda Plus WhatsApp */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href={WA_URL_ONDA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('onda_plus', 'onda_plus')}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por Onda Plus (WhatsApp +56 9 5730 0483)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Ethics & Patient Consent Marker */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-amber-50/80 border border-amber-200 p-5 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-800 font-mono text-xs font-semibold mb-1">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>[FALTA: confirmar que son fotos reales de pacientes del doctor y con consentimiento; si no, NO mostrarlas]</span>
          </div>
          <p className="text-xs text-amber-700 leading-relaxed max-w-xl mx-auto">
            Por estricta ética médica y cumplimiento de la normativa de privacidad y protección del paciente en Chile, no publicamos fotografías de antes y después sin consentimiento formal expreso y validación de autoría propia.
          </p>
        </div>

      </div>
    </section>
  );
};
