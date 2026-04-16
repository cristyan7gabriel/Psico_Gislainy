import React, { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Heart, Apple, Clock, MapPin, Phone, Instagram, ChevronDown, Star, Users, Award, CalendarCheck, MessageCircle, Activity } from 'lucide-react';
import './index.css';

/* ════════════════════════════════════════════
   WAVE / DECORATIVE SVGs
   ════════════════════════════════════════════ */
const WaveTop = ({ fill = '#F9F7F2', className = '' }) => (
  <div className={`wave-separator ${className}`} style={{ transform: 'rotate(180deg)', top: '-1px', bottom: 'auto' }}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path fill={fill} d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
    </svg>
  </div>
);

const WaveBottom = ({ fill = '#F9F7F2', className = '' }) => (
  <div className={`wave-separator ${className}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path fill={fill} d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
    </svg>
  </div>
);

const OrganicBlob = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M420.5,338.5Q377,377,338.5,420.5Q300,464,248,437Q196,410,160.5,377Q125,344,104,297Q83,250,104.5,203.5Q126,157,163,125.5Q200,94,250,75.5Q300,57,345,84Q390,111,427,148.5Q464,186,451.5,243Q439,300,420.5,338.5Z"/>
  </svg>
);

const LeafDecor = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5C50 5 90 30 90 60C90 85 72 95 50 95C28 95 10 85 10 60C10 30 50 5 50 5Z" fill="currentColor" opacity="0.08"/>
    <path d="M50 15C50 15 50 95 50 95" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
    <path d="M50 30C50 30 35 50 25 60" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
    <path d="M50 30C50 30 65 50 75 60" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
    <path d="M50 50C50 50 30 65 20 75" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
    <path d="M50 50C50 50 70 65 80 75" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
  </svg>
);

/* ════════════════════════════════════════════
   INTERSECTION OBSERVER HOOK
   ════════════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

/* ════════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Método', href: '#metodo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Leaf className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-teal' : 'text-teal'}`} strokeWidth={1.5} />
          <span className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-teal-dark' : 'text-teal-dark'}`}>
            Alíssia Rachel
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] font-medium text-charcoal/70 hover:text-teal transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
            target="_blank"
            rel="noreferrer"
            className="ml-4 bg-teal text-cream px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-teal-dark transition-all duration-300 hover:shadow-lg hover:shadow-teal/20"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cream/98 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 border-t border-teal/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-medium text-charcoal/80 hover:text-teal transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-teal text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-center hover:bg-teal-dark transition-all"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════════
   HERO SECTION
   ════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-cream overflow-hidden pt-20">
      {/* Background decorative elements */}
      <OrganicBlob className="absolute -right-32 -top-32 w-[500px] h-[500px] text-teal/[0.04] hidden md:block" />
      <OrganicBlob className="absolute -left-40 bottom-0 w-[400px] h-[400px] text-sage/[0.06] hidden md:block" />
      <LeafDecor className="absolute right-16 top-32 w-24 h-24 text-teal hidden lg:block animate-float" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pb-10 lg:pb-0">
            <div className="inline-flex items-center gap-2 bg-teal/[0.08] border border-teal/10 rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal">Nutrição Clínica • CRN 35314/P</span>
            </div>

            <h1 className="font-serif text-[2.8rem] md:text-6xl lg:text-[5.5rem] leading-[1.05] mb-6 text-charcoal">
              Apaixone-se por{' '}
              <span className="italic text-teal">cuidar</span>
              <br />
              de si mesmo
            </h1>

            <p className="text-base md:text-lg font-light text-charcoal/70 max-w-lg leading-relaxed mb-8">
              Alcance seus objetivos e transforme sua relação com a alimentação. Atendimento presencial em Belo Horizonte e consultas online para todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-teal text-cream px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-teal-dark transition-all duration-300 shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/30"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="group flex items-center justify-center gap-3 border-2 border-teal/20 text-teal px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-teal/5 transition-all duration-300"
              >
                Saiba Mais
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-charcoal/10">
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-teal">+1000</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">Pacientes</p>
              </div>
              <div className="h-8 w-[1px] bg-charcoal/10" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-teal">UFMG</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">Formação</p>
              </div>
              <div className="h-8 w-[1px] bg-charcoal/10" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-teal">Online</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">& Presencial</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Decorative shape behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/10 to-sage/10 rounded-[40px] md:rounded-[60px] rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-terracotta/5 to-transparent rounded-[40px] md:rounded-[60px] -rotate-2" />

              <img
                src="/fotos/Screenshot_1.png"
                alt="Alíssia Rachel - Nutricionista"
                className="relative w-full aspect-[3/4] object-cover rounded-[30px] md:rounded-[50px] shadow-2xl shadow-charcoal/10"
              />

              {/* Floating card overlay */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-xl border border-white/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-teal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Nutrição Humanizada</p>
                    <p className="text-[10px] text-charcoal/50">Cuidado individualizado</p>
                  </div>
                </div>
              </div>

              {/* Floating card right */}
              <div className="absolute -top-2 -right-2 md:top-4 md:-right-6 bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-xl border border-white/50 animate-float" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center gap-2">
                  <Apple className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  <span className="text-[10px] font-semibold text-charcoal uppercase tracking-wider">Plano Alimentar<br/>Personalizado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Organic wave transition */}
      <WaveBottom fill="#F0EDE6" />
    </section>
  );
}

