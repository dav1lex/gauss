'use client'

import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  number?: string
  className?: string
}

export function SectionLabel({ children, number, className }: SectionLabelProps) {
  return (
    <span className={cn('font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block', className)}>
      {number && `${number} / `}{children}
    </span>
  )
}

interface HeadingProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ children, className, as: Component = 'h2' }: HeadingProps) {
  const sizes = {
    h1: 'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
  }
  
  return (
    <Component className={cn(sizes[Component], className)}>
      {children}
    </Component>
  )
}

interface SubheadingProps {
  children: React.ReactNode
  className?: string
}

export function Subheading({ children, className }: SubheadingProps) {
  return (
    <p className={cn('text-lg md:text-xl text-muted-foreground', className)}>
      {children}
    </p>
  )
}

interface BodyTextProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function BodyText({ children, className, size = 'md' }: BodyTextProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }
  
  return (
    <p className={cn('text-muted-foreground', sizes[size], className)}>
      {children}
    </p>
  )
}

interface CaptionProps {
  children: React.ReactNode
  className?: string
  mono?: boolean
}

export function Caption({ children, className, mono = false }: CaptionProps) {
  return (
    <span className={cn('text-sm text-muted-foreground', mono && 'font-mono', className)}>
      {children}
    </span>
  )
}