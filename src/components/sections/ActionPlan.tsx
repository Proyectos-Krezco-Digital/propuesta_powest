import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Rocket, 
  MessageSquareCode, 
  Users, 
  Terminal, 
  Star, 
  GanttChart,
  Clock,
  Presentation,
  Zap
} from 'lucide-react';

const timelineWeeks = [
  { 
    week: 'Semana 1', 
    title: 'Arquitectura & Seguridad', 
    desc: 'Despliegue de Arquitectura Headless, WordPress Multisite y Entornos de Seguridad SSL.',
    icon: Terminal 
  },
  { 
    week: 'Semana 2', 
    title: 'Frontend & LiveSearch', 
    desc: 'Desarrollo Frontend (Next.js), Búsqueda LiveSearch (Supabase) y Cotización Inteligente por WhatsApp.',
    icon: MessageSquareCode 
  },
  { 
    week: 'Semana 3', 
    title: 'Inventario & SEO/IA', 
    desc: 'Carga de inventario (300 productos), Integraciones analíticas (GA4, CRM) y marcado SEO/IA.',
    icon: Zap 
  },
  { 
    week: 'Semana 4', 
    title: 'Pruebas & Despliegue', 
    desc: 'Control de Calidad funcional, entrega de manuales técnicos/usuario y Despliegue del ecosistema.',
    icon: CheckCircle2 
  },
  { 
    week: 'Semanas 5 y 6', 
    title: 'Capacitación & Cierre', 
    desc: 'Ejecución de sesiones de capacitación (Sincrónicas y Asincrónicas), acompañamiento operativo y firma de acta de cierre.',
    icon: Users 
  }
];

