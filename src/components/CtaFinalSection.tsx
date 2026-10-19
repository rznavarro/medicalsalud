import React, { useState } from 'react';
import { MessageCircle, Send, ShieldCheck, Check } from 'lucide-react';
import {
  WA_URL_CONSULTA,
  PHONE_CONSULTA_RAW,
  PHONE_ONDA_RAW,
  trackWhatsAppClick,
  trackFormSubmit,
} from '../utils/analytics';

export const CtaFinalSection: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tratamiento, setTratamiento] = useState<'consulta' | 'onda_plus'>('consulta');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit(tratamiento);

    const isConsulta = tratamiento === 'consulta';
    const rawNumber = isConsulta ? PHONE_CONSULTA_RAW : PHONE_ONDA_RAW;
    const cleanNumber = rawNumber.replace('+', '');

    const serviceName = isConsulta
      ? 'Consulta médica de sobrepeso y obesidad (incluye Bioimpedanciometría)'
      : 'Evaluación y tratamiento Onda Plus Coolwaves';

    const cleanName = nombre.trim() || 'Paciente';
    const cleanPhone = telefono.trim() || 'No especificado';

    const message = `Hola, mi nombre es ${cleanName}. Mi teléfono es ${cleanPhone} y me gustaría agendar: ${serviceName}.`;
    const targetUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#3072E0] via-[#245ec0] to-[#1F4FA8] text-white relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-tag font-bold uppercase tracking-wider mb-4 border border-white/20">
          AGENDA EN LA FLORIDA
        </span>

        {/* H2 */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 tracking-tight text-white">
          Tu salud no puede esperar a "el lunes empiezo"
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Agenda tu evaluación con un médico especialista en obesidad en La Florida. Atendemos Fonasa y
          particular.
        </p>

        {/* Big White Button */}
        <div className="mb-14">
          <a
            href={WA_URL_CONSULTA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final', 'consulta')}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-full bg-white text-[#3072E0] hover:text-[#1F4FA8] hover:bg-gray-50 font-heading font-extrabold text-lg sm:text-xl shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[56px]"
          >
            <MessageCircle className="w-6 h-6 fill-[#25D366] text-[#25D366]" />
            <span>Agenda tu hora por WhatsApp</span>
          </a>
          <p className="text-white/70 text-xs mt-3">
            Respuesta personalizada para coordinar tu cita en Edificio Máxima, La Florida.
          </p>
        </div>

        {/* 3-Field Quick Contact Form */}
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-[#212121] shadow-2xl border border-white/40 text-left">
          <div className="mb-6">
            <h3 className="font-heading font-bold text-xl text-[#212121] mb-1">
              O déjanos tus datos y te escribimos nosotros
            </h3>
            <p className="text-sm text-[#666666]">
              Se abrirá WhatsApp directamente con tu solicitud prellenada:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cta-nombre" className="block text-xs font-tag font-bold uppercase tracking-wider text-[#666666] mb-1.5">
                Nombre y apellido
              </label>
              <input
                id="cta-nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Constanza Silva"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#212121] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3072E0] text-base"
              />
            </div>

            <div>
              <label htmlFor="cta-telefono" className="block text-xs font-tag font-bold uppercase tracking-wider text-[#666666] mb-1.5">
                Teléfono de contacto
              </label>
              <input
                id="cta-telefono"
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="+56 9 1234 5678"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#212121] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3072E0] text-base"
              />
            </div>

            <div>
              <label htmlFor="cta-tratamiento" className="block text-xs font-tag font-bold uppercase tracking-wider text-[#666666] mb-1.5">
                Tratamiento que te interesa
              </label>
              <select
                id="cta-tratamiento"
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value as 'consulta' | 'onda_plus')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#212121] bg-white focus:outline-none focus:ring-2 focus:ring-[#3072E0] text-base"
              >
                <option value="consulta">Consulta de sobrepeso y obesidad (InBody)</option>
                <option value="onda_plus">Onda Plus — Remodelación corporal sin cirugía</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
            >
              <Send className="w-4 h-4" />
              <span>Quiero que me contacten</span>
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#666666]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tus datos solo se usan para responder tu consulta médica</span>
          </div>
        </div>

      </div>
    </section>
  );
};
