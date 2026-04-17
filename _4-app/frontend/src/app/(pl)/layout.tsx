import { ThemeProviderWrapper } from "@/components/titan/theme-provider";
import { LocaleProvider } from "@/hooks/use-translate";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function LocaleLayout({ children }: LayoutProps) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-full antialiased font-sans`}>
        <LocaleProvider locale="pl">
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
}