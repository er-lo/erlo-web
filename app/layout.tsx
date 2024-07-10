import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Erick Lopez',
    template: '%s | Erick Lopez',
  },
  description: 'This is my personal portfolio.',
  openGraph: {
    title: 'Erick Lopez Portfolio',
    description: 'This is my personal portfolio.',
    url: baseUrl,
    siteName: 'Erick Lopez Portfolio',
    locale: 'en_US',
    type: 'website',
  },
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black h-screen',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased flex flex-col h-screen max-w-5xl mx-auto overflow-hidden">
        <main className="flex flex-col md:flex-row md:mt-28 lg:mt-44 overflow-hidden">
          <Navbar />
          <div className="overflow-y-auto px-10 md:p-0 md:pr-10 lg:w-3xl mb-8 md:mb-20 lg:mb-28">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
