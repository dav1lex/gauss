'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useTranslate } from '@/hooks/use-translate'
import { ProtectedPhone } from './protected-phone'
import { Icons } from './ui/icons'

interface ContactProps {
  className?: string
}

const containerClass =
  'inline-flex items-center gap-3 border border-border px-10 py-5 text-lg font-medium hover:bg-muted/50 transition-colors cursor-pointer'

function TooltipTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-foreground px-3 py-1.5 text-xs text-background whitespace-nowrap shadow-sm">
      {children}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-foreground rotate-45 rounded-[2px] -mt-[3px]" />
    </div>
  )
}

export function Contact({ className }: ContactProps) {
  const t = useTranslate();
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [showCopiedTip, setShowCopiedTip] = useState(false);

  const handlePhoneClick = () => {
    if (!phoneRevealed) {
      setPhoneRevealed(true);
    } else {
      navigator.clipboard.writeText('+48511118916');
      setShowCopiedTip(true);
      setTimeout(() => setShowCopiedTip(false), 1500);
    }
  };

  const handleCopy = () => {
    setShowCopiedTip(true);
    setTimeout(() => setShowCopiedTip(false), 1500);
  };

  return (
    <section id="contact" className={cn('py-24 border-t border-border bg-[var(--titan-section-bg)]', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:info@titancode.pl"
              className="inline-flex items-center gap-3 bg-[var(--titan-accent-primary)] text-primary-foreground px-10 py-5 text-lg font-semibold hover:bg-[var(--titan-accent-secondary)] dark:hover:text-white transition-colors"
            >
              <Icons.Mail className="w-5 h-5" />
              {t('contact.email')}
            </Link>
            
            <div className="relative group">
              {/* Tooltip: Click to reveal / Click to copy */}
              {!showCopiedTip && (
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <TooltipTip>
                    {phoneRevealed ? 'Click to copy' : t('contact.revealPhone')}
                  </TooltipTip>
                </div>
              )}
              {/* Tooltip: Copied! */}
              {showCopiedTip && (
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50">
                  <TooltipTip>Copied!</TooltipTip>
                </div>
              )}

              <div className={containerClass} onClick={handlePhoneClick}>
                <Icons.Phone className="w-5 h-5 text-[var(--titan-accent-primary)]" />
                <ProtectedPhone
                  part1="+48"
                  part2="511"
                  part3="118"
                  part4="916"
                  maskedPrefix="+48 XXX XXX XXX"
                  revealed={phoneRevealed}
                  onReveal={() => setPhoneRevealed(true)}
                  showCopied={showCopiedTip}
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}