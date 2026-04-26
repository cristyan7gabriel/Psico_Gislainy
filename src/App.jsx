import React, { useEffect } from 'react';
import { ArrowRight, Leaf, Heart, Brain, Clock, MapPin, Phone, Instagram, ChevronDown, Star, Users, Award, CalendarCheck, MessageCircle, Smile, Activity } from 'lucide-react';
import './index.css';

/* ════════════════════════════════════════════
   WAVE / DECORATIVE SVGs
   ════════════════════════════════════════════ */
const WaveTop = ({ fill = '#FAF7F2', className = '' }) => (
  <div className={`wave-separator ${className}`} style={{ transform: 'rotate(180deg)', top: '-1px', bottom: 'auto' }}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path fill={fill} d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
    </svg>
  </div>
);

const WaveBottom = ({ fill = '#FAF7F2', className = '' }) => (
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
function Navbar({ onOpenModal }) {
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
    { label: 'O Percurso', href: '#metodo' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Brain className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-rose' : 'text-rose'}`} strokeWidth={1.5} />
            <span className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-charcoal'}`}>
              Larissa Maria
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-charcoal/70 hover:text-rose transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-rose after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenModal}
              className="ml-4 bg-charcoal text-cream px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-charcoal/90 transition-all duration-300 hover:shadow-lg hover:shadow-charcoal/20"
            >
              Agendar Consulta
            </button>
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
          <div className="bg-cream/98 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 border-t border-rose/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-charcoal/80 hover:text-rose transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenModal();
              }}
              className="mt-2 bg-charcoal text-cream px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-center hover:bg-charcoal/90 transition-all"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </nav>

      {/* Modal de Pré-Agendamento */}
    </>
  );
}

/* ════════════════════════════════════════════
   HERO SECTION
   ════════════════════════════════════════════ */
function HeroSection({ onOpenModal }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-cream overflow-hidden pt-20">
      {/* Background decorative elements */}
      <OrganicBlob className="absolute -right-32 -top-32 w-[500px] h-[500px] text-rose/[0.04] hidden md:block" />
      <OrganicBlob className="absolute -left-40 bottom-0 w-[400px] h-[400px] text-beige/[0.06] hidden md:block" />
      <LeafDecor className="absolute right-16 top-32 w-24 h-24 text-rose hidden lg:block animate-float" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pb-10 lg:pb-0">
            <div className="inline-flex items-center gap-2 bg-rose/[0.08] border border-rose/10 rounded-full px-4 py-1.5 mb-6">
              <Brain className="w-3.5 h-3.5 text-rose" strokeWidth={2} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-rose">Psicanálise • CRP 09/13471</span>
            </div>

            <h1 className="font-serif text-[2.8rem] md:text-6xl lg:text-[5.5rem] leading-[1.05] mb-6 text-charcoal break-words">
              Um espaço de{' '}
              <span className="italic text-rose">escuta singular</span>
              <br />
              para você
            </h1>

            <p className="text-base md:text-lg font-light text-charcoal/70 max-w-lg leading-relaxed mb-8">
              Atendimento focado na sua subjetividade, sem julgamentos. Uma jornada de autoconhecimento e elaboração de conflitos através da Psicanálise. Presencial em Goiânia e Online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="group flex items-center justify-center gap-3 bg-charcoal text-cream px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-charcoal/90 transition-all duration-300 shadow-lg shadow-charcoal/20 hover:shadow-xl hover:shadow-charcoal/30"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#sobre"
                className="group flex items-center justify-center gap-3 border-2 border-rose/20 text-rose-dark px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-rose/5 transition-all duration-300"
              >
                Saiba Mais
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-charcoal/10">
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-rose">100%</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">Acolhimento</p>
              </div>
              <div className="h-8 w-[1px] bg-charcoal/10" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-rose">Ética</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">Profissional</p>
              </div>
              <div className="h-8 w-[1px] bg-charcoal/10" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-rose">Online</p>
                <p className="text-[9px] uppercase tracking-widest text-charcoal/50 font-medium">& Presencial</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Decorative shape behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose/10 to-beige/10 rounded-[40px] md:rounded-[60px] rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-beige-dark/5 to-transparent rounded-[40px] md:rounded-[60px] -rotate-2" />

              <img
                src="/fotos/Larissa1.png"
                alt="Larissa Maria - Psicóloga"
                className="relative w-full max-w-full aspect-[3/4] object-cover rounded-[30px] md:rounded-[50px] shadow-2xl shadow-charcoal/10"
              />

              {/* Floating card overlay */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-xl border border-white/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Clínica Psicanalítica</p>
                    <p className="text-[10px] text-charcoal/50">Jovens e Adultos</p>
                  </div>
                </div>
              </div>

              {/* Floating card right */}
              <div className="absolute -top-2 -right-2 md:top-4 md:-right-6 bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-xl border border-white/50 animate-float" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-beige-dark" strokeWidth={1.5} />
                  <span className="text-[10px] font-semibold text-charcoal uppercase tracking-wider">Escuta<br/>Acolhedora</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Organic wave transition */}
      <WaveBottom fill="#F4EFE6" />
    </section>
  );
}

