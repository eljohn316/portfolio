import '@/app/globals.css';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { Providers } from '@/app/providers';

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
      <body className="bg-zinc-50 dark:bg-zinc-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
