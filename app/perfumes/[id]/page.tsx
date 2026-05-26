// File path: app/perfumes/[id]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import type { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.id === params.id)
  if (!product) return {}
  return {
    title: `${product.name} | Joda Beauty Line`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export default function PerfumePage({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Back */}
        <Link href="/perfumes"
          className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#9a8e7e] hover:text-[#c9973a] transition-colors mb-10 inline-block">
          ← Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <div className="relative bg-[#f5f2ee]" style={{ aspectRatio: '3/4' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-3">
              {product.tagline}
            </div>
            <h1 className="font-display text-5xl font-light text-[#0a0806] mb-4">
              {product.name}
            </h1>
            <p className="text-[#6b6460] leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#9a8e7e] mb-8">
              {product.notes}
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#0a0806] mb-3">Sizes</div>
              <div className="flex gap-3">
                {['30ml', '50ml', '100ml'].map((size) => (
                  <button key={size}
                    className="font-mono-dm text-[10px] tracking-[0.15em] uppercase border border-[#0a0806] text-[#0a0806] px-4 py-2 hover:bg-[#0a0806] hover:text-white transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Order button */}
            <Link href={`/order?product=${encodeURIComponent(product.name)}`}
              className="font-mono-dm text-[11px] tracking-[0.2em] uppercase bg-[#0a0806] text-white px-8 py-5 text-center hover:bg-[#c9973a] transition-colors duration-200">
              Order Now
            </Link>

            {/* Subtle note */}
            <p className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#9a8e7e] mt-4 text-center">
              Worldwide shipping · 21–28 business days
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
