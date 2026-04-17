import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Studio Camila Gilla Beauty | Estética Facial em Salvador',
  description: '10 anos de experiência em estética facial avançada. Cuidado, técnica e acolhimento em cada atendimento. Localizado no Caminho das Árvores, Salvador-BA.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Studio Camila Gilla Beauty | Estética Facial em Salvador',
    description: 'Referência em estética facial em Salvador. +10 anos e +6.000 atendimentos dedicados a realçar sua beleza natural.',
    url: 'https://camilagilla.com.br',
    siteName: 'Camila Gilla Beauty',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-cream text-brown">{children}</body>
    </html>
  )
}
