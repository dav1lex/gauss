'use client'

import { cn } from '@/lib/utils'
import { CodeGradient } from './code-gradient'

interface StatsCardProps {
  value: string
  label: string
  className?: string
}

function StatsCard({ value, label, className }: StatsCardProps) {
  return (
    <div className={cn('p-6 border border-border bg-white', className)}>
      <span className="text-4xl font-bold">
        <CodeGradient>{value}</CodeGradient>
      </span>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  )
}

const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'AWS', 'Docker'
]

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('py-24 border-t border-border bg-white', className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Text */}
          <div>
            <span className="font-mono text-xs text-orange-500 mb-4 block">03 / ABOUT</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineers who<br />ship code.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're a Warsaw-based team of full-stack developers who believe in 
              the power of clean, maintainable code. No shortcuts. No compromises.
              Every project gets the attention it deserves.
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary border border-border text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatsCard value="50+" label="Projects delivered" />
            <StatsCard value="5+" label="Years experience" />
            <StatsCard value="100%" label="Custom code" />
            <StatsCard value="24/7" label="Support available" />
          </div>
        </div>
      </div>
    </section>
  )
}