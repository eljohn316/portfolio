import '@/app/globals.css';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { Providers } from '@/app/providers';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Container } from '@/components/layout/container';

const fontMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'El John Bonga | Self-taught Full Stack Developer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontMono.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-zinc-50 py-8 sm:py-10 dark:bg-zinc-900">
        <Providers>
          <Container className="flex justify-end">
            <ThemeToggle />
          </Container>
          {children}
        </Providers>
      </body>
    </html>
  );
}
