'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/titan/ui/button'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Wait for theme to resolve and component to mount
  const currentTheme = mounted ? theme : 'light'
  
  if (!mounted) {
    return <div className="flex items-center gap-2 h-8">{'\u00A0'}</div> // Non-breaking space placeholder
  }
  
  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ]
  
  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <Button
          key={t.value}
          variant={currentTheme === t.value ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setTheme(t.value)}
          className="h-8 px-3 text-xs"
        >
          {t.label}
        </Button>
      ))}
    </div>
  )
}