import FaqClient from './FaqClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Joda Beauty Line',
  description: 'Frequently asked questions about Joda Beauty Line perfumes, shipping, payments, and orders.',
}

export default function FaqPage() {
  return <FaqClient />
}
