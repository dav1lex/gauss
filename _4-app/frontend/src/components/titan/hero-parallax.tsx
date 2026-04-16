'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useTranslate } from '@/hooks/use-translate'

interface HeroParallaxProps {
  className?: string
}

export function HeroParallax({ className }: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax: image moves at 60% of scroll speed (subtle reveal)
  const translateY = scrollY * 0.6;

  return (
    <section 
      ref={containerRef}
      className={cn('relative min-h-screen flex items-center overflow-hidden', className)}
    >
      {/* Background - parallax effect, moves slower than scroll */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/bg.png)',
          transform: `translateY(${translateY}px)`,
          willChange: 'transform'
        }}
      />
      
      {/* Dark mode overlay */}
      <div className="absolute inset-0 dark:brightness-[0.45]" />
      
      {/* Gradient overlays */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-r',
        'from-black/20 via-black/10 to-transparent',
        'dark:from-black/70 dark:via-black/50 dark:to-black/30'
      )} />
      <div className={cn(
        'absolute inset-0 bg-gradient-to-b',
        'from-transparent via-transparent to-black/10',
        'dark:from-transparent dark:via-transparent dark:to-black/40'
      )} />
      
      {/* Orange accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--titan-accent-primary)]/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-white">
            {t('hero.headline').split('\n').map((line: string, i: number) => (
              <span key={i} className="block  ">
                <span className={`text-reveal inline-block ${i === 1 ? 'text-reveal-delay-2' : ''}`}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          
          <p className={cn(
            'text-lg md:text-xl max-w-xl mb-10 leading-relaxed',
            'text-foreground/80 dark:text-white/80'
          )}>
            {t('hero.subheadline')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--titan-accent-primary)] text-black px-8 py-4 text-sm font-semibold hover:bg-[var(--titan-accent-secondary)] transition-colors"
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
                'border-border hover:border-muted-foreground bg-background/80 text-foreground',
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