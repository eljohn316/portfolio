import '@/app/globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'El John Bonga | Self-taught Full Stack Developer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-zinc-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
