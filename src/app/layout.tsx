import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import AppLayout from '@/components/AppLayout';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.json',
  themeColor: '#1a044e',
  title: {
    default: 'Pixantara - Forge Legends, Code Realities',
    template: `%s | Pixantara`,
  },
  description: 'A game development competition focused on creating games that celebrate Indonesian culture, heritage, and values through pixel art and retro gaming aesthetics.',
  keywords: [
    'Kompetisi pemrograman Indonesia',
    'Pelatihan coding mahasiswa',
    'Innovation Lab',
    'Gemastik',
    'Olivia competition',
    'UI/UX design learning',
    'Web development training',
    'C++ programming education',
    'game development competition',
    'Indonesian culture games',
    'retro gaming',
    'pixel art',
  ],
  verification: {
    google: 'yXfpuFCl7zavNIz23JXFZY6nfR6y9naUhp_Oey6jJTc',
  },
  openGraph: {
    title: 'Pixantara - Forge Legends, Code Realities',
    description: 'Join the ultimate game development competition celebrating Indonesian culture through retro gaming.',
    url: siteUrl,
    siteName: 'Pixantara',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Pixantara Competition Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixantara - Forge Legends, Code Realities',
    description: 'Join the ultimate game development competition celebrating Indonesian culture through retro gaming.',
    images: [`/og-image.png`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body>
        <AppLayout>{children}</AppLayout>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B0010N2H9C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B0010N2H9C');
          `}
        </Script>
        <Script type="application/ld+json" id="structured-data">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pixantara",
              "url": "${siteUrl}",
              "logo": "${siteUrl}/og-image.png",
              "description": "A game development competition focused on creating games that celebrate Indonesian culture, heritage, and values through pixel art and retro gaming aesthetics."
            }
          `}
        </Script>
      </body>
    </html>
  );
}
