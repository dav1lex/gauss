'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'
import Link from 'next/link'

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const t = useTranslate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projectKeys = [
    'nanobid',
    'kurs8klasisty', 
    'careerflex',
    'wiredfor',
    'entee',
    'airea',
    'yourproject'
  ] as const;
  
  const totalProjects = projectKeys.length;
  const currentKey = projectKeys[currentIndex];
  const href = t(`projectItems.${currentKey}.href`);
  const isLast = currentIndex === totalProjects - 1;
  
  // Check if href exists and is a valid URL (not undefined or translation key)
  const isValidHref = (href: string) => href && href.startsWith('http');

  const goToProject = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalProjects - 1)));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalProjects - 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (translateX < -threshold && currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  return (
    <section id="projects" className={cn('py-24 border-t border-border bg-background', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">03 / PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-muted-foreground max-w-xl">
            {t('projects.subtitle')}
          </p>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX); }}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => isDragging && handleDragEnd()}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {projectKeys.map((key, index) => {
              const itemHref = t(`projectItems.${key}.href`);
              const itemIsLast = index === totalProjects - 1;
              const hasValidHref = isValidHref(itemHref);
              
              return (
                <div 
                  key={key}
                  className="w-full flex-shrink-0 px-0"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                >
                  <div className="py-8 border-t border-b border-border/60 min-h-[320px] flex flex-col justify-center">
                    {itemIsLast ? (
                      <div className="text-center py-12">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                          {t(`projectItems.${key}.title`)}
                        </h3>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                          {t(`projectItems.${key}.description`)}
                        </p>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-2 bg-[var(--titan-accent-primary)] text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-[var(--titan-accent-secondary)] dark:hover:text-white transition-colors"
                        >
                          {t('contact.title').split('\n')[0]}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    ) : (
                      <div className="group">
                        <Link 
                          href={hasValidHref ? itemHref : '#'}
                          className="block cursor-pointer"
                          onClick={(e) => !hasValidHref && e.preventDefault()}
                        >
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 group-hover:text-[var(--titan-accent-primary)] transition-colors duration-300">
                            {t(`projectItems.${key}.title`)}
                          </h3>
                          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {t(`projectItems.${key}.description`)}
                          </p>
                          {hasValidHref && (
                            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[var(--titan-accent-primary)] transition-colors">
                              <span className="font-mono">{itemHref.replace('https://', '')}</span>
                              <svg 
                                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          )}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-3 border border-border hover:border-[var(--titan-accent-primary)] hover:text-[var(--titan-accent-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === totalProjects - 1}
              className="p-3 border border-border hover:border-[var(--titan-accent-primary)] hover:text-[var(--titan-accent-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Counter + Dots */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              {projectKeys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === currentIndex 
                      ? 'bg-[var(--titan-accent-primary)] w-6' 
                      : 'bg-border hover:bg-muted-foreground'
                  )}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
