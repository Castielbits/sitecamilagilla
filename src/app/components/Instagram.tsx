'use client'

import Link from 'next/link'

type Post = {
  id: string
  url: string
  image: string
  tema: string
  frase: string
  categoria: string
}

const posts: Post[] = [
  {
    id: 'DXLI7JKFWlR',
    url: 'https://www.instagram.com/p/DXLI7JKFWlR/?img_index=1',
    image: '/insta-1.jpg',
    tema: 'Botox que respeita suas expressões',
    frase: 'Quando bem indicado, o botox realça sua beleza com naturalidade.',
    categoria: 'Toxina Botulínica',
  },
  {
    id: 'DRim8uwDCvs',
    url: 'https://www.instagram.com/p/DRim8uwDCvs/',
    image: '/insta-2.jpg',
    tema: 'Pele renovada, lábios hidratados',
    frase: 'Limpeza profunda + hidratação labial que transforma o viço natural.',
    categoria: 'Skincare',
  },
  {
    id: 'DLQUI_EJe3W',
    url: 'https://www.instagram.com/p/DLQUI_EJe3W/',
    image: '/insta-3.jpg',
    tema: 'Ver uma paciente se sentir linda',
    frase: 'Nada se compara a ver alguém se olhando no espelho e amando o que vê.',
    categoria: 'Bastidores',
  },
  {
    id: 'DIclFztpusO',
    url: 'https://www.instagram.com/p/DIclFztpusO/?img_index=1',
    image: '/fotohero2.jpg',
    tema: 'Cílios que refletem sua personalidade',
    frase: 'Volume Brasileiro: um olhar que é exclusivamente seu.',
    categoria: 'Cílios',
  },
]

export default function Instagram() {
  return (
    <section id="instagram" className="py-24 overflow-hidden" style={{ backgroundColor: '#FDFAF6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/80">
            <svg className="w-3 h-3 text-[#C9A96E]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              @camilagilla.beauty
            </span>
          </div>
          <h2
            className="font-serif leading-[1.15] text-[#2C1A0E] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
          >
            Acompanhe{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              meu dia a dia
            </span>
          </h2>
          <p className="text-[#6B4E35] max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
            Bastidores, resultados e dicas de cuidado diário direto do meu Instagram.
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ aspectRatio: '4 / 5' }}
            >
              <img
                src={post.image}
                alt={post.tema}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradiente sempre visível */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Ícone Instagram no canto */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>

              {/* Conteúdo */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-block text-[0.55rem] tracking-[0.25em] uppercase font-semibold text-[#E8D7C3] mb-2">
                  {post.categoria}
                </span>
                <h3 className="font-serif font-bold leading-tight mb-1.5" style={{ fontSize: '1.05rem' }}>
                  {post.tema}
                </h3>
                <p className="text-white/80 leading-snug" style={{ fontSize: '0.75rem' }}>
                  {post.frase}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="flex justify-center mt-12">
          <Link
            href="https://instagram.com/camilagilla.beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
            style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #5C3D1E 100%)', fontSize: '0.95rem' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguir @camilagilla.beauty
          </Link>
        </div>
      </div>
    </section>
  )
}
