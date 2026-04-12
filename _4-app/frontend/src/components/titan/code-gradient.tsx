'use client'

import { cn } from '@/lib/utils'

interface CodeGradientProps {
  children: React.ReactNode
  className?: string
}

export function CodeGradient({ children, className }: CodeGradientProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-[var(--titan-accent-secondary)] via-[var(--titan-accent-primary)] to-[var(--titan-accent-primary)] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}