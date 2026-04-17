'use client'

export default function Professional() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#FDFAF6' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 lg:pl-0 lg:pr-16">

        {/* Foto + badges flutuantes */}
        <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[340px] lg:max-w-none" style={{ maxWidth: 360 }}>
            <img
              src="/fotohero.png"
              alt="Camila Gilla"
              className="w-full rounded-3xl object-cover shadow-xl"
              style={{ height: 480, objectPosition: 'top' }}
            />

            {/* Badge superior esquerdo */}
            <div
              className="absolute left-2 lg:-left-8 top-1/3 flex items-center gap-2 bg-white rounded-full px-3 py-2 lg:px-4 lg:py-2.5 shadow-lg float"
              style={{ border: '1px solid #F2E9DE' }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-4 h-4" style={{ color: '#C9A96E' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              </div>
              <span className="text-xs lg:text-sm font-semibold text-[#2C1A0E] whitespace-nowrap">+10 anos de carreira</span>
            </div>

            {/* Badge inferior direito */}
            <div
              className="absolute right-2 lg:-right-8 bottom-1/4 flex items-center gap-2 bg-white rounded-full px-3 py-2 lg:px-4 lg:py-2.5 shadow-lg float-slow"
              style={{ border: '1px solid #F2E9DE' }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-4 h-4" style={{ color: '#C9A96E' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-xs lg:text-sm font-semibold text-[#2C1A0E] whitespace-nowrap">Referência em Estética</span>
            </div>
          </div>
        </div>

        {/* Conteúdo direita */}
        <div className="flex-1 max-w-[560px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/80">
            <svg className="w-3 h-3 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              Quem atenderá você
            </span>
          </div>

          {/* Título */}
          <h2
            className="font-serif leading-[1.15] text-[#2C1A0E] mb-7"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
          >
            Muito prazer, eu sou a{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              Camila Gilla
            </span>{' '}
            e vou acompanhar você na sua jornada de autoestima!
          </h2>

          {/* Bio */}
          <p className="text-[#6B4E35] leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
            Sou Camila Gilla, especialista em estética facial avançada com mais de 10 anos
            de experiência e mais de 6.000 atendimentos realizados em Salvador. Desde o início
            da minha carreira, me dedico a tratamentos faciais com foco em resultados naturais,
            unindo técnica e tecnologia para oferecer resultados reais e seguros.
          </p>
          <p className="text-[#6B4E35] leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
            Acredito que cada paciente é única, e é por isso que meu atendimento é
            sempre personalizado e humanizado, pensando em valorizar a sua beleza
            natural de forma saudável e transformadora.
          </p>
          <p className="text-[#6B4E35] leading-relaxed" style={{ fontSize: '0.95rem' }}>
            Minha maior satisfação é ajudar mulheres a se sentirem confiantes e incríveis
            em sua própria pele.
          </p>
        </div>

      </div>
    </section>
  )
}
