'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const t = useTranslate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi | undefined>()

  const projectKeys = [
    'nanobid',
    'kurs8klasisty',
    'careerflex',
    'wiredfor',
    'entee',
    'airea',
    'yourproject'
  ] as const

  const totalProjects = projectKeys.length

  const goPrev = () => api?.scrollPrev()
  const goNext = () => api?.scrollNext()

  const isValidHref = (href: string) => href && href.startsWith('http')

  return (
    <section id="projects" className={cn('py-24 border-t border-border bg-[var(--titan-section-bg)]', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-muted-foreground max-w-xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: 'center',
              loop: false,
            }}
            setApi={(api) => {
              setApi(api)
              api?.on('select', () => {
                setCurrentIndex(api.selectedScrollSnap())
              })
            }}
          >
<CarouselContent>
            {projectKeys.map((key, index) => {
              const itemHref = t(`projectItems.${key}.href`)
              const hasValidHref = isValidHref(itemHref)
              const isLast = index === totalProjects - 1

              return (
                <CarouselItem key={key} className="basis-full">
                  <div className="py-16 border-t border-b border-border/60 min-h-[400px] flex flex-col justify-between">
                    {isLast ? (
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
                      <a
                        href={hasValidHref ? itemHref : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col flex-grow cursor-pointer"
                        onClick={(e) => !hasValidHref && e.preventDefault()}
                      >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight group-hover:text-[var(--titan-accent-primary)] transition-colors duration-300">
                          {t(`projectItems.${key}.title`)}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-8">
                          {t(`projectItems.${key}.description`)}
                        </p>
                        {hasValidHref && (
                          <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[var(--titan-accent-primary)] transition-colors">
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
                      </a>
                    )}
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          </Carousel>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {projectKeys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
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
              <span className="font-mono text-sm text-muted-foreground">
                {String(currentIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
