'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('py-12 border-t border-border bg-white', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[var(--titan-accent-primary)] rounded flex items-center justify-center font-mono font-bold text-white text-xs">
              T
            </div>
            <span className="font-semibold">TITANCODE</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span className="font-mono text-xs">WARSAW, POLAND</span>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; 2024 TITANCODE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}