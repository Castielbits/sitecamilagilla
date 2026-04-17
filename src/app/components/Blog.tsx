'use client'

import Link from 'next/link'

type Artigo = {
  slug: string
  categoria: string
  titulo: string
  resumo: string
  tempo: string
  data: string
  imagem: string
  destaque?: boolean
}

const artigos: Artigo[] = [
  {
    slug: 'botox-natural-sem-cara-congelada',
    categoria: 'Toxina Botulínica',
    titulo: 'Botox sem cara congelada: o segredo está na técnica',
    resumo: 'Entenda por que o botox bem aplicado preserva suas expressões e por que esse é o tipo de resultado que eu defendo no consultório.',
    tempo: '4 min de leitura',
    data: '12 abr 2026',
    imagem: '/insta-1.jpg',
    destaque: true,
  },
  {
    slug: 'rotina-skincare-pele-oleosa-salvador',
    categoria: 'Skincare',
    titulo: 'Rotina de skincare para pele oleosa no clima de Salvador',
    resumo: 'Calor e umidade mudam completamente o jogo. Montei um passo a passo simples, de 5 produtos, que funciona de verdade no nosso clima.',
    tempo: '6 min de leitura',
    data: '28 mar 2026',
    imagem: '/insta-2.jpg',
  },
  {
    slug: 'preenchimento-labial-primeira-vez',
    categoria: 'Preenchimento',
    titulo: 'Preenchimento labial: o que esperar da primeira aplicação',
    resumo: 'Da avaliação ao pós-procedimento, um guia honesto sobre como é a experiência e quais resultados são realistas.',
    tempo: '5 min de leitura',
    data: '14 mar 2026',
    imagem: '/fotohero2.jpg',
  },
  {
    slug: 'limpeza-de-pele-frequencia',
    categoria: 'Tratamentos',
    titulo: 'De quanto em quanto tempo fazer limpeza de pele profunda?',
    resumo: 'Depende do seu tipo de pele e do seu objetivo. Explico aqui como montar um calendário que respeita a sua rotina.',
    tempo: '3 min de leitura',
    data: '02 mar 2026',
    imagem: '/insta-3.jpg',
  },
]

export default function Blog() {
  const destaque = artigos[0]
  const outros = artigos.slice(1)

  return (
    <section id="blog" className="py-24 overflow-hidden" style={{ backgroundColor: '#F2E9DE' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-white/60 backdrop-blur-sm">
              <svg className="w-3 h-3 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
                Conteúdo
              </span>
            </div>
            <h2
              className="font-serif leading-[1.15] text-[#2C1A0E]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
            >
              Do consultório{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
                para você
              </span>
            </h2>
          </div>
          <p className="text-[#6B4E35] max-w-md lg:text-right" style={{ fontSize: '0.95rem' }}>
            Artigos sobre estética facial, skincare e cuidados diários escritos com base no que vejo em atendimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Destaque grande — 2 colunas */}
          <Link
            href={`#blog-${destaque.slug}`}
            className="group lg:col-span-2 relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            style={{ minHeight: 420 }}
          >
            <img
              src={destaque.imagem}
              alt={destaque.titulo}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="absolute top-5 left-5 bg-[#C9A96E]/90 backdrop-blur-sm text-white text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full font-semibold">
              Destaque
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10 text-white">
              <span className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold text-[#E8D7C3]">
                {destaque.categoria}
              </span>
              <h3
                className="font-serif mt-2 mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 700 }}
              >
                {destaque.titulo}
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 max-w-xl" style={{ fontSize: '0.9rem' }}>
                {destaque.resumo}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span>{destaque.data}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{destaque.tempo}</span>
              </div>
            </div>
          </Link>

          {/* Coluna com 3 cards menores */}
          <div className="flex flex-col gap-6">
            {outros.map((a) => (
              <Link
                key={a.slug}
                href={`#blog-${a.slug}`}
                className="group flex gap-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-3"
              >
                <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                  <img
                    src={a.imagem}
                    alt={a.titulo}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <span className="text-[0.55rem] tracking-[0.25em] uppercase font-semibold text-[#C9A96E]">
                    {a.categoria}
                  </span>
                  <h3 className="font-serif text-[#2C1A0E] leading-tight my-1.5 line-clamp-2" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                    {a.titulo}
                  </h3>
                  <div className="flex items-center gap-2 text-[0.7rem] text-[#6B4E35]/70">
                    <span>{a.data}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-[#6B4E35]/30" />
                    <span>{a.tempo}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA ver todos */}
        <div className="flex justify-center mt-12">
          <Link
            href="#blog"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-[#2C1A0E] border border-[#C9A96E]/50 bg-white hover:bg-[#2C1A0E] hover:text-white transition-all duration-300"
            style={{ fontSize: '0.9rem' }}
          >
            Ver todos os artigos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
