import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteUrl } from '@/lib/repo-guide-pages';
import './globals.css';
import { SiteHeader } from '@/components/site-header';

const googleAnalyticsId = 'G-WV8NR26RYN';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RUNBACK | Roguelike Field Guides',
  description:
    'Practical field guides for roguelikes and extraction roguelites: runs, builds, routes, and enemy intel.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RUNBACK | Roguelike Field Guides',
    description: 'Find the route. Make the run count.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUNBACK | Roguelike Field Guides',
    description: 'Find the route. Make the run count.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
