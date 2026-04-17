'use client'

import { useRef } from 'react'

const testimonials = [
  {
    name: 'Ana Paula',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Fernanda Lima',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Marcos Silva',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Juliana Costa',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
  },
]

const mediaLogos = [
  'A TARDE',
  'Bahia Notícias',
  'bahia.ba',
  'Correio Salvador',
  'Yacht Mais',
  'JbnBahia',
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < count ? '#C9A96E' : '#C9A96E40'}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#F2EDE8' }}>

      {/* Cabeçalho */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          {/* Esquerda — badge + título */}
          <div className="max-w-[580px]">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/80">
              <svg className="w-3 h-3 text-[#C9A96E]" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l1.2 5.6L16 8l-6.8 2.4L8 16l-1.2-5.6L0 8l6.8-2.4z" />
              </svg>
              <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
                Depoimentos
              </span>
            </div>

            <h2
              className="font-serif leading-[1.15] text-[#2C1A0E]"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 700 }}
            >
              O que os nossos pacientes<br />
              dizem sobre nossos tratamentos
            </h2>
          </div>

          {/* Setas */}
          <div className="flex items-center gap-3 lg:pt-16">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ backgroundColor: '#C9A96E' }}
              aria-label="Anterior"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ backgroundColor: '#C9A96E' }}
              aria-label="Próximo"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carrossel de cards */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-6 lg:px-16 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
            style={{ width: 290, height: 380 }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 35%, transparent 65%)' }}
            />
            {/* Botão play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Nome + estrelas */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-semibold text-base mb-1">{t.name}</p>
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-xs">Avaliação:</span>
                <Stars count={t.stars} />
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  )
}
