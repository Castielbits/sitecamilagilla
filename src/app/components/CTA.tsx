'use client'

import Link from 'next/link'

const whatsappLink =
  'https://wa.me/5571988196755?text=Olá%20Camila!%20Gostaria%20de%20agendar%20uma%20avaliação.'

export default function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#C9A96E' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center text-center lg:text-left gap-5 lg:gap-12 py-10 lg:py-0 lg:min-h-[160px]">

        {/* Foto */}
        <div className="flex-shrink-0 self-end hidden sm:block" style={{ marginBottom: 0 }}>
          <img
            src="/fotohero.png"
            alt="Camila Gilla"
            className="object-contain object-bottom"
            style={{ height: 180, width: 'auto' }}
          />
        </div>

        {/* Título */}
        <div className="flex-1 lg:py-8">
          <h2
            className="font-serif leading-[1.2] text-white"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700 }}
          >
            Comece agora mesmo seu<br />
            momento de autoestima!
          </h2>
        </div>

        {/* Descrição */}
        <div className="hidden lg:block flex-1">
          <p className="text-white/90 leading-relaxed" style={{ fontSize: '0.9rem' }}>
            Toque no botão e entre em contato conosco! Quero entender melhor o seu
            caso e te guiar para o melhor tratamento.
          </p>
        </div>

        {/* Botão */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 whitespace-nowrap"
            style={{ backgroundColor: '#25D366', fontSize: '0.95rem' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            Agendar consulta
          </Link>
        </div>

      </div>
    </section>
  )
}
