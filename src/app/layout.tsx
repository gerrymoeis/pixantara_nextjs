import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';
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

export const metadata: Metadata = {
  title: 'Pixantara - Official Competition Website',
  description: 'A game development competition focused on creating games that celebrate Indonesian culture, heritage, and values through pixel art and retro gaming aesthetics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <AppLayout>{children}</AppLayout>
    </html>
  );
}
