import type { Metadata, Viewport } from 'next'
import './globals.css'
import { metadata as siteMetadata } from '@/content/oasis'

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
    <html dir="rtl" lang="ar">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-tajawal bg-white text-text">{children}</body>
    </html>
  )
}