/* ════════════════════════════════════════════
   ABOUT SECTION
   ════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section id="sobre" className="relative bg-cream-dark py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <LeafDecor className="absolute left-8 top-12 w-20 h-20 text-teal opacity-40 hidden lg:block" />
      <OrganicBlob className="absolute -right-48 top-20 w-[500px] h-[500px] text-teal/[0.03] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image side */}
          <div className="flex-1 relative reveal-left w-full">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-teal/5 rounded-[50px] -rotate-3" />
              <img
                src="/fotos/Screenshot_2.png"
                alt="Alíssia Rachel no consultório"
                className="relative w-full aspect-[4/5] object-cover rounded-[40px] shadow-xl"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 right-4 md:right-0 bg-teal text-cream rounded-2xl p-5 shadow-xl">
                <p className="font-serif text-3xl font-bold">UFMG</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Formação</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 reveal-right">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[1.5px] bg-teal" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-teal">Sobre Mim</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-6 leading-[1.1]">
              Olá, eu sou a{' '}
              <span className="italic text-teal">Alíssia Rachel</span>
            </h2>

            <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed mb-5">
              Sou nutricionista clínica formada pela Universidade Federal de Minas Gerais (UFMG), registrada sob o CRN 35314/P. Minha missão é ajudar você a construir uma relação saudável e prazerosa com a alimentação.
            </p>

            <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed mb-8">
              Acredito que a nutrição vai muito além de dietas restritivas. Trabalho de forma humanizada e personalizada, respeitando sua individualidade, rotina e preferências — porque comer bem deve ser um prazer, não uma obrigação.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Award className="w-5 h-5 text-teal" strokeWidth={1.5} />, text: 'CRN 35314/P' },
                { icon: <Users className="w-5 h-5 text-teal" strokeWidth={1.5} />, text: '+1000 pacientes' },
                { icon: <CalendarCheck className="w-5 h-5 text-teal" strokeWidth={1.5} />, text: 'Presencial & Online' },
                { icon: <Heart className="w-5 h-5 text-teal" strokeWidth={1.5} />, text: 'Abordagem Humanizada' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-cream/80 rounded-xl px-4 py-3 border border-teal/5">
                  {item.icon}
                  <span className="text-xs font-medium text-charcoal/80">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento!"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-teal text-cream px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-teal-dark transition-all duration-300 shadow-lg shadow-teal/20"
            >
              Fale Comigo
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      <WaveBottom fill="#F9F7F2" />
    </section>
  );
}

/* ════════════════════════════════════════════
   MARQUEE / INFINITE SCROLL TEXT
   ════════════════════════════════════════════ */
