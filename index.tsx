import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Componente do Logo Trafer Digital
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#020617] text-white">
      {/* Background Effects */}
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

      {/* Hero */}
      <header className="relative pt-48 pb-32 px-6 z-10 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest mx-auto md:mx-0">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#84cc16] animate-pulse"></span>
              Performance & Estratégia Digital
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter text-white">
              Sua Presença <br />
              <span className="text-[#84cc16]">Digital Premium.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-lg font-medium leading-relaxed mx-auto md:mx-0">
              Transformamos visualizações em clientes através de design de alta conversão e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <a href="https://wa.me/5511988484500" className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#84cc16] hover:text-white transition-all shadow-2xl text-center">
                Iniciar Projeto
              </a>
            </div>
          </div>
          <div className="relative hidden md:block opacity-40">
             <div className="grid grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-3xl border border-white/10"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 z-10 bg-[#020617] mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Logo size="text-2xl" />
            <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em] max-w-xs text-center md:text-left leading-loose">
              Criando experiências digitais de alta performance desde 2020.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              <a href="#solucoes" className="hover:text-[#84cc16] transition-colors">Soluções</a>
              <a href="privacy.html" className="hover:text-[#84cc16] transition-colors">Privacidade</a>
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