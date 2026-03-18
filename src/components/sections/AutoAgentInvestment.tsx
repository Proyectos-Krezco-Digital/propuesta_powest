import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  ArrowRight, 
  DollarSign, 
  Calculator,
  Calendar,
  Clock,
  Zap,
  Bot,
  X,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const agentCosts = [
  { id: '1. Setup Inicial', name: 'Arquitectura RAG, Integración WhatsApp/Meta, Nodos NLP/n8n. (Pago Único)', val: '$ 7.800.000' },
  { id: '2. Operación y Soporte', name: 'Hypercare Mensual, Agentes Ilimitados (Chatwoot), Monitoreo 24/7 (SLA).', val: '$ 1.200.000 / mes' },
  { id: '3. Infraestructura y Tokens', name: 'VPS propio gestionado con Dokploy + Consumo API OpenAI. Pago directo sin sobrecostos.', val: 'A Costo Real' }
];

export const AutoAgentInvestment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <span>EXTENSIÓN: INVERSIÓN AUTOAGENTE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-tight lg:leading-[1.05] font-titles uppercase break-words">
            DESGLOSE ECONÓMICO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">AUTOAGENTE IA:</span> <br />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-[var(--color-lime)]/50 pl-4 lg:pl-8 py-2 w-full">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Hemos estructurado la inversión basándonos en nuestro esquema de <strong>Soberanía Tecnológica (Caja de Cristal)</strong>. Powest mantendrá la propiedad del desarrollo y pagará los consumos directamente a los proveedores sin sobrecostos de intermediación.
            </p>
          </div>
        </motion.div>

        {/* 1. EXTENSIÓN AUTOAGENTE IA */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-1.5 bg-[var(--color-lime)] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase font-titles">1. INVERSIÓN: EXTENSIÓN AUTOAGENTE IA</h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-12 w-full min-w-0">
             <div className="space-y-4">
               {agentCosts.map((cost, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="p-8 rounded-[2.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-500 group flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4"
                 >
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-[var(--color-lime)] shadow-sm shrink-0 group-hover:bg-black transition-colors">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-xs font-black text-[var(--color-purple)] uppercase font-ui tracking-widest">{cost.id}</p>
                         <p className="text-sm font-bold text-gray-700 italic font-body mt-1 pr-4 max-w-sm">{cost.name}</p>
                      </div>
                   </div>
                   <div className="sm:text-right shrink-0 flex flex-col items-start sm:items-end gap-[0.35rem]">
                      {idx !== 2 && <p className="text-xl font-black text-black font-ui uppercase italic">{cost.val}</p>}
                      {idx < 2 && <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest font-ui">COP SIN IVA</p>}
                      {idx === 2 && (
                         <button
                           onClick={() => setIsModalOpen(true)}
                           className="bg-black text-[var(--color-lime)] px-5 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[var(--color-lime)] hover:text-black transition-colors border border-transparent flex items-center gap-2 shadow-sm"
                         >
                           <Calculator className="w-4 h-4" />
                           Ver Costos Mensuales
                         </button>
                      )}
                   </div>
                 </motion.div>
               ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-[var(--color-lime)] text-black p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-between border border-black/5"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-40" />
                <div className="relative z-10 space-y-12">
                   <div className="space-y-4">
                      <div className="flex justify-between items-end border-b border-black/10 pb-4">
                        <span className="text-[10px] font-black text-black/60 uppercase tracking-[0.4em] font-ui">SETUP LLAVE EN MANO:</span>
                        <span className="text-2xl font-black text-black font-ui italic">$ 7.800.000</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-black/10 pb-4">
                        <span className="text-[10px] font-black text-black/60 uppercase tracking-[0.4em] font-ui">HYPERCARE (MES):</span>
                        <span className="text-2xl font-black text-black/70 font-ui italic">$ 1.200.000</span>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[var(--color-purple)] font-black text-[10px] tracking-[0.5em] uppercase font-ui">SOBERANÍA TECNOLÓGICA (CERO LOCK-IN):</p>
                      <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-black tracking-tighter leading-[1.05] font-titles italic">
                        Propiedad total del código. Pagos directos de VPS e IA sin intermediarios ocultos.
                      </h3>
                   </div>

                   <div className="pt-8 border-t border-black/10">
                       <p className="text-sm text-black/70 font-bold leading-relaxed italic border-l-2 border-black pl-6 font-body">
                         Transparencia radical. Al pagar a costo real el servidor VPS administrado bajo Dokploy y los tokens de la IA directamente a los proveedores (Hostinger, OpenAI), eliminamos los inflados márgenes del modelo SaaS tradicional.
                       </p>
                    </div>
                 </div>
              </motion.div>
           </div>
         </section>
 
         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 w-full min-w-0">
           {/* 2. VIGENCIA */}
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
               <h3 className="text-xl font-black text-black leading-tight uppercase font-ui">2. VIGENCIA DE LA OFERTA</h3>
             </div>
             <div className="space-y-4">
               <div className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-sm">
                 <Clock className="w-6 h-6 text-[var(--color-lime)]" />
                 <p className="text-lg font-black text-black font-ui uppercase">30 DÍAS CALENDARIO</p>
               </div>
               <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed border-l-4 border-gray-200 pl-4 md:pl-6 italic font-body">
                 Este tiempo garantiza la disponibilidad de nuestro equipo de IA dedicado y el bloqueo de agenda para el proyecto.
               </p>
             </div>
           </motion.div>
 
           {/* 3. FORMA DE PAGO */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-10 rounded-[3.5rem] bg-black text-white border border-black/5 shadow-2xl flex flex-col group relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-lime)]/10 rounded-full -translate-y-12 translate-x-12 blur-3xl opacity-50" />
             <div className="flex items-center gap-6 mb-8 relative z-10">
               <div className="w-14 h-14 bg-[var(--color-lime)]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[var(--color-lime)] group-hover:scale-110 transition-all shadow-lg">
                 <Landmark className="w-6 h-6 text-[var(--color-lime)] group-hover:text-black transition-colors" />
               </div>
               <h3 className="text-xl font-black text-white leading-tight uppercase font-ui">3. FORMA DE PAGO SETUP</h3>
             </div>
             <div className="space-y-6 flex-grow relative z-10">
                <div className="grid gap-3">
                   {[
                     { label: '50% de Anticipo:', val: 'A la firma del contrato y acta de inicio.' },
                     { label: '30% contra Pruebas:', val: 'A la entrega de RAG y WhatsApp Demo.' },
                     { label: '20% contra Entrega:', val: 'A la salida a producción oficial.' }
                   ].map((pago, i) => (
                     <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-lime)]/30 hover:bg-white/10 transition-all">
                        <span className="text-[var(--color-lime)] font-black text-xs min-w-[120px] font-ui uppercase">{pago.label}</span>
                        <span className="text-xs text-gray-300 font-medium italic font-body">{pago.val}</span>
                     </div>
                   ))}
                </div>
             </div>
           </motion.div>
         </div>
 
       </div>
       
       {/* Modal Overlay */}
       <AnimatePresence>
         {isModalOpen && (
           <>
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
             />
             <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95, y: 30 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 30 }}
                 className="w-full max-w-[900px] max-h-[90vh] bg-white rounded-[2rem] shadow-2xl flex flex-col border border-gray-100 ring-1 ring-black/5 overflow-hidden pointer-events-auto"
               >
                  <div className="p-6 md:p-12 relative flex flex-col h-full overflow-hidden">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full hover:bg-gray-100 transition-colors bg-gray-50 text-gray-400 hover:text-black z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Header Flotante del Modal */}
                  <div className="shrink-0 mb-6 pr-12">
                     <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--color-lime)]/20 border border-[var(--color-lime)] text-[9px] font-black tracking-[0.2em] text-black uppercase mb-6 shadow-sm font-ui w-fit">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>SIMULACIÓN A COSTO REAL</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase font-titles leading-none">
                        Desglose de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">API AI y Tokens</span>
                     </h2>
                  </div>

                  <div className="space-y-10 overflow-y-auto pr-2 md:pr-4 flex-grow scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    
                    {/* Section 1 */}
                    <div className="space-y-5">
                       <h3 className="text-[1.1rem] font-black text-[var(--color-purple)] font-ui uppercase flex items-center gap-2">
                         <Bot className="w-5 h-5" />
                         1. WhatsApp Business Cloud API
                       </h3>
                       <p className="text-sm text-gray-500 font-medium font-body italic border-l-2 border-gray-200 pl-4">
                         En 2026, el modelo de Meta se centra en la intención del mensaje. La mayoría de los costos vendrán cuando el agente inicie una conversación proactiva o cuando el usuario pida soporte.
                       </p>
                       <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                         <table className="w-full text-left text-[13px] font-body">
                           <thead className="bg-gray-50 text-[9px] font-black text-gray-500 uppercase tracking-widest font-ui">
                             <tr>
                               <th className="p-4 border-b border-gray-100">Componente</th>
                               <th className="p-4 border-b border-gray-100">Costo Estimado (Colombia - USD)</th>
                               <th className="p-4 border-b border-gray-100">Frecuencia</th>
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">Conversaciones Servicio</td>
                               <td className="p-4 font-bold text-[var(--color-purple)] bg-[var(--color-purple)]/5 whitespace-nowrap">$0.00 USD <span className="text-black font-medium italic text-xs ml-2">(Gratis e ilimitadas)</span></td>
                               <td className="p-4 text-gray-500">Por ventana de 24h</td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">Mensajes Utilidad</td>
                               <td className="p-4 font-bold text-gray-700 whitespace-nowrap">$0.0012 USD <span className="text-gray-400 font-medium italic text-xs ml-2">(~$5 COP)</span></td>
                               <td className="p-4 text-gray-500">Por mensaje entregado</td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">Mensajes Marketing</td>
                               <td className="p-4 font-bold text-gray-700 whitespace-nowrap">$0.0150 USD <span className="text-gray-400 font-medium italic text-xs ml-2">(~$60 COP)</span></td>
                               <td className="p-4 text-gray-500">Por mensaje entregado</td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">Hosting Cloud API</td>
                               <td className="p-4 font-bold text-[var(--color-purple)] bg-[var(--color-purple)]/5 whitespace-nowrap">$0.00 USD <span className="text-black font-medium italic text-xs ml-2">(Directo con Meta)</span></td>
                               <td className="p-4 text-gray-500">Mensual</td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                       <div className="bg-[var(--color-lime)]/10 border border-[var(--color-lime)]/30 p-5 rounded-2xl flex items-start gap-3">
                         <Zap className="w-5 h-5 text-[var(--color-lime)] shrink-0 mt-0.5" />
                         <p className="text-[13px] font-semibold text-black/80 font-body leading-relaxed">
                           <span className="font-black text-black">Nota Mágica del Agente:</span> Si el cliente escribe primero ("¿Cómo va mi pedido?"), Powest tiene 24 horas para que el agente responda todo lo que quiera de forma <span className="bg-[var(--color-lime)] px-1 rounded">100% gratuita</span>. Solo se paga si el sistema envía una plantilla de reactivación después de ese tiempo.
                         </p>
                       </div>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-5">
                       <h3 className="text-[1.1rem] font-black text-black font-ui uppercase flex items-center gap-2">
                         <Database className="w-5 h-5 text-gray-400" />
                         2. Injerencia y RAG: Gemini 3 Flash (300 Docs)
                       </h3>
                       <p className="text-sm text-gray-500 font-medium font-body italic border-l-2 border-gray-200 pl-4">
                         Procesamiento de 300 documentos indexados en PostgreSQL/Supabase, consultados usando el modelo ágil y económico Gemini 3 Flash.
                       </p>
                       <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
                         <table className="w-full text-left text-[13px] font-body">
                           <thead className="bg-gray-50 text-[9px] font-black text-gray-500 uppercase tracking-widest font-ui">
                             <tr>
                               <th className="p-4 border-b border-gray-100">Fase del Proceso</th>
                               <th className="p-4 border-b border-gray-100">Tecnología (API)</th>
                               <th className="p-4 border-b border-gray-100">Costo Estimado (USD)</th>
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">1. Embeddings</td>
                               <td className="p-4 text-gray-500 italic border-r border-gray-50">text-embedding-004</td>
                               <td className="p-4 font-bold text-gray-700 whitespace-nowrap">$0.01 USD <span className="text-gray-400 font-medium italic text-xs ml-1">(Por los 300 docs - Pago único)</span></td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">2. Almacenamiento</td>
                               <td className="p-4 text-gray-500 italic border-r border-gray-50">pgvector (Dokploy)</td>
                               <td className="p-4 font-bold text-[var(--color-purple)] bg-[var(--color-purple)]/5 whitespace-nowrap">$0.00 USD <span className="text-black font-medium italic text-xs ml-1">(Incluido en el VPS propio)</span></td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">3. Inferencia Input</td>
                               <td className="p-4 text-gray-500 italic border-r border-gray-50">Gemini 3 Flash</td>
                               <td className="p-4 font-bold text-gray-700 whitespace-nowrap">$0.50 USD <span className="text-gray-400 font-medium italic text-xs ml-1">por 1,000,000 de tokens</span></td>
                             </tr>
                             <tr>
                               <td className="p-4 font-bold text-black border-r border-gray-50">4. Inferencia Output</td>
                               <td className="p-4 text-gray-500 italic border-r border-gray-50">Gemini 3 Flash</td>
                               <td className="p-4 font-bold text-gray-700 whitespace-nowrap">$3.00 USD <span className="text-gray-400 font-medium italic text-xs ml-1">por 1,000,000 de tokens</span></td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                    </div>

                      {/* Section 3 (Resumen) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm border border-gray-100">
                          <h4 className="font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-ui text-[var(--color-purple)]">Cálculo por Interacción Única</h4>
                          <p className="text-[13px] font-medium text-gray-600 font-body leading-relaxed leading-relaxed font-body">Considerando que el Agente inyecta historial, instrucciones de marca y fragmentos de su base de conocimientos en cada respuesta.</p>
                          <ul className="space-y-3 pt-4 border-t border-gray-200">
                            <li className="flex justify-between items-center text-[13px]"><span className="text-gray-500">Input Contextual (RAG):</span> <span className="font-bold text-black border-b border-gray-200 border-dashed">~8,000 tokens</span></li>
                            <li className="flex justify-between items-center text-[13px]"><span className="text-gray-500">Costo (Inferencia Input):</span> <span className="font-bold text-black">$0.0040 USD</span></li>
                            <li className="flex justify-between items-center text-[13px]"><span className="text-gray-500">Costo (Inferencia Output):</span> <span className="font-bold text-black">$0.0030 USD</span></li>
                            <li className="flex justify-between items-center pt-3 border-t border-gray-200"><span className="font-black text-[10px] uppercase font-ui tracking-wider text-black">Total por Interacción:</span> <span className="font-black text-[var(--color-lime)] bg-black px-3 py-1.5 rounded-md text-xs">$0.0070 USD <span className="text-gray-400 font-medium italic text-[10px] ml-1">(~$28 COP)</span></span></li>
                          </ul>
                        </div>

                        <div className="bg-black text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-lime)] rounded-full blur-[80px] opacity-20" />
                          <div>
                             <h4 className="font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-ui text-[var(--color-lime)] relative z-10 mb-2">Simulación Mensual Real</h4>
                             <p className="text-[13px] font-medium text-gray-300 font-body leading-relaxed relative z-10 italic">Escenario: Si el Agente IA responde a 2,500 consultas profundas al mes:</p>
                          </div>
                          <ul className="space-y-3 relative z-10 w-full mb-6 text-[13px]">
                            <li className="flex justify-between items-center"><span className="text-gray-400">WhatsApp (Conversaciones Marketing):</span> <span className="font-bold text-[var(--color-lime)]">~$7.50 USD</span></li>
                            <li className="flex justify-between items-center"><span className="text-gray-400">Tokens Gemini API (Uso Intensivo):</span> <span className="font-bold text-[var(--color-lime)]">~$17.50 USD</span></li>
                            <li className="flex justify-between items-center"><span className="text-gray-400">DB Vectorial y Servidor:</span> <span className="font-bold text-white">$0</span></li>
                          </ul>
                          <div className="pt-5 border-t border-white/20 relative z-10 mt-auto">
                             <div className="flex justify-between items-end">
                               <p className="font-black text-[10px] uppercase tracking-widest font-ui text-[var(--color-lime)]">Inversión Mensual Proyectada:</p>
                               <div className="text-right">
                                  <p className="font-black text-3xl font-titles tracking-tighter text-white">$25.00 USD <span className="text-[10px] font-medium text-gray-400 font-ui align-middle ml-1">/ MES</span></p>
                                  <p className="text-[10px] font-bold text-gray-400 italic font-ui">~$105,000 COP AL T.R.M.</p>
                               </div>
                             </div>
                          </div>
                        </div>
                      </div>


                  </div>
                </div>
             </motion.div>
             </div>
           </>
         )}
       </AnimatePresence>
     </div>
   );
 };
