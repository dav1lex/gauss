'use client'

import { cn } from '@/lib/utils'
import { CodeGradient } from './code-gradient'
import { useTranslate } from '@/hooks/use-translate'

interface StatsCardProps {
  value: string
  label: string
  className?: string
}

function StatsCard({ value, label, className }: StatsCardProps) {
  return (
    <div className={cn('p-6 border border-border bg-card', className)}>
      <span className="text-4xl font-bold">
        <CodeGradient>{value}</CodeGradient>
      </span>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  )
}

const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'AWS', 'Docker'
]

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  const t = useTranslate();
  
  return (
    <section id="about" className={cn('py-24 border-t border-border bg-background', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Text */}
          <div>
            <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">03 / ABOUT</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('about.subtitle')}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary border border-border text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatsCard value={t('stats.projects')} label={t('stats.projectsLabel')} />
            <StatsCard value={t('stats.experience')} label={t('stats.experienceLabel')} />
            <StatsCard value={t('stats.custom')} label={t('stats.customLabel')} />
            <StatsCard value={t('stats.support')} label={t('stats.supportLabel')} />
          </div>
        </div>
      </div>
    </section>
  )
}