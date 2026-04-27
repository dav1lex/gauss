'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Icons } from './ui/icons'

interface ProtectedPhoneProps {
  className?: string
  maskedPrefix?: string
  part1: string
  part2: string
  part3: string
  part4?: string
  revealed?: boolean
  onReveal?: () => void
  showCopied?: boolean
}

export function ProtectedPhone({
  className,
  maskedPrefix = '+48 XXX XXX XXX',
  part1,
  part2,
  part3,
  part4,
  revealed: controlledRevealed,
  onReveal,
  showCopied
}: ProtectedPhoneProps) {
  const [internalRevealed, setInternalRevealed] = useState(false)
  const [honeypotClicked, setHoneypotClicked] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const honeypotRef = useRef<HTMLSpanElement>(null)

  const revealed = controlledRevealed !== undefined ? controlledRevealed : internalRevealed

  const fullNumber = part4 ? `${part1}${part2}${part3}${part4}` : `${part1}${part2}${part3}`
  const formattedNumber = part4 ? `${part1} ${part2} ${part3} ${part4}` : `${part1} ${part2} ${part3}`

  const handleReveal = () => {
    if (honeypotClicked) return
    setHasInteracted(true)
    if (controlledRevealed !== undefined) {
      onReveal?.()
    } else {
      setInternalRevealed(true)
    }
  }

  return (
    <div
      className={cn('relative inline-flex items-center gap-2', revealed && 'revealed', className)}
      data-protected-phone
      onClick={handleReveal}
    >
      <span
        ref={honeypotRef}
        onMouseEnter={() => setHoneypotClicked(true)}
        onFocus={() => setHoneypotClicked(true)}
        className="absolute -left-[9999px] opacity-0 w-1 h-1"
        aria-hidden="true"
      />

      {revealed ? (
        <div className="flex items-center gap-2">
          <span className="font-mono text-foreground">{formattedNumber}</span>
          <span className="p-1">
            {showCopied ? (
              <Icons.Check className="h-4 w-4 text-green-500" />
            ) : (
              <Icons.Copy className="h-4 w-4" />
            )}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2 font-mono text-muted-foreground hover:text-foreground transition-colors">
          <span>{maskedPrefix}</span>
          <Icons.Eye className="h-4 w-4 text-muted-foreground/60" />
        </div>
      )}
    </div>
  )
}