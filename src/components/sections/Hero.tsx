import { motion } from 'framer-motion';
import { Shield, Users, Calendar, Award, Building2, MapPin, Phone, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div id="home" className="bg-white min-h-screen">
      {/* 0. PORTADA Y PRESENTACIÓN TÉCNICA */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-40 pb-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-lime)] rounded-full blur-[180px] opacity-[0.03] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-purple)] rounded-full blur-[160px] opacity-[0.03] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-50 border border-gray-100 text-[9px] font-black tracking-[0.2em] text-[var(--color-purple)] uppercase shadow-sm font-ui"
              >
                <Award className="w-3.5 h-3.5 text-[var(--color-lime)]" />
                <span>PORTADA Y PRESENTACIÓN TÉCNICA</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-[1.05] font-titles">
                  PROPUESTA TÉCNICA Y ECONÓMICA: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">ECOSISTEMA DIGITAL</span> <br />
                  <span className="text-[var(--color-purple)] italic">POWEST MULTILATINA</span>
                </h1>
                <div className="h-2 w-24 bg-[var(--color-lime)] rounded-full" />
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[var(--color-purple)] group-hover:text-white transition-colors duration-500">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-black text-gray-400 tracking-widest uppercase font-ui">PROVEEDOR</span>
                  </div>
                  <p className="text-[13px] font-bold text-black leading-tight font-ui">
                    iAnGo | Lead Engineering
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-50 p-6 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[var(--color-lime)] transition-colors duration-500">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-black text-gray-400 tracking-widest uppercase font-ui">CLIENTE</span>
                  </div>
                  <p className="text-[13px] font-bold text-black leading-tight font-ui">
                    Diego Alejandro Pinzón – Powest
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black text-white p-6 rounded-[2.5rem] shadow-xl sm:col-span-2 flex items-center justify-between group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10 font-black italic uppercase tracking-widest font-ui">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-[var(--color-lime)]" />
                    </div>
                    <p className="text-sm">10 de marzo de 2026</p>
                  </div>
                  <Link 
                    to="/el-reto"
                    className="px-6 py-3 bg-[var(--color-lime)] text-black text-[10px] font-black tracking-widest uppercase rounded-full hover:scale-105 transition-all relative z-10 font-ui"
                  >
                    Iniciar Propuesta
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-20 bg-black rounded-[4rem] p-16 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-purple)] rounded-full blur-[100px] opacity-10" />
                <div className="relative space-y-4">
                  <h3 className="text-5xl md:text-[3.5rem] text-white font-extrabold italic tracking-tighter leading-none font-logo relative inline-block">
                    iAnGo
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      className="absolute -bottom-1 right-0 h-2 bg-[var(--color-lime)] -z-10 rounded-full"
                    />
                  </h3>
                  <p className="text-[12px] font-black text-[var(--color-lime)] tracking-[0.4em] uppercase font-ui pt-2">Inteligencia e Ingeniería</p>
                </div>
                <p className="text-gray-400 text-base leading-relaxed max-w-[280px] font-medium border-l-4 border-[var(--color-lime)]/30 pl-8 italic font-body">
                   Transformando el futuro digital de Powest mediante arquitecturas de alta precisión iAnGo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. INFORMACIÓN GENERAL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-1.5 bg-black rounded-full" />
              <h2 className="text-3xl font-black text-black tracking-tighter uppercase leading-none font-titles">1. INFORMACIÓN GENERAL DEL PROVEEDOR</h2>
            </div>

            <div className="max-w-4xl border-l-[4px] border-gray-100 pl-8 py-2">
              <p className="text-lg text-gray-500 font-medium italic leading-relaxed font-body">
                <strong>iAnGo</strong> es la firma de ingeniería enfocada en la convergencia de IA y arquitecturas escalables. Con una sólida trayectoria en el sector, iAnGo representa la evolución técnica necesaria para liderar proyectos B2B de alta complejidad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {[
                { icon: Building2, label: 'Agencia Responsable:', val: 'iAnGo | Agencia de Desarrollo y Automatizaciones IA' },
                { icon: Star, label: 'NIT:', val: 'Pendiente de aprobación' },
                { icon: MapPin, label: 'Sede Principal:', val: 'Colombia / Bogotá D.C.' },
                { icon: Phone, label: 'Contacto Directo:', val: 'iAnGo Lead Team - Gustavo Vargas' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[3rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-700 flex flex-col group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[var(--color-purple)]" />
                  </div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2 font-ui">{item.label}</p>
                  <p className="text-base font-black text-black leading-tight font-ui" dangerouslySetInnerHTML={{ __html: item.val }} />
                </div>
              ))}
            </div>

            <div className="p-12 md:p-16 rounded-[4rem] bg-black text-white relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-lime)] rounded-full blur-[120px] opacity-[0.05]" />
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[var(--color-lime)] group-hover:text-black transition-all">
                  <Zap className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-[var(--color-lime)] font-black text-[10px] uppercase tracking-[0.5em] font-ui">La Diferencia Técnica:</h4>
                  <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed italic border-l-2 border-white/10 pl-8 font-body">
                    iAnGo nace como una marca de especialización pura en arquitecturas Headless y automatizaciones con IA, superando los estándares del diseño web tradicional para entregar ingeniería robusta.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-24 bg-gray-50/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div className="text-center space-y-4">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.5em] font-ui">TRAYECTORIA COMPROBABLE</p>
              <h3 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-none font-titles">REFERENCIAS DE INGENIERÍA</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* SAPRIX */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-[3rem] shadow-lg border border-gray-100 transition-all duration-700 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--color-lime)] group-hover:rotate-6 transition-all duration-500 shadow-sm font-ui">🛡️</div>
                    <h4 className="text-lg font-black text-black leading-tight uppercase font-ui">Saprix S.A.S</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium italic border-l-2 border-gray-100 pl-4 font-body">
                    Estrategia SEO Global y plataforma corporativa diseñada para el posicionamiento de soluciones químicas industriales.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href="https://www.saprix.com.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-black text-[var(--color-purple)] tracking-[0.2em] uppercase font-ui hover:text-black transition-colors flex items-center gap-2"
                  >
                    <span>VER PROYECTO</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>

              {/* PHARMAPLUS */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-black text-white p-8 rounded-[3rem] shadow-2xl border border-white/5 transition-all duration-700 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-purple)] rounded-full blur-[60px] opacity-[0.1]" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--color-lime)] group-hover:-rotate-6 transition-all font-ui">📡</div>
                    <h4 className="text-lg font-black text-white leading-tight uppercase font-ui">PharmaPlus</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium italic border-l-2 border-white/5 pl-4 font-body">
                    Arquitectura <em>Headless eCommerce</em> con Next.js, logrando una experiencia de usuario instantánea en el sector salud.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <a 
                    href="https://pharmaplus.com.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-black text-[var(--color-lime)] tracking-[0.2em] uppercase font-ui hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>VER PROYECTO</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>

              {/* COLLECTIA */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-[3rem] shadow-lg border border-gray-100 transition-all duration-700 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--color-lime)] group-hover:rotate-6 transition-all duration-500 shadow-sm font-ui">📊</div>
                    <h4 className="text-lg font-black text-black leading-tight uppercase font-ui">Collectia BPO</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium italic border-l-2 border-gray-100 pl-4 font-body">
                    Ecosistema digital BPO enfocado en conversión masiva y optimización de servicios empresariales a nivel nacional.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href="https://collectiabpo.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-black text-gray-400 tracking-[0.2em] uppercase font-ui hover:text-black transition-colors flex items-center gap-2"
                  >
                    <span>VER PROYECTO</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>

              {/* IMBRA */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-gray-50 p-8 rounded-[3rem] shadow-inner border border-transparent hover:bg-white hover:border-gray-100 transition-all duration-700 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--color-purple)] group-hover:rotate-6 transition-all duration-500 shadow-sm font-ui">⚙️</div>
                    <h4 className="text-lg font-black text-black leading-tight uppercase font-ui">Imbra Repuestos</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium italic border-l-2 border-gray-200 pl-4 font-body">
                    Integración avanzada con <strong>SAP Business One</strong> para omnicanalidad de inventarios y logística pesada.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase font-ui">En Construcción</span>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-12 flex justify-center">
               <Link 
                 to="/el-reto"
                 className="flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full transition-all duration-500 group shadow-2xl hover:bg-[var(--color-purple)] font-ui"
               >
                 <span className="font-black text-xs uppercase tracking-[0.4em]">Continuar al Reto</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
