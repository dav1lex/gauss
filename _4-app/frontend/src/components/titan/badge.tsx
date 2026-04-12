'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  className?: string
  showPulse?: boolean
}

export function Badge({ children, variant = 'default', className, showPulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono',
        variant === 'default' && 'border border-border bg-white text-muted-foreground',
        variant === 'outline' && 'border border-border bg-transparent text-muted-foreground',
        className
      )}
    >
      {showPulse && (
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
      )}
      {children}
    </span>
  )
}