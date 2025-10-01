import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anamol Dhakal',
  description: "Anamol's Portfolio, specializing in AI, Machine Learning, Backend Development, and System Design.",
  keywords: 'Anamol Dhakal, backend development, system design, AI, machine learning, data analysis, artificial intelligence',
  authors: [{ name: 'Anamol Dhakal' }],
  twitter: {
    title: 'Anamol Dhakal - AI, Backend, and System Design',
    description: "Discover Anamol Dhakal's expertise in AI, Machine Learning, and Backend Development.",
    site: '@anmoldkl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