/* ════════════════════════════════════════════
   ABOUT SECTION
   ════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section id="sobre" className="relative bg-cream-dark py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <LeafDecor className="absolute left-8 top-12 w-20 h-20 text-rose opacity-40 hidden lg:block" />
      <OrganicBlob className="absolute -right-48 top-20 w-[500px] h-[500px] text-rose/[0.03] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image side */}
          <div className="flex-1 relative reveal-left w-full">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-rose/5 rounded-[50px] -rotate-3" />
              <img
                src="/fotos/Larissa2.png"
                alt="Larissa Maria"
                className="relative w-full max-w-full aspect-[4/5] object-cover rounded-[40px] shadow-xl"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 right-4 md:right-0 bg-rose text-cream rounded-2xl p-5 shadow-xl">
                <p className="font-serif text-3xl font-bold">CRP</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">09/13471</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 reveal-right">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[1.5px] bg-rose" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rose">Sobre Mim</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-6 leading-[1.1] break-words">
              Olá, eu sou a{' '}
              <span className="italic text-rose">Larissa Maria</span>
            </h2>

            <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed mb-5">
              Sou Psicóloga Clínica e Psicanalista (CRP 09/13471), apaixonada pela escuta atenta e por ajudar as pessoas a se compreenderem de forma profunda e verdadeira.
            </p>

            <p className="text-sm md:text-base font-light text-charcoal/70 leading-relaxed mb-8">
              Acredito que através do percurso psicanalítico podemos ressignificar nossas dores, medos e angústias. Ofereço um ambiente ético, de confiança e totalmente livre de julgamentos, para que você possa falar livremente sobre aquilo que lhe causa sofrimento.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Award className="w-5 h-5 text-rose" strokeWidth={1.5} />, text: 'Psicologia Clínica' },
                { icon: <Brain className="w-5 h-5 text-rose" strokeWidth={1.5} />, text: 'Psicanálise' },
                { icon: <CalendarCheck className="w-5 h-5 text-rose" strokeWidth={1.5} />, text: 'Presencial & Online' },
                { icon: <Users className="w-5 h-5 text-rose" strokeWidth={1.5} />, text: 'Jovens e Adultos' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-cream/80 rounded-xl px-4 py-3 border border-rose/5">
                  {item.icon}
                  <span className="text-xs font-medium text-charcoal/80">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5562982474553?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento!"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-charcoal text-cream px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-charcoal/90 transition-all duration-300 shadow-lg shadow-charcoal/20"
            >
              Fale Comigo
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      <WaveBottom fill="#FAF7F2" />
    </section>
  );
}

/* ════════════════════════════════════════════
   MARQUEE / INFINITE SCROLL TEXT
   ════════════════════════════════════════════ */
