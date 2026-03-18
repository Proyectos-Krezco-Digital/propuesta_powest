import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Layout, 
  Link2, 
  Search, 
  FileText, 
  CheckCircle2, 
  Users2,
  Cpu,
  ArrowRight,
  Database,
  ChevronLeft,
  ChevronRight,
  Bot,
  ShieldCheck,
  Zap,
  Target,
  Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { 
    id: 'objetivo', 
    label: '1. Objetivo y Soberanía', 
    icon: Target,
    intro: 'El despliegue del Primer Ingeniero Virtual Omnicanal de Powest, diseñado para transformar la atención reactiva en ventas consultivas 24/7, garantizando total libertad tecnológica.',
    items: [
      { id: '1.1', title: 'Atención Integral 24/7 en Múltiples Canales', tech: 'Despliegue de un ecosistema asíncrono con disponibilidad 99.9% alojado en Cloud. Sincronización de Endpoints bidireccionales anclados a la API oficial de WhatsApp Cloud, la API Graph de Meta (Facebook/Instagram) y conectores IMAP/SMTP para Email.', corp: 'Su empresa nunca cerrará. Las consultas técnicas de madrugada o los domingos serán atendidas inmediatamente. Unificamos WhatsApp, Redes y Correo en un solo "ingeniero virtual" que responde sin filas de espera, reduciendo drásticamente su tiempo de primera respuesta (FRT).' },
      { id: '1.2', title: 'Asesoría Comercial, Venta Consultiva y Soporte', tech: 'Diseño de árboles de decisión semánticos en n8n que bifurcan el flujo del LLM. El Agente adapta su Temperatura preestablecida: más persuasivo para ventas y estados de pedidos, y estrictamente fáctico para políticas de garantías y soporte.', corp: 'El Agente tiene doble personalidad estructurada. Si el cliente quiere comprar, actúa como el mejor vendedor de Powest. Si el cliente tiene un problema, actúa como un experto de soporte, guiándolo o solucionando el impase de inmediato.' },
      { id: '1.3', title: 'Soberanía Tecnológica (Caja de Cristal)', tech: 'Despliegue de infraestructura mediante contenedores Docker orquestados por Dokploy en un VPS propio. Al albergar n8n, Chatwoot y el RAG en el mismo servidor privado, los microservicios se comunican internamente bajo la misma IP, logrando ultra-baja latencia y máxima seguridad.', corp: 'El sistema es 100% de ustedes; no hay secuestro de datos. Construimos una "Caja de Cristal" donde su equipo de TI tiene administración total. Si en el futuro deciden que otra agencia administre la IA, simplemente entregan las llaves de su propio servidor Dokploy. Cero dependencia.' }
    ]
  },
  { 
    id: 'core', 
    label: '2. Arquitectura Core IA', 
    icon: Cpu,
    intro: 'El "Cerebro Blindado" de la operación, impulsado por Inteligencia Artificial y arquitecturas Vectoriales Antialucinaciones.',
    items: [
      { id: '2.1', title: 'Orquestación y Enrutamiento Multicanal (n8n)', tech: 'Despliegue de n8n (Node-Based Workflow Automation) como núcleo de enrutamiento. Este middleware recibe Webhooks, invoca APIs de Inteligencia Artificial en tiempo real, controla la seguridad y ejecuta consultas sin embudos en la red.', corp: 'Utilizaremos un "director de orquesta" de última tecnología. Este servidor propio recibe cientos de mensajes simultáneos, los transfiere organizadamente a la IA para que los procese, y devuelve la respuesta al cliente correcto. Todo en milisegundos.' },
      { id: '2.2', title: 'Agente Antialucinaciones: RAG (Autohospedado)', tech: 'Modelado riguroso de arquitectura RAG desplegando una Base de Datos Vectorial (PostgreSQL + pgvector) nativa dentro del mismo clúster de Dokploy. El Agente hará Semantic Search inyectando únicamente las 100 fichas técnicas y 30 manuales locales al Prompt.', corp: 'Nunca dejaremos que la Inteligencia Artificial invente información. Convertimos los manuales de Powest en la única fuente de la verdad corporativa. Al consultar sobre un equipo, el Agente busca exclusivamente en la bóveda documental inyectada en su propio servidor.' },
      { id: '2.3', title: 'Procesamiento de Lenguaje Natural (NLP)', tech: 'Utilización de Modelos de Lenguaje Grande (LLMs) fundacionales (GPT-4o / Claude 3.5 Sonnet) en la capa conversacional. Garantiza memoria a corto plazo, comprensión de jergas y variaciones del lenguaje natural.', corp: 'A diferencia de los molestos "bots de opciones" (marque 1, marque 2), nuestro Agente conversa como un analista humano. Entiende errores de ortografía, audios o frases desordenadas y comprende perfectamente el contexto de lo que el cliente técnico le demanda.' }
    ]
  },
  { 
    id: 'perfilamiento', 
    label: '3. Perfilamiento Omnicanal', 
    icon: Globe2,
    intro: 'Capacidades de segmentación automática, resolución multicanal y derivación inteligente hacia operadores humanos cuando las solicitudes superan el umbral algorítmico.',
    items: [
      { id: '3.1', title: 'Categorización e Intent Detection AI', tech: 'Programación de clasificación Zero-Shot avanzada. El flujo valida el teléfono/email y perfila si es un Lead Nuevo, Aliado o Usuario Final, ajustando el System Prompt dinámicamente. Escanea semánticamente la intención antes de responder.', corp: 'Desde el primer mensaje en WhatsApp, el Agente sabe a quién se dirige. Si es un distribuidor B2B buscando precios, asume un perfil comercial directo. Si es un usuario final buscando solucionar un daño, entra en protocolo técnico. Todo personalizando el tono desde un mismo canal.' },
      { id: '3.2', title: 'Despliegue Unificado (WhatsApp, RRSS y Web)', tech: 'Integración verificada y oficial con endpoints de WhatsApp Business API, API Graph de Meta (Mensajería de Instagram y Facebook) y despliegue modular de Widget inteligente en el portal web corporativo.', corp: 'Llevamos a su ingeniero virtual a todas partes. Sus clientes obtendrán el mismo nivel asombroso de respuesta ágil en sus Redes Sociales, su página institucional o en la línea central de WhatsApp B2B.' },
      { id: '3.3', title: 'Generación de Tickets y Escalamiento Humano', tech: 'Implementación de rutas lógicas de Fallback. Ante un Low Confidence Score, la IA detiene la generación y dispara un POST hacia su plataforma omnicanal, creando un ticket automático con la transcripción completa (Hand-off).', corp: 'Una máquina verdaderamente inteligente sabe hasta dónde llegar. Para reclamos críticos, el Agente pondrá en pausa su interacción, le dirá amablemente al usuario que escalará su caso a soporte y creará el Ticket en sus sistemas, entregando el historial para no frustrar al cliente haciéndolo repetir todo.' }
    ]
  },
  { 
    id: 'seguridad', 
    label: '4. Gobernanza y Seguridad', 
    icon: ShieldCheck,
    intro: 'Privacidad blindada. El Agente Inteligente se conecta a los sistemas empresariales para generar valor bidireccional, garantizando protección de datos rigurosa.',
    items: [
      { id: '4.1', title: 'Interoperabilidad API (ERP CRM)', tech: 'Despliegue de Tool Calling en n8n permitiendo al Agente IA integrarse directamente mediante autenticación robusta (OAuth2) a los endpoints del ERP y CRM de Powest para consultar o inyectar data.', corp: 'La Inteligencia Artificial no trabaja aislada. Puede consultar sus sistemas en vivo e indicar a un cliente: "Su garantía ya fue aprobada", o inyectar de inmediato un lead cualificado multinacional en su plataforma comercial para que cierre el contrato aceleradamente.' },
      { id: '4.2', title: 'Autenticación Doble Factor (2FA) y Privacidad', tech: 'Cumplimiento normativo de protección de datos (RGPD). Autenticación de Doble Factor (2FA) para los accesos al entorno orquestador. Protección militar de API keys en variables de entorno segregadas y logs auditables.', corp: 'La confidencialidad es intransferible. Nadie, excepto sus líderes aprobados mediante código en su celular (2FA), podrá acceder a configuraciones técnicas o leer transcripciones. Blindamos al máximo la base de datos empresarial.' },
      { id: '4.3', title: 'Usuarios Ilimitados y Nivel de Servicio (SLA 99.5%)', tech: 'Despliegue de Chatwoot Core y n8n en VPS propio, lo que elimina el cobro por asientos o licencias SaaS. Parametrización con roles: 1 Súper Administrador y Agentes/Supervisores ilimitados. SLA garantizado del 99.5%.', corp: 'Adiós a los cobros por "puesto de trabajo". Como el ecosistema es 100% de Powest (Caja de Cristal), podrán conectar a 3, a 10 o a 50 agentes humanos y supervisores en Chatwoot sin pagar un solo peso extra en licencias mensuales. Usuarios ilimitados, mismo costo operativo.' }
    ]
  },
  { 
    id: 'despliegue', 
    label: '5. Plan de Despliegue', 
    icon: Zap,
    intro: 'Implementación ágil, llave en mano y apoyada por expertos pos-lanzamiento. Transformamos la complejidad de IA generativa en una solución viva en pocas semanas.',
    items: [
      { id: '5.1', title: 'Entrega Llave en Mano (6 a 8 Semanas)', tech: 'Despliegue metodológico Agile bajo un estricto Timebox de 6 a 8 semanas para salir a producción. Incluye inyección RAG de la base documental, parametrización orquestada y Test de Staging corporativo.', corp: 'Garantizamos resultados certeros y veloces. Desde la luz verde al proyecto, dejaremos al Agente IA operando, integrando sistemas y atendiendo prospectos en un increíble tiempo récord de dos meses formales.' },
      { id: '5.2', title: 'Mesa de Soporte Hypercare (Min. 2 Meses)', tech: 'Aseguramiento de ventana de calibración del algoritmo. Soporte resolutivo y monitoreo (24/7) ajustando el Drift analítico, corrigiendo disyuntivas del Prompt y perfeccionando las intenciones de derivación tras masificarse en Producción.', corp: 'Los respaldaremos ferozmente durante los dos meses inmediatos al lanzamiento. Cuidaremos la herramienta auditando cómo habla con clientes reales, afilando sus sentidos y respuestas, para que ustedes sientan tranquilidad total en la transición digital.' },
      { id: '5.3', title: 'Capacitación y Cero Retención', tech: 'Transferencia total del conocimiento mediante Masterclasses virtuales para perfiles de TI (arquitectura / control) y Gestión Administrativa (análisis y alimentación documental al RAG).', corp: 'Nuestro éxito final es su entera independencia. Enseñaremos al equipo Powest cómo subir nuevos manuales a la mente de la IA el día que presenten la siguiente generación de UPS solares, sin ser esclavos de mantenimientos artificiales por nuestra parte.' }
    ]
  }
];

