# Perfurac - Engenharia de Fundações

Este projeto é uma Single Page Application (SPA) moderna, rápida e responsiva desenvolvida com **React**, **Vite** e **Tailwind CSS**. A estrutura foi modularizada seguindo as melhores práticas de arquitetura de software para facilitar a manutenção e futuras atualizações por outras equipes.

---

## 📂 Estrutura do Projeto

O código está organizado da seguinte forma:

```text
site-perfurac/
├── src/
│   ├── assets/               # Mídias e ativos estáticos
│   ├── components/           # Componentes utilitários de UI reutilizáveis
│   │   ├── RevealText.jsx    # Animação de fade-in na rolagem (Intersection Observer)
│   │   └── EditableMedia.jsx # Troca de mídias dinâmica via duplo clique
│   ├── features/             # Seções modulares da página
│   │   ├── associations/     # Associações técnicas
│   │   ├── footer/           # Rodapé com contatos e navegação
│   │   ├── hero/             # Banner principal (Hero)
│   │   ├── manifesto/        # Seção institucional e manifesto
│   │   ├── navigation/       # Barra de navegação fixa/transparente
│   │   ├── portfolio/        # Galeria horizontal com scroll vertical
│   │   ├── services/         # Seção de serviços e tabela de equipamentos
│   │   └── showcase/         # Showcase interativo com renderizador de partículas 3D
│   ├── styles/
│   │   └── index.css         # Estilização global e variáveis de tema do Tailwind CSS v4
│   ├── App.jsx               # Componente central organizador
│   └── main.jsx              # Ponto de entrada do React
├── index.html                # Estrutura HTML base e fontes do Google
├── tailwind.config.js        # Configurações adicionais de conteúdo
├── vite.config.js            # Configuração do empacotador Vite
└── package.json              # Dependências e scripts
```

---

## 🛠️ Funcionalidades Especiais

1. **Motor Gráfico 3D (Showcase)**: Localizado em `src/features/showcase/Machine3D.jsx`. Renderiza nuvens de pontos animadas em um elemento `<canvas>` utilizando matemática de projeção 3D nativa (rotação, profundidade e perspectiva).
2. **Galeria Horizontal (Obras)**: Localizada em `src/features/portfolio/HorizontalGallery.jsx`. Utiliza rolagem vertical acoplada ao eixo X por meio de cálculos no ciclo `requestAnimationFrame` com interpolação linear (`lerp`) para transições suaves.
3. **Mídias Editáveis**: O componente `EditableMedia.jsx` permite carregar qualquer imagem ou vídeo local dando duplo clique sobre a mídia diretamente na página.

---

## 🚀 Como Iniciar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
# Instalar dependências
npm install

# Executar em ambiente de desenvolvimento
npm run dev

# Gerar build de produção otimizado
npm run build

# Pré-visualizar o build de produção localmente
npm run preview
```

---

## 🎨 Customização do Tema

As cores, fontes e animações personalizadas estão definidas diretamente na diretiva `@theme` dentro de `src/index.css` de acordo com os padrões do Tailwind CSS v4.
