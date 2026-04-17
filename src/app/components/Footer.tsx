'use client'

import Link from 'next/link'

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Antes & Depois', href: '#antes-depois' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
]

const legalLinks = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Política de Cookies', href: '#' },
  { label: 'Camila Gilla', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1C' }}>

      {/* Corpo do footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div className="flex flex-col gap-4">
          <img
            src="/logo_camila_gilla_beauty.svg"
            alt="Studio Camila Gilla Beauty"
            className="h-14 w-auto brightness-0 invert"
          />
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm mb-1">Onde nos encontrar</p>
          <p className="text-white/50 text-sm leading-relaxed">
            Caminho das Árvores<br />
            Salvador – BA
          </p>

          <p className="text-white font-semibold text-sm mt-4 mb-1">Entre em contato</p>
          <a
            href="https://wa.me/5571988196755"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            (71) 98819-6755
          </a>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>

      {/* Barra inferior */}
      <div
        className="border-t px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: '#ffffff10' }}
      >
        {/* Redes sociais */}
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/camilagilla.beauty" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-xs text-center">
          © 2025. Todos os direitos reservados.
        </p>

        {/* Crédito */}
        <p className="text-white/30 text-xs">
          Studio Camila Gilla Beauty
        </p>
      </div>

    </footer>
  )
}
