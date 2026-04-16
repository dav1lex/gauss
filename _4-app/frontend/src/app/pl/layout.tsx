'use client'

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/hooks/use-translate";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { useEffect } from "react";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Apply theme class on mount for client-side navigation
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-full antialiased font-sans`}>
        <LocaleProvider locale="pl">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}