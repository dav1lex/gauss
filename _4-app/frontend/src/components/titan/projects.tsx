'use client'

import { cn } from '@/lib/utils'
import { ProjectCard } from './project-card'
import { useTranslate } from '@/hooks/use-translate'

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  const t = useTranslate();
  
  // Get project items from translation
  const projectItems = [
    { key: 'nanobid', icon: 'Wallet' },
    { key: 'careerflex', icon: 'Briefcase' },
    { key: 'kurs8klasisty', icon: 'AcademicCap' }
  ] as const;

  return (
    <section id="projects" className={cn('py-24 border-t border-border bg-secondary/30', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">02 / PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-muted-foreground max-w-xl">
            {t('projects.subtitle')}
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projectItems.map((item) => (
            <ProjectCard
              key={item.key}
              title={t(`projectItems.${item.key}.title`)}
              description={t(`projectItems.${item.key}.description`)}
              category={t(`projectItems.${item.key}.category`)}
              iconKey={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}