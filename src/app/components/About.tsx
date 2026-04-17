'use client'

import Link from 'next/link'

const whatsappLink =
  'https://wa.me/5571988196755?text=Olá%20Camila!%20Gostaria%20de%20agendar%20uma%20avaliação.'

const photosLeft = [
  {
    src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop',
    alt: 'Studio Camila Gilla',
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
    alt: 'Ambiente do studio',
  },
]

const photosRight = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    alt: 'Equipamentos',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
    alt: 'Fachada do studio',
  },
]

export default function About() {
  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ backgroundColor: '#F7F4F0' }}>

      {/* Padrão de fundo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B6914 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">

        {/* Fotos esquerda */}
        <div className="hidden lg:flex flex-col gap-5">
          {photosLeft.map((photo, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Conteúdo central */}
        <div className="flex flex-col items-center text-center max-w-[480px] mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/80">
            <svg className="w-3 h-3 text-[#C9A96E]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l1.2 5.6L16 8l-6.8 2.4L8 16l-1.2-5.6L0 8l6.8-2.4z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              Studio de Estética em Salvador
            </span>
          </div>

          {/* Título */}
          <h2
            className="font-serif leading-[1.15] text-[#2C1A0E] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
          >
            Cuidando da sua<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              autoestima todos os dias!
            </span>
          </h2>

          {/* Parágrafos */}
          <p className="text-[#6B4E35] leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
            O Studio Camila Gilla Beauty foi criado com o propósito de oferecer um espaço
            moderno e completo para cuidados com a pele e o rosto, com atendimento
            personalizado e altamente qualificado para proporcionar uma experiência única.
          </p>
          <p className="text-[#6B4E35] leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
            São mais de 10 anos de experiência e +6.000 atendimentos em estética facial
            avançada, sempre com foco em resultados naturais e duradouros.
          </p>
          <p className="text-[#6B4E35] leading-relaxed mb-10" style={{ fontSize: '0.95rem' }}>
            Nosso objetivo é ir além da estética, ajudando você a realçar sua beleza
            natural com cuidado, técnica e acolhimento em cada atendimento.
          </p>

          {/* CTA */}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
            style={{ backgroundColor: '#25D366', fontSize: '1rem' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            Agendar minha consulta agora!
          </Link>
        </div>

        {/* Fotos direita */}
        <div className="hidden lg:flex flex-col gap-5">
          {photosRight.map((photo, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
