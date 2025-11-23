import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'bracketCV - Free JSON Resume Builder for Developers',
  description:
    'Create professional, ATS-friendly resumes from JSON. No Word, no LaTeX, no BS. Built by developer, for developers.',
  keywords: [
    'resume builder',
    'CV generator',
    'JSON resume',
    'developer resume',
    'ATS friendly resume',
    'free resume builder',
    'tech resume',
    'programmer CV',
    'software engineer resume',
    'two column resume',
    'JSON CV',
  ],
  authors: [{ name: 'Palash Asati', url: 'https://github.com/psocbitm' }],
  creator: 'Palash Asati',
  publisher: 'Palash Asati',
  metadataBase: new URL('https://bracket-cv.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'bracketCV - Free JSON Resume Builder for Developers',
    description: 'Create professional, ATS-friendly resumes from JSON. No Word, no LaTeX, no BS.',
    url: 'https://bracket-cv.vercel.app',
    siteName: 'bracketCV',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'bracketCV - JSON Resume Builder',
      },
    ],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="googleef705d97c2b02dde" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
