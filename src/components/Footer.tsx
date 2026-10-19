import React from 'react';
import { MapPin, Clock, Phone, Building2, AlertCircle } from 'lucide-react';
import {
  PHONE_CONSULTA,
  PHONE_CONSULTA_RAW,
  PHONE_ONDA,
  PHONE_ONDA_RAW,
  trackPhoneClick,
} from '../utils/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151515] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info & Logos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://www.medicalsalud.cl/assets/images/_smarty/logo_white.png"
                alt="Logo Medical Salud S.A."
                className="h-10 w-auto object-contain"
                loading="lazy"
                width={160}
                height={40}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Medical Salud S.A.
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Consulta médica especializada en sobrepeso y obesidad del Dr. Jorge Álvarez Quintero en
              La Florida, Santiago. Examen InBody incluido, atención Fonasa y particular.
            </p>

            {/* Placeholders for contact email and social media */}
            <div className="pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-amber-400 text-xs font-mono">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Email: [FALTA: email de contacto]</span>
              </div>
              <div className="block">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-amber-400 text-xs font-mono">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Redes: [FALTA: Instagram/Facebook si existen]</span>
                </span>
              </div>
            </div>
          </div>

          {/* Location & Practice hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300">
              Sede Medical Salud
            </h4>

            <div className="flex items-start gap-3 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-[#3072E0] shrink-0 mt-1" />
              <span>
                Vicuña Mackenna Poniente 6843, Of. 511, Edificio Máxima, La Florida, Santiago.
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm text-neutral-300">
              <Clock className="w-4 h-4 text-[#3072E0] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">Lunes, martes, jueves y viernes</p>
                <p className="text-xs text-neutral-400">16:00 a 20:30 hrs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-neutral-300">
              <Phone className="w-4 h-4 text-[#3072E0] shrink-0 mt-1" />
              <div className="space-y-1">
                <div>
                  <span className="text-xs text-neutral-400 block">Consulta médica:</span>
                  <a
                    href={`tel:${PHONE_CONSULTA_RAW}`}
                    onClick={() => trackPhoneClick(PHONE_CONSULTA_RAW)}
                    className="hover:text-[#3072E0] font-semibold transition-colors"
                  >
                    {PHONE_CONSULTA}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Onda Plus:</span>
                  <a
                    href={`tel:${PHONE_ONDA_RAW}`}
                    onClick={() => trackPhoneClick(PHONE_ONDA_RAW)}
                    className="hover:text-[#3072E0] font-semibold transition-colors"
                  >
                    {PHONE_ONDA}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sede Integramédica Tobalaba */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-300 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#3072E0]" />
              También atiende en
            </h4>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2">
              <p className="font-bold text-white text-sm">Integramédica Tobalaba</p>
              <p>Camilo Henríquez 3296, Puente Alto.</p>
              <p className="text-neutral-400">
                Medicina Familiar y patologías GES (hipertensión, diabetes, hipotiroidismo, asma,
                artrosis), isapres en convenio con Red Bupa.
              </p>
              <p className="pt-1 text-[#3072E0] font-semibold">
                Reserva telefónica:{' '}
                <a href="tel:6006366666" className="underline hover:text-white">
                  600 636 6666
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Analytics & Pixel Placeholder */}
        <div className="py-4 text-center border-b border-neutral-900">
          <p className="text-xs text-amber-500/90 font-mono">
            [FALTA: ID de Google Analytics 4 / Meta Pixel del cliente para vincular medición]
          </p>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4 text-center md:text-left">
          <p>
            Dr. Jorge Álvarez Quintero · Reg. Colegio Médico 25394-4 · © 2026 Medical Salud. Todos los
            derechos reservados.
          </p>
          <p className="max-w-md text-neutral-400">
            Aviso médico: Los resultados de los tratamientos varían según cada paciente, su adherencia y su metabolismo individual. No se garantizan resultados específicos.
          </p>
        </div>

      </div>
    </footer>
  );
};
