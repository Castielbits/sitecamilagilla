'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Antes & Depois', href: '#antes-depois' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const whatsappLink =
    'https://wa.me/5571988196755?text=Olá%20Camila!%20Gostaria%20de%20agendar%20uma%20avaliação.'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Card flutuante — estilo nudik */}
      <div
        className={`w-full max-w-5xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/90 backdrop-blur-sm shadow-md'
        } rounded-2xl px-6 py-3`}
      >
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none shrink-0">
            <span className="font-serif text-lg font-bold text-[#2C1A0E] tracking-wide">
              Camila Gilla
            </span>
            <span className="text-[0.55rem] tracking-[0.28em] text-[#C9A96E] uppercase">
              Beauty Studio
            </span>
          </Link>

          {/* Nav — desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors tracking-wide ${
                  i === 0
                    ? 'text-[#C9A96E] font-semibold'
                    : 'text-[#5C3D1E]/80 hover:text-[#2C1A0E]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes sociais + CTA — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com/camilagilla.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C3D1E]/60 hover:text-[#2C1A0E] transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-72 pt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-2 border-t border-[#F2E9DE] pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#5C3D1E]/80 hover:text-[#2C1A0E] py-2 px-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold"
            >
              Agendar avaliação
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
