'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { CodeGradient } from './code-gradient'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('relative min-h-screen flex items-center', className)}>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          We build<br />
          <CodeGradient>software</CodeGradient> that<br />
          performs.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
          Warsaw-based custom web development. No templates. No WordPress. 
          Just clean, handcrafted code for ambitious projects.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 text-sm font-semibold hover:bg-orange-400 transition-colors"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-medium hover:border-muted-foreground transition-colors"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  )
}