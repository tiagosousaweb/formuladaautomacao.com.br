# Fórmula da Automação - Landing Page

Landing page moderna e responsiva para o curso "Fórmula da Automação" de Tiago Sousa, desenvolvida com React, Vite e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos de vendor automaticamente

## 📋 Pré-requisitos

- Node.js 16+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd formula-da-automacao
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

O projeto será aberto automaticamente em `http://localhost:3000`

### Build para Produção
```bash
npm run build
# ou
yarn build
```

### Preview da Build
```bash
npm run preview
# ou
yarn preview
```

## 📁 Estrutura do Projeto

```
formula-da-automacao/
├── src/
│   ├── App.jsx          # Componente principal da aplicação
│   ├── main.jsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais e Tailwind CSS
├── index.html           # HTML principal
├── vite.config.cjs      # Configuração do Vite
├── tailwind.config.cjs  # Configuração do Tailwind CSS
├── postcss.config.cjs   # Configuração do PostCSS
├── .eslintrc.js         # Configuração do ESLint
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

## 🎨 Características da Landing Page

### ✅ Módulos do Curso Atualizados
- **Módulo 01**: n8n – O Cérebro da Automação Inteligente
- **Módulo 02**: Evolution API – Potencializando o WhatsApp
- **Módulo 03**: Projeto Prático - Agente de IA para Pizzaria
- **Módulo 04**: Chatwoot – Gestão de Atendimento Profissional
- **SUPER Módulo 05**: Dashboards Profissionais com Supabase e IA (Destacado como diferencial do curso)

### ✨ Funcionalidades
- Design responsivo para todos os dispositivos
- Navegação suave entre seções
- Animações e transições elegantes
- Efeitos de hover interativos
- Gradientes e sombras modernas
- Menu mobile responsivo
- Scroll suave entre seções
- Indicador de seção ativa na navegação

### 🎯 Seções Principais
1. **Hero Section** - Apresentação principal com call-to-action e estatísticas atualizadas
2. **Sobre** - Informações sobre Tiago Sousa e sua missão (texto atualizado)
3. **Módulos** - Detalhamento completo dos módulos do curso com novo conteúdo
4. **Contato** - Informações de contato atualizadas

## 🔄 Alterações Implementadas

### 📊 Estatísticas Atualizadas
- ✅ "500+ Alunos formados" → "100+ Alunos formados"
- ✅ "10+ Anos Experiência" → "6+ Anos Experiência"
- ✅ "1000+ Profissionais treinados" → "100+ Profissionais treinados"

### 📧 Informações de Contato
- ✅ "contato@autoflowpro.com" → "contato@tiagosousa.dev"
- ✅ Removido telefone e cidade
- ✅ Removido botão "Fale Conosco"

### 📝 Textos Atualizados
- ✅ Descrição de experiência: "mais de uma década" → "anos de experiência"
- ✅ Missão destacada com gradiente especial
- ✅ Texto sobre sobre sobre ajuda a empresas: "centenas" → "diversas"
- ✅ Descrição do curso atualizada com foco em estratégias de precificação

### 🆕 Novos Módulos
- ✅ Módulo 03: Projeto Prático - Agente de IA para Pizzaria
- ✅ SUPER Módulo 05: Dashboards Profissionais com Supabase e IA (destacado)

## 🔧 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.cjs`:
- Cyan: `#06b6d4` (azul ciano)
- Purple: `#8b5cf6` (roxo)
- Pink: `#ec4899` (rosa)

### Conteúdo
O conteúdo pode ser editado diretamente no arquivo `src/App.jsx`.

### Estilos
Estilos customizados podem ser adicionados no arquivo `src/index.css`.

## 📱 Responsividade

A landing page é totalmente responsiva e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Deploy automático a cada push

### GitHub Pages
1. Execute `npm run build`
2. Configure o GitHub Actions para deploy automático
3. Publique a pasta `dist`

## 🐛 Solução de Problemas

### Erro de Dependências
Se encontrar erros de dependências, tente:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de Build
Se o build falhar, verifique:
1. Versão do Node.js (deve ser 16+)
2. Dependências instaladas corretamente
3. Arquivos de configuração válidos

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- **Email**: contato@tiagosousa.dev
- **Redes Sociais**: @tiagosousa

## 📄 Licença

Este projeto é privado e de uso exclusivo para o curso "Fórmula da Automação".

---

**Desenvolvido com ❤️ por Tiago Sousa** 