import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Componente do Logo Trafer Digital
 * Estilo Premium: Trafer (Bold/White), Digital (Lime Green), Icon (Triangular Dots)
 */
const Logo = ({ size = "text-2xl" }: { size?: string }) => (
  <div className="flex items-center select-none cursor-pointer group">
    <div className={`flex items-center font-display font-extrabold ${size} tracking-tighter leading-none`}>
      <span className="text-white group-hover:text-slate-200 transition-colors">Trafer</span>
      <div className="flex items-center text-[#84cc16] ml-1.5">
        <span>Digital</span>
        <svg 
          className="ml-1.5 w-[1.1em] h-[1.1em] group-hover:rotate-12 transition-transform duration-500" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="4" r="1.5" />
          <circle cx="2" cy="8" r="1.5" />
          <circle cx="2" cy="12" r="1.5" />
          <circle cx="2" cy="16" r="1.5" />
          <circle cx="2" cy="20" r="1.5" />
          <circle cx="6" cy="6" r="1.5" opacity="0.9" />
          <circle cx="6" cy="10" r="1.5" opacity="0.9" />
          <circle cx="6" cy="14" r="1.5" opacity="0.9" />
          <circle cx="6" cy="18" r="1.5" opacity="0.9" />
          <circle cx="10" cy="8" r="1.5" opacity="0.75" />
          <circle cx="10" cy="12" r="1.5" opacity="0.75" />
          <circle cx="10" cy="16" r="1.5" opacity="0.75" />
          <circle cx="14" cy="10" r="1.5" opacity="0.55" />
          <circle cx="14" cy="14" r="1.5" opacity="0.55" />
          <circle cx="18" cy="12" r="1.5" opacity="0.35" />
        </svg>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#020617] text-white selection:bg-[#84cc16] selection:text-white">
      {/* Background Tech Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#84cc16]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo size="text-2xl" />
          <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <a href="#ferramentas" className="hover:text-white transition-colors">Ferramentas</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a 
            href="https://wa.me/5511988484500" 
            target="_blank"
            className="bg-[#84cc16] text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#84cc16]/20"
          >
            Orçamento Grátis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#84cc16] animate-pulse"></span>
              Performance & Estratégia Digital
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter text-white">
              Sua Presença <br />
              <span className="text-[#84cc16]">Digital Premium.</span>
            </h1>
            
            <p className="text-slate-400 text-xl max-w-lg font-medium leading-relaxed">
              Transformamos visualizações em clientes através de design de alta conversão e tecnologia de ponta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#84cc16] hover:text-white transition-all shadow-2xl">
                Iniciar Projeto
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                Ver Portfólio
              </button>
            </div>
          </div>
          
          <div className="relative hidden md:block group">
            <div className="absolute inset-0 bg-[#84cc16]/10 blur-[120px] rounded-full group-hover:bg-[#84cc16]/20 transition-all duration-1000"></div>
            <div className="relative grid grid-cols-4 gap-6 opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-3xl border border-white/10 hover:border-[#84cc16]/30 transition-colors duration-500"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Seção Soluções */}
      <section id="solucoes" className="py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter text-white">
              Nossas <span className="text-[#84cc16]">Soluções</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Estratégias digitais que geram autoridade e resultados reais para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Sites & Landing Pages", desc: "Páginas otimizadas para carregamento instantâneo e conversão de leads qualificados.", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
              { title: "Gestão de Tráfego", desc: "Campanhas precisas no Google e Meta Ads para atrair quem realmente quer comprar.", icon: <path d="M21 12h-4l-3 9L9 3l-3 9H2" /> },
              { title: "SEO de Performance", desc: "Ocupamos as primeiras posições do Google organicamente através de conteúdo técnico.", icon: <path d="M13 2L3 14h9v8l10-12h-9V2z" /> },
              { title: "E-commerce Pro", desc: "Plataformas de vendas robustas integradas com logística e meios de pagamento.", icon: <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" /> },
              { title: "Marketing de Conteúdo", desc: "Criação de autoridade e engajamento através de blogs e materiais estratégicos.", icon: <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2l6 6m-6-6v6h6" /> },
              { title: "Consultoria UX", desc: "Análise profunda da jornada do usuário para eliminar fricções e aumentar as vendas.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> }
            ].map((s, i) => (
              <div key={i} className="group p-12 bg-white/5 rounded-[48px] border border-white/5 hover:bg-white/[0.07] hover:border-[#84cc16]/20 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#84cc16]/5 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#84cc16] transition-all duration-500">
                  <svg className="w-7 h-7 text-[#84cc16] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{s.icon}</svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-6 text-white tracking-tight leading-tight">{s.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-10 min-h-[80px] text-sm">{s.desc}</p>
                <div className="flex items-center gap-3 text-[#84cc16] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                  Explorar 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Ferramentas & Parceiros */}
      <section id="ferramentas" className="py-32 px-6 z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tighter text-white">
              Parceiros <span className="text-[#84cc16]">Estratégicos</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium opacity-80">
              Utilize o melhor do ecossistema digital com nossos links e condições exclusivas.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { 
                name: "Locaweb", 
                cat: "Hospedagem", 
                url: "https://locaweb.com.br/?utm_source=Afiliados_Locaweb&utm_medium=Padrao&utm_campaign=Home-dotcomerce&a_aid=dotcomerce&a_bid=639a80bc"
              },
              { 
                name: "Nuvemshop", 
                cat: "E-commerce", 
                url: "https://www.nuvemshop.com.br/partners/trafer-digital"
              },
              { 
                name: "Bling", 
                cat: "ERP & Gestão", 
                url: "https://www.bling.com.br/planos-e-precos/TRAFER"
              },
              { 
                name: "Melhor Envio", 
                cat: "Logística", 
                url: "https://melhorenvio.com.br/p/CHiJ7NuZsI"
              },
              { 
                name: "RD Station", 
                cat: "Marketing", 
                url: "https://www.rdstation.com/"
              }
            ].map((p, i) => (
              <a 
                key={i} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-10 bg-white/5 rounded-[40px] border border-white/5 transition-all duration-300 flex flex-col items-center text-center hover:bg-white/[0.08] hover:border-[#84cc16]/40 hover:-translate-y-2 shadow-2xl"
              >
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#84cc16]/50 mb-6 group-hover:text-[#84cc16] transition-colors">{p.cat}</div>
                <div className="text-xl font-display font-extrabold text-white mb-8 tracking-tight">{p.name}</div>
                <div className="mt-auto w-full py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.25em] text-white/40 group-hover:bg-[#84cc16] group-hover:border-[#84cc16] group-hover:text-white transition-all">
                  Conhecer
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#111827] to-black p-12 md:p-32 rounded-[80px] text-center relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[#84cc16]/5 blur-[120px] pointer-events-none opacity-50"></div>
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter leading-none text-white">
              Pronto para o <br/><span className="text-[#84cc16]">próximo nível?</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-xl mx-auto font-medium">
              Agende uma consultoria gratuita e descubra como podemos acelerar seu crescimento.
            </p>
            <a 
              href="https://wa.me/5511988484500" 
              target="_blank" 
              className="inline-block bg-[#84cc16] text-white px-16 py-8 rounded-[36px] font-black uppercase text-sm tracking-[0.3em] hover:scale-105 hover:brightness-110 active:scale-95 transition-all shadow-[0_20px_60px_-10px_rgba(132,204,22,0.3)]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-24 px-6 border-t border-white/5 z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Logo size="text-2xl" />
            <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em] max-w-xs text-center md:text-left leading-loose">
              Criando experiências digitais de alta performance desde 2020.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <a href="#" className="hover:text-[#84cc16] transition-colors">Portfólio</a>
              <a href="#" className="hover:text-[#84cc16] transition-colors">Agência</a>
              <a href="/privacy" className="hover:text-[#84cc16] transition-colors">Privacidade</a>
            </div>
            
            <div className="text-[10px] uppercase tracking-[0.35em] text-slate-700 font-black text-center md:text-right space-y-2">
              <p className="text-slate-400">Trafer Soluções Digitais LTDA</p>
              <p className="text-[#84cc16]/40">CNPJ: 39.762.922/000-71</p>
              <p className="opacity-40">© 2024 TRAFER DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);