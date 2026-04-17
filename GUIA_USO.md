# 📖 Guia de Uso - Studio Camila Gilla Beauty

## 🎯 Primeiros Passos

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar em Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Atualizar Número WhatsApp
O número está em placeholder `(00) 00000-0000`. Para atualizar:

**Arquivos a modificar:**
- `src/app/components/Hero.tsx` (linha ~13)
- `src/app/components/CTA.tsx` (linha ~6)
- `src/app/components/FloatingWhatsApp.tsx` (linha ~9)

**Formato do número:**
- Sem formatação: `5585988123456`
- Código do país + DDD + número
- Exemplo para Salvador (71): `5571987654321`

**Substitua a URL:**
```
De: https://wa.me/5500000000000?text=...
Para: https://wa.me/5585987654321?text=...
```

### 4. Substituir Imagens

#### Hero Section (topo da página)
- Arquivo: `src/app/components/Hero.tsx`
- Tamanho recomendado: 600x600px
- Localize a linha com `https://images.unsplash.com/...`
- Substitua pela URL da sua imagem ou caminho local

#### Foto da Camila (Seção Sobre)
- Arquivo: `src/app/components/About.tsx`
- Tamanho recomendado: 600x600px
- Localize a linha com `https://images.unsplash.com/...`
- Substitua pela URL da sua foto

**Como usar imagens locais:**
1. Crie uma pasta `public/images` na raiz do projeto
2. Coloque suas imagens lá (ex: `camila.jpg`, `hero.jpg`)
3. Substitua a URL por: `/images/camila.jpg`

### 5. Editar Conteúdo de Texto

**Seção Hero:**
- Arquivo: `src/app/components/Hero.tsx`
- Edite: headline, subheadline

**Seção Sobre:**
- Arquivo: `src/app/components/About.tsx`
- Edite: texto de introdução e citação

**Serviços:**
- Arquivo: `src/app/components/Services.tsx`
- Adicione/remova serviços editando o array `services`

**Depoimentos:**
- Arquivo: `src/app/components/Testimonials.tsx`
- Edite o array `testimonials` para adicionar novos depoimentos

**Footer:**
- Arquivo: `src/app/components/Footer.tsx`
- Atualize: endereço, Instagram, etc.

### 6. Alterar Cores (Paleta)

Se quiser mudar as cores, edite `tailwind.config.ts`:

```typescript
colors: {
  'cream': '#FAF8F3',        // Fundo principal
  'beige': '#F5F1E8',        // Fundo secundário
  'brown': '#2C2416',        // Texto principal
  'graphite': '#4A4A4A',     // Texto secundário
  'gold': '#D4AF9B',         // Destaque/acento
  'gold-light': '#E8D7C3',   // Fundo leve
}
```

Substitua os códigos HEX (#XXXXXX) pelas cores desejadas.

### 7. Meta Tags e SEO

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Studio Camila Gilla Beauty | Estética Facial em Salvador',
  description: '10 anos de experiência em estética facial avançada...',
}
```

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)
1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte seu repositório
4. Clique em "Deploy"
5. Configure variáveis de ambiente se necessário

### Opção 2: Netlify
1. Instale Netlify CLI: `npm install -g netlify-cli`
2. Faça login: `netlify login`
3. Build: `npm run build`
4. Deploy: `netlify deploy`

### Opção 3: Seu servidor
1. Build: `npm run build`
2. Inicie: `npm start`
3. Configure em seu servidor de hospedagem

## 🎨 Customizações Avançadas

### Adicionar Nova Seção
1. Crie um arquivo em `src/app/components/NomeSecao.tsx`
2. Importe em `src/app/page.tsx`
3. Adicione em order no markup

### Alterar Fontes
Edite o link de fonts em `src/app/layout.tsx`:
```html
<link href="https://fonts.googleapis.com/css2?family=SUA_FONTE" rel="stylesheet" />
```

### Adicionar Animações
Use Tailwind ou CSS puro em `src/app/globals.css`

## 📊 Analytics (Opcional)

Para adicionar Google Analytics:
1. Crie conta em [google.com/analytics](https://www.google.com/analytics)
2. Copie seu ID (GA-XXXXX)
3. Adicione script em `src/app/layout.tsx`

## 🐛 Troubleshooting

**Erro: "npm: command not found"**
- Instale Node.js de [nodejs.org](https://nodejs.org)

**Porta 3000 já em uso**
- Use: `npm run dev -- -p 3001`

**Imagens não carregam**
- Verifique se o caminho está correto
- Use URLs completas do Unsplash ou caminhos em `/public`

**WhatsApp não abre**
- Verifique se o número tem código de país (55 para Brasil)
- Remova hífens e espaços do número

## 📞 Suporte

- Dúvidas sobre conteúdo: Edite os arquivos .tsx
- Dúvidas sobre estilo: Edite tailwind.config.ts
- Dúvidas sobre deploy: Consulte documentação oficial do Next.js

---

**Aproveite! Seu site premium está pronto! 🎉**
