'use client'

import { createContext, useContext } from 'react';
import { getTranslations, Locale, Messages } from '@/lib/i18n';

// Context for locale - prevents flash
const LocaleContext = createContext<Locale>('en');

// Hook to get current locale
export function useLocale(): Locale {
  return useContext(LocaleContext);
}

// Provider component - wrap in layout
export function LocaleProvider({ 
  locale, 
  children 
}: { 
  locale: Locale; 
  children: React.ReactNode 
}) {
  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}

// Pre-loaded translations - no async needed
const translations: Record<Locale, Messages> = {
  en: getTranslations('en'),
  pl: getTranslations('pl')
};

// Translate hook - reads from context, no flash
export function useTranslate() {
  const locale = useLocale();
  const msgs = translations[locale];
  
  return (key: string): string => {
    const keys = key.split('.');
    let value: any = msgs;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}