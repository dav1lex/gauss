import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://titancode.pl'),
  title: {
    default: 'TITANCODE - Tworzenie Stron Internetowych',
    template: '%s | TITANCODE',
  },
  description: 'Warszawska agencja tworzenia stron i aplikacji. Bez szablonów. Bez WordPress. Czysty, ręcznie pisany kod dla ambitnych projektów.',
  keywords: ['tworzenie stron', 'Warszawa', 'Polska', 'e-commerce', 'SEO', 'web design', 'custom websites'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TITANCODE',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout for static export - locale layouts define their own html/body
  return children;
}