import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Our Perfumes & Colognes | Joda Beauty Line',
  description: "Shop the full Joda Beauty Line collection — ROS, Soie d'Or Oud, ROS OUD, Le Mot, and Oud. Premium fragrances with worldwide shipping.",
}

export default function PerfumesPage() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0806] pt-32 pb-16 text-center">
        <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">Full Collection</div>
        <h1 className="font-display text-6xl md:text-7xl font-light text-[#f5f0e8] leading-none">
          Our <span className="italic text-[#c9973a]">Fragrances</span>
        </h1>
        <p className="text-[#6b6460] mt-6 max-w-xl mx-auto">
          Five signatures. Each one a world of its own.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 3} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0a0806] py-16 text-center">
        <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">Questions?</div>
        <p className="text-[#6b6460] mb-6">Not sure which fragrance is right for you? Message us — we'll help you choose.</p>
        <Link href="/order"
          className="inline-block font-mono-dm text-[10px] tracking-[0.2em] uppercase bg-[#c9973a] text-[#0a0806] px-8 py-4 hover:bg-[#e4bc58] transition-colors"
        >  
          Get Help Choosing
        </Link>
      </div>
    </div>
  )
}
