import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Joda Beauty Line | Luxury Perfumes & Colognes | Worldwide Shipping',
  description: "Discover Joda Beauty Line — premium perfumes and colognes crafted with fine ingredients. Shop ROS, Soie d'Or Oud, Le Mot, and more. Worldwide shipping available.",
}

const MODEL_ROS = '/images/handsome-man-looking-away-outside.jpg'
const MODEL_SOIE = '/images/portrait-handsome-model-modern-male-resized.jpg'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #2c1f0e 0%, #3d2a10 30%, #4a3218 55%, #2c1f0e 100%)' }}
      >
        <style>{`
          @keyframes floatBottle {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-14px); }
          }
          @keyframes fadeUp {
            from { opacity:0; transform:translateY(24px); }
            to   { opacity:1; transform:translateY(0); }
          }
          .anim-1 { animation: fadeUp .9s ease .1s both; }
          .anim-2 { animation: fadeUp .9s ease .3s both; }
          .anim-3 { animation: fadeUp .9s ease .5s both; }
          .anim-4 { animation: fadeUp .9s ease .7s both; }
          .bottle-float { animation: floatBottle 5s ease-in-out 1.2s infinite; }
        `}</style>

        {/* warm glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 72% 55%, rgba(201,151,58,0.2) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto w-full px-6 pt-6 pb-6
                        flex flex-col md:flex-row items-center gap-6">

          {/* bottle — above text on mobile, right on desktop */}
          <div className="bottle-float flex-none flex justify-center md:justify-end
                          order-1 md:order-2 md:flex-1">
            <div className="relative w-[140px] sm:w-[180px] md:w-[320px]"
              style={{ aspectRatio: '3/4' }}>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{
                  width:'160px', height:'160px', borderRadius:'50%',
                  background:'radial-gradient(circle, rgba(201,151,58,0.25) 0%, transparent 65%)',
                  filter:'blur(30px)',
                }} />
              </div>
              <Image
                src="/images/ros.jpg"
                alt="ROS Cologne by Joda Beauty Line"
                fill
                className="object-contain"
                style={{ filter:'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
                priority
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                              bg-[#2c1f0e]/90 border border-[#c9973a]/40
                              px-4 py-2 text-center whitespace-nowrap">
                <div className="font-mono-dm text-[7px] tracking-[0.25em] uppercase text-[#c9973a]">Featured Scent</div>
                <div className="font-display text-base text-[#f5f0e8]">ROS</div>
              </div>
            </div>
          </div>

          {/* copy */}
          <div className="flex-1 z-10 text-center md:text-left order-2 md:order-1">
            <p className="anim-1 font-mono-dm text-[10px] tracking-[0.32em] uppercase text-[#c9973a] mb-5">
              Luxury Fragrances · Worldwide Shipping
            </p>
            <h1 className="anim-2 font-display text-5xl sm:text-6xl md:text-8xl font-light text-[#f5f0e8] leading-none mb-5">
              Scent is<br />
              <span className="italic text-[#c9973a]">memory.</span>
            </h1>
            <p className="anim-3 text-[#d4c9b8] text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              Premium perfumes and colognes crafted with the finest ingredients — for those who understand that a great fragrance is the most intimate form of self‑expression.
            </p>
            <div className="anim-4">
              {/* ✅ FIX: links to /perfumes (collection page) */}
              <Link href="/perfumes"
                className="font-mono-dm text-[10px] tracking-[0.22em] uppercase bg-[#c9973a] text-[#0a0806] px-8 py-4 hover:bg-[#e4bc58] transition-colors inline-block">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="font-mono-dm text-[8px] tracking-[0.3em] uppercase text-[#8a7355]">Scroll</div>
          <div className="w-px h-6 bg-gradient-to-b from-[#8a7355] to-transparent" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#241808] border-y border-[#3d2a10]">
        <div className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#3d2a10]">
          {[['100%','Authentic'],['Global','Shipping'],['Premium','Ingredients'],['5','Signature Scents']].map(([val, label]) => (
            <div key={label} className="text-center py-2 px-4">
              <div className="font-display text-xl font-light text-[#c9973a]">{val}</div>
              <div className="font-mono-dm text-[9px] tracking-[0.18em] uppercase text-[#8a7355] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODEL SECTION ── */}
      <section className="bg-[#0e0c0a] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-4">For Everyone</div>
            <h2 className="font-display text-5xl font-light text-[#f5f0e8] leading-tight">
              Wear your <span className="italic text-[#c9973a]">signature.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* ROS */}
            <div className="relative group overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src={MODEL_ROS}
                alt="Joda Beauty Line ROS Cologne — for the confident man"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/20 to-transparent" />
              <div className="absolute bottom-40 left-6 w-32 h-44"
                style={{ mixBlendMode: 'multiply', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}>
                <Image src="/images/ros.jpg" alt="ROS Cologne by Joda Beauty Line" fill className="object-contain" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#c9973a] mb-2">His Signature</div>
                <div className="font-display text-3xl font-light text-[#f5f0e8] mb-1">ROS</div>
                <p className="text-[#9a8e7e] text-sm mb-5">Calm and refreshing. Confident, clean, unforgettable.</p>
                {/* ✅ FIX: links to /order instead of WhatsApp */}
                <Link href="/order"
                  className="inline-block font-mono-dm text-[9px] tracking-[0.2em] uppercase border border-[#c9973a] text-[#c9973a] px-6 py-3 hover:bg-[#c9973a] hover:text-[#0a0806] transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Soie d'Or Oud */}
            <div className="relative group overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src={MODEL_SOIE}
                alt="Joda Beauty Line Soie d'Or Oud — timeless elegance"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/20 to-transparent" />
              <div className="absolute bottom-40 left-6 w-32 h-44"
                style={{ mixBlendMode: 'multiply', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}>
                <Image src="/images/soie.jpg" alt="Soie d'Or Oud by Joda Beauty Line" fill className="object-contain" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-mono-dm text-[9px] tracking-[0.2em] uppercase text-[#c9973a] mb-2">His Signature</div>
                <div className="font-display text-3xl font-light text-[#f5f0e8] mb-1">Soie d&apos;Or Oud</div>
                <p className="text-[#9a8e7e] text-sm mb-5">Silken oud, smooth as silk, luminous as sunrise.</p>
                {/* ✅ FIX: links to /order instead of WhatsApp */}
                <Link href="/order"
                  className="inline-block font-mono-dm text-[9px] tracking-[0.2em] uppercase border border-[#c9973a] text-[#c9973a] px-6 py-3 hover:bg-[#c9973a] hover:text-[#0a0806] transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-5">About Us</div>
            <h2 className="font-display text-5xl font-light text-[#0a0806] leading-tight mb-6">
              Crafted for those<br /><span className="italic">who remember.</span>
            </h2>
            <p className="text-[#6b6460] leading-relaxed mb-5">
              Joda Beauty Line was born from a belief that fragrance is more than scent — it is identity, mood, and memory. We create premium perfumes and colognes using fine-quality ingredients, blended with care for a rich, long-lasting experience.
            </p>
            <p className="text-[#6b6460] leading-relaxed">
              Wherever you are in the world, we deliver directly to your door — with secure packaging and the care your order deserves.
            </p>
            {/* ✅ FIX: "View All Fragrances" link removed */}
          </div>
          <div className="relative h-[500px]">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden">
              <Image src="/images/soie.jpg" alt="Soie d'Or Oud by Joda Beauty Line" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden border-4 border-[#faf7f2]">
              <Image src="/images/oud.jpg" alt="Oud Perfume by Joda Beauty Line" fill className="object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-2/5 h-2/5 overflow-hidden border-4 border-[#faf7f2]">
              <Image src="/images/ros.jpg" alt="ROS Cologne by Joda Beauty Line" fill className="object-cover" />
            </div>
            <div className="absolute bottom-8 right-4 font-display text-6xl font-light text-[#c9973a] opacity-20 select-none">JBL</div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 bg-[#f0ece4]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-3">Collection</div>
              <h2 className="font-display text-5xl font-light text-[#0a0806]">
                Signature<br /><span className="italic">Fragrances</span>
              </h2>
            </div>
            <Link href="/perfumes"
              className="hidden md:block font-mono-dm text-[10px] tracking-[0.2em] uppercase text-[#6b6460] hover:text-[#c9973a] transition-colors border-b border-current pb-0.5">
              See All 5 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 2} />
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link href="/perfumes"
              className="font-mono-dm text-[10px] tracking-[0.2em] uppercase border border-[#0a0806] text-[#0a0806] px-8 py-3 inline-block">
              See All Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="py-16 bg-[#faf7f2] border-y border-[#e8e0d0]">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-3">Follow Us</div>
          <h2 className="font-display text-4xl font-light text-[#0a0806] mb-6">@jodabeautyline</h2>
          <a href="https://www.instagram.com/jodabeautyline?igsh=amVoOTZvZWgya2k5"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono-dm text-[10px] tracking-[0.2em] uppercase bg-[#0a0806] text-[#f5f0e8] px-8 py-4 hover:bg-[#c9973a] hover:text-[#0a0806] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-[#0a0806]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="font-mono-dm text-[9px] tracking-[0.25em] uppercase text-[#c9973a] mb-5">Order Today</div>
          <h2 className="font-display text-5xl font-light text-[#f5f0e8] mb-6">
            Place Your<br /><span className="italic text-[#c9973a]">Order</span>
          </h2>
          <p className="text-[#6b6460] max-w-xl mx-auto mb-12 leading-relaxed">
            Contact us directly on WhatsApp or Email. We will confirm availability, shipping rates, and payment options — personally.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              ['WhatsApp','+234 913 847 9374'],
              ['Email','jodabeautyline@gmail.com'],
              ['Shipping','Worldwide · 21–28 days'],
              ['Hours','Mon–Fri 9am–5pm WAT'],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#161310] border border-[#2e2820] p-4 text-left">
                <div className="font-mono-dm text-[8px] tracking-[0.2em] uppercase text-[#c9973a] mb-1">{label}</div>
                <div className="text-sm text-[#c8c0b0]">{value}</div>
              </div>
            ))}
          </div> 
        </div>
      </section>
    </>
  )
}
