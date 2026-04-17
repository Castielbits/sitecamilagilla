'use client'

import Link from 'next/link'

export default function Hero() {
  const whatsappLink =
    'https://wa.me/5571988196755?text=Olá%20Camila!%20Gostaria%20de%20agendar%20uma%20avaliação.'

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#F2E9DE' }}
    >
      {/* Banner full — fundo absoluto, só desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <img
          src="/bannercamila.png"
          alt="Camila Gilla — Especialista em Estética Facial"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* MOBILE — foto no topo, texto embaixo sobrepondo */}
      <div className="lg:hidden relative z-10 min-h-screen flex flex-col">
        <div className="w-full pt-24 flex-1">
          <img
            src="/bannercamila.png"
            alt="Camila Gilla"
            className="w-full object-cover"
            style={{ maxHeight: '62vh', objectPosition: 'top center' }}
          />
        </div>
        <div className="px-6 pb-12 -mt-10 text-center flex flex-col items-center" style={{ backgroundColor: '#F2E9DE' }}>
          <h1
            className="font-serif leading-[1.1] text-[#2C1A0E] mb-4 pt-4"
            style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', fontWeight: 700 }}
          >
            Referência em<br />
            estética facial<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              em Salvador
            </span>
          </h1>
          <p className="text-[#6B4E35] leading-relaxed mb-8" style={{ fontSize: '1rem' }}>
            10 anos de experiência e +6.000 atendimentos dedicados a realçar
            sua beleza natural com cuidado, técnica e acolhimento.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 active:scale-95"
            style={{ backgroundColor: '#25D366', fontSize: '1rem' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            Agendar minha avaliação agora!
          </Link>
        </div>
      </div>

      {/* DESKTOP — conteúdo sobre o banner */}
      <div className="hidden lg:flex relative z-10 w-full max-w-7xl mx-auto px-16 min-h-screen items-center">
        <div className="w-[48%] flex flex-col justify-center">

          <div className="mb-8 float-slow">
            <img
              src="/logo_camila_gilla_beauty.svg"
              alt="Studio Camila Gilla Beauty"
              className="h-16 w-auto"
            />
          </div>

          <div className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-white/50 backdrop-blur-sm float-subtle">
            <svg className="w-3 h-3 text-[#C9A96E]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l1.2 5.6L16 8l-6.8 2.4L8 16l-1.2-5.6L0 8l6.8-2.4z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              Studio Camila Gilla
            </span>
          </div>

          <h1
            className="font-serif leading-[1.1] text-[#2C1A0E] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 700 }}
          >
            Referência em<br />
            estética facial<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              em Salvador
            </span>
          </h1>

          <p className="text-[#6B4E35] leading-relaxed mb-10 max-w-[400px]" style={{ fontSize: '1.05rem' }}>
            10 anos de experiência e +6.000 atendimentos dedicados a realçar
            sua beleza natural com cuidado, técnica e acolhimento.
          </p>

          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
            style={{ backgroundColor: '#25D366', fontSize: '1rem' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            Agendar minha avaliação agora!
          </Link>
        </div>
      </div>
    </section>
  )
}
