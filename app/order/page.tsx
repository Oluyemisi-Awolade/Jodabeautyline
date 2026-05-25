// File path: app/order/page.tsx
import type { Metadata } from 'next'
import { WHATSAPP_NUMBER } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Order | Joda Beauty Line',
  description: 'Place your order for Joda Beauty Line luxury perfumes.',
  robots: { index: false },
}

export default function OrderPage({
  searchParams,
}: {
  searchParams: { product?: string }
}) {
  const productName = searchParams.product || 'a Joda Beauty Line fragrance'
  const waMessage = encodeURIComponent(`Hi! I'd like to order ${productName}.`)
  const emailSubject = encodeURIComponent(`Order Enquiry — ${productName}`)
  const emailBody = encodeURIComponent(`Hi,\n\nI'd like to place an order for ${productName}.\n\nPlease let me know the availability and shipping details.\n\nThank you.`)

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-lg mx-auto px-6 py-16">

        {/* Header */}
        <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4 text-center">
          Place Your Order
        </div>
        <h1 className="font-display text-4xl font-light text-[#0a0806] text-center mb-3">
          How would you<br />like to reach us?
        </h1>
        <p className="text-[#9a8e7e] text-center text-sm leading-relaxed mb-12">
          Our team will confirm availability, size, shipping rates and payment — personally.
        </p>

        {/* Contact options — LV style */}
        <div className="flex flex-col divide-y divide-[#e8e0d0]">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 py-6 hover:text-[#c9973a] transition-colors group">
            <div className="w-10 h-10 flex items-center justify-center border border-[#e8e0d0] group-hover:border-[#c9973a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#c9973a]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-display text-lg text-[#0a0806] group-hover:text-[#c9973a] transition-colors">WhatsApp Message</div>
              <div className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#9a8e7e] mt-0.5">+234 913 847 9374</div>
            </div>
            <div className="text-[#9a8e7e] group-hover:text-[#c9973a] transition-colors">→</div>
          </a>

          {/* Email */}
          <a
            href={`mailto:jodabeautyline@gmail.com?subject=${emailSubject}&body=${emailBody}`}
            className="flex items-center gap-5 py-6 hover:text-[#c9973a] transition-colors group">
            <div className="w-10 h-10 flex items-center justify-center border border-[#e8e0d0] group-hover:border-[#c9973a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c9973a]">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-display text-lg text-[#0a0806] group-hover:text-[#c9973a] transition-colors">Send an Email</div>
              <div className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#9a8e7e] mt-0.5">jodabeautyline@gmail.com</div>
            </div>
            <div className="text-[#9a8e7e] group-hover:text-[#c9973a] transition-colors">→</div>
          </a>

        </div>

        {/* Info */}
        <div className="mt-12 pt-8 border-t border-[#e8e0d0] text-center">
          <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#9a8e7e]">
            Worldwide Shipping · 21–28 Business Days · Mon–Fri 9am–5pm WAT
          </div>
        </div>

      </div>
    </main>
  )
}

