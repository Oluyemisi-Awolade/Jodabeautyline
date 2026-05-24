// File path in your GitHub: app/order/page.tsx

import type { Metadata } from 'next'
import { WHATSAPP_NUMBER } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Order | Joda Beauty Line',
  description: 'Place your order for Joda Beauty Line luxury perfumes and colognes via WhatsApp.',
  robots: { index: false }, // keeps this page off Google search
}

export default function OrderPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order for a Joda Beauty Line fragrance.")}`

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: 'linear-gradient(160deg, #0a0806 0%, #1c1208 50%, #0a0806 100%)' }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 16px rgba(34,197,94,0); }
        }
        .a1 { animation: fadeUp .7s ease .1s both; }
        .a2 { animation: fadeUp .7s ease .3s both; }
        .a3 { animation: fadeUp .7s ease .5s both; }
        .a4 { animation: fadeUp .7s ease .7s both; }
        .wa-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Logo */}
      <div className="a1 font-serif text-2xl tracking-[0.18em] text-[#c9973a] mb-12">JODA.</div>

      {/* Heading */}
      <h1 className="a2 font-serif text-4xl sm:text-5xl font-light text-[#f5f0e8] mb-4 leading-tight">
        Ready to Order?<br />
        <em className="text-[#c9973a]">We&apos;re one tap away.</em>
      </h1>

      <p className="a3 text-[#9a8e7e] text-base sm:text-lg max-w-md leading-relaxed mb-12">
        You&apos;re being connected to our WhatsApp. Tell us which fragrance you&apos;d like — we&apos;ll confirm availability, shipping, and payment personally.
      </p>

      {/* WhatsApp CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="a4 wa-pulse inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-10 py-5 transition-colors duration-200 rounded-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase">Open WhatsApp to Order</span>
      </a>

      {/* Info row */}
      <div className="a4 mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg w-full">
        {[
          ['📦', 'Worldwide Shipping', '21–28 business days'],
          ['✉️', 'Email', 'jodabeautyline@gmail.com'],
          ['🕐', 'Hours', 'Mon–Fri 9am–5pm WAT'],
        ].map(([icon, label, value]) => (
          <div key={label} className="bg-[#161310] border border-[#2e2820] p-4 text-left">
            <div className="text-lg mb-1">{icon}</div>
            <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#c9973a] mb-0.5">{label}</div>
            <div className="text-xs text-[#9a8e7e]">{value}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
