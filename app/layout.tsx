// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from './components/layout/Navigation';
import Breadcrumb from './components/layout/Breadcrumb';
import ConditionalNavigation from './components/layout/ConditionalNavigation';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './providers/ThemeProvider';
import { AnalyticsProvider } from './providers/AnalyticsProvider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

// Métadonnées étendues pour un meilleur SEO
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'John Smith - Développeur Full Stack',
    template: '%s | John Smith'
  },
  description: 'Portfolio et blog de John Smith, développeur full stack spécialisé en Next.js, React et TypeScript. Découvrez mes projets et articles techniques.',
  keywords: ['John Smith', 'développeur', 'full stack', 'Next.js', 'React', 'TypeScript', 'portfolio', 'blog'],
  authors: [{ name: 'John Smith', url: 'https://github.com/johnsmith' }],
  creator: 'John Smith',
  publisher: 'John Smith',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'John Smith - Développeur Full Stack',
    description: 'Portfolio et blog technique de John Smith',
    siteName: 'John Smith',
    images: [
      {
        url: '/og-image.jpg', // À créer
        width: 1200,
        height: 630,
        alt: 'John Smith - Développeur Full Stack',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@johnsmith',
    title: 'John Smith - Développeur Full Stack',
    description: 'Portfolio et blog technique de John Smith',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' }
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased tracking-tight font-sans">
        <ThemeProvider>
          <AnalyticsProvider>
            <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-200 transition-colors duration-300">
              <div className="max-w-[60ch] mx-auto w-full">
                <ConditionalNavigation />
                <Breadcrumb />
                <main className="space-y-6" role="main">
                  {children}
                </main>
              </div>
              <Footer />
            </div>
            
            {/* Analytics uniquement en production */}
            {process.env.NODE_ENV === 'production' && (
              <>
                <Analytics />
                <SpeedInsights />
              </>
            )}
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

