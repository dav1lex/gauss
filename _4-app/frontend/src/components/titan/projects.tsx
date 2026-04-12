'use client'

import { cn } from '@/lib/utils'
import { ProjectCard, projects } from './project-card'

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  return (
    <section id="projects" className={cn('py-24 border-t border-border bg-secondary/30', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-orange-500 mb-4 block">02 / PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent work</h2>
          <p className="text-muted-foreground max-w-xl">
            Projects we've shipped for clients who demand excellence.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              category={project.category}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}