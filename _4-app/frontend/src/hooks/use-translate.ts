'use client'

import { useState, useEffect } from 'react';
import { getTranslations, Locale, Messages } from '@/lib/i18n';

// Store translations in memory to avoid re-parsing JSON
const translationCache = new Map<Locale, Messages>();

export function useTranslate() {
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Messages | null>(null);
  
  useEffect(() => {
    // Get locale from URL path
    const pathLocale = window.location.pathname.split('/')[1] as Locale;
    const detectedLocale = ['en', 'pl'].includes(pathLocale) ? pathLocale : 'en';
    
    setLocale(detectedLocale);
    
    // Load translations
    if (!translationCache.has(detectedLocale)) {
      translationCache.set(detectedLocale, getTranslations(detectedLocale));
    }
    setTranslations(translationCache.get(detectedLocale)!);
  }, []);
  
  // Return translate function
  return (key: string): string => {
    if (!translations) return key;
    
    // Simple dot notation support (e.g., "navbar.services")
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // fallback to key if not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}