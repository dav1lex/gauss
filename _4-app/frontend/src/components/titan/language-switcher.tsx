'use client'

import { Button } from '@/components/titan/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Get current locale from path
  const currentLocale = pathname.split('/')[1] || 'en';
  
  // Toggle between locales
  const otherLocale = currentLocale === 'en' ? 'pl' : 'en';
  const otherLabel = currentLocale === 'en' ? 'PL' : 'EN';
  
  // Build new path
  const newPath = pathname.replace(/^\/[^\/]+/, `/${otherLocale}`);
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      href={newPath}
      className="h-8 px-3 text-xs"
    >
      {otherLabel}
    </Button>
  )
}