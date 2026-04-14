'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useTranslate } from '@/hooks/use-translate'
import { ProtectedPhone } from './protected-phone'
import { Icons } from './ui/icons'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  const t = useTranslate();
  
  return (
    <section id="contact" className={cn('py-24 border-t border-border bg-secondary/30', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">05 / CONTACT</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            {t('contact.subtitle')}
          </p>
        </div>
          
          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email */}
            <Link
              href="mailto:info@titancode.pl"
              className="inline-flex items-center gap-3 bg-[var(--titan-accent-primary)] text-primary-foreground px-10 py-5 text-lg font-semibold hover:bg-[var(--titan-accent-secondary)] dark:hover:text-white transition-colors"
            >
              <Icons.Mail className="w-5 h-5" />
              {t('contact.email')}
            </Link>
            
            {/* Phone - Protected */}
            <div className="inline-flex items-center gap-3 border border-border px-10 py-5 text-lg font-medium hover:bg-muted/50 transition-colors">
              <Icons.Phone className="w-5 h-5 text-[var(--titan-accent-primary)]" />
              <ProtectedPhone 
                part1="+48" 
                part2="511" 
                part3="118916" 
                maskedPrefix="+48 XXX XXX XXX"
              />
            </div>
          </div>
      </div>
    </section>
  )
}