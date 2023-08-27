import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, DM_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '../components/Header'

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-family-inter',
})
const DmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-family-dmsans',
})

export const metadata: Metadata = {
  title: 'Tesla Bank',
  description: 'Tesla Bank By GCLDEV',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${DmSans.variable}`}>
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>

      <body>
        <main className="min-h-screen w-full bg-white dark:bg-dark-20 xl:block">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
