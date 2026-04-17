# 🏗️ Arquitetura do Projeto

## Estrutura de Pastas

```
Novo Site Dra. Camila/
│
├── src/
│   └── app/
│       ├── components/           # Componentes React reutilizáveis
│       │   ├── Hero.tsx         # Seção de apresentação (topo)
│       │   ├── About.tsx        # Seção sobre a Camila
│       │   ├── Services.tsx     # Seção de serviços com cards
│       │   ├── Testimonials.tsx # Seção de depoimentos
│       │   ├── CTA.tsx          # Call-to-action final
│       │   ├── Footer.tsx       # Rodapé
│       │   └── FloatingWhatsApp.tsx # Botão WhatsApp flutuante
│       │
│       ├── globals.css          # Estilos globais CSS
│       ├── layout.tsx           # Layout raiz (meta tags, fonts)
│       └── page.tsx             # Página principal que integra tudo
│
├── public/                       # Arquivos estáticos (imagens, ícones)
│   └── (pasta vazia - pronta para suas imagens)
│
├── .gitignore                   # Arquivos ignorados pelo Git
├── .env.example                 # Exemplo de variáveis de ambiente
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript
├── next.config.js               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind CSS
├── postcss.config.js            # Configuração PostCSS
├── README.md                    # Documentação principal
├── GUIA_USO.md                  # Guia de uso (este arquivo)
└── ARQUITETURA.md               # Documentação da arquitetura
```

## Fluxo de Componentes

```
page.tsx (página principal)
    ├── Hero
    ├── About
    ├── Services
    │   └── ServiceCard (componente reutilizável)
    ├── Testimonials
    │   └── TestimonialCard (componente reutilizável)
    ├── CTA
    ├── Footer
    └── FloatingWhatsApp (renderizado no client-side)
```

## Detalhes de Cada Componente

### Hero.tsx
- **Responsabilidade**: Apresentação inicial da página
- **Elementos**: Título, subtítulo, CTA, imagem placeholder
- **Interatividade**: Link WhatsApp
- **Responsive**: Flex column em mobile, row em desktop

### About.tsx
- **Responsabilidade**: História e credibilidade da Camila
- **Elementos**: Foto, texto bio, citação destacada
- **Layout**: Foto à esquerda, texto à direita (inverte em mobile)
- **Styling**: Bordas e fundo customizados

### Services.tsx
- **Responsabilidade**: Exibir lista de serviços disponíveis
- **Componentes Internos**: ServiceCard
- **Grid**: 1 coluna mobile, 2 tablet, 3 desktop
- **Dados**: Array de serviços com ícone, nome, descrição

### Testimonials.tsx
- **Responsabilidade**: Mostrar avaliações de clientes
- **Componentes Internos**: TestimonialCard
- **Grid**: 1 coluna mobile, 2 desktop
- **Elementos**: Estrelas, citação, nome do cliente

### CTA.tsx (Call-to-Action)
- **Responsabilidade**: Última oportunidade de conversão
- **Elemento**: Título, subtítulo, botão principal
- **Design**: Fundo gradiente destacado

### Footer.tsx
- **Responsabilidade**: Informações legais e de contato
- **Seções**: Info da studio, localização, redes sociais
- **Cores**: Fundo escuro com texto claro
- **Links**: Instagram clickável

### FloatingWhatsApp.tsx
- **Responsabilidade**: Botão fixo de WhatsApp
- **Tipo**: Client Component (usa hooks)
- **Posição**: Fixed bottom-right
- **Comportamento**: Aparece após mount (efeito fade-in)

## Paleta de Cores

```javascript
cream:      '#FAF8F3'   // Fundo principal (off-white)
beige:      '#F5F1E8'   // Fundo secundário (bege claro)
brown:      '#2C2416'   // Texto principal (marrom escuro)
graphite:   '#4A4A4A'   // Texto secundário (grafite suave)
gold:       '#D4AF9B'   // Destaque (dourado discreto)
gold-light: '#E8D7C3'   // Fundo leve de destaque
```

## Tipografia

- **Títulos**: Playfair Display (serif, elegante)
- **Corpo**: DM Sans (sans-serif, limpo)
- **Fallback**: serif e sans-serif padrão do sistema

## Breakpoints Tailwind

```
Mobile:     < 640px (sm)
Tablet:     >= 768px (md)
Desktop:    >= 1024px (lg)
Wide:       >= 1280px (xl)
```

## Estados de Componentes

### Botões
- Default: cor sólida
- Hover: muda cor + aumenta sombra + escala leve
- Active: mantém estado hover

### Cards
- Default: sombra suave, borda clara
- Hover: sombra aumenta, borda muda cor

### Links
- Default: cor em ouro/azul (WhatsApp)
- Hover: cor mais clara, transição suave

## Dependências Principais

```json
{
  "react": "^18.2.0",      // Biblioteca React
  "react-dom": "^18.2.0",  // Renderização DOM
  "next": "^14.0.0",       // Framework Next.js
  "tailwindcss": "^3.3.6", // Utilitários CSS
  "autoprefixer": "^10.4", // Prefixos CSS automáticos
  "postcss": "^8.4.31"     // Processador CSS
}
```

## Scripts Disponíveis

```bash
npm run dev     # Inicia servidor de desenvolvimento (localhost:3000)
npm run build   # Build para produção
npm start       # Inicia servidor de produção
npm run lint    # Verifica código (se configurado)
```

## Boas Práticas Implementadas

✅ Server Components por padrão (melhor performance)
✅ Client Components apenas onde necessário (interatividade)
✅ Componentes reutilizáveis (DRY principle)
✅ Tipagem TypeScript (maior segurança)
✅ Design responsivo mobile-first
✅ Acessibilidade básica (alt text, semantic HTML)
✅ SEO otimizado (metadata, semantic markup)
✅ Transições suaves (melhor UX)
✅ Loading de fontes externas (Google Fonts)
✅ Imagens otimizadas (Next.js Image)

## Como Estender

### Adicionar Novo Serviço
1. Edite `src/app/components/Services.tsx`
2. Adicione objeto ao array `services`
3. Salve - a página recarrega automaticamente

### Adicionar Novo Depoimento
1. Edite `src/app/components/Testimonials.tsx`
2. Adicione objeto ao array `testimonials`
3. Salve - a página recarrega automaticamente

### Adicionar Seção Inteira
1. Crie arquivo em `src/app/components/`
2. Implemente componente React
3. Importe em `src/app/page.tsx`
4. Adicione ao markup no local desejado

### Mudar Tema de Cores
1. Edite `tailwind.config.ts`
2. Altere valores HEX na seção `colors`
3. O Tailwind recompila automaticamente

## Performance

- **Lazy Loading**: Imagens carregam sob demanda
- **Code Splitting**: Next.js divide automaticamente
- **Font Loading**: Google Fonts carregadas de forma otimizada
- **CSS Classes**: Tailwind gera apenas CSS necessário
- **Bundle Size**: Pequeno e rápido (~50KB gzipped)

## SEO

- Metadata em `src/app/layout.tsx`
- Títulos semânticos (h1, h2, h3)
- Alt text em imagens
- Descrições claras
- URL amigável

---

**Última atualização**: Abril de 2026
**Versão**: 1.0.0
