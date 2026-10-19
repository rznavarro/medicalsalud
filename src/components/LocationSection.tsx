import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import {
  PHONE_CONSULTA,
  PHONE_CONSULTA_RAW,
  PHONE_ONDA,
  PHONE_ONDA_RAW,
  WA_URL_CONSULTA,
  trackDirectionsClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from '../utils/analytics';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-tag text-xs font-bold uppercase tracking-wider text-[#3072E0] bg-[#3072E0]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            ACCESO Y HORARIOS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#212121] leading-tight mb-4">
            Estamos en La Florida
          </h2>
          <p className="text-[#666666] text-base sm:text-lg">
            Ubicación central y de fácil acceso en el Edificio Máxima sobre Vicuña Mackenna Poniente.
          </p>
        </div>

        {/* 2 Columns: Map Embed & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Lazy Google Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[380px] h-full flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.3831911346156!2d-70.60746338523397!3d-33.5174215083377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d707c4353167%3A0xe9bc5488f14c9ed3!2sMedical%20Salud%20S.A.!5e0!3m2!1ses!2scl!4v1646073598226!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Medical Salud S.A. en Edificio Máxima, La Florida"
              className="w-full h-full flex-1"
            />
          </div>

          {/* Column 2: Information & Contacts */}
          <div className="lg:col-span-5 bg-[#F1F2F7] rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3072E0]/15 text-[#3072E0] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#212121]">
                    Dirección
                  </h3>
                  <p className="text-sm text-[#212121] font-medium leading-relaxed mt-0.5">
                    Vicuña Mackenna Poniente 6843, Of. 511, Edificio Máxima
                  </p>
                  <p className="text-xs text-[#666666]">
                    La Florida, Santiago, Región Metropolitana
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3072E0]/15 text-[#3072E0] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#212121]">
                    Horario de atención
                  </h3>
                  <p className="text-sm font-semibold text-[#3072E0] mt-0.5">
                    Lunes, martes, jueves y viernes de 16:00 a 20:30 hrs.
                  </p>
                  <p className="text-xs text-[#666666] mt-0.5">
                    (Consulta exclusiva para pacientes con sobrepeso y obesidad)
                  </p>
                </div>
              </div>

              {/* Coverage */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#212121]">
                    Previsión de salud
                  </h3>
                  <p className="text-sm text-[#212121] font-medium mt-0.5">
                    Atiende con Fonasa (código 0101305) y particular.
                  </p>
                </div>
              </div>

              {/* Phones with clear label */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#3072E0]/15 text-[#3072E0] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-base text-[#212121]">
                    Teléfonos de contacto directo
                  </h3>

                  <div className="text-sm">
                    <span className="text-xs font-tag font-bold uppercase text-[#666666] block">
                      Consulta médica de obesidad:
                    </span>
                    <a
                      href={`tel:${PHONE_CONSULTA_RAW}`}
                      onClick={() => trackPhoneClick(PHONE_CONSULTA_RAW)}
                      className="font-bold text-[#3072E0] hover:underline inline-block text-base"
                    >
                      {PHONE_CONSULTA}
                    </a>
                  </div>

                  <div className="text-sm pt-1">
                    <span className="text-xs font-tag font-bold uppercase text-[#666666] block">
                      Tratamiento Onda Plus:
                    </span>
                    <a
                      href={`tel:${PHONE_ONDA_RAW}`}
                      onClick={() => trackPhoneClick(PHONE_ONDA_RAW)}
                      className="font-bold text-[#3072E0] hover:underline inline-block text-base"
                    >
                      {PHONE_ONDA}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Medical+Salud+S.A.+La+Florida"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDirectionsClick}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 text-[#212121] font-bold text-sm shadow-xs hover:border-[#3072E0] transition-colors min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-[#3072E0]" />
                <span>Cómo llegar</span>
              </a>

              <a
                href={WA_URL_CONSULTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('ubicacion', 'consulta')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#3072E0] hover:bg-[#1F4FA8] text-white font-bold text-sm shadow-sm transition-all min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar cita</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
