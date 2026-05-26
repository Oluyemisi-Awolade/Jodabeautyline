'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/perfumes', label: 'Perfumes' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0806]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-light tracking-[0.12em] text-[#f5f0e8]">
          JODA<span className="text-[#c9973a]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono-dm text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname === href
                  ? 'text-[#c9973a]'
                  : 'text-[#c8c0b0] hover:text-[#f5f0e8]'
              }`}
            >
              {label}
            </Link>
          ))}
          {/* ✅ FIX: Order Now links to /order page instead of WhatsApp */}
          <Link
            href="/order"
            className="font-mono-dm text-[10px] tracking-[0.2em] uppercase bg-[#c9973a] text-[#0a0806] px-5 py-2.5 hover:bg-[#e4bc58] transition-colors duration-200"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0a0806] border-t border-[#2e2820] transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[#c8c0b0] hover:text-[#c9973a] transition-colors"
            >
              {label}
            </Link>
          ))}
          {/* ✅ FIX: Order Now links to /order page instead of WhatsApp */}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="font-mono-dm text-[11px] tracking-[0.2em] uppercase bg-[#c9973a] text-[#0a0806] px-5 py-3 text-center"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
