import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link href={`/perfumes/${product.id}`} className="group block bg-white">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f5f2ee]" style={{ aspectRatio: '3/4' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover product-img transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#c9973a] mb-2">
          {product.tagline}
        </div>
        <h3 className="font-display text-2xl font-light tracking-wide text-[#0a0806] mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b6460] leading-relaxed mb-3">
          {product.description}
        </p>
        <div className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#9a8e7e] mb-4">
          {product.notes}
        </div>
        {/* Sizes */}
        <div className="flex gap-2 mt-auto">
          {['30ml', '50ml', '100ml'].map((size) => (
            <span key={size}
              className="font-mono-dm text-[9px] tracking-[0.15em] uppercase border border-[#d4cdc4] text-[#6b6460] px-2 py-1">
              {size}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

