# Studio Camila Gilla Beauty - Landing Page

Uma landing page premium e responsiva para Studio Camila Gilla Beauty, especializado em estética facial avançada em Salvador-BA.

## 🎨 Características

- **Design Premium**: Paleta de cores neutra elegante com tons off-white, bege, marrom escuro e detalhes em dourado
- **Tipografia Sofisticada**: Playfair Display (títulos) + DM Sans (corpo)
- **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Otimizado**: Rápido, moderno e otimizado para SEO
- **Componentes Reutilizáveis**: Arquitetura limpa com React

## 🚀 Tecnologias

- **Next.js 14** - Framework React moderno
- **Tailwind CSS** - Utilitários CSS para design rápido
- **TypeScript** - Tipagem estática para maior segurança
- **Google Fonts** - Tipografia premium integrada

## 📋 Seções da Página

1. **Hero** - Headline impactante com imagem de destaque e CTA
2. **Sobre a Camila** - Biografia e história profissional
3. **Serviços** - 6 cards com serviços ofertados
4. **Depoimentos** - Avaliações de clientes
5. **CTA Final** - Chamada final para ação
6. **Footer** - Informações e redes sociais
7. **Botão WhatsApp Flutuante** - Sempre acessível

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Navegue até a pasta do projeto:
```bash
cd "Novo Site Dra. Camila"
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📱 Responsividade

A página é totalmente responsiva e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)

## ⚙️ Customização

### Cores
As cores estão definidas em `tailwind.config.ts`:
- `cream`: #FAF8F3
- `beige`: #F5F1E8
- `brown`: #2C2416
- `graphite`: #4A4A4A
- `gold`: #D4AF9B

### WhatsApp
Para atualizar o número do WhatsApp, procure por `(00) 00000-0000` nos arquivos de componentes e substitua pelo número real (com código de país, sem caracteres especiais).

Exemplo: `https://wa.me/5585988123456`

### Imagens
As imagens usam placeholders do Unsplash. Para usar suas próprias imagens:
1. Substitua as URLs do Unsplash pelos caminhos das suas imagens
2. Recomendações de tamanho:
   - Hero image: 600x600px (quadrada)
   - Foto da Camila: 600x600px (quadrada)

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📝 Estrutura de Pastas

```
.
├── src/
│   └── app/
│       ├── components/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Testimonials.tsx
│       │   ├── CTA.tsx
│       │   ├── Footer.tsx
│       │   └── FloatingWhatsApp.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

## 💡 Dicas

- Mantenha a paleta de cores consistente
- As imagens influenciam bastante na percepção de qualidade
- Considere adicionar mais depoimentos conforme crescer a cartela de clientes
- Acompanhe as analytics para entender o comportamento dos visitantes

## 📞 Contato

Para dúvidas sobre o site, entre em contato via WhatsApp ou Instagram.

---

**Studio Camila Gilla Beauty** | Caminho das Árvores, Salvador-BA | [@camilagilla.beauty](https://instagram.com/camilagilla.beauty)
