'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import therapistData from '@/lib/therapistData'

const navLinks = [
  { label: 'שירותים', href: '#services' },
  { label: 'אודות',   href: '#about' },
  { label: 'צור קשר', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waHref = `https://wa.me/${therapistData.whatsappNumber}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-heebo font-bold text-lg text-cp-700 tracking-wide">
            {therapistData.name}
          </span>
          <span className="font-assistant text-xs text-cp-500 font-normal">
            {therapistData.title}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-assistant text-charcoal/70 hover:text-cp-600 transition-colors text-sm font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:+${therapistData.whatsappNumber}`}
            className="flex items-center gap-1.5 text-cp-600 hover:text-cp-700 text-sm font-medium transition-colors">
            <Phone size={15} />
            <span>התקשרי</span>
          </a>
          <a href={waHref} target="_blank" rel="noopener noreferrer"
            className="bg-cp-600 hover:bg-cp-700 text-white font-assistant font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            קביעת פגישה
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} aria-label="תפריט" className="md:hidden text-cp-700">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-cp-200 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-assistant text-base text-charcoal/80 hover:text-cp-600 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href={waHref} target="_blank" rel="noopener noreferrer"
            className="mt-2 bg-cp-600 hover:bg-cp-700 text-white font-assistant font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors">
            קביעת פגישה ב-WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
