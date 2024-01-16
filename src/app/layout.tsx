import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Erick Lopez',
  description: 'Portfolio website for Erick Lopez, made with nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="px-6 md:px-6 pt-8 md:pt-20 max-w-[700px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
