import React, { useState } from 'react';

const whatsappNumber = '5598984042432';
const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: 'document',
    title: 'Contabilidade sem complicação',
    description:
      'Escrituração, impostos e obrigações em dia — com tudo explicado em uma linguagem que faz sentido.',
  },
  {
    icon: 'chart',
    title: 'Gestão financeira',
    description:
      'Enxergue melhor suas receitas, despesas e resultados para tomar decisões com mais segurança.',
  },
  {
    icon: 'people',
    title: 'Departamento pessoal',
    description:
      'Folha, admissões, férias e rotinas trabalhistas cuidadas com atenção ao seu time.',
  },
  {
    icon: 'spark',
    title: 'Apoio para MEI',
    description:
      'Abertura, DAS, declaração anual e orientação para seu negócio crescer organizado desde o início.',
  },
];

const plans = [
  {
    name: 'MEI organizado',
    audience: 'Para quem está começando',
    price: '250',
    featured: false,
    description: 'O essencial para manter seu MEI em dia e cuidar bem dos números.',
    features: [
      'Abertura do primeiro CNPJ',
      'Escrituração e obrigações fiscais',
      'Declaração anual (DASN-SIMEI)',
      'Orientação financeira básica',
      'Suporte consultivo',
    ],
  },
  {
    name: 'Gestão financeira',
    audience: 'MEI e pequenas empresas',
    price: '400',
    featured: true,
    description: 'Mais clareza sobre as finanças para você decidir os próximos passos.',
    features: [
      'Escrituração contábil e fiscal',
      'Apuração de impostos',
      'Declarações obrigatórias',
      'Acompanhamento financeiro',
      'Suporte próximo e consultivo',
    ],
  },
  {
    name: 'Gestão completa',
    audience: 'Pequenas empresas',
    price: '700',
    featured: false,
    description: 'Contabilidade, gestão e time de pessoal trabalhando em sintonia.',
    features: [
      'Contabilidade completa',
      'Gestão financeira',
      'Relatórios gerenciais',
      'Departamento pessoal',
      'Férias e obrigações trabalhistas',
    ],
  },
];

const resources = [
  {
    image: '/images/mei-organizado.jpeg',
    alt: 'Arte sobre contabilidade para MEI e organização do negócio',
    eyebrow: 'PARA QUEM É MEI',
    title: 'Seu negócio merece crescer.',
    description: 'Organização hoje é um passo importante para crescer com segurança.',
  },
  {
    image: '/images/contabilidade-digital.jpeg',
    alt: 'Arte sobre os benefícios da contabilidade digital',
    eyebrow: 'CONTABILIDADE DIGITAL',
    title: 'Menos papel, mais praticidade.',
    description: 'Conheça um jeito mais simples e próximo de cuidar das obrigações.',
  },
  {
    image: '/images/planos-contabeis.jpeg',
    alt: 'Apresentação dos planos contábeis da Kellyane Macedo',
    eyebrow: 'PLANOS E SERVIÇOS',
    title: 'Um plano para cada momento.',
    description: 'Encontre o acompanhamento certo para a fase atual da sua empresa.',
  },
];

