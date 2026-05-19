import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] text-[#6b6460] border-t border-[#1e1a16]">
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-light tracking-[0.12em] text-[#f5f0e8] mb-3">
            JODA<span className="text-[#c9973a]">.</span>
          </div>
          <p className="text-sm leading-relaxed text-[#6b6460]">
            Luxury perfumes and colognes crafted with premium ingredients. Shipped worldwide with care.
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="font-mono-dm text-[9px] tracking-[0.22em] uppercase text-[#c9973a] mb-4">Navigation</div>
          <nav className="flex flex-col gap-2.5">
            {[['/', 'Home'], ['/perfumes', 'Perfumes'], ['/faq', 'FAQ'], ['/#contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-[#6b6460] hover:text-[#c8c0b0] transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <div className="font-mono-dm text-[9px] tracking-[0.22em] uppercase text-[#c9973a] mb-4">Get in Touch</div>
          <div className="flex flex-col gap-3 text-sm">
            <a href="https://wa.me/2349138479374" target="_blank" rel="noopener noreferrer"
              className="text-[#6b6460] hover:text-[#c8c0b0] transition-colors">
              WhatsApp: +234 913 847 9374
            </a>
            <a href="mailto:jodabeautyline@gmail.com"
              className="text-[#6b6460] hover:text-[#c8c0b0] transition-colors">
              jodabeautyline@gmail.com
            </a>
            <p className="text-[#6b6460]">Worldwide Shipping · 21–28 business days</p>
            <a href="https://www.instagram.com/jodabeautyline?igsh=amVoOTZvZWgya2k5"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#6b6460] hover:text-[#c9973a] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @jodabeautyline
            </a>
          </div>
        </div>

      </div>
      <div className="border-t border-[#1e1a16] py-5 text-center">
        <p className="font-mono-dm text-[9px] tracking-[0.15em] uppercase text-[#3d3328]">
          © {new Date().getFullYear()} Joda Beauty Line · All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
