import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'El John Bonga | Self-taught Full Stack Developer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
