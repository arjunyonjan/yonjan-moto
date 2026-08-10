import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yonjan Moto — Nepal\'s Moto Forge',
  description: 'Custom fairings · Injection molding · Vacuum forming. Built in Nepal for the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
