'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { CodeGradient } from './code-gradient'
import { useTranslate } from '@/hooks/use-translate'

interface HeroParallaxProps {
  className?: string
  backgroundImage?: string
}

export function HeroParallax({ 
  className,
  backgroundImage = '/images/hero-bg.jpg'
}: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslate();

  return (
    <section 
      ref={containerRef}
      className={cn('relative min-h-screen flex items-center overflow-hidden', className)}
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-neutral-200 dark:bg-neutral-900"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay - CSS-only theme detection */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-r',
        // Light theme (no .dark class)
        'from-black/20 via-black/10 to-transparent',
        // Dark theme (.dark class present)
        'dark:from-black/70 dark:via-black/50 dark:to-black/30'
      )} />
      <div className={cn(
        'absolute inset-0 bg-gradient-to-b',
        // Light theme
        'from-transparent via-transparent to-black/10',
        // Dark theme
        'dark:from-transparent dark:via-transparent dark:to-black/40'
      )} />
      
      {/* Orange accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--titan-accent-primary)]/10 rounded-full blur-3xl" />
      
      {/* Content - Left aligned */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            {t('hero.headline')}
          </h1>
          
          {/* Subheadline */}
          <p className={cn(
            'text-lg md:text-xl max-w-xl mb-10 leading-relaxed',
            'text-foreground/80 dark:text-white/80'
          )}>
            {t('hero.subheadline')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--titan-accent-primary)] text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-[var(--titan-accent-secondary)] transition-colors"
            >
              {t('hero.ctaStart')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#projects"
              className={cn(
                'inline-flex items-center gap-2 border px-8 py-4 text-sm font-medium transition-colors backdrop-blur-sm',
                // Light theme
                'border-border hover:border-muted-foreground bg-background/80 text-foreground',
                // Dark theme
                'dark:border-white/30 dark:hover:border-white dark:bg-white/10 dark:text-white'
              )}
            >
              {t('hero.ctaView')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Alternative with scroll-driven parallax using JS
export function HeroParallaxAnimated({ 
  className,
  backgroundImage = '/images/hero-bg.jpg'
}: HeroParallaxProps) {
  const t = useTranslate();
  
  return (
    <section 
      className={cn('relative min-h-screen flex items-center overflow-hidden', className)}
    >
      {/* Background Image - moves slower on scroll */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
      
      {/* Content - Left aligned, moves at normal speed */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            We build<br />
            <CodeGradient>software</CodeGradient><br />
            that performs.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Warsaw-based custom web development. No templates. No WordPress. 
            Just clean, handcrafted code for ambitious projects.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--titan-accent-primary)] text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-[var(--titan-accent-secondary)] transition-colors"
            >
              {t('hero.ctaStart')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 border px-8 py-4 text-sm font-medium transition-colors backdrop-blur-sm',
                isDark
                  ? 'border-white/30 hover:border-white bg-white/10 text-white'
                  : 'border-border hover:border-muted-foreground bg-background/80 text-foreground'"
            >
              {t('hero.ctaView')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}