// Simple static translation loader for SSG
import en from '../../messages/en.json';
import pl from '../../messages/pl.json';

const translations = {
  en,
  pl
} as const;

export type Locale = 'en' | 'pl';
export type Messages = typeof en;

export function getTranslations(locale: Locale): Messages {
  return translations[locale];
}

export function getAllLocales(): Locale[] {
  return ['en', 'pl'];
}