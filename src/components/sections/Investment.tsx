import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Landmark, 
  PieChart, 
  ArrowRight, 
  DollarSign, 
  Calculator,
  Calendar,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  { id: 'Fase 1', name: 'Arquitectura Headless, despliegue de WordPress Multisite y Entornos de Seguridad SSL', val: '$ 2.500.000' },
  { id: 'Fase 2', name: 'Desarrollo de Frontend en Next.js, Búsqueda Inteligente (Supabase) y Scripts de Ruteo WhatsApp', val: '$ 5.000.000' },
  { id: 'Fase 3', name: 'Estructuración y carga de 300 Productos, Posicionamiento GEO/IA e Integraciones analíticas/CRM', val: '$ 3.700.000' },
  { id: 'Fase 4', name: 'Control de Calidad (Pruebas QA), Entrega de Documentación y Capacitación', val: '$ 3.300.000' }
];

export const Investment = () => {
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
            <DollarSign className="w-3.5 h-3.5 text-[var(--color-lime)]" />
            <span>PÁGINA 5: INVERSIÓN</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-[1.05] font-titles uppercase">
            5. PROPUESTA ECONÓMICA Y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">VALOR TECNOLÓGICO:</span> <br />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-gray-100 pl-8 py-2">
            <p className="text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Hemos estructurado la inversión basándonos en el altísimo valor tecnológico que entregaremos. Esta no es una cotización por una página web tradicional, sino la inversión en un <strong>ecosistema B2B de última tecnología</strong>.
            </p>
          </div>
        </motion.div>

        {/* 5.1 VALOR TOTAL Y FASES */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-1.5 bg-black rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase font-titles">5.1 VALOR TOTAL DEL PROYECTO (DETALLE DE FASES)</h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12">
             <div className="space-y-4">
               {phases.map((phase, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="p-8 rounded-[2.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-500 group flex items-center justify-between"
                 >
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-[var(--color-purple)] text-xs shadow-sm font-ui uppercase group-hover:bg-[var(--color-lime)] group-hover:text-black transition-colors">
                        {phase.id}
                      </div>
                      <p className="text-base font-bold text-gray-700 max-w-sm italic font-body">{phase.name}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-xl font-black text-black font-ui uppercase italic">{phase.val}</p>
                      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-1 font-ui">COP SIN IVA</p>
                   </div>
                 </motion.div>
               ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-black text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/5"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-purple)] rounded-full blur-[100px] opacity-10" />
                <div className="relative z-10 space-y-12">
                   <div className="space-y-4">
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] font-ui">SUBTOTAL:</span>
                        <span className="text-2xl font-black text-white font-ui italic">$ 14.500.000</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] font-ui">IVA (19%):</span>
                        <span className="text-2xl font-black text-white/50 font-ui italic">$ 2.755.000</span>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[var(--color-lime)] font-black text-[10px] tracking-[0.5em] uppercase font-ui">VALOR TOTAL FINAL:</p>
                      <h3 className="text-5xl md:text-6xl font-black text-[var(--color-lime)] tracking-tighter leading-none font-titles italic">
                        $ 17.255.000 <span className="text-xl text-white/30 uppercase tracking-widest font-black">COP</span>
                      </h3>
                   </div>

                   <div className="pt-8 border-t border-white/10">
                      <p className="text-sm text-gray-400 font-medium leading-relaxed italic border-l-2 border-[var(--color-lime)] pl-6 font-body">
                        Dividimos el proyecto en fases lógicas de ingeniería, permitiendo absoluta claridad de qué componente tecnológico se está pagando en cada etapa.
                      </p>
                   </div>
                </div>
             </motion.div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* 5.2 MONEDA E IMPUESTOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 transition-all duration-700 group flex flex-col"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Calculator className="w-6 h-6 text-[var(--color-lime)]" />
              </div>
              <h3 className="text-xl font-black text-black leading-tight uppercase font-ui">5.2 MONEDA E IMPUESTOS</h3>
            </div>
            <div className="space-y-8 flex-grow">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] block font-ui">Detalle Comercial</span>
                <div className="p-6 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm leading-relaxed italic font-body text-gray-600 font-bold">
                  Valores expresados en Pesos Colombianos (COP). Los precios NO incluyen IVA (19%), el cual se suma al subtotal de las fases para el valor final.
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] block font-ui">Explicación Corporativa</span>
                <p className="text-base text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-6 font-body">
                  Oferta financieramente transparente, estandarizada en la moneda de la matriz corporativa (Colombia) para facilitar procesos contables y de facturación.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5.3 FORMA DE PAGO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3.5rem] bg-black text-white border border-white/5 shadow-2xl flex flex-col group"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 bg-[var(--color-purple)] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--color-lime)] group-hover:text-black transition-all duration-500">
                <Landmark className="w-6 h-6 text-white group-hover:text-black" />
              </div>
              <h3 className="text-xl font-black text-white leading-tight uppercase font-ui">5.3 FORMA DE PAGO</h3>
            </div>
            <div className="space-y-6 flex-grow">
               <div className="grid gap-3">
                  {[
                    { label: '50% de Anticipo:', val: 'A la firma del contrato y acta de inicio.' },
                    { label: '30% contra Pruebas:', val: 'A la entrega del ecosistema desplegado en Staging para validación.' },
                    { label: '20% contra Entrega Final:', val: 'A la firma del acta de cierre a conformidad y salida a producción.' }
                  ].map((pago, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="text-[var(--color-lime)] font-black text-xs min-w-[120px] font-ui uppercase">{pago.label}</span>
                       <span className="text-xs text-gray-400 font-medium italic font-body">{pago.val}</span>
                    </div>
                  ))}
               </div>
               <div className="p-6 border-l-4 border-[var(--color-purple)] bg-white/5 rounded-r-3xl">
                  <p className="text-sm text-gray-300 font-medium leading-relaxed italic font-body">
                    Establecemos un modelo de riesgo compartido. Ustedes solo pagan los saldos cuando ven su plataforma construida y lanzada exitosamente.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 5.4 VIGENCIA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3.5rem] bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-700 group flex flex-col"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:text-white transition-all">
                <Calendar className="w-6 h-6 text-[var(--color-purple)]" />
              </div>
              <h3 className="text-xl font-black text-black leading-tight uppercase font-ui">5.4 VIGENCIA DE LA OFERTA</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-sm">
                <Clock className="w-6 h-6 text-[var(--color-lime)]" />
                <p className="text-lg font-black text-black font-ui uppercase">30 DÍAS CALENDARIO</p>
              </div>
              <p className="text-base text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-6 italic font-body">
                Este tiempo bloquea nuestra disponibilidad operativa para garantizar el arranque inmediato respetando el cronograma de 4 semanas.
              </p>
            </div>
          </motion.div>

          {/* 5.5 HORA ESPECIALISTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3.5rem] bg-[var(--color-lime)] border border-transparent shadow-xl flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-black/5 rounded-full -translate-y-12 translate-x-12" />
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all shadow-lg">
                <Zap className="w-6 h-6 text-[var(--color-lime)]" />
              </div>
              <h3 className="text-xl font-black text-black leading-tight uppercase font-ui">5.5 HORA DE ESPECIALISTA</h3>
            </div>
            <div className="space-y-6 relative z-10">
               <div>
                  <h4 className="text-4xl font-black text-black tracking-tighter italic font-titles">$ 100.000 <span className="text-sm uppercase tracking-widest">COP / HORA</span></h4>
               </div>
               <p className="text-base text-black/70 font-bold leading-relaxed border-l-4 border-black/20 pl-6 italic font-body">
                 Damos predictibilidad financiera. Al pactar la tarifa de desarrollo continuo, tienen la seguridad de cuánto costará escalar la plataforma sin sobrecostos arbitrarios.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Final Navigation */}
        <div className="mt-20 flex justify-center">
          <Link 
            to="/plan-de-accion"
            className="flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--color-purple)] transition-all group shadow-xl font-ui"
          >
            <span>Ver Plan de Acción (Cronograma)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
