import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BharatDarshan — India’s Interactive AI Heritage Explorer',
  description:
    'Capture it. Understand it. Experience it. Remember it. An interactive AI-powered journey through India’s monuments, sacred architecture, warrior heritage, and traditional music.',
  keywords: [
    'BharatDarshan',
    'India Heritage',
    'AI Heritage Explorer',
    'Bansuri Simulator',
    'Konark Sun Temple',
    'Shivaji Talwar',
    'Chola Bronze Nataraja',
    'Hampi Chariot',
    'Indian Tourism',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛</text></svg>" />
      </head>
      <body className="antialiased min-h-screen bg-heritage-ivory selection:bg-heritage-gold selection:text-heritage-maroonDark">
        {children}
      </body>
    </html>
  );
}
