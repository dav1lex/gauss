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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">TITANCODE</span>
          </div>
          
          {/* Contact info */}
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="mailto:info@titancode.pl"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.Mail className="h-4 w-4" />
              info@titancode.pl
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TITANCODE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}