'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from './ui/icons'

export function SettingsDropdown() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if on blog page (blog is PL only)
  const isBlogPage = pathname.includes('/blog')

  // Get current locale from path
  const currentLocale = pathname.split('/')[1] || 'en'
  const otherLocale = currentLocale === 'en' ? 'pl' : 'en'

  // Build new path for language switch (not available on blog)
  const newPath = pathname.replace(/^\/[^\/]+/, `/${otherLocale}`)

  const themes = [
    { value: 'light', icon: Icons.Sun, label: 'Light' },
    { value: 'dark', icon: Icons.Moon, label: 'Dark' },
    { value: 'system', icon: Icons.Monitor, label: 'System' },
  ] as const

  const CurrentThemeIcon = themes.find(t => t.value === theme)?.icon || Icons.Sun

  if (!mounted) {
    return (
      <button className="h-9 px-3 flex items-center gap-2 rounded-md border border-border hover:bg-muted/50 transition-colors text-xs font-medium">
        EN
        <Icons.Sun className="h-3.5 w-3.5" />
      </button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'h-9 px-3 flex items-center gap-2 rounded-md border border-border',
          'hover:bg-muted/50 transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'text-xs font-medium'
        )}
      >
        {currentLocale.toUpperCase()}
        <CurrentThemeIcon className="h-3.5 w-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {/* Language Section - Boxed Layout (hidden on blog) */}
        {!isBlogPage && (
          <>
            <div className="p-2">
              <div className="text-xs text-muted-foreground mb-2 px-1">Language</div>
              <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
                <Link
                  href={currentLocale === 'en' ? pathname : newPath}
                  className={cn(
                    'flex-1 flex items-center justify-center h-7 rounded text-xs font-medium transition-colors',
                    currentLocale === 'en'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  EN
                </Link>
                <Link
                  href={currentLocale === 'pl' ? pathname : newPath}
                  className={cn(
                    'flex-1 flex items-center justify-center h-7 rounded text-xs font-medium transition-colors',
                    currentLocale === 'pl'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  PL
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mx-2" />
          </>
        )}

        {/* Theme Section - Boxed Layout */}
        <div className="p-2">
          <div className="text-xs text-muted-foreground mb-2 px-1">Theme</div>
          <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
            {themes.map(({ value, icon: Icon, label }) => {
              const isActive = theme === value
              return (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={cn(
                    'flex-1 flex items-center justify-center h-7 rounded transition-colors',
                    isActive
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  title={label}
                >
                  <Icon className="h-4 w-4" />
                </button>
              )
            })}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
