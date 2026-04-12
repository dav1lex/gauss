'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn('py-24 border-t border-border bg-secondary/30', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">04 / CONTACT</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to build<br />something great?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Let's talk about your project. We'll get back to you within 24 hours.
          </p>
          
          {/* Email Button */}
            <Link
              href="mailto:info@titancode.pl"
              className="inline-flex items-center gap-3 bg-[var(--titan-accent-primary)] text-white px-10 py-5 text-lg font-semibold hover:bg-[var(--titan-accent-secondary)] transition-colors"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@titancode.pl
          </Link>
          
          <p className="mt-8 text-sm text-muted-foreground font-mono">
            // Also find us on GitHub, LinkedIn, Twitter
          </p>
        </div>
      </div>
    </section>
  )
}