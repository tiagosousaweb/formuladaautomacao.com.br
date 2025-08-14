import React, { useEffect, useState } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      // reveal-on-scroll
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('is-visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen site-bg overflow-x-hidden font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      {/* Elementos de Paralaxe de Fundo - Bolinhas Flutuantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Bolinha 1 - Parallax lento */}
        <div 
          className="floating-particle parallax-slow absolute top-20 left-10 w-3 h-3 bg-cyan-400/60 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Bolinha 2 - Parallax médio */}
        <div 
          className="floating-particle parallax-medium absolute top-40 right-20 w-2 h-2 bg-purple-400/70 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * -0.08}px)`,
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Bolinha 3 - Parallax rápido */}
        <div 
          className="floating-particle parallax-fast absolute bottom-40 left-20 w-4 h-4 bg-green-400/50 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.12}px)`,
            filter: 'blur(1.5px)'
          }}
        />
        
        {/* Bolinha 4 - Parallax médio */}
        <div 
          className="floating-particle parallax-medium absolute top-80 left-1/2 w-2.5 h-2.5 bg-yellow-400/60 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.12}px) translateX(${scrollY * -0.06}px)`,
            filter: 'blur(0.8px)'
          }}
        />
        
        {/* Bolinha 5 - Parallax lento */}
        <div 
          className="floating-particle parallax-slow absolute top-60 right-1/3 w-3.5 h-3.5 bg-pink-400/50 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.06}px) translateX(${scrollY * 0.1}px)`,
            filter: 'blur(1.2px)'
          }}
        />
        
        {/* Bolinha 6 - Parallax rápido */}
        <div 
          className="floating-particle parallax-fast absolute bottom-60 right-10 w-2 h-2 bg-blue-400/70 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.18}px) translateX(${scrollY * -0.15}px)`,
            filter: 'blur(0.6px)'
          }}
        />
        
        {/* Bolinha 7 - Parallax médio */}
        <div 
          className="floating-particle parallax-medium absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-400/60 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.09}px) translateX(${scrollY * 0.07}px)`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Bolinha 8 - Parallax lento */}
        <div 
          className="floating-particle parallax-slow absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-orange-400/50 rounded-full"
          style={{ 
            transform: `translateY(${scrollY * 0.11}px) translateX(${scrollY * -0.09}px)`,
            filter: 'blur(0.9px)'
          }}
        />
      </div>

      {/* Header com Navegação */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="container-tight py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <span className="text-xl font-bold text-white">Fórmula da Automação</span>
            </div>
            
            {/* Navegação Central */}
            <nav className="hidden md:flex space-x-8">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre', id: 'about' },
                { label: 'Curso', id: 'course' },
                { label: 'Instrutor', id: 'instructor' },
                { label: 'Preço', id: 'pricing' }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Botão CTA */}
            <button onClick={() => scrollToSection('pricing')} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              Quero Comprar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Primeira Dobra */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 section-veil">
        <div className="relative z-10 text-center container-tight">
          <div className="animate-fade-in-up reveal">
            {/* Título Principal */}
            <h1 className="h1-display-hero section-title stack-title heading-gradient-full">
              <span>Fórmula da</span>
              <br />
              <span>Automação</span>
            </h1>
            
            <p className="subtitle-xl section-subtitle stack-subtitle max-w-4xl mx-auto">
              Domine <span className="text-gradient-cyan">N8N</span>, <span className="text-gradient-purple">Evolution API</span> e <span className="text-gradient-pink">Chatwoot</span> com o método único de Tiago Sousa. Transforme-se em especialista em automação e crie um negócio lucrativo.
            </p>
            
            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="btn-cta text-lg flex items-center justify-center" onClick={() => scrollToSection('pricing')}>
                <span>Quero Comprar Agora</span>
                <span className="text-xl">→</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" onClick={() => scrollToSection('course')}>
                <span className="text-white">▷</span>
                <span>Ver Demonstração</span>
              </button>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '100+', label: 'Alunos Formados' },
                { number: '98%', label: 'Satisfação' },
                { number: '50+', label: 'Automações Criadas' },
                { number: '24/7', label: 'Suporte' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group reveal"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative section-y section-veil">
        <div className="relative z-10 container-tight">
          <div className="text-center mb-16 animate-fade-in reveal">
            <h2 className="h2-display section-title heading-gradient stack-title">Por que a Fórmula da Automação?</h2>
            <p className="subtitle-xl section-subtitle stack-subtitle max-w-4xl mx-auto">
              Não é apenas um curso técnico. É um método completo para transformar conhecimento em automação em um negócio lucrativo e escalável, com estratégias testadas no mercado real.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {[
              {
                title: "Domínio Técnico Completo",
                description: "N8N, Evolution API e Chatwoot do básico ao avançado, com foco em soluções que empresas realmente precisam.",
                icon: "⚡",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Templates Prontos",
                description: "Agentes completos para diversos nichos: pizzaria, barbearia, beach tennis e muito mais para copiar e vender.",
                icon: "📋",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Instalação Simplificada",
                description: "Script exclusivo que instala tudo com um clique: N8N, Chatwoot e Evolution API funcionando perfeitamente.",
                icon: "🚀",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Precificação Premium",
                description: "Aprenda a cobrar valores altos por suas automações com técnicas de vendas e apresentação profissional.",
                icon: "💰",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Negócio Escalável",
                description: "Estruture um negócio de automação que funciona sem você, com processos e sistemas bem definidos.",
                icon: "📈",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "Suporte Especializado",
                description: "Mentoria direta com Tiago Sousa e comunidade exclusiva para tirar dúvidas e trocar experiências.",
                icon: "🎯",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 card-surface-muted reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="relative section-y section-veil">
        <div className="relative z-10 container-tight">
          {/* Título e subtítulo da seção */}
          <div className="text-center mb-14 animate-fade-in reveal">
            <h2 className="h2-display section-title heading-gradient stack-title">Fórmula da Automação</h2>
            <p className="subtitle-xl section-subtitle stack-subtitle max-w-4xl mx-auto">
              O método completo para dominar automação e transformar isso em negócio lucrativo.
            </p>
          </div>

          {/* Grid de módulos em cards (mantendo títulos e aulas) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                tag: 'Módulo 01',
                title: 'n8n – O Cérebro da Automação Inteligente',
                topics: [
                  'Introdução ao Mundo da Automação',
                  'Instalação e Configuração do n8n',
                  'Fundamentos: Nodes, Workflows e Triggers',
                  'Exemplos Reais de Automações e muito mais...'
                ],
                gradient: 'from-blue-500 to-cyan-500',
                icon: '⚡'
              },
              {
                tag: 'Módulo 02',
                title: 'Evolution API – Potencializando o WhatsApp',
                topics: [
                  'O que é a Evolution API?',
                  'Instalação e Configuração da Evolution API',
                  'Integração Segura com o n8n',
                  'Criação de um agente que entende áudio e muito mais...'
                ],
                gradient: 'from-green-500 to-emerald-500',
                icon: '📱'
              },
              {
                tag: 'Módulo 03',
                title: 'Proposta de Novo Módulo: Projeto Prático - Agente de IA para Pizzaria',
                topics: [
                  'A Arquitetura do Agente de IA',
                  'Recebendo e Transcrevendo Pedidos de Áudio',
                  'Engenharia de Prompt: O Cérebro do Agente',
                  'Salvando o Pedido no Banco de Dados (Supabase), Gerando a Confirmação em Áudio (Text-to-Speech) muito mais!'
                ],
                gradient: 'from-purple-500 to-pink-500',
                icon: '🤖'
              },
              {
                tag: 'Módulo 04',
                title: 'Chatwoot – Gestão de Atendimento Profissional',
                topics: [
                  'Introdução ao Atendimento Omnichannel',
                  'Instalação e Configuração do Chatwoot',
                  'Estruturando a Equipe de Atendimento',
                  'Conectando o WhatsApp ao Chatwoot, criando o Painel de Atendimento da Pizzaria e muito mais!'
                ],
                gradient: 'from-yellow-500 to-orange-500',
                icon: '💬'
              },
              {
                tag: 'SUPER Módulo 05',
                title: 'Dashboards Profissionais com Supabase e IA',
                topics: [
                  'Introdução ao Supabase: O Backend Completo',
                  'Configurando o Banco de Dados dos Pedidos',
                  'Conectando o n8n ao Supabase',
                  'Engenharia de Prompt para Dashboards, Criando um Dashboard do Zero com um Prompt e muito mais!'
                ],
                gradient: 'from-red-500 to-pink-500',
                icon: '🚀',
                special: true
              }
            ].map((module, idx) => (
              <div
                key={idx}
                  className={`card-zoom h-full flex flex-col card-surface-muted p-8 ${
                    module.special ? 'md:col-span-2 lg:col-span-2 ring-2 ring-red-400/40' : ''
                  } reveal`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{module.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{module.title}</h3>
                  </div>
                  <span className={`badge-pill ${module.special ? '' : ''}`}>
                    {module.tag}
                  </span>
                </div>
                <ul className="space-y-3 text-white/80 list-compact">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">✔</span>
                      <span className="text-sm leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="relative section-y section-veil">
        <div className="relative z-10 container-tight">
          <div className="text-center mb-16 animate-fade-in reveal">
            <h2 className="h2-display section-title heading-gradient stack-title">Seu Instrutor</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Conheça o especialista que vai guiá-lo nesta jornada de transformação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="card-surface-muted p-8 transition-all duration-500">
                <div className="mb-6 flex justify-center">
                  <span className="avatar-circle">
                    <img
                      src="https://i.imgur.com/kKNmvs6.jpeg"
                      alt="Instrutor"
                      className="avatar-circle-img"
                    />
                  </span>
                </div>
                <h3 className="h3-title text-white mb-4">Guiado por quem está no campo de batalha</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Programador por formação e empreendedor por paixão, Tiago Sousa desenvolveu um método único para transformar profissionais em especialistas de automação altamente valorizados pelo mercado. Na Fórmula da Automação, ele ensina desde o domínio técnico completo do n8n, Evolution API e Chatwoot, até as estratégias avançadas de precificação e vendas que permitem cobrar valores premium por soluções de automação que empresas realmente precisam.
                </p>
              </div>
            </div>
            
            <div className="reveal" style={{ animationDelay: '200ms' }}>
              <div className="card-surface-muted p-8">
                <h3 className="h3-title text-white mb-6">Especialista em Automação</h3>
                <p className="text-white/80 mb-6">
                  Programador por formação e especialista em automações, com anos de experiência transformando processos manuais em soluções inteligentes e escaláveis.
                </p>
                <p className="text-white/80 mb-8">
                  Já ajudei diversas de empresas e profissionais a implementarem automações que economizam tempo, reduzem custos e aumentam a produtividade. Agora é sua vez de dominar essas tecnologias e se destacar no mercado.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "N8N Expert",
                    "Evolution API",
                    "Chatwoot",
                    "Automação Empresarial",
                    "WhatsApp Bots",
                    "Precificação Premium",
                    "Vendas B2B",
                    "Mentoria"
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-2 text-white/80">
                      <span className="text-cyan-400">•</span>
                      <span className="text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '6+', label: 'Anos Experiência em programação e automações' },
                    { number: '100+', label: 'Profissionais treinados e mentorados' },
                    { number: '50+', label: 'Projetos de automação entregues' },
                    { number: '4.9/5', label: 'Avaliação média dos alunos' }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center reveal"
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-xs leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative section-y section-veil">
        <div className="relative z-10 container-narrow">
          <div className="text-center mb-16 animate-fade-in reveal">
            <h2 className="text-4xl md:text-5xl section-title heading-gradient mb-6">
              Pronto para Construir Seu <span className="">Futuro</span> com Automação?
            </h2>
            <p className="text-xl section-subtitle max-w-3xl mx-auto">
              Acesso à Fórmula da Automação + Todos os Bônus
            </p>
          </div>

          {/* Banner Promocional */}
          <div className="promo-banner mb-6 reveal">
            <div className="promo-title">
              <span className="promo-icon">⏱️</span>
              OFERTA POR TEMPO LIMITADO
            </div>
            <div className="promo-sub text-center">
              Receba Acesso a <span style={{ color: '#facc15', fontWeight: 800 }}>Aceleradores de Resultado</span> (Hoje Gratuitos)
            </div>
          </div>
          
          {/* Card principal */}
          <div className="card-surface p-8 mb-8 reveal">
            <div className="panel-soft p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Fórmula da Automação + Bônus Exclusivos</h3>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <div className="text-white/50 line-through text-sm">Valor Total: R$ 297,00</div>
                  <span className="text-[10px] md:text-xs font-bold px-2 py-1 rounded-full bg-orange-500 text-white">67% OFF</span>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-1">R$ 97</div>
                <div className="text-white/70">ou 12x de <span className="text-cyan-400 font-semibold">R$ 10,03</span></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* O que está incluído */}
                <div className="reveal">
                  <div className="flex items-center gap-2 text-white font-semibold mb-4">
                    <span className="text-emerald-400">✦</span>
                    <h4 className="text-xl">O que está incluído</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Acesso completo ao curso (20+ horas)",
                      "Todos os 5 módulos inclusos",
                      "Templates e automações prontas",
                      "Certificado de conclusão",
                      "Suporte técnico especializado",
                      "Atualizações gratuitas vitalícias",
                      "Garantia de 7 dias",
                      "Acesso imediato após pagamento"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/80">
                        <span className="mt-0.5 text-emerald-400">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="reveal">
                  <div className="flex items-center gap-2 text-white font-semibold mb-4">
                    <span className="text-purple-300">✦</span>
                    <h4 className="text-xl">Bônus Exclusivos</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "BÔNUS 01 - Templates de Agentes Prontos", price: "R$ 97", description: "Templates para pizzaria, barbearia, quadra de beach tennis e muito mais para você copiar, colar e vender." },
                      { title: "BÔNUS 02 - Instalador 'Um Clique'", price: "R$ 97", description: "Instale n8n, Chatwoot e Evolution API de uma só vez com nosso script exclusivo. Economize dezenas de horas." },
                      { title: "BÔNUS 03 - Prompt Mestre para Dashboards", price: "R$ 197", description: "O prompt exato para criar dashboards completos que impressionam qualquer cliente e justificam seu preço." }
                    ].map((bonus, index) => (
                      <div key={index} className="rounded-xl p-4 border border-white/10 bg-white/5">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h5 className="font-semibold text-white text-sm leading-tight">{bonus.title}</h5>
                          <span className="text-emerald-400 text-sm font-bold whitespace-nowrap">{bonus.price}</span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed">{bonus.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total dos bônus */}
                  <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-500/20 p-4 reveal">
                    <div className="text-center">
                      <div className="text-white/80 text-sm mb-1">Valor Total dos Bônus:</div>
                      <div className="text-emerald-400 font-extrabold text-lg">R$ 391</div>
                      <div className="text-white/70 text-xs">Totalmente grátis para você!</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center mt-8 reveal">
                <div className="btn-cta text-sm md:text-base">
                  SIM, QUERO GARANTIR MINHA VAGA AGORA!
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/15">⚡</span>
                </div>
                <div className="mt-4 space-y-2 text-white/70 text-xs">
                  <div className="flex items-center justify-center gap-2"><span>🔒</span><span>Pagamento 100% seguro</span></div>
                  <div className="flex items-center justify-center gap-2"><span>✅</span><span>Acesso imediato após confirmação</span></div>
                  <div className="flex items-center justify-center gap-2"><span>🎯</span><span>Garantia incondicional de 7 dias</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Garantia */}
          <div className="panel-soft p-8 border border-emerald-400/30 reveal">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Garantia Incondicional de 7 Dias</h3>
            <p className="text-white/80 text-center mb-8 max-w-3xl mx-auto">
              Seu risco é zero. Se por qualquer motivo você não achar que este é o melhor investimento para sua carreira, basta pedir o reembolso e nós o devolveremos integralmente.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Acesso Imediato", description: "Comece hoje mesmo sua jornada", icon: "⚡" },
                { title: "Conteúdo Premium", description: "Material exclusivo e atualizado", icon: "📦" },
                { title: "Garantia Total", description: "7 dias para testar sem riscos", icon: "🛡️" }
              ].map((feature, index) => (
                <div key={index} className="text-center reveal">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-xl">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 section-veil">
        <div className="relative z-10 container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Fórmula da Automação
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Domine N8N, Evolution API e Chatwoot com o método único de Tiago Sousa. Transforme-se em especialista em automação e crie um negócio lucrativo com a Fórmula da Automação.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100+</div>
                  <div className="text-white/60">Alunos Formados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">98%</div>
                  <div className="text-white/60">Satisfação</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {['Início', 'Sobre o Curso', 'Conteúdo', 'Instrutor', 'Investimento', 'Contato'].map((link, index) => (
                  <li key={index}>
                    <button className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>contato@tiagosousa.dev</div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-white/10">
            <div className="text-white/50 text-sm mb-4">
              © 2025 Fórmula da Automação - Tiago Sousa. Todos os direitos reservados.
            </div>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              {['Política de Privacidade', 'Termos de Uso', 'Suporte'].map((link, index) => (
                <button key={index} className="hover:text-white transition-colors duration-300">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 