function MarqueeSection() {
  const items = ['Psicanálise', '•', 'Escuta Analítica', '•', 'Autoconhecimento', '•', 'Acolhimento', '•', 'Psicoterapia Online', '•', 'Ética', '•'];
  return (
    <div className="bg-rose py-5 overflow-hidden relative">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className={`font-serif text-xl md:text-2xl mx-4 ${item === '•' ? 'text-charcoal/50' : 'text-charcoal italic'}`}>
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
      icon: <Brain className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Ansiedade e Angústia',
      desc: 'Um espaço para falar sobre o que te aflige, compreendendo as raízes da ansiedade e encontrando novas formas de lidar com ela.',
      accent: 'from-rose/10 to-beige/10',
    },
    {
      icon: <Heart className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Sofrimento Emocional',
      desc: 'Acolhimento para momentos de tristeza profunda, luto, perdas e sentimentos de vazio, promovendo a ressignificação das dores.',
      accent: 'from-beige-dark/10 to-beige/20',
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Conflitos de Relacionamento',
      desc: 'Análise dos padrões que se repetem nas relações interpessoais, amorosas ou familiares, buscando maior harmonia e limites saudáveis.',
      accent: 'from-beige/15 to-rose/5',
    },
    {
      icon: <Activity className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Crises e Transições',
      desc: 'Suporte emocional para fases de mudança na vida, escolhas profissionais, términos, e novos ciclos que geram incertezas.',
      accent: 'from-rose/8 to-beige-dark/8',
    },
    {
      icon: <Smile className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Autoconhecimento',
      desc: 'Uma investigação profunda sobre o seu próprio desejo, história e escolhas, possibilitando uma vida com mais autenticidade e sentido.',
      accent: 'from-beige/20 to-cream/50',
    },
    {
      icon: <CalendarCheck className="w-8 h-8" strokeWidth={1.2} />,
      title: 'Atendimento Online e Presencial',
      desc: 'Sessões conduzidas com o mesmo rigor ético e qualidade, seja no consultório em Goiânia ou no conforto da sua casa em qualquer lugar do Brasil.',
      accent: 'from-rose/10 to-beige/5',
    },
  ];

  return (
    <section id="servicos" className="relative bg-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <OrganicBlob className="absolute -left-32 top-20 w-[400px] h-[400px] text-beige/[0.04] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-rose" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rose">Especialidades</span>
            <div className="w-8 h-[1.5px] bg-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            O que trabalhamos <span className="italic text-rose">na clínica</span>
          </h2>
          <p className="text-sm md:text-base font-light text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            A psicanálise não oferece receitas prontas, mas sim um espaço seguro para que cada pessoa encontre as suas próprias respostas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal-up group relative bg-white rounded-3xl p-8 shadow-sm border border-charcoal/[0.04] hover:shadow-xl hover:shadow-rose/[0.06] transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative">
                <div className="w-14 h-14 bg-rose/[0.08] rounded-2xl flex items-center justify-center text-rose mb-6 group-hover:bg-rose/[0.12] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveBottom fill="#2D2B2A" />
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
      title: 'Associação Livre',
      desc: 'O princípio é simples: falar o que vier à mente, sem censura ou preocupação estética. É na fala livre que a verdade do sujeito aparece.',
    },
    {
      step: '02',
      title: 'Escuta Atenta',
      desc: 'Minha função é escutar não apenas o que é dito, mas como é dito. Há uma escuta ativa focada nas repetições e lapsos do discurso.',
    },
    {
      step: '03',
      title: 'Elaboração',
      desc: 'Através das intervenções analíticas, você começa a perceber padrões inconscientes que determinam suas escolhas e dores.',
    },
    {
      step: '04',
      title: 'Ressignificação',
      desc: 'Construímos novos sentidos para velhos problemas, possibilitando uma vida menos submetida ao sofrimento e mais próxima ao seu desejo.',
    },
  ];

  return (
    <section id="metodo" className="relative bg-charcoal py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 topo-lines opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-rose" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rose">O Percurso</span>
            <div className="w-8 h-[1.5px] bg-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-cream mb-4 leading-tight">
            Como funciona a <span className="italic text-rose">Psicanálise</span>
          </h2>
          <p className="text-sm md:text-base font-light text-cream/60 max-w-xl mx-auto leading-relaxed">
            Uma abordagem que aposta na palavra e na singularidade de cada história. Não há roteiros, há uma escuta profunda e transformadora.
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

              <div className="w-3 h-3 bg-rose rounded-full mx-auto mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">{step.title}</h3>
              <p className="text-sm font-light text-cream/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveBottom fill="#FAF7F2" />
    </section>
  );
}

