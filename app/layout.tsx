// app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://next-mdx-blog.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'John Smith - Développeur Full Stack',
    template: '%s | John Smith',
  },
  description:
    'Portfolio et blog de John Smith, développeur full stack spécialisé en Next.js, React et TypeScript. Découvrez mes projets et articles techniques.',
  keywords: [
    'John Smith',
    'développeur',
    'full stack',
    'Next.js',
    'React',
    'TypeScript',
    'portfolio',
    'blog',
  ],
  authors: [{ name: 'John', url: 'https://github.com/johnsmith' }],
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
    description: 'Nextjs Blog Portfolio de John Smith',
    siteName: 'John Smith',
    images: [
      {
        url: '/screenshots/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Smith - Développeur Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@johnsmith',
    title: 'John Smith - Développeur Full Stack',
    description: 'Portfolio et blog technique de John Smith',
    images: ['/screenshots/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [{ rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg' }],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased font-[family-name:var(--font-inter-tight)] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="min-h-screen flex flex-col justify-between">
          <div className="max-w-screen-sm mx-auto w-full flex-1 px-4 pt-6 pb-8">
            <Header />
            <main className="space-y-6" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
