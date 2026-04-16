'use client'

import Link from "next/link";
import "./globals.css";

import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Simple Navbar without SettingsDropdown - dark theme only
function SimpleNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
        <Link href="/pl" className="text-lg font-semibold tracking-tight text-foreground">
          TITANCODE
        </Link>
      </div>
    </nav>
  )
}

// Simple Footer - dark theme only
function SimpleFooter() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/50">
      <p>&copy; {new Date().getFullYear()} TITANCODE. All rights reserved.</p>
    </footer>
  )
}

export default function NotFound() {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <head>
        <title>404 - Strona nie znaleziona | TITANCODE</title>
        <meta name="description" content="Strona, której szukasz, nie istnieje." />
      </head>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col antialiased font-sans bg-background`}>
        <SimpleNavbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-20">
          <h1 className="text-9xl font-bold text-[var(--titan-accent-primary)]">404</h1>
          <p className="text-2xl font-semibold mt-4 text-foreground">Strona nie znaleziona</p>
          <p className="text-muted-foreground mt-2 max-w-md">
            Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
          </p>
          <Link
            href="/pl"
            className="mt-8 px-6 py-3 bg-[var(--titan-accent-primary)] text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Wróć do strony głównej
          </Link>
        </main>
        <SimpleFooter />
      </body>
    </html>
  )
}
