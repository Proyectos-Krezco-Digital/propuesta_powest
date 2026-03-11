import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight, Globe, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-pro relative bg-black text-white py-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-lime)] rounded-full blur-[180px] opacity-[0.04] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-purple)] rounded-full blur-[160px] opacity-[0.02] pointer-events-none -z-10" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 items-start pb-24 border-b border-white/10">
          
          {/* 1. BRAND IDENTITY */}
          <div className="space-y-10 lg:col-span-2">
            <Link to="/" className="inline-block group relative">
              <span className="text-4xl md:text-[3.2rem] font-extrabold italic tracking-tighter text-white font-logo relative z-10 leading-none">
                iAnGo
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 right-0 h-2 bg-[var(--color-lime)] -z-10 rounded-full"
                />
              </span>
            </Link>
            
            <div className="space-y-6">
              <h3 className="text-[var(--color-lime)] font-black text-xs uppercase tracking-[0.4em] font-ui">
                Agencia de Desarrollo y Automatizaciones IA
              </h3>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg font-body font-medium italic border-l-2 border-[var(--color-lime)]/30 pl-6 md:pl-8 text-balance">
                Transformando la complejidad técnica en ecosistemas digitales de alto rendimiento. Expertos en arquitecturas Headless y despliegue inteligente con IA.
              </p>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="space-y-10">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] font-ui flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--color-lime)]"></span> Navegación
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'El Reto', href: '/el-reto' },
                { name: 'Alcance', href: '/alcance' },
                { name: 'Inversión', href: '/inversion' },
                { name: 'Soporte', href: '/soporte' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300 font-bold text-sm tracking-wide font-ui"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[var(--color-lime)] transition-all overflow-hidden opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & ACTION */}
          <div className="space-y-10">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] font-ui flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--color-purple)]"></span> Contacto
            </h4>
            <div className="space-y-6">
              <div className="space-y-3">
                <a 
                  href="tel:+573218737931" 
                  className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-lime)] transition-colors group px-4 py-3 bg-white/5 rounded-2xl border border-white/5 hover:border-[var(--color-lime)]/20 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold text-sm font-ui">(+57) 321 873 7931</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="mailto:dazzleagency.ac@gmail.com" 
                  className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-purple)] transition-colors group px-4 py-3 bg-white/5 rounded-2xl border border-white/5 hover:border-[var(--color-purple)]/20 shadow-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-[11px] sm:text-[13px] font-ui truncate max-w-[170px] sm:max-w-none">dazzleagency.ac@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </div>

              <div className="pt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 font-ui">
                <Globe className="w-3 h-3 text-[var(--color-lime)]" />
                Colombia / Remoto Global
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-12 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] font-ui">
              © 2026 iAnGo | Agencia de Desarrollo y Automatizaciones IA
            </p>
            <p className="text-gray-800 text-[9px] font-bold uppercase tracking-[0.2em] font-ui">
              Todos los derechos reservados. High-Performance Engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Ingeniería IA', color: 'text-white/20' },
              { label: 'Arquitectura Headless', color: 'text-white/20' },
              { label: 'Next.js 15 Listo', color: 'text-[var(--color-lime)] opacity-40' }
            ].map((tag, i) => (
              <span key={i} className={`${tag.color} text-[10px] font-black uppercase tracking-[0.4em] font-ui flex items-center gap-2`}>
                <Zap className="w-3 h-3 opacity-30" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
