export interface FaqItem {
  question: string;
  answer: string;
}

export type WhatsAppLocation =
  | 'hero'
  | 'tratamientos'
  | 'doctor'
  | 'pasos'
  | 'onda_plus'
  | 'cta_final'
  | 'flotante'
  | 'header';

export type ServiceType = 'consulta' | 'onda_plus';
