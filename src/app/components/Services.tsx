'use client'

import { useRef } from 'react'

const services = [
  {
    name: 'Estética Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=560&fit=crop&crop=face',
  },
  {
    name: 'Harmonização',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=560&fit=crop&crop=face',
  },
  {
    name: 'Limpeza de Pele',
    image: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=400&h=560&fit=crop&crop=face',
  },
  {
    name: 'Preenchimento',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=560&fit=crop&crop=face',
  },
  {
    name: 'Botox',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=560&fit=crop&crop=face',
  },
]

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#FDFAF6' }}>

      {/* Cabeçalho */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

          {/* Esquerda — badge + título */}
          <div className="lg:w-[48%]">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/60">
              <svg className="w-3 h-3 text-[#C9A96E]" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l1.2 5.6L16 8l-6.8 2.4L8 16l-1.2-5.6L0 8l6.8-2.4z" />
              </svg>
              <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
                Nossos Serviços
              </span>
            </div>

            <h2
              className="font-serif leading-[1.15] text-[#2C1A0E]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
            >
              Tratamentos de estética
              <br />em Salvador
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
                personalizados para você!
              </span>
            </h2>
          </div>

          {/* Direita — descrição + setas */}
          <div className="lg:w-[52%] flex flex-col justify-between mt-6 lg:mt-2">
            <p className="text-[#6B4E35] leading-relaxed mb-8 max-w-[480px]" style={{ fontSize: '1rem' }}>
              Oferecemos tratamentos faciais avançados combinando técnica e cuidado,
              pensados para garantir seu conforto, bem-estar e os melhores resultados.
            </p>

            {/* Setas */}
            <div className="flex items-center gap-3">
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
      </div>

      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 lg:px-16 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
            style={{ width: 270, height: 400 }}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay gradiente */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 30%, transparent 70%)' }}
            />
            {/* Nome + ícone */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <span className="text-white font-semibold text-base">{service.name}</span>
              <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
