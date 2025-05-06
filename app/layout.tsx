import type { Metadata } from 'next';
import { Onest, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/app/theme-provider';

import '@/app/globals.css';
import { GithubLink } from '@/components/github-link';
import { ThemeButton } from '@/components/theme-button';

const fontSans = Onest({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

const fontMono = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'El John Bonga | Dev Portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark:bg-zinc-800" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <nav className="mx-auto flex max-w-2xl items-center justify-end gap-x-6 px-4 pt-10 sm:px-6">
            <GithubLink />
            <ThemeButton />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
