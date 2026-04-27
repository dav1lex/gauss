'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from './ui/icons'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('py-12 border-t border-border bg-[var(--titan-section-bg)]', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center text-center md:text-left md:items-start">
          {/* Col 1: Logo + email */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-semibold">TITANCODE</span>
            <Link 
              href="mailto:info@titancode.pl"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.Mail className="h-4 w-4" />
              info@titancode.pl
            </Link>
          </div>
          
          {/* Col 2: empty (desktop only) */}
          <div className="hidden md:block" />
          
          {/* Col 3: Copyright */}
          <div className="text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} TITANCODE. All rights reserved.
          </div>
        </div>
        
        {/* Row 2: Company info */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          TITANCODE is a brand of Dagidze sp. z o.o.
        </div>
      </div>
    </footer>
  )
}
