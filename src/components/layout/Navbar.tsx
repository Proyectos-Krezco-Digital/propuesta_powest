import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'El Reto', href: '/el-reto' },
    { name: 'Alcance', href: '/alcance' },
    { name: 'Soporte', href: '/soporte' },
    { name: 'Inversión', href: '/inversion' },
    { name: 'Plan de Acción', href: '/plan-de-accion' },
    { 
      name: 'Autoagente RAG', 
      href: '/autoagente',
      isBordered: true,
      subLinks: [
        { name: 'Propuesta', href: '/autoagente' },
        { name: 'Inversión', href: '/autoagente-inversion' }
      ]
    }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group relative">
            <span className="text-2xl md:text-3xl font-extrabold italic tracking-tighter text-black font-logo relative z-10">
              iAnGo
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                className="absolute -bottom-1 right-0 h-1 bg-[var(--color-lime)] -z-10 rounded-full"
              />
            </span>
          </Link>

          {/* Desktop Nav - Poppins Style */}
          <div className="hidden md:flex items-center gap-x-1 lg:gap-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`px-3 py-2 text-[11px] lg:text-[12px] font-black uppercase tracking-widest transition-all duration-300 font-ui block flex items-center gap-1 whitespace-nowrap ${
                      link.isBordered ? 'border border-[var(--color-lime)] rounded-none' : 'rounded-full'
                    } ${
                      isActive(link.href)
                        ? (link.isBordered ? 'text-black bg-[var(--color-lime)] border-[var(--color-lime)] shadow-sm' : 'text-black bg-[var(--color-lime)] shadow-lg shadow-[var(--color-lime)]/20')
                        : 'text-gray-500 hover:text-[var(--color-purple)] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                {link.subLinks && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden ${
                    link.isBordered ? 'border-[var(--color-lime)] rounded-none' : 'border-gray-100 rounded-3xl'
                  }`}>
                    <div className="py-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className={`block px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                            location.pathname === sub.href
                              ? 'bg-[var(--color-lime)] text-black'
                              : 'text-gray-500 hover:text-[var(--color-purple)] hover:bg-gray-50'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action - Poppins Style */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsPromoModalOpen(true)}
              className="bg-[var(--color-purple)] text-white text-[11px] font-black tracking-widest uppercase rounded-full px-5 py-2.5 hover:bg-[var(--color-purple)]/90 transition-all border border-transparent font-ui shadow-lg whitespace-nowrap"
            >
              Promo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-[var(--color-lime)] text-[11px] font-black tracking-widest uppercase rounded-full px-5 py-2.5 hover:bg-gray-900 transition-all border border-black font-ui shadow-lg whitespace-nowrap"
              onClick={() => window.open('https://wa.me/573218737931', '_blank')}
            >
              Consultar Proyecto
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-2 rounded-lg bg-gray-50"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block px-6 py-4 text-sm font-semibold uppercase tracking-widest transition-all font-ui ${link.isBordered ? 'border border-[var(--color-lime)] rounded-none' : 'rounded-xl'} ${
                      isActive(link.href)
                        ? (link.isBordered ? 'text-black bg-[var(--color-lime)] border-[var(--color-lime)]' : 'text-black bg-[var(--color-lime)]')
                        : 'text-gray-500 hover:text-[var(--color-purple)] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-2 mt-1 space-y-1 mb-2">
                      {link.subLinks.map(sub => (
                        <Link
                           key={sub.name}
                           to={sub.href}
                           className={`block px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-xl transition-all font-ui ${
                             location.pathname === sub.href
                               ? 'bg-[var(--color-lime)] text-black'
                               : 'text-gray-500 hover:text-[var(--color-purple)] hover:bg-gray-50'
                           }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 space-y-3">
                <button
                  onClick={() => setIsPromoModalOpen(true)}
                  className="w-full text-center flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all font-ui text-white bg-[var(--color-purple)] rounded-xl"
                >
                  <Sparkles size={16} /> Promo Exclusiva
                </button>
                <button
                  onClick={() => window.open('https://wa.me/573218737931', '_blank')}
                  className="w-full text-center block px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all font-ui text-black bg-[var(--color-lime)] rounded-xl"
                >
                  Consultar Proyecto
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Promo Modal */}
      <AnimatePresence>
        {isPromoModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPromoModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[900px] max-h-[90vh] bg-white rounded-[2rem] shadow-2xl flex flex-col border border-gray-100 ring-1 ring-black/5 overflow-hidden pointer-events-auto"
              >
                <div className="p-6 md:p-12 relative flex flex-col h-full overflow-hidden">
                  <button 
                    onClick={() => setIsPromoModalOpen(false)}
                    className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full hover:bg-gray-100 transition-colors bg-gray-50 text-gray-400 hover:text-black z-10"
                  >
                    <X size={20} />
                  </button>

                  {/* Header del Modal */}
                  <div className="shrink-0 mb-8 pr-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-lime)]/20 border border-[var(--color-lime)] text-[9px] font-black tracking-[0.2em] text-black uppercase mb-6 shadow-sm font-ui w-fit">
                      <Sparkles size={14} className="text-[var(--color-purple)]" /> 
                      <span>BONO DE ECOSISTEMA INTEGRADO</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-titles leading-none">
                      DESCUENTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">PACK TRANSACCIONAL + AI</span>
                    </h2>
                  </div>

                  <div className="space-y-10 overflow-y-auto pr-2 md:pr-4 flex-grow scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    
                    {/* Intro */}
                    <div className="space-y-4">
                      <p className="text-gray-600 text-[15px] leading-relaxed font-medium font-body border-l-2 border-gray-200 pl-4 italic">
                        Desplegar plataformas aisladas es costoso; construir un ecosistema inteligente es estratégico. 
                        Al fusionar el <strong className="text-black font-extrabold underline decoration-[var(--color-lime)] decoration-2">E-commerce Headless</strong> con el <strong className="text-black font-extrabold underline decoration-[var(--color-lime)] decoration-2">Autoagente RAG</strong> en el mismo servidor Dokploy, 
                        ahorramos horas de configuración dual. Ese ahorro operativo se traslada directamente a Powest de forma transparente.
                      </p>
                    </div>

                    {/* Calculations */}
                    <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-lime)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                       <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 font-ui">Desglose de Inversión Estratégica</h4>
                       
                       <div className="space-y-5 mb-10 relative z-10 font-body">
                          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
                            <div>
                              <p className="text-black font-black text-sm uppercase font-ui">1. Setup B2B Headless Commerce</p>
                              <p className="text-xs text-gray-500 italic mt-0.5">Arquitectura Next.js + WooCommerce Mapper</p>
                            </div>
                            <span className="font-black text-black text-lg">$ 14.500.000</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
                            <div>
                              <p className="text-black font-black text-sm uppercase font-ui">2. Setup Autoagente AI</p>
                              <p className="text-xs text-gray-500 italic mt-0.5">Integración RAG + WhatsApp + Gemini</p>
                            </div>
                            <span className="font-black text-black text-lg">$ 7.800.000</span>
                          </div>

                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 font-bold font-ui uppercase text-[10px] tracking-widest">Subtotal Arquitectura Modular</span>
                            <span className="font-bold text-gray-400 line-through decoration-red-500/50 decoration-2">~ $ 22.300.000 COP</span>
                          </div>
                       </div>

                       <div className="bg-black text-[var(--color-lime)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 shadow-xl ring-1 ring-white/10">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[var(--color-lime)]/10 rounded-xl flex items-center justify-center border border-[var(--color-lime)]/20 flex-shrink-0">
                               <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                               <p className="font-black text-[11px] uppercase tracking-widest text-white/60 font-ui mb-1">Incentivo Ecosistema (-10%)</p>
                               <p className="font-black text-2xl tracking-tighter text-[var(--color-lime)]">- $ 2.230.000 COP</p>
                            </div>
                          </div>
                          
                          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
                             <p className="font-black text-[10px] uppercase tracking-widest text-white/40 font-ui mb-2">Total Pack Promo</p>
                             <p className="text-4xl md:text-5xl font-black text-white tracking-tighter font-titles">
                               $ 20.070.000 <span className="text-sm font-medium text-gray-400 align-top">COP</span>
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* Conditions */}
                    <div className="bg-[var(--color-purple)]/5 border border-[var(--color-purple)]/10 rounded-2xl p-6 md:p-8 flex items-start gap-5">
                       <div className="p-3 bg-[var(--color-purple)] rounded-xl flex-shrink-0 shadow-lg shadow-[var(--color-purple)]/20">
                         <Zap className="text-white w-5 h-5" />
                       </div>
                       <div>
                         <h5 className="font-black text-[10px] uppercase tracking-widest text-[var(--color-purple)] mb-2 font-ui">Condiciones del Beneficio</h5>
                         <p className="text-[14px] text-gray-600 leading-relaxed font-medium italic">
                           Este incentivo se aplica exclusivamente al contratar el <strong className="text-black font-extrabold not-italic">Ecosistema Completo</strong> en una única adjudicación. Al unificar despliegue, reducimos costos operativos de ingeniería que transferimos directamente a Powest. Valores expresados sin IVA.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