function MarqueeSection() {
  const items = ['Nutrição Clínica', '•', 'Emagrecimento', '•', 'Saúde Intestinal', '•', 'Nutrição Esportiva', '•', 'Reeducação Alimentar', '•', 'Nutrição Funcional', '•'];
  return (
    <div className="bg-teal py-5 overflow-hidden relative">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className={`font-serif text-xl md:text-2xl mx-4 ${item === '•' ? 'text-sage' : 'text-cream/90 italic'}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SERVICES SECTION
   ════════════════════════════════════════════ */
function ServicesSection() {
  const services = [
    {
      icon: <Apple className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Nutrição Clínica',
      desc: 'Avaliação completa do estado nutricional com plano alimentar individualizado. Tratamento de doenças crônicas, alergias e intolerâncias alimentares.',
      accent: 'from-teal/10 to-sage/10',
    },
    {
      icon: <Heart className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Emagrecimento Saudável',
      desc: 'Alcance seu peso ideal de forma sustentável, sem dietas restritivas. Foco em mudança de hábitos e educação alimentar para resultados duradouros.',
      accent: 'from-terracotta/10 to-sand/20',
    },
    {
      icon: <Leaf className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Nutrição Funcional',
      desc: 'Abordagem integrativa que investiga a raiz dos desequilíbrios nutricionais. Modulação intestinal, anti-inflamatória e melhora da qualidade de vida.',
      accent: 'from-sage/15 to-teal/5',
    },
    {
      icon: <Activity className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Nutrição Esportiva',
      desc: 'Potencialize sua performance e recuperação com estratégias nutricionais voltadas ao seu esporte e objetivos de composição corporal.',
      accent: 'from-teal/8 to-terracotta/8',
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Reeducação Alimentar',
      desc: 'Aprenda a comer com consciência e prazer. Desenvolvemos juntos uma relação mais equilibrada e feliz com a sua alimentação.',
      accent: 'from-sand/20 to-cream/50',
    },
    {
      icon: <CalendarCheck className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Consulta Online',
      desc: 'Atendimento nutricional completo de qualquer lugar do Brasil. Mesma qualidade e dedicação do atendimento presencial, no conforto da sua casa.',
      accent: 'from-teal/10 to-sage/5',
    },
  ];

  return (
    <section id="servicos" className="relative bg-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <OrganicBlob className="absolute -left-32 top-20 w-[400px] h-[400px] text-sage/[0.04] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-teal" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-teal">Especialidades</span>
            <div className="w-8 h-[1.5px] bg-teal" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            Como posso te <span className="italic text-teal">ajudar</span>
          </h2>
          <p className="text-sm md:text-base font-light text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Cada pessoa é única, e meu atendimento reflete isso. Conheça as áreas em que posso contribuir para a sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal-up group relative bg-white rounded-3xl p-8 shadow-sm border border-charcoal/[0.04] hover:shadow-xl hover:shadow-teal/[0.06] transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative">
                <div className="w-14 h-14 bg-teal/[0.08] rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal/[0.12] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveBottom fill="#3D5A5A" />
    </section>
  );
}

/* ════════════════════════════════════════════
   METHOD SECTION
   ════════════════════════════════════════════ */
function MethodSection() {
  const steps = [
    {
      step: '01',
      title: 'Avaliação Completa',
      desc: 'Realizamos uma anamnese detalhada, analisando seus exames, histórico de saúde, rotina e objetivos pessoais.',
    },
    {
      step: '02',
      title: 'Plano Personalizado',
      desc: 'Desenvolvo um plano alimentar 100% individualizado, respeitando suas preferências, cultura alimentar e estilo de vida.',
    },
    {
      step: '03',
      title: 'Acompanhamento Contínuo',
      desc: 'Retornos regulares para ajustes, suporte via WhatsApp e orientações para que você nunca se sinta sozinho(a) nessa jornada.',
    },
    {
      step: '04',
      title: 'Resultados Sustentáveis',
      desc: 'Construímos juntos hábitos saudáveis e duradouros, que irão transformar a forma como você se alimenta e vive.',
    },
  ];

  return (
    <section id="metodo" className="relative bg-teal py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 topo-lines opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-sage" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-sage">Meu Método</span>
            <div className="w-8 h-[1.5px] bg-sage" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-cream mb-4 leading-tight">
            Como <span className="italic text-sage">funciona</span>
          </h2>
          <p className="text-sm md:text-base font-light text-cream/60 max-w-xl mx-auto leading-relaxed">
            Um processo cuidadoso e personalizado para que você alcance seus objetivos de forma saudável e prazerosa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal-up relative text-center group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Step number */}
              <div className="font-serif text-6xl md:text-7xl font-bold text-cream/[0.08] mb-4 group-hover:text-cream/[0.15] transition-colors duration-500">
                {step.step}
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-24 h-[1px] bg-cream/15" />
              )}

              <div className="w-3 h-3 bg-sage rounded-full mx-auto mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">{step.title}</h3>
              <p className="text-sm font-light text-cream/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveBottom fill="#F9F7F2" />
    </section>
  );
}

/* ════════════════════════════════════════════
   TESTIMONIALS SECTION
   ════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mariana S.',
      text: 'A Alíssia mudou completamente minha relação com a comida. Emagreci 12kg sem fazer nenhuma dieta maluca. O acompanhamento dela é incrível!',
      role: 'Paciente há 8 meses',
    },
    {
      name: 'Lucas R.',
      text: 'Procurava uma nutricionista esportiva e encontrei muito mais. A Alíssia entende exatamente o que você precisa e adapta tudo à sua rotina.',
      role: 'Atleta amador',
    },
    {
      name: 'Patricia M.',
      text: 'Melhor investimento que fiz na minha saúde. A consulta online tem a mesma qualidade que presencial. Super recomendo!',
      role: 'Consulta online',
    },
  ];

  return (
    <section id="depoimentos" className="relative bg-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <OrganicBlob className="absolute -right-40 -bottom-40 w-[500px] h-[500px] text-terracotta/[0.04] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-teal" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-teal">Depoimentos</span>
            <div className="w-8 h-[1.5px] bg-teal" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            O que dizem meus <span className="italic text-teal">pacientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal-up bg-white rounded-3xl p-8 shadow-sm border border-charcoal/[0.04] flex flex-col hover:shadow-lg transition-shadow duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-terracotta fill-terracotta" />
                ))}
              </div>

              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-charcoal/5">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-teal">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-charcoal/40 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA / APPOINTMENT SECTION
   ════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="relative bg-cream-dark py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto reveal-scale">
        <div className="relative bg-gradient-to-br from-teal to-teal-dark rounded-[30px] md:rounded-[40px] p-10 md:p-16 overflow-hidden text-center shadow-2xl shadow-teal/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta/10 rounded-full translate-y-1/3 -translate-x-1/4" />
          <LeafDecor className="absolute right-8 bottom-8 w-24 h-24 text-cream/20 hidden md:block" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-3.5 h-3.5 text-sage" strokeWidth={2} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cream/80">Pronta para começar?</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-cream mb-6 leading-tight max-w-2xl mx-auto">
              Dê o primeiro passo{' '}
              <span className="italic text-sage">para a sua transformação</span>
            </h2>

            <p className="text-sm md:text-base font-light text-cream/60 max-w-lg mx-auto leading-relaxed mb-10">
              Agende sua consulta e comece sua jornada rumo a uma alimentação equilibrada e uma vida mais saudável. Atendimento presencial e online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-cream text-teal-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Agendar via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-cream/50 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Seg à Sex: 08h - 20h</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-cream/30" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Sáb: 08h - 12h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CONTACT / LOCATION SECTION
   ════════════════════════════════════════════ */
function ContactSection() {
  return (
    <section id="contato" className="relative bg-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-teal" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-teal">Localização</span>
            <div className="w-8 h-[1.5px] bg-teal" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            Onde me <span className="italic text-teal">encontrar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-up">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[350px] md:h-[450px] border border-charcoal/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.9418!3d-19.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzIxLjAiUyA0M8KwNTYnMzAuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Consultório</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">
                  Av. Augusto de Lima, 479<br />
                  R. Francisco Dumont, 460 — Centro<br />
                  Belo Horizonte, MG
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">WhatsApp</h3>
                <a href="https://wa.me/5531984874823" target="_blank" rel="noreferrer" className="text-sm font-light text-teal hover:text-teal-dark transition-colors">
                  (31) 98487-4823
                </a>
                <p className="text-xs text-charcoal/40 mt-1">Clique para iniciar uma conversa</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Horários</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">
                  Segunda à Sexta: 08h às 20h<br />
                  Sábado: 08h às 12h
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Instagram</h3>
                <a href="https://www.instagram.com/alissiarachel/" target="_blank" rel="noreferrer" className="text-sm font-light text-teal hover:text-teal-dark transition-colors">
                  @alissiarachel
                </a>
                <p className="text-xs text-charcoal/40 mt-1">Dicas, conteúdos e novidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-teal-dark text-cream py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

          {/* Logo & description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-sage" strokeWidth={1.5} />
              <span className="font-serif text-2xl font-semibold">Alíssia Rachel</span>
            </div>
            <p className="text-sm font-light text-cream/50 leading-relaxed mb-6">
              Nutricionista Clínica — CRN 35314/P<br />
              Formada pela UFMG. Atendimento presencial em BH e online para todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/alissiarachel/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/5531984874823"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage mb-2">Navegação</h4>
            {['Início', 'Sobre', 'Serviços', 'Método', 'Depoimentos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('í', 'i').replace('é', 'e')}`}
                className="text-sm text-cream/50 hover:text-cream transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage mb-2">Contato</h4>
            <a href="https://wa.me/5531984874823" target="_blank" rel="noreferrer" className="text-sm text-cream/50 hover:text-cream transition-colors font-light flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> (31) 98487-4823
            </a>
            <a href="https://www.instagram.com/alissiarachel/" target="_blank" rel="noreferrer" className="text-sm text-cream/50 hover:text-cream transition-colors font-light flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" /> @alissiarachel
            </a>
            <p className="text-sm text-cream/50 font-light flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Belo Horizonte, MG
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream/30">
          <p>© 2026 Alíssia Rachel — Nutricionista Clínica. Todos os direitos reservados.</p>
          <p>CRN 35314/P</p>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
   ════════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5531984874823?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 group"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}

/* ════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════ */
export default function App() {
  useReveal();

  return (
    <div className="bg-cream min-h-screen text-charcoal font-sans font-light selection:bg-teal selection:text-cream">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
