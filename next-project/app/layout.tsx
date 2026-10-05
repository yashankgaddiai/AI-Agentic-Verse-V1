import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

// Manrope loaded with next/font/google (weights 400, 500, 600)
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Agentic Verse – Animation Creator Studio',
  description:
    'AI Agentic Verse is an animation creator brand crafting cinematic synthetic worlds, spatial choreography, and autonomous visual narratives.',
  icons: {
    icon: '/images/logo.png',
  },
  metadataBase: new URL('https://aiagenticverse.com'),
  openGraph: {
    title: 'AI Agentic Verse – Animation Creator Studio',
    description:
      'AI Agentic Verse synthesises narrative animation with algorithmic spatial direction.',
    url: 'https://aiagenticverse.com',
    siteName: 'AI Agentic Verse',
    images: [
      {
        url: '/images/hero_verse_still.jpg',
        width: 1200,
        height: 675,
        alt: 'AI Agentic Verse Animation Frame',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agentic Verse – Animation Creator Studio',
    description:
      'AI Agentic Verse synthesises narrative animation with algorithmic spatial direction.',
    images: ['/images/hero_verse_still.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`}>
      <body className="bg-[#FBFAF8] text-[#1A1815] font-sans antialiased selection:bg-[#C25A3C]/15 selection:text-[#C25A3C]">
        {children}
      </body>
    </html>
  );
}
