'use client'

import { useState, useRef, useCallback } from 'react'

type Case = {
  id: number
  titulo: string
  tratamento: string
  descricao: string
  antes: string
  depois: string
}

const casos: Case[] = [
  {
    id: 1,
    titulo: 'Rejuvenescimento facial',
    tratamento: 'Toxina Botulínica + Skinbooster',
    descricao: 'Suavização de linhas de expressão na testa e região dos olhos com preservação total da mímica facial.',
    antes: '/fotohero.png',
    depois: '/fotohero2.jpg',
  },
  {
    id: 2,
    titulo: 'Harmonização dos lábios',
    tratamento: 'Preenchimento com Ácido Hialurônico',
    descricao: 'Definição de contorno e hidratação dos lábios, respeitando as proporções naturais do rosto.',
    antes: '/insta-2.jpg',
    depois: '/insta-1.jpg',
  },
  {
    id: 3,
    titulo: 'Limpeza de pele profunda',
    tratamento: 'Peeling + Hidratação intensiva',
    descricao: 'Pele renovada, viçosa e com textura uniforme após protocolo exclusivo de limpeza e hidratação.',
    antes: '/insta-3.jpg',
    depois: '/insta-2.jpg',
  },
]

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0)
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(pct)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updateSlider(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX)
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updateSlider(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) updateSlider(e.touches[0].clientX)
  }

  const caso = casos[activeCase]

  return (
    <section id="antes-depois" className="py-24 overflow-hidden" style={{ backgroundColor: '#F2E9DE' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-white/60 backdrop-blur-sm">
            <svg className="w-3 h-3 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              Resultados reais
            </span>
          </div>
          <h2
            className="font-serif leading-[1.15] text-[#2C1A0E] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
          >
            Antes{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              &amp; depois
            </span>
          </h2>
          <p className="text-[#6B4E35] max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
            Arraste o controle para comparar. Cada tratamento é planejado para respeitar sua beleza natural.
          </p>
        </div>

        {/* Slider interativo */}
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl select-none cursor-ew-resize"
          style={{ aspectRatio: '4 / 3', backgroundColor: '#2C1A0E', touchAction: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Depois (fundo) */}
          <img
            src={caso.depois}
            alt={`${caso.titulo} - depois`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />

          {/* Antes (clipado pelo slider) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={caso.antes}
              alt={`${caso.titulo} - antes`}
              className="absolute inset-0 h-full object-cover"
              style={{ width: containerRef.current?.clientWidth || '100%', maxWidth: 'none' }}
              draggable={false}
            />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full pointer-events-none">
            Antes
          </div>
          <div className="absolute top-4 right-4 bg-[#C9A96E]/90 backdrop-blur-sm text-white text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full pointer-events-none">
            Depois
          </div>

          {/* Linha divisória + handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className="absolute top-1/2 left-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info do caso */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#C9A96E] mb-2">
            {caso.tratamento}
          </p>
          <h3 className="font-serif text-2xl text-[#2C1A0E] mb-2 font-bold">
            {caso.titulo}
          </h3>
          <p className="text-[#6B4E35]" style={{ fontSize: '0.95rem' }}>
            {caso.descricao}
          </p>
        </div>

        {/* Seletor de casos */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {casos.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCase(i)
                setSliderPos(50)
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                i === activeCase
                  ? 'bg-[#2C1A0E] text-white shadow-md'
                  : 'bg-white text-[#5C3D1E] hover:bg-[#F2E9DE] border border-[#C9A96E]/30'
              }`}
            >
              Caso {i + 1}
            </button>
          ))}
        </div>

        {/* Aviso ético */}
        <p className="text-center text-[#6B4E35]/60 text-xs italic mt-8 max-w-2xl mx-auto">
          * Imagens meramente ilustrativas. Resultados variam conforme o biotipo e protocolo recomendado em avaliação individual.
        </p>
      </div>
    </section>
  )
}
