# TOT Educa - Clone do Site de Educação Corporativa

Clone completo e funcional do site [TOT Educa](https://www.toteduca.com.br/), uma plataforma de educação corporativa que oferece cursos de prateleira e desenvolvimento de conteúdo personalizado para empresas.

## 🎯 Sobre o Projeto

Este projeto é uma recriação fiel do site TOT Educa, desenvolvido com as mais modernas tecnologias web. O site apresenta uma interface elegante e responsiva, com foco em experiência do usuário e performance.

## ✨ Funcionalidades

- **Hero Section Animado**: Seção principal com animações suaves e call-to-action destacado
- **Carrossel de Cursos**: Navegação automática e manual com cards animados e efeitos 3D
- **Seção de Soluções**: Apresentação dos serviços com cards interativos
- **Estatísticas Animadas**: Contadores que animam quando aparecem na viewport
- **Formulário de Contato**: Formulário funcional com validação e reCAPTCHA
- **Dark Mode Premium**: Modo escuro completo com transições suaves e cores otimizadas
- **Scroll Suave**: Navegação fluida entre seções do site
- **Animações Premium**: Efeitos de fade-in, float, glow, shimmer e hover 3D
- **Totalmente Responsivo**: Design adaptável para todos os dispositivos

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utility-first
- **Embla Carousel** - Biblioteca de carrossel performática
- **Lucide React** - Ícones modernos e customizáveis
- **next-themes** - Gerenciamento de tema dark/light
- **React Hook Form** - Gerenciamento de formulários

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
\`\`\`bash
git clone <(https://github.com/JuanCristian08/trabalhoTOT/)>
cd toteduca-clone
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Execute o projeto em modo de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

\`\`\`
toteduca-clone/
├── app/
│   ├── layout.tsx          # Layout principal com providers
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais e animações
├── components/
│   ├── header.tsx          # Cabeçalho com navegação
│   ├── hero-section.tsx    # Seção hero principal
│   ├── solutions-section.tsx # Seção de soluções
│   ├── stats-section.tsx   # Estatísticas animadas
│   ├── material-section.tsx # Seção de material gratuito
│   ├── courses-carousel.tsx # Carrossel de cursos
│   ├── contact-form.tsx    # Formulário de contato
│   ├── footer.tsx          # Rodapé
│   ├── theme-provider.tsx  # Provider do tema
│   └── theme-toggle.tsx    # Toggle dark/light mode
├── public/
│   └── *.jpg               # Imagens dos cursos
└── README.md
\`\`\`

## 🎨 Características de Design

### Paleta de Cores

- **Primária**: `#FF6B35` (Laranja vibrante)
- **Secundária**: `#1E3A8A` (Azul escuro)

### Tipografia

- **Títulos**: Montserrat (700, 600)
- **Corpo**: Open Sans (400, 600)

### Animações

- Fade-in com direções (top, bottom, left, right)
- Float suave para elementos destacados
- Glow effect em cards e botões
- Shimmer para elementos premium
- Hover 3D nos cards do carrossel
- Contadores animados nas estatísticas

## 🔧 Customização

### Alterar Cores

Edite o arquivo `app/globals.css` na seção `@theme`:

\`\`\`css
@theme inline {
  --color-primary: #FF6B35;
  --color-secondary: #1E3A8A;
  /* ... outras cores */
}
\`\`\`

### Adicionar Novos Cursos

Edite o array `courses` em `components/courses-carousel.tsx`:

\`\`\`tsx
const courses = [
  {
    title: "Nome do Curso",
    description: "Descrição do curso",
    image: "/caminho-da-imagem.jpg"
  },
  // ... mais cursos
]
\`\`\`

### Modificar Animações

As animações estão definidas em `app/globals.css`. Você pode ajustar duração, delay e easing:

\`\`\`css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é um clone educacional do site TOT Educa. Todos os direitos de conteúdo e marca pertencem à TOT Educação Corporativa.

## 🙏 Créditos

- Design original: [TOT Educa](https://www.toteduca.com.br/)
- Desenvolvido com Next.js e React
- Ícones por Lucide
- Fontes do Google Fonts

## 📞 Contato

Para dúvidas ou sugestões sobre este clone, abra uma issue no repositório.

---

Desenvolvido com ❤️ usando Next.js 16 e React 19
