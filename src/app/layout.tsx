import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Miftah Portfolio',
  description: 'Created with nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
          <Navbar />
          {children}
        </body>
    </html>
  )
}