/* ════════════════════════════════════════════
   TESTIMONIALS SECTION
   ════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'P. F.',
      text: 'O espaço que a Larissa proporciona é único. Pela primeira vez consegui falar sobre questões que eu nem sabia que me afetavam tanto. A psicanálise tem me transformado.',
      role: 'Paciente',
    },
    {
      name: 'M. S.',
      text: 'A escuta da Larissa é muito cuidadosa e sem nenhum julgamento. Comecei a terapia para ansiedade e acabei descobrindo muito sobre mim mesma. Recomendo de olhos fechados.',
      role: 'Paciente',
    },
    {
      name: 'R. A.',
      text: 'Sempre tive resistência à terapia, mas o acolhimento da Larissa quebrou todas as minhas barreiras. Me sinto muito mais seguro para lidar com os conflitos do meu dia a dia.',
      role: 'Paciente',
    },
  ];

  return (
    <section id="depoimentos" className="relative bg-cream py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <OrganicBlob className="absolute -right-40 -bottom-40 w-[500px] h-[500px] text-beige-dark/[0.04] hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1.5px] bg-rose" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rose">Depoimentos</span>
            <div className="w-8 h-[1.5px] bg-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            A experiência do <span className="italic text-rose">Percurso</span>
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
                  <Star key={j} className="w-4 h-4 text-rose fill-rose" />
                ))}
              </div>

              <p className="text-sm font-light text-charcoal/70 leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-charcoal/5">
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-rose">{t.name.charAt(0)}</span>
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
        <div className="relative bg-gradient-to-br from-rose to-rose-dark rounded-[30px] md:rounded-[40px] p-10 md:p-16 overflow-hidden text-center shadow-2xl shadow-rose/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-beige/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-beige-dark/10 rounded-full translate-y-1/3 -translate-x-1/4" />
          <LeafDecor className="absolute right-8 bottom-8 w-24 h-24 text-charcoal/5 hidden md:block" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-charcoal/5 border border-charcoal/10 rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-3.5 h-3.5 text-charcoal" strokeWidth={2} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal/80">Pronta(o) para começar?</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-6 leading-tight max-w-2xl mx-auto">
              Dê o primeiro passo{' '}
              <span className="italic text-charcoal/70">para o seu bem-estar</span>
            </h2>

            <p className="text-sm md:text-base font-light text-charcoal/70 max-w-lg mx-auto leading-relaxed mb-10">
              Agende sua consulta e inicie um percurso de autoconhecimento e elaboração de conflitos. Atendimento presencial e online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5562982474553?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-charcoal text-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-charcoal/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Agendar via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-charcoal/50 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Horários flexíveis mediante agendamento</span>
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
            <div className="w-8 h-[1.5px] bg-rose" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-rose">Localização & Contato</span>
            <div className="w-8 h-[1.5px] bg-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal mb-4 leading-tight">
            Onde me <span className="italic text-rose">encontrar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-up">
          {/* Contact info cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-rose" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Consultório - Centro</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">
                  Edifício MinasBank<br />
                  Av. Goiás, 606 - Sala 609<br />
                  Centro, Goiânia - GO, 74020-200
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-rose" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Consultório - Setor Bueno</h3>
                <p className="text-sm font-light text-charcoal/60 leading-relaxed">
                  Edifício Monte Líbano Center<br />
                  Av. T-63, 984<br />
                  St. Bueno, Goiânia - GO, 74230-100
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-rose" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">WhatsApp</h3>
                <a href="https://wa.me/5562982474553" target="_blank" rel="noreferrer" className="text-sm font-light text-rose hover:text-rose-dark transition-colors">
                  (62) 98247-4553
                </a>
                <p className="text-xs text-charcoal/40 mt-1">Clique para agendar sua consulta</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-charcoal/[0.04] flex items-start gap-5 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-rose" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">Instagram</h3>
                <a href="https://www.instagram.com/psi.larissamaria/" target="_blank" rel="noreferrer" className="text-sm font-light text-rose hover:text-rose-dark transition-colors">
                  @psi.larissamaria
                </a>
                <p className="text-xs text-charcoal/40 mt-1">Siga para mais conteúdos e reflexões</p>
              </div>
            </div>
          </div>

          {/* Map Image / Component */}
          {/* Substituting iframe for the more central/relevant location or a static elegant map placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[350px] md:h-full border border-charcoal/5 min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.564903332165!2d-49.25590828456894!3d-16.660706088523293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1604a44b93f%3A0x673ed17b6a127f8a!2sGoi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Goiânia"
            />
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
    <footer className="bg-charcoal text-cream py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

          {/* Logo & description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-rose" strokeWidth={1.5} />
              <span className="font-serif text-2xl font-semibold">Larissa Maria</span>
            </div>
            <p className="text-sm font-light text-cream/50 leading-relaxed mb-6">
              Psicóloga e Psicanalista — CRP 09/13471<br />
              Atendimento presencial em Goiânia (Centro e Bueno) e online para todo o Brasil. Foco em escuta analítica, ética e acolhimento.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/psi.larissamaria/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-cream" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/5562982474553"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-cream" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-rose mb-2">Navegação</h4>
            {['Início', 'Sobre', 'Serviços', 'O Percurso', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('í', 'i').replace('é', 'e').replace(' ', '-')}`}
                className="text-sm text-cream/50 hover:text-cream transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-rose mb-2">Contato</h4>
            <a href="https://wa.me/5562982474553" target="_blank" rel="noreferrer" className="text-sm text-cream/50 hover:text-cream transition-colors font-light flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> (62) 98247-4553
            </a>
            <a href="https://www.instagram.com/psi.larissamaria/" target="_blank" rel="noreferrer" className="text-sm text-cream/50 hover:text-cream transition-colors font-light flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" /> @psi.larissamaria
            </a>
            <p className="text-sm text-cream/50 font-light flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Goiânia, GO
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream/30">
          <p>© 2026 Larissa Maria — Psicóloga e Psicanalista. Todos os direitos reservados.</p>
          <p>CRP 09/13471</p>
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
      href="https://wa.me/5562982474553?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
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
function PreBookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm">
      <div className="bg-cream rounded-3xl p-8 max-w-md w-full shadow-2xl border border-rose/10 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-charcoal/5 text-charcoal/50 hover:bg-charcoal/10 hover:text-charcoal transition-colors"
        >
          ✕
        </button>
        
        <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center mb-6">
          <CalendarCheck className="w-6 h-6 text-rose" />
        </div>
        
        <h3 className="font-serif text-2xl text-charcoal mb-3">Pré-Agendamento</h3>
        
        <div className="space-y-4 text-sm font-light text-charcoal/70 mb-8">
          <p>Você será redirecionado para a nossa agenda para escolher um horário disponível.</p>
          <div className="bg-rose/5 p-4 rounded-xl border border-rose/10">
            <p className="font-medium text-charcoal mb-1">Atenção Importante:</p>
            <p>Esta etapa é um <strong>pré-agendamento</strong>. É fundamental que você preencha seu <strong>número de WhatsApp corretamente</strong>, pois a psicóloga entrará em contato por ele para confirmar a sua consulta.</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <a 
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Lg5ObHe6jZ2KBmLsKgj7gjjLhGW96RRIlItSNJBzEFm1GB0aNA1qTHC5pzYJV9lDja48pO-ZM?gv=true"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="bg-charcoal text-cream w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-center hover:bg-charcoal/90 transition-all shadow-lg"
          >
            Entendi, ir para a agenda
          </a>
          <button 
            onClick={onClose}
            className="text-xs uppercase tracking-widest font-semibold text-charcoal/60 hover:text-charcoal transition-colors py-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useReveal();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="bg-cream min-h-screen text-charcoal font-sans font-light selection:bg-rose selection:text-cream">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <PreBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
