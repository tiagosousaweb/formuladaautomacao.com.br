# 🎯 Como Usar - Fórmula da Automação

## 🚀 Início Rápido

### 1. Instalação
```bash
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```

### 3. Produção
```bash
npm run build
```

---

## 📝 Personalização do Conteúdo

### 🔄 Alterar Textos
Edite o arquivo `src/App.jsx` para modificar:

- **Título principal**: Linha ~40
- **Descrição**: Linha ~42
- **Estatísticas**: Linha ~60
- **Sobre Tiago**: Linha ~80
- **Módulos**: Linha ~150
- **Contato**: Linha ~400

### 🎨 Alterar Cores
Edite `tailwind.config.cjs` para modificar:

```javascript
// Cores principais
'cyan-400': '#22d3ee',    // Azul ciano
'purple-400': '#c084fc',  // Roxo
'pink-400': '#f472b6',    // Rosa
'green-400': '#4ade80',   // Verde
'yellow-400': '#facc15',  // Amarelo
```

### 🖼️ Alterar Imagens
1. Adicione suas imagens na pasta `public/`
2. Referencie no código: `<img src="/sua-imagem.jpg" />`

---

## 🏗️ Estrutura dos Módulos

### Módulo 01: n8n
```jsx
<div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
  <h3>n8n – O Cérebro da Automação Inteligente</h3>
  <ul>
    <li>01 - Introdução ao Mundo da Automação</li>
    <li>02 - Instalação e Configuração do n8n</li>
    <li>03 - Fundamentos: Nodes, Workflows e Triggers</li>
    <li>04 - ... e muito mais com exemplos Reais!</li>
  </ul>
</div>
```

### Módulo 02: Evolution API
```jsx
<div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20">
  <h3>Evolution API – Potencializando o WhatsApp</h3>
  <ul>
    <li>01 - O que é a Evolution API?</li>
    <li>02 - Instalação e Configuração da Evolution API</li>
    <li>03 - Integração Segura com o n8n</li>
    <li>04 - Criação de um agente que entende áudio e muito mais...</li>
  </ul>
</div>
```

### Módulo 03: Projeto Prático
```jsx
<div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20">
  <h3>Projeto Prático - Agente de IA para Pizzaria</h3>
  <ul>
    <li>01 - A Arquitetura do Agente de IA</li>
    <li>02 - Recebendo e Transcrevendo Pedidos de Áudio</li>
    <li>03 - Engenharia de Prompt: O Cérebro do Agente</li>
    <li>04 - Salvando o Pedido no Banco de Dados (Supabase), Gerando a Confirmação em Áudio (Text-to-Speech) muito mais!</li>
  </ul>
</div>
```

### Módulo 04: Chatwoot
```jsx
<div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
  <h3>Chatwoot – Gestão de Atendimento Profissional</h3>
  <ul>
    <li>01 - Introdução ao Atendimento Omnichannel</li>
    <li>02 - Instalação e Configuração do Chatwoot</li>
    <li>03 - Estruturando a Equipe de Atendimento</li>
    <li>04 - Conectando o WhatsApp ao Chatwoot, criando o Painel de Atendimento da Pizzaria e muito mais!</li>
  </ul>
</div>
```

### SUPER Módulo 05: Supabase e IA
```jsx
<div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-400/50">
  <h3>SUPER Módulo 05: Dashboards Profissionais com Supabase e IA</h3>
  <p>DESTACADO: O diferencial do curso!</p>
  <ul>
    <li>01 - Introdução ao Supabase: O Backend Completo</li>
    <li>02 - Configurando o Banco de Dados dos Pedidos</li>
    <li>03 - Conectando o n8n ao Supabase</li>
    <li>04 - Engenharia de Prompt para Dashboards</li>
    <li>05 - Criando um Dashboard do Zero com um Prompt e muito mais!</li>
  </ul>
</div>
```

---

## 🎨 Personalização de Estilos

### Adicionar Novas Animações
Em `tailwind.config.cjs`:

```javascript
animation: {
  'fade-in': 'fadeIn 1s ease-out',
  'fade-in-up': 'fadeInUp 1s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
  'sua-animacao': 'suaAnimacao 2s ease infinite', // Nova
},
keyframes: {
  // ... outras animações
  suaAnimacao: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  },
}
```

### Adicionar Novas Cores
```javascript
colors: {
  'sua-cor': {
    100: '#fef3c7',
    500: '#f59e0b',
    900: '#78350f',
  },
}
```

---

## 📱 Responsividade

### Breakpoints do Tailwind
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

### Exemplo de Responsividade
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Título responsivo
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Grid responsivo
</div>
```

---

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte ao Vercel
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Deploy automático

### Netlify
1. Conecte ao Netlify
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy automático

### Servidor Tradicional
1. Execute `npm run build`
2. Faça upload da pasta `dist` para seu servidor
3. Configure o servidor para servir arquivos estáticos

---

## 🔧 Troubleshooting

### ❌ Erro: "Module not found"
```bash
npm install
```

### ❌ Erro: "Port in use"
```bash
# Mude a porta no vite.config.cjs
server: { port: 3001 }
```

### ❌ Erro: "Build failed"
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Suporte

- **Email**: contato@tiagosousa.dev
- **Documentação**: README.md
- **Issues**: Crie um issue no repositório

---

**Desenvolvido com ❤️ por Tiago Sousa** 