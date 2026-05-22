import type { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'
import { metadata as siteMetadata } from '@/content/oasis'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  metadataBase: new URL('https://oasis-alibda.dz'),
  openGraph: {
    title: siteMetadata.og.title,
    description: siteMetadata.og.description,
    type: 'website',
    locale: siteMetadata.og.locale,
    url: '/',
    siteName: siteMetadata.title,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="rtl" lang="ar" className={tajawal.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-text">{children}</body>
    </html>
  )
}