export const ActionPlan = () => {
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
            <Rocket className="w-3.5 h-3.5 text-[var(--color-lime)]" />
            <span>PÁGINA 6: PLAN DE ACCIÓN</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-tight lg:leading-[1.05] font-titles uppercase break-words">
            6. ENTREGABLES Y <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">PLAN DE EJECUCIÓN:</span> <br className="hidden md:block" />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-[var(--color-lime)]/50 pl-4 lg:pl-8 py-2 w-full">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              El cierre estratégico para demostrar organización y agilidad. Entregamos tecnología de vanguardia en tiempos récord bajo metodología Scrum.
            </p>
          </div>
        </motion.div>

        {/* 6.1 & 6.2 Metodología y Cronograma */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 mb-16 lg:mb-24 w-full min-w-0">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="p-10 rounded-[3.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 transition-all duration-700 group"
           >
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <GanttChart className="w-6 h-6 text-[var(--color-lime)]" />
                 </div>
                 <h3 className="text-xl font-black text-black leading-tight uppercase font-ui">6.1 METODOLOGÍA & 6.2 CRONOGRAMA</h3>
              </div>
              <div className="space-y-6">
                 <div className="space-y-4">
                    <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] block font-ui">Detalle Técnico</span>
                    <div className="p-6 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm leading-relaxed italic font-body text-gray-600 font-bold">
                      Implementación de metodología ágil (Scrum) y diagrama de Gantt operativo. Ceremonias de seguimiento semanales para presentar avances en Entorno de Pruebas.
                    </div>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] block font-ui">Explicación Corporativa</span>
                    <p className="text-base text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-6 font-body">
                      Powest tendrá visibilidad total del progreso en tiempo real mediante metas comprobables, evitando reprocesos y garantizando alineación total.
                    </p>
                 </div>
              </div>
           </motion.div>

           {/* 6.3 Duración Total */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="p-10 rounded-[3.5rem] bg-black text-white border border-white/5 shadow-2xl group relative overflow-hidden flex flex-col justify-between"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-purple)] rounded-full blur-[100px] opacity-10" />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--color-lime)] group-hover:text-black transition-all duration-500 border border-white/10">
                      <Clock className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-black text-white leading-tight uppercase font-ui">6.3 DURACIÓN TOTAL DEL PROYECTO</h3>
                </div>
                 <div className="mb-10">
                    <h4 className="text-4xl md:text-5xl font-black text-[var(--color-lime)] tracking-tighter italic font-titles">6 SEMANAS <span className="text-[10px] md:text-sm uppercase tracking-widest text-white/30">(4+2)</span></h4>
                 </div>
                <div className="space-y-6">
                   <p className="text-base text-gray-400 font-medium leading-relaxed border-l-4 border-[var(--color-lime)]/30 pl-6 italic font-body">
                     <strong>4 Semanas de Desarrollo:</strong> Plataforma 100% funcional y probada según exigencia del pliego.
                   </p>
                   <p className="text-base text-gray-400 font-medium leading-relaxed border-l-4 border-white/10 pl-6 italic font-body">
                     <strong>2 Semanas de Capacitación:</strong> Formación exclusiva para el equipo Powest (6+ personas) asegurando la transferencia de conocimiento sin presiones.
                   </p>
                </div>
              </div>
           </motion.div>
        </div>

        {/* 6.4 Hitos y Entregables */}
        <section className="mb-24">
           <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-1.5 bg-black rounded-full" />
              <h2 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase font-titles">6.4 HITOS SEMANALES Y ENTREGABLES</h2>
           </div>

           <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 w-full min-w-0">
              {timelineWeeks.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[3rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-500 group"
                >
                   <p className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-widest mb-6 font-ui">{item.week}</p>
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-black group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <h4 className="text-base font-black text-black leading-tight mb-4 uppercase font-ui">{item.title}</h4>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed italic font-body line-clamp-4">{item.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="mt-12 p-8 md:p-10 rounded-[3rem] md:rounded-[4rem] bg-gray-50 border-l-4 md:border-l-8 border-black w-full min-w-0">
              <p className="text-base md:text-lg text-gray-600 font-bold italic leading-relaxed font-body text-balance">
                "Ustedes verán la plataforma construirse semana a semana mediante entregables 100% tangibles, empoderando a su equipo para una transición exitosa."
              </p>
           </div>
        </section>

        {/* 6.5 Seguimiento */}
        <section className="mb-32">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-12 rounded-[4rem] bg-black text-white relative overflow-hidden group border border-white/5"
           >
              <div className="absolute -bottom-24 -right-24 w-40 sm:w-64 h-40 sm:h-64 bg-[var(--color-lime)] rounded-full blur-[80px] sm:blur-[100px] opacity-[0.05]" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10 text-center md:text-left">
                 <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[var(--color-lime)] group-hover:text-black transition-all">
                    <Presentation className="w-10 h-10" />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-black text-white uppercase font-ui">6.5 REUNIONES SEMANALES DE SEGUIMIENTO</h3>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed italic border-l-2 border-white/10 pl-8 font-body">
                      Ejecución ágil con reuniones semanales alineadas a los Hitos del proyecto para garantizar el monitoreo del trabajo entregable de manera conjunta.
                    </p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* FINAL CLOSING - WOW MOMENT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[var(--color-lime)] p-12 md:p-24 rounded-[5rem] text-center shadow-2xl relative overflow-hidden group"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
            <div className="relative z-10 max-w-5xl mx-auto space-y-12 md:space-y-16">
              <div className="flex justify-center">
                 <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-xl">
                    <Star className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-lime)] fill-[var(--color-lime)] animate-pulse" />
                 </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-10 md:mb-16 leading-tight italic tracking-tighter text-balance text-black font-titles uppercase break-words">
                "Este ecosistema digital permitirá a POWEST convertir usuarios regionales en clientes leales mediante una ingeniería de clase mundial. iAnGo está lista para iniciar."
              </h3>
              <div className="flex flex-col items-center gap-12 relative z-20">
                <button 
                  onClick={() => {
                    const mensaje = "Hola equipo de iAnGo,%0A%0AHe revisado detalladamente la propuesta técnica para el proyecto POWEST MULTILATINA y estamos listos para avanzar hacia la fase de implementación.%0A%0ANos gustaría coordinar los siguientes pasos para dar inicio oficial a la Fase 1: Arquitectura & Seguridad.%0A%0A¡Estamos emocionados de iniciar este viaje tecnológico con ustedes!";
                    window.open(`https://wa.me/573218737931?text=${mensaje}`, '_blank');
                  }}
                  className="bg-black text-[var(--color-lime)] text-base md:text-xl lg:text-2xl px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-tighter shadow-2xl hover:scale-105 hover:bg-[var(--color-purple)] hover:text-white active:scale-95 transition-all duration-700 flex items-center justify-center text-center gap-4 md:gap-6 font-ui cursor-pointer w-full sm:w-auto"
                >
                  <span className="leading-tight">ACEPTO LA PROPUESTA</span>
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
                </button>
                
                <div className="text-center space-y-6">
                   <div className="space-y-4">
                      <p className="text-black/50 font-black text-[10px] uppercase tracking-[0.5em] font-ui">Liderado por iAnGo Agencia de Desarrollo</p>
                      <div className="h-0.5 w-20 bg-black/20 mx-auto" />
                   </div>
                   
                   <p className="text-black/50 text-sm font-bold font-ui">
                     ¿El botón no te redirige a WhatsApp? Escríbenos a nuestro corporativo: <br />
                     <a href="https://wa.me/573218737931" target="_blank" className="text-black text-base font-black border-b-2 border-black/20 hover:border-black transition-colors mt-2 inline-block">+57 321 873 7931</a>
                   </p>
                </div>
              </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};
