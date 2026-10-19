declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackWhatsAppClick(ubicacion: string, servicio: 'consulta' | 'onda_plus') {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_whatsapp',
      ubicacion,
      servicio,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackPhoneClick(numero: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_telefono',
      numero,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackFormSubmit(servicio: 'consulta' | 'onda_plus') {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      servicio,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackDirectionsClick() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_como_llegar',
      timestamp: new Date().toISOString(),
    });
  }
}

export const WA_URL_CONSULTA =
  'https://wa.me/56944044891?text=Hola%2C%20quiero%20agendar%20una%20hora%20de%20consulta%20m%C3%A9dica%20para%20bajar%20de%20peso';

export const WA_URL_ONDA =
  'https://wa.me/56957300483?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20de%20Onda%20Plus';

export const PHONE_CONSULTA = '+56 9 4404 4891';
export const PHONE_CONSULTA_RAW = '+56944044891';

export const PHONE_ONDA = '+56 9 5730 0483';
export const PHONE_ONDA_RAW = '+56957300483';
