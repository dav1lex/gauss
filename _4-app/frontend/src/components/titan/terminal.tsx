'use client'

import { cn } from '@/lib/utils'

interface TerminalProps {
  lines: Array<{
    type: 'command' | 'input' | 'output' | 'success' | 'prompt'
    content: string
  }>
  title?: string
  className?: string
}

export function Terminal({ lines, title = 'bash — titancode', className }: TerminalProps) {
  return (
    <div className={cn('terminal-window glow overflow-hidden', className)}>
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className="p-6 font-mono text-sm text-foreground">
        {lines.map((line, i) => (
          <div
            key={i}
            className={cn(
              line.type === 'command' && 'text-muted-foreground',
              line.type === 'input' && 'text-foreground',
              line.type === 'output' && 'text-orange-500',
              line.type === 'success' && 'text-green-600',
              line.type === 'prompt' && 'text-muted-foreground',
              i > 0 && 'mt-2'
            )}
          >
            {line.type === 'prompt' && '$ '}
            {line.content}
            {line.type === 'success' && <span className="blink">_</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Default terminal with titancode CLI demo
export function TerminalDefault({ className }: { className?: string }) {
  return (
    <Terminal
      className={className}
      lines={[
        { type: 'command', content: 'npm create titancode-app@latest' },
        { type: 'output', content: '? Project name' },
        { type: 'input', content: 'my-awesome-project' },
        { type: 'command', content: '? Select stack' },
        { type: 'output', content: '> React + Node.js + PostgreSQL' },
        { type: 'success', content: '✓ Project scaffolded successfully' },
        { type: 'command', content: '$ cd my-awesome-project && npm run dev' },
        { type: 'success', content: '▲ Server running at http://localhost:3000' },
      ]}
    />
  )
}