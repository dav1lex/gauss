'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Icons } from './ui/icons'

interface ProtectedPhoneProps {
  className?: string
  maskedPrefix?: string
  // Real number parts (obfuscated)
  part1: string
  part2: string  
  part3: string
}

export function ProtectedPhone({ 
  className,
  maskedPrefix = '+48 XXX XXX XXX',
  part1,
  part2,
  part3
}: ProtectedPhoneProps) {
  const [revealed, setRevealed] = useState(false)
  const [honeypotClicked, setHoneypotClicked] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const honeypotRef = useRef<HTMLButtonElement>(null)
  
  // Full number (only used client-side)
  const fullNumber = `${part1}${part2}${part3}`
  const formattedNumber = `${part1} ${part2} ${part3}`
  
  const handleReveal = () => {
    // Check if honeypot was clicked (bot behavior)
    if (honeypotClicked) {
      // Bot detected - do nothing or show fake
      console.log('Bot detected - honeypot triggered')
      return
    }
    
    setHasInteracted(true)
    setRevealed(true)
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(fullNumber)
  }
  
  return (
    <div className={cn('relative inline-flex items-center gap-2', revealed && 'revealed', className)} data-protected-phone>
      {/* Honeypot - invisible to humans, bots click it */}
      <button
        ref={honeypotRef}
        onMouseEnter={() => setHoneypotClicked(true)}
        onFocus={() => setHoneypotClicked(true)}
        className="absolute -left-[9999px] opacity-0 w-1 h-1"
        aria-hidden="true"
        tabIndex={-1}
      >
        phone
      </button>
      
      {revealed ? (
        // Revealed state
        <div className="flex items-center gap-2">
          <a 
            href={`tel:${fullNumber}`}
            className="font-mono text-foreground hover:text-[var(--titan-accent-primary)] transition-colors"
          >
            {formattedNumber}
          </a>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-muted rounded transition-colors"
            title="Copy number"
          >
            <Icons.Copy className="h-4 w-4" />
          </button>
        </div>
      ) : (
        // Masked state - whole container clickable
        <div
          onClick={handleReveal}
          className={cn(
            'flex items-center gap-2 font-mono cursor-pointer',
            'text-muted-foreground hover:text-foreground',
            'transition-colors group'
          )}
        >
          <span>{maskedPrefix}</span>
          <Icons.Eye className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
    </div>
  )
}

// Simpler version for footer - just click to reveal
export function ProtectedPhoneSimple({
  className,
  part1,
  part2,
  part3
}: Omit<ProtectedPhoneProps, 'maskedPrefix'>) {
  const [revealed, setRevealed] = useState(false)
  const honeypotRef = useRef<HTMLSpanElement>(null)
  
  const fullNumber = `${part1}${part2}${part3}`
  
  const handleReveal = () => {
    // Check if honeypot has content (bot filled it)
    if (honeypotRef.current && honeypotRef.current.textContent) {
      return // Bot detected
    }
    setRevealed(true)
  }
  
  return (
    <span className={cn('relative', className)}>
      {/* Honeypot - offscreen input that bots might fill */}
      <span 
        ref={honeypotRef}
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />
      
      {revealed ? (
        <a 
          href={`tel:${fullNumber}`}
          className="hover:text-[var(--titan-accent-primary)] transition-colors"
        >
          {fullNumber}
        </a>
      ) : (
        <button
          onClick={handleReveal}
          className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Show phone number
        </button>
      )}
    </span>
  )
}
