import type { Metadata } from 'next';
import Entry from '@/components/Entry';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Phera – Connecting Therapists and Users for Better Mental Health',
  description:
    'Phera is a platform that bridges the gap between therapists and individuals seeking support. Discover licensed professionals, explore therapy options, and find the right guidance for your personal growth, mental wellness, and healing journey—all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Entry>{children}</Entry>
      </body>
    </html>
  );
}