function Icon({ name, className = '' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const shapes = {
    document: (
      <>
        <path d="M7 3.75h7l4 4v12.5H7a2 2 0 0 1-2-2v-12.5a2 2 0 0 1 2-2Z" />
        <path d="M14 3.75v4h4M8.5 12h7M8.5 15.5h5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19.25h16M6.5 16v-4.5h3V16M11 16V8.5h3V16M15.5 16V5h3v11" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19v-1.5A5.5 5.5 0 0 1 9 12a5.5 5.5 0 0 1 5.5 5.5V19h-11Z" />
        <path d="M16 5.25a3 3 0 0 1 0 5.75m2 2a4.5 4.5 0 0 1 2.5 4v2h-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.75 5.25L19 10l-5.25 1.75L12 17l-1.75-5.25L5 10l5.25-1.75L12 3Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 3l.65 1.85L7.5 5.5l-1.85.65L5 8l-.65-1.85L2.5 5.5l1.85-.65L5 3Z" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    check: <path d="m5 12.5 4 4L19 7" />,
    shield: (
      <>
        <path d="M12 3 20 6v5.5c0 5.1-3.4 8.4-8 9.5-4.6-1.1-8-4.4-8-9.5V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.8-5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return <svg {...common}>{shapes[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const service = formData.get('service');
    const message = `Olá, Kellyane! Meu nome é ${name} e gostaria de conversar sobre ${service}.`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Kellyane Macedo, página inicial" onClick={closeMenu}>
            <span className="brand-mark">KM</span>
            <span className="brand-name">
              KELLYANE MACEDO
              <small>CONTABILIDADE CONSULTIVA</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>

          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#planos" onClick={closeMenu}>Planos</a>
            <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
            <a className="nav-cta" href="#contato" onClick={closeMenu}>
              Vamos conversar <Icon name="arrow" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> CONTABILIDADE PARA QUEM QUER IR MAIS LONGE</p>
              <h1>
                Seu negócio em boas mãos. <em>Seu futuro, em movimento.</em>
              </h1>
              <p className="hero-description">
                Contabilidade, gestão financeira e apoio de verdade para você cuidar do seu negócio com mais tranquilidade.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href={whatsappLink('Olá, Kellyane! Quero conhecer seus serviços contábeis.')} target="_blank" rel="noreferrer">
                  Encontre o plano ideal <Icon name="arrow" />
                </a>
                <a className="text-link" href="#servicos">Conheça meus serviços <span>↓</span></a>
              </div>
              <div className="hero-proof">
                <span className="proof-icon"><Icon name="shield" /></span>
                <p><strong>Atendimento próximo e personalizado</strong><br />CRC-MA 016803/O</p>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="portrait-backdrop" />
              <img className="hero-portrait" src="/images/kellyane-macedo.jpeg" alt="Kellyane Macedo, contadora" />
              <div className="portrait-caption">
                <span className="caption-star">✳</span>
                <span>Uma parceira para<br /><strong>cada etapa do seu negócio.</strong></span>
              </div>
              <div className="portrait-stamp" aria-hidden="true">
                <span>CONTABILIDADE</span>
                <strong>com cuidado</strong>
                <span>e estratégia</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>MEI</span><i />
            <span>PEQUENAS EMPRESAS</span><i />
            <span>GESTÃO FINANCEIRA</span><i />
            <span>DEPARTAMENTO PESSOAL</span>
          </div>
        </section>

        <section className="services section-pad" id="servicos">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">UM CUIDADO COMPLETO, SEM COMPLICAÇÃO</p>
              <div className="heading-row">
                <h2>Mais tempo para você.<br /><em>Mais clareza para decidir.</em></h2>
                <p>As obrigações ficam em dia. Você ganha uma visão mais tranquila para conduzir o que vem pela frente.</p>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon name={service.icon} /></span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contato" aria-label={`Conversar sobre ${service.title}`}>Vamos conversar <Icon name="arrow" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="plans section-pad" id="planos">
          <div className="container">
            <div className="section-heading plans-heading">
              <p className="eyebrow">NOSSOS PLANOS</p>
              <div className="heading-row">
                <h2>O plano certo para<br /><em>o momento da sua empresa.</em></h2>
                <p>Comece com o que você precisa hoje. Quando seu negócio evoluir, a gente cresce junto.</p>
              </div>
            </div>
            <div className="plans-grid">
              {plans.map((plan) => (
                <article className={`plan-card${plan.featured ? ' plan-featured' : ''}`} key={plan.name}>
                  {plan.featured && <span className="popular-label">MAIS ESCOLHIDO</span>}
                  <p className="plan-audience">{plan.audience}</p>
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    <span>R$</span><strong>{plan.price}</strong>                    <small>{plan.price === '700' ? '/mês · a partir' : '/mês'}</small>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Icon name="check" />{feature}</li>
                    ))}
                  </ul>
                  <a
                    className={`button ${plan.featured ? 'button-gold' : 'button-outline'}`}
                    href={whatsappLink(`Olá, Kellyane! Tenho interesse no plano ${plan.name}. Pode me passar mais informações?`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quero esse plano <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
            <p className="plans-note">Os valores podem variar de acordo com o faturamento e a complexidade da empresa. <a href="#contato">Converse comigo</a> para receber uma proposta personalizada.</p>
          </div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img src="/images/kellyane-macedo.jpeg" alt="Kellyane Macedo em seu escritório" loading="lazy" />
              <div className="about-image-tag">Kellyane Macedo <span>Contadora · CRC-MA 016803/O</span></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow-dark">PRAZER, SOU A KELLYANE</p>
              <h2>Contabilidade também é sobre <em>pessoas.</em></h2>
              <p className="about-lead">Eu acredito que números organizados abrem espaço para ideias grandes.</p>
              <p>Por isso, meu trabalho vai além das guias e obrigações: quero entender sua realidade, explicar cada etapa e estar ao seu lado nas decisões importantes para o seu negócio.</p>
              <div className="about-values">
                <span><Icon name="check" /> Atendimento direto e próximo</span>
                <span><Icon name="check" /> Orientação clara, sem juridiquês</span>
                <span><Icon name="check" /> Cuidado em cada detalhe</span>
              </div>
              <a className="button button-green" href={whatsappLink('Olá, Kellyane! Quero conversar sobre a contabilidade do meu negócio.')} target="_blank" rel="noreferrer">
                Fale comigo <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="resources section-pad">
          <div className="container">
            <div className="section-heading resources-heading">
              <p className="eyebrow eyebrow-dark">CONTEÚDO PARA O SEU NEGÓCIO</p>
              <div className="heading-row">
                <h2>Informação que ajuda<br /><em>você a avançar.</em></h2>
                <a className="text-link" href="#contato">Tire suas dúvidas <span>↗</span></a>
              </div>
            </div>
            <div className="resource-grid">
              {resources.map((resource) => (
                <article className="resource-card" key={resource.title}>
                  <img src={resource.image} alt={resource.alt} loading="lazy" />
                  <div className="resource-copy">
                    <p className="resource-eyebrow">{resource.eyebrow}</p>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <a href="#contato" aria-label={`Fale com Kellyane: ${resource.title}`}>Saiba mais <Icon name="arrow" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">O PRÓXIMO PASSO COMEÇA COM UMA CONVERSA</p>
              <h2>Vamos cuidar bem <em>do seu negócio?</em></h2>
              <p>Me conte um pouco sobre o que você precisa. Eu entro em contato pelo WhatsApp para entender seu momento e mostrar como posso ajudar.</p>
              <a className="contact-direct" href="mailto:Kellyanemacedo@outlook.com">Kellyanemacedo@outlook.com <Icon name="arrow" /></a>
              <span className="contact-phone">(98) 98404-2432</span>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <h3>Vamos conversar?</h3>
              <label htmlFor="name">Seu nome</label>
              <input id="name" name="name" type="text" placeholder="Como posso chamar você?" autoComplete="name" required />
              <label htmlFor="service">O que você procura?</label>
              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>Selecione um serviço</option>
                <option>Contabilidade para MEI</option>
                <option>Contabilidade para pequena empresa</option>
                <option>Gestão financeira</option>
                <option>Departamento pessoal</option>
                <option>Quero entender qual é o ideal para mim</option>
              </select>
              <button className="button button-gold" type="submit">Continuar pelo WhatsApp <Icon name="arrow" /></button>
              <p className="form-note">Ao continuar, você abrirá uma conversa no WhatsApp. Seus dados não são armazenados neste site.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">KM</span>
            <span className="brand-name">KELLYANE MACEDO<small>CONTABILIDADE CONSULTIVA</small></span>
          </a>
          <p>Seu negócio em boas mãos.<br />Sua contabilidade em parceria.</p>
          <a className="footer-whatsapp" href={whatsappLink('Olá, Kellyane!')} target="_blank" rel="noreferrer">
            <span>WHATSAPP</span>(98) 98404-2432 <Icon name="arrow" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Kellyane Macedo · Contadora CRC-MA 016803/O</span>
          <a href="mailto:Kellyanemacedo@outlook.com">Kellyanemacedo@outlook.com</a>
        </div>
      </footer>
    </>
  );
}

export default App;
