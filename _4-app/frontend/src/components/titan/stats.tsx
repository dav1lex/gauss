'use client'

import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'

interface StatItemProps {
  value: string
  label: string
  delay?: number
}

function StatItem({ value, label, delay = 0 }: StatItemProps) {
  return (
    <div 
      className="text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  )
}

export function Stats() {
  const t = useTranslate();

  return (
    <section id="stats" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">01 / STATS</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <StatItem 
            value={t('stats.projects')} 
            label={t('stats.projectsLabel')} 
            delay={0}
          />
          <StatItem 
            value={t('stats.custom')} 
            label={t('stats.customLabel')} 
            delay={100}
          />
          <StatItem 
            value={t('stats.support')} 
            label={t('stats.supportLabel')} 
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}