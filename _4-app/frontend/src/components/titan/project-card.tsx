'use client'

import { cn } from '@/lib/utils'
import { CodeGradient } from './code-gradient'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  icon: React.ReactNode
  className?: string
}

export function ProjectCard({ title, description, category, icon, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'border border-border bg-white cursor-pointer transition-colors hover:border-[var(--titan-accent-primary)]',
        className
      )}
    >
      {/* Image/Icon Area */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 border-2 border-[var(--titan-accent-primary)] rounded-lg flex items-center justify-center">
              <div className="text-[var(--titan-accent-primary)]">{icon}</div>
            </div>
            <span className="text-2xl font-bold">
              <CodeGradient>{title}</CodeGradient>
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-2 block">{category}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

// Project icons
export const ProjectIcons = {
  Wallet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Briefcase: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  AcademicCap: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
}

// Projects data
export const projects = [
  {
    title: 'NanoBid',
    description: 'Real-time auction platform with live bidding, instant notifications, and secure payments.',
    category: 'AUCTION PLATFORM',
    icon: ProjectIcons.Wallet,
  },
  {
    title: 'CareerFlex',
    description: 'AI-powered job matching platform with smart recommendations and application tracking.',
    category: 'AI JOB SEARCH',
    icon: ProjectIcons.Briefcase,
  },
  {
    title: 'Kurs8Klasisty',
    description: 'Interactive e-learning platform for 8th graders preparing for exams with progress tracking.',
    category: 'E-LEARNING',
    icon: ProjectIcons.AcademicCap,
  },
]