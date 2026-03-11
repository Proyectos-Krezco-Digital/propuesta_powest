import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
            <span className="text-2xl md:text-[2.6rem] font-extrabold italic tracking-tighter text-black font-logo relative z-10">
              iAnGo
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                className="absolute -bottom-1 right-0 h-1.5 bg-[var(--color-lime)] -z-10 rounded-full"
              />
            </span>
          </Link>

          {/* Desktop Nav - Poppins Style */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-5 py-3 rounded-full text-[13px] font-black uppercase tracking-widest transition-all duration-300 font-ui ${
                  isActive(link.href)
                    ? 'text-black bg-[var(--color-lime)] shadow-lg shadow-[var(--color-lime)]/20'
                    : 'text-gray-500 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action - Poppins Style */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[var(--color-lime)] text-[12px] font-black tracking-widest uppercase rounded-full px-8 py-4 hover:bg-gray-900 transition-all border border-black font-ui shadow-xl group-hover:scale-105"
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
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-6 py-4 text-sm font-black uppercase tracking-widest rounded-xl transition-all font-ui ${
                    isActive(link.href)
                      ? 'text-black bg-[var(--color-lime)]'
                      : 'text-gray-400 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
