'use client'

import { useState } from 'react'
import Link from 'next/link'

type Pergunta = {
  pergunta: string
  resposta: string
}

const perguntas: Pergunta[] = [
  {
    pergunta: 'Como funciona a primeira consulta?',
    resposta: 'A primeira consulta é uma avaliação completa. Eu converso com você, entendo o que te incomoda, analiso sua pele e traço um plano de tratamento personalizado. Só indico procedimentos que realmente fazem sentido para o seu caso.',
  },
  {
    pergunta: 'Quanto tempo dura o resultado de um botox?',
    resposta: 'Em média, o efeito do botox dura de 4 a 6 meses. Isso varia conforme o metabolismo de cada pessoa, a musculatura tratada e a dose aplicada. Na avaliação eu explico exatamente o que esperar no seu caso.',
  },
  {
    pergunta: 'Os tratamentos doem?',
    resposta: 'A maioria dos procedimentos é bem tolerada. Uso anestésicos tópicos antes dos preenchimentos e técnicas que minimizam o desconforto. O que mais ouço das pacientes é surpresa por ser mais tranquilo do que imaginavam.',
  },
  {
    pergunta: 'Posso voltar ao trabalho no mesmo dia?',
    resposta: 'Na maioria dos tratamentos sim. Limpeza de pele, botox e hidratação labial permitem retorno imediato à rotina. Procedimentos mais intensos, como peelings profundos, podem exigir 2 a 3 dias de cuidado especial.',
  },
  {
    pergunta: 'Qual a forma de pagamento?',
    resposta: 'Aceito Pix, débito, crédito em até 3x sem juros e transferência. Em alguns protocolos ofereço pacotes com condições especiais. Na avaliação falamos sobre o que cabe melhor no seu planejamento.',
  },
  {
    pergunta: 'Onde fica o studio?',
    resposta: 'O Studio Camila Gilla Beauty fica no Caminho das Árvores, em Salvador. Ambiente discreto, com estacionamento fácil e horários flexíveis para quem trabalha durante o dia.',
  },
  {
    pergunta: 'Vocês atendem homens?',
    resposta: 'Sim. Atendo homens para botox, skincare, limpeza de pele e tratamentos específicos. A estética masculina tem particularidades técnicas que respeito e valorizo em cada atendimento.',
  },
  {
    pergunta: 'Como posso agendar?',
    resposta: 'O jeito mais rápido é pelo WhatsApp. Me chama lá que eu mesma respondo, entendo o que você procura e te passo os horários disponíveis. Sem intermediário, direto comigo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 overflow-hidden" style={{ backgroundColor: '#FDFAF6' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-[#C9A96E]/40 bg-[#F2E9DE]/80">
            <svg className="w-3 h-3 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#5C3D1E]">
              Perguntas frequentes
            </span>
          </div>
          <h2
            className="font-serif leading-[1.15] text-[#2C1A0E] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}
          >
            Tirei{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#5C3D1E' }}>
              as principais dúvidas
            </span>{' '}
            pra você
          </h2>
          <p className="text-[#6B4E35] max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
            As perguntas que mais recebo no Instagram e no WhatsApp, reunidas num só lugar.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {perguntas.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#F2E9DE] overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-[#2C1A0E] leading-snug" style={{ fontSize: '1rem' }}>
                    {item.pergunta}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#C9A96E] rotate-45' : 'bg-[#F2E9DE]'
                    }`}
                  >
                    <svg className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-[#5C3D1E]'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6B4E35] leading-relaxed px-6 pb-5" style={{ fontSize: '0.92rem' }}>
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white rounded-3xl border border-[#C9A96E]/30 p-8 lg:p-10">
          <p className="font-serif text-[#2C1A0E] mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
            Ainda tem dúvida?
          </p>
          <p className="text-[#6B4E35] mb-5" style={{ fontSize: '0.95rem' }}>
            Me chama no WhatsApp e eu te respondo pessoalmente.
          </p>
          <Link
            href="https://wa.me/5571988196755?text=Olá%20Camila!%20Tenho%20uma%20dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
            style={{ backgroundColor: '#25D366', fontSize: '0.95rem' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.916 9.916 0 01-5.04-1.374l-.363-.214-3.759.981 1.004-3.648-.235-.375a9.818 9.818 0 01-1.516-5.248c.003-5.45 4.452-9.883 9.92-9.883 2.648 0 5.136 1.03 7.006 2.9a9.823 9.823 0 012.898 6.99c-.004 5.452-4.453 9.871-9.911 9.871zm5.44-7.406c-.299-.149-1.768-.87-2.04-.969-.274-.1-.472-.148-.671.15-.198.298-.769.968-.943 1.164-.174.199-.348.224-.647.074-.298-.148-1.259-.464-2.399-1.478-.887-.789-1.485-1.764-1.66-2.062-.174-.299-.018-.46.13-.608.134-.133.299-.348.448-.521.149-.175.198-.299.299-.498.099-.199.049-.373-.025-.522-.074-.149-.671-1.614-.919-2.211-.243-.58-.49-.502-.671-.511-.175-.008-.373-.01-.571-.01-.198 0-.521.075-.794.373-.272.298-1.039 1.018-1.039 2.484s1.063 2.881 1.211 3.081c.149.199 2.09 3.198 5.064 4.485.709.305 1.262.486 1.693.623.711.226 1.358.194 1.869.117.57-.085 1.758-.717 2.007-1.41.248-.694.248-1.289.174-1.413-.074-.125-.272-.199-.571-.347z" />
            </svg>
            Conversar pelo WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
