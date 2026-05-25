import Image from 'next/image'
import Link from 'next/link'
import { Product, WHATSAPP_NUMBER } from '@/lib/products'

interface Props {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: Props) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`

  return (
    <div className="product-card group bg-white border border-[#e8e0d0] overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f5f0e8]" style={{ aspectRatio: '1/1' }}>
        <Image
          src={product.image}
          alt={`${product.name} – ${product.tagline}`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover product-img"
          priority={priority}
        />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#c9973a] mb-1">
          {product.tagline}
        </div>
        <h3 className="font-display text-2xl font-light tracking-wide text-[#0a0806] mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b6460] leading-relaxed mb-3 flex-1">
          {product.description}
        </p>
        <div className="font-mono-dm text-[9px] tracking-[0.12em] text-[#9a8e7e] mb-4 border-t border-[#e8e0d0] pt-3">
          {product.notes}
        </div>
        </a>
      </div>
    </div>
  )
}
