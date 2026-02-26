import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ykefolds Integrated Service Limited | Scaffolding Solutions Nigeria',
  description: 'Nigeria\'s leading scaffolding company providing supply, consultancy, procurement, fabrication and labour services for civil, industrial, and offshore projects.',
  keywords: 'scaffolding Nigeria, scaffold materials, offshore scaffolding, industrial scaffolding, scaffold consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
