'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'All orders are placed directly via WhatsApp. Click any "Order via WhatsApp" button on our website, and you will be connected to us instantly. We will confirm product availability, shipping cost, and payment method.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes — we ship worldwide. Delivery typically takes 21 to 28 business days depending on your location. Shipping rates are confirmed at the time of order based on your country.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, mobile money, and other payment options discussed directly on WhatsApp. We will confirm the best option for your country when you place your order.',
  },
  {
    q: 'Are your fragrances authentic?',
    a: 'Absolutely. Every Joda Beauty Line fragrance is 100% authentic, crafted in-house with premium quality ingredients. We do not sell imitations or third-party products.',
  },
  {
    q: 'How long do the fragrances last on skin?',
    a: 'Our fragrances are formulated for long-lasting wear. Depending on the scent and your skin type, you can expect 6 to 12 hours of wear. Oud-based fragrances such as ROS OUD and Oud tend to last the longest.',
  },
  {
    q: 'Can I get a refund or exchange?',
    a: 'Due to the personal nature of fragrance products, we do not accept returns. However, if your order arrives damaged or incorrect, please contact us on WhatsApp within 48 hours of delivery and we will resolve it promptly.',
  },
  {
    q: 'How should I store my perfume?',
    a: 'Store your fragrance in a cool, dry place away from direct sunlight and heat. Avoid storing in the bathroom where humidity can affect the scent. Kept properly, your fragrance will last 3 to 5 years.',
  },
  {
    q: 'Do you offer gift packaging?',
    a: 'Yes. If you are ordering as a gift, let us know on WhatsApp and we will arrange special gift packaging for your order.',
  },
  {
    q: 'Which fragrance is best for men?',
    a: 'ROS is our signature cologne for men — calm, fresh, and refined. ROS OUD offers a deeper, more intense option for men who prefer rich oud-based scents. Le Mot is subtle and works well for any gender.',
  },
  {
    q: 'How do I follow you on social media?',
    a: 'Follow us on Instagram @jodabeautyline for new launches, fragrance tips, and behind-the-scenes content. Link is in our footer.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e8e0d0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-display text-xl font-light text-[#0a0806] group-hover:text-[#c9973a] transition-colors leading-snug">
          {q}
        </span>
        <span className={`mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center border border-[#c9973a] text-[#c9973a] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-[#6b6460] leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FaqClient() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      <div className="bg-[#0a0806] pt-32 pb-16 text-center">
        <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">Support</div>
        <h1 className="font-display text-6xl md:text-7xl font-light text-[#f5f0e8] leading-none">
          Frequently<br />
          <span className="italic text-[#c9973a]">Asked</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-20">
        <div>
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-16 bg-[#0a0806] p-10 text-center">
          <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">
            Still have questions?
          </div>
          <p className="text-[#6b6460] mb-6">
            We are always happy to help. Reach out on WhatsApp or Email and we will respond promptly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2349138479374"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-dm text-[10px] tracking-[0.2em] uppercase bg-green-600 text-white px-7 py-3.5 hover:bg-green-500 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:jodabeautyline@gmail.com"
              className="font-mono-dm text-[10px] tracking-[0.2em] uppercase border border-[#c9973a] text-[#c9973a] px-7 py-3.5 hover:bg-[#c9973a] hover:text-[#0a0806] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