export const AutoAgent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.5; // Scroll 50% of the screen width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350); // check again after animation
    }
  };

  return (
    <div className="pt-28 md:pt-40 pb-32 bg-white min-h-screen overflow-x-clip w-full text-balance">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black tracking-[0.2em] text-[var(--color-purple)] uppercase mb-6 shadow-sm font-ui">
            <Bot className="w-4 h-4 text-[var(--color-lime)]" />
            <span>SOLUCIÓN: EXTENSIÓN AUTOAGENTE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-tight lg:leading-[1.05] font-titles uppercase break-words">
            EL INGENIERO VIRTUAL <br className="hidden md:block" />
            <span className="text-[var(--color-purple)] italic tracking-tighter">OMNICANAL 24/7</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-[var(--color-lime)]/50 pl-4 lg:pl-8 py-2 w-full">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Integramos Inteligencia Artificial Generativa bajo arquitectura RAG y n8n, 
              entrenada exclusivamente con sus 130 manuales corporativos para escalar el 
              servicio técnico y las ventas consultivas sin secuestros tecnológicos.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start w-full min-w-0">
          
          {/* Sidebar - Contenedor Principal (Sticky) */}
          <div className="sticky top-[3.5rem] md:top-20 lg:top-32 z-30 bg-white/95 backdrop-blur-md lg:bg-transparent border-b border-gray-100 lg:border-none relative w-full pt-2 lg:pt-0">
            
            {/* Sombras Laterales (Móvil) para indicar más contenido */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 lg:hidden ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 lg:hidden ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Botones Flotantes (Móviles) */}
            <button 
              onClick={() => scroll('left')}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-md rounded-full p-1.5 transition-all lg:hidden ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-md rounded-full p-1.5 transition-all lg:hidden ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Menú Horizontal / Vertical desplazable */}
            <div 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible py-4 lg:py-0 w-full"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' 
              }}
            >
              <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              
              <div className="hidden lg:flex items-center gap-3 mb-6 ml-6 shrink-0">
                 <Database className="w-5 h-5 text-black" />
                 <p className="text-[12px] font-black text-black uppercase tracking-[0.4em] font-ui">Módulos</p>
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const contentEl = document.getElementById('autoagent-content');
                    if (window.innerWidth < 1024 && contentEl) {
                      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`flex items-center lg:justify-between gap-3 lg:gap-4 px-5 lg:px-7 py-3 lg:py-5 rounded-[4rem] lg:rounded-3xl transition-all duration-500 text-left relative group border shrink-0 w-auto lg:w-full min-w-0 ${
                    activeTab === tab.id 
                      ? 'bg-black text-white border-black shadow-xl lg:shadow-2xl scale-100 lg:scale-100' 
                      : 'bg-transparent text-gray-700 border-gray-200 lg:border-transparent hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                    <tab.icon className={`w-4 h-4 lg:w-5 lg:h-5 shrink-0 transition-colors duration-300 ${activeTab === tab.id ? 'text-[var(--color-lime)]' : 'text-gray-400 group-hover:text-black'}`} />
                    <span className={`font-black uppercase tracking-widest transition-all duration-300 font-ui whitespace-nowrap lg:whitespace-normal lg:break-words lg:leading-snug ${activeTab === tab.id ? 'text-[11px] lg:text-[13px] text-white' : 'text-[10px] lg:text-[11px] text-gray-600'}`}>
                      {tab.label}
                    </span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div layoutId="autoagentActiveDot" className="hidden lg:block shrink-0 w-2.5 h-2.5 bg-[var(--color-lime)] rounded-full shadow-[0_0_15px_rgba(232,255,0,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div id="autoagent-content" className="relative pt-4 scroll-mt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-24"
              >
                {/* Intro Section */}
                <div className="space-y-4 lg:space-y-6">
                  <h2 className="text-3xl lg:text-3xl font-black text-black leading-none uppercase tracking-tighter font-titles">{currentTab.label}</h2>
                  <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-4xl border-b border-gray-100 pb-8 lg:pb-12 italic font-body">
                    {currentTab.intro}
                  </p>
                </div>

                {/* Scope Items List */}
                <div className="space-y-16 lg:space-y-32">
                  {currentTab.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className="group"
                    >
                      <div className="flex flex-col lg:grid lg:grid-cols-[80px_1fr] gap-6 lg:gap-8 w-full min-w-0">
                        {/* Number Display */}
                        <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 shrink-0 w-full lg:w-auto">
                          <span className="text-3xl lg:text-4xl font-black text-gray-200 lg:text-gray-100 group-hover:text-[var(--color-lime)] transition-colors duration-700 select-none font-titles tracking-tighter shrink-0">
                             {item.id}
                          </span>
                          <div className="flex-1 lg:flex-none h-1 lg:h-full w-full lg:w-1.5 bg-gray-100 lg:bg-gray-50 group-hover:bg-[var(--color-lime)]/20 transition-all duration-700 min-h-[4px] lg:min-h-[60px] rounded-full mt-0 lg:mt-4" />
                        </div>

                        <div className="space-y-6 lg:space-y-10 w-full min-w-0">
                          <h4 className="text-[1.1rem] leading-snug sm:text-xl md:text-2xl font-black text-black tracking-tighter group-hover:text-[var(--color-purple)] transition-colors font-ui uppercase break-words hyphens-auto">
                            {item.title}
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full min-w-0">
                            {/* Technical Specification */}
                            <div className="space-y-4 w-full min-w-0">
                              <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] mb-2 block font-ui break-words">Detalle Técnico</span>
                              <div className="p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 overflow-hidden w-full">
                                <p className="text-[13px] sm:text-sm md:text-base text-gray-600 font-bold leading-relaxed italic font-body break-words">
                                  {item.tech}
                                </p>
                              </div>
                            </div>
                            
                            {/* Business Value */}
                            <div className="space-y-4 w-full min-w-0">
                              <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] mb-2 block font-ui break-words">Explicación Corporativa</span>
                              <div className="p-5 sm:p-6 md:p-8 border-l-4 border-gray-100 bg-white md:bg-transparent overflow-hidden w-full">
                                <p className="text-[13px] sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed font-body break-words">
                                  {item.corp}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Navigation CTA */}
                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 w-full min-w-0">
                   <div className="space-y-2 w-full min-w-0 break-words">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest font-ui">Ir a Tarifas</p>
                      <h2 className="text-xl sm:text-2xl font-black text-black tracking-tighter font-titles uppercase break-words hyphens-auto">¿LISTO PARA ESCALAR?</h2>
                   </div>
                   <Link 
                     to="/inversion"
                     className="flex items-center justify-center gap-4 sm:gap-6 bg-[var(--color-lime)] text-black px-6 sm:px-12 py-5 sm:py-6 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-xl group border border-transparent font-ui w-full sm:w-auto shrink-0"
                   >
                     <span className="text-center break-words">Ver Inversión</span>
                     <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform text-black group-hover:text-[var(--color-lime)]" />
                   </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};
