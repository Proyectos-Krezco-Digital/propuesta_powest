import { motion } from 'framer-motion';
import { Target, Globe2, ArrowRight, MousePointerClick, TrendingUp, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Challenge = () => {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-50 border border-gray-100 text-[9px] font-black tracking-[0.2em] text-[var(--color-purple)] uppercase mb-6 shadow-sm font-ui">
            <Target className="w-3.5 h-3.5 text-[var(--color-lime)]" />
            <span>PÁGINA 2: EL RETO</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-[1.05] font-titles uppercase">
            2. ENTENDIMIENTO DEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">PROYECTO ACTIVOS:</span> <br />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-gray-100 pl-8 py-2">
            <p className="text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Escalamos el negocio de Powest mediante un <strong>ecosistema digital institucional multilatina (Colombia, México y Ecuador)</strong>. Comprendemos que este proyecto es el pilar para su posicionamiento técnico y expansión regional agresiva en el mercado B2B.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          
          {/* Visual Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-square bg-black rounded-[4rem] overflow-hidden flex items-center justify-center p-16 shadow-2xl relative group border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple)]/30 to-transparent opacity-50 duration-1000" />
              
              <div className="relative w-full h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-1.5 bg-[var(--color-lime)] rounded-full" />
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-[var(--color-lime)] group-hover:text-black transition-all">
                    <Globe2 className="w-7 h-7 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-8">
                   <div className="flex flex-col gap-3">
                      <p className="text-[var(--color-lime)] font-black text-[9px] tracking-[0.5em] uppercase font-ui">Estratégia iAnGo</p>
                      <h3 className="text-4xl md:text-5xl font-black italic text-white leading-[0.95] tracking-tighter uppercase whitespace-pre-line font-titles">Hub{"\n"}Regional{"\n"}3.0</h3>
                   </div>
                   <p className="text-gray-400 text-base leading-relaxed font-medium max-w-xs border-l-2 border-white/10 pl-6 font-body">
                     Arquitectura centralizada de alta velocidad para Colombia, México y Ecuador.
                   </p>
                   <div className="flex gap-3">
                      {['COL', 'MEX', 'ECU'].map((country) => (
                        <div key={country} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-[9px] text-white hover:bg-[var(--color-lime)] hover:text-black transition-all font-ui">
                          {country}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars List */}
          <div className="space-y-16">
            <div className="inline-flex items-center gap-3">
               <Compass className="w-5 h-5 text-[var(--color-lime)]" />
               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] font-ui">Pilares Clave:</h3>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Globe2,
                  title: 'Segmentación y Autonomía',
                  desc: 'Mantenemos la identidad global de Powest mientras habilitamos administraciones locales nativas para cada país involucrado.',
                  color: 'bg-[var(--color-lime)]',
                  iconColor: 'text-black'
                },
                {
                  icon: MousePointerClick,
                  title: 'Conversión B2B Enfocada',
                  desc: 'Optimizamos la experiencia de usuario (UX) enfocándola 100% en la captación y conversión de clientes corporativos.',
                  color: 'bg-[var(--color-purple)]',
                  iconColor: 'text-white'
                },
                {
                  icon: TrendingUp,
                  title: 'Escalabilidad Multilingüe',
                  desc: 'Arquitectura preparada para el crecimiento agresivo hacia nuevos mercados y tendencias tecnológicas futuras.',
                  color: 'bg-black',
                  iconColor: 'text-[var(--color-lime)]'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 transition-all duration-700 flex flex-col group"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-black text-black leading-none uppercase font-ui">{item.title}</h4>
                  </div>
                  <p className="text-base text-gray-500 font-medium leading-relaxed italic border-l-4 border-gray-100 pl-8 font-body" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-black text-white relative overflow-hidden group border border-white/5"
            >
              <div className="relative z-10 space-y-6 font-titles">
                 <div className="w-10 h-1 bg-[var(--color-lime)] rounded-full" />
                 <p className="text-xl text-gray-400 font-black italic leading-tight text-balance">
                  "Este ecosistema consolidará la reputación de Powest y multiplicará la adquisición de leads corporativos."
                </p>
              </div>
            </motion.div>

            <div className="pt-8 flex justify-center lg:justify-start">
              <Link 
                to="/alcance"
                className="flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--color-purple)] transition-all group font-ui"
              >
                <span>Siguiente: Alcance Técnico</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
