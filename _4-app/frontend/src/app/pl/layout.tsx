import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/hooks/use-translate";

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocaleProvider locale="pl">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}