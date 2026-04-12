'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('py-12 border-t border-border bg-background', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
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