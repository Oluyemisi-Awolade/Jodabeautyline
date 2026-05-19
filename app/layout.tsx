import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Joda Beauty Line | Luxury Perfumes & Colognes | Worldwide Shipping',
    template: '%s | Joda Beauty Line',
  },
  description: 'Shop premium perfumes and colognes from Joda Beauty Line. Authentic fragrances crafted with fine ingredients. Worldwide shipping available.',
  keywords: ['perfume', 'cologne', 'luxury fragrance', 'oud perfume', 'Nigeria perfume', 'buy perfume online', 'worldwide shipping perfume', 'Joda Beauty Line'],
  authors: [{ name: 'Joda Beauty Line' }],
  creator: 'Joda Beauty Line',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jodabeautyline.com',
    siteName: 'Joda Beauty Line',
    title: 'Joda Beauty Line | Luxury Perfumes & Colognes',
    description: 'Premium fragrances with worldwide shipping. Crafted with fine ingredients for a lasting impression.',
    images: [{ url: '/images/ros.jpg', width: 800, height: 800, alt: 'Joda Beauty Line Perfume' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joda Beauty Line | Luxury Perfumes & Colognes',
    description: 'Premium fragrances with worldwide shipping.',
    images: ['/images/ros.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE', // Replace after registering on Google Search Console
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Joda Beauty Line',
              url: 'https://jodabeautyline.com',
              logo: 'https://jodabeautyline.com/images/ros.jpg',
              description: 'Premium perfumes and colognes with worldwide shipping.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'jodabeautyline@gmail.com',
                availableLanguage: ['English'],
              },
              sameAs: ['https://www.instagram.com/jodabeautyline'],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
