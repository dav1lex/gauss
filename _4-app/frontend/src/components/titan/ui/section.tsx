'use client'

import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 border-t border-border', className)}>
      {children}
    </section>
  )
}

export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6', className)}>
      {children}
    </div>
  )
}

export function ContainerNarrow({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('max-w-3xl mx-auto text-center', className)}>
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  label: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', className)}>
      {label}
      {title}
      {description && (
        <p className="text-muted-foreground max-w-xl mt-4">
          {description}
        </p>
      )}
    </div>
  )
}