import { useState } from 'react';
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
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { 
    id: 'tech', 
    label: '3.1 Alcance Técnico', 
    icon: Server,
    intro: 'Nuestra propuesta se fundamenta en una Arquitectura Headless CMS, la cual separa el administrador de contenidos del diseño visual. Detallamos el cumplimiento estricto de cada requerimiento técnico:',
    items: [
      { id: '3.1.1', title: 'Arquitectura técnica de la solución', tech: 'Implementaremos WordPress Multisite como motor de Backend y Next.js (basado en React) para el Frontend, comunicados mediante API para lograr una compilación estática inmediata.', corp: 'Esta separación de entornos permite a Powest gestionar su contenido desde un panel altamente intuitivo, con tiempos de respuesta inmediatos y escalabilidad absoluta.' },
      { id: '3.1.2', title: 'Infraestructura de seguridad (Certificados SSL)', tech: 'Implementación y configuración de Certificados SSL de grado corporativo (cifrado TLS de extremo a extremo) para todos los dominios y subdominios (powest.mx, powest.ec, powest.com.co).', corp: 'Esto asegura que cualquier transferencia de información de clientes B2B viaje estrictamente encriptada, protegiendo la integridad y reputación digital de la marca.' },
      { id: '3.1.3', title: 'Seguridad y Performance', tech: 'Al usar arquitectura Headless, el Frontend carece de conexión directa con la base de datos SQL, haciéndolo prácticamente invulnerable a ataques comunes mediante generación de sitios estáticos (SSG).', corp: 'El resultado es un ecosistema digital blindado y con tiempos de carga optimizados al máximo, un factor decisivo para retener el tráfico corporativo.' },
      { id: '3.1.4', title: 'Compatibilidad Multidispositivo', tech: 'Desarrollo 100% Responsive Design optimizado para Google Chrome, Safari, Edge y Firefox, adaptándose automáticamente a dispositivos móviles (iOS y Android).', corp: 'Aseguramos que los tomadores de decisiones puedan acceder al portafolio completo con una experiencia de usuario perfecta desde cualquier equipo o móvil.' },
      { id: '3.1.5', title: 'Ambientes de Trabajo', tech: 'Habilitaremos tres entornos corporativos aislados: Ambiente de Desarrollo (código fuente), Ambiente de Pruebas / Staging (QA) y Ambiente de Producción (en vivo).', corp: 'Esta estructura permite que el equipo de Powest pueda revisar y validar cualquier cambio en un entorno seguro antes de que sea visible para el público general.' }
    ]
  },
  { 
    id: 'content', 
    label: '3.2 Catálogo Digital', 
    icon: Layout,
    intro: 'El catálogo no será una simple vitrina estática, sino un motor de consulta avanzado diseñado para capturar leads corporativos regionales:',
    items: [
      { id: '3.2.1', title: 'Páginas Espejo por dominio', tech: 'Despliegue de instancias independientes en la arquitectura Headless para cada dominio (powest.mx, powest.ec, powest.com.co) detectando y sirviendo el contenido correspondiente.', corp: 'Garantizamos que cada país tenga su propia identidad digital nativa. Vital para el SEO en Google, asegurando que un cliente vea la página optimizada para su región.' },
      { id: '3.2.4', title: 'Búsqueda Inteligente (Supabase)', tech: 'Implementación de base de datos espejo en Supabase para realizar un LiveSearch (búsqueda en vivo) perfecto procesando información con latencia casi nula.', corp: 'Sus clientes no tendrán que esperar; mientras el comprador va escribiendo, la plataforma ya le está mostrando las opciones correctas.' },
      { id: '3.2.5', title: 'WhatsApp Regional Inteligente', tech: 'Scripts de enrutamiento dinámico para asignar el lead al asesor del país correspondiente según la ubicación y el producto activo.', corp: 'Si un cliente en Ecuador cotiza una UPS, el sistema abre el WhatsApp del asesor ecuatoriano con el mensaje automático del equipo visualizado.' }
    ]
  },
  { 
    id: 'integrations', 
    label: '3.3 Integraciones', 
    icon: Link2,
    intro: 'Interconectamos el ecosistema con las herramientas analíticas y comerciales de la compañía:',
    items: [
      { id: '3.3.1', title: 'Integración CRM para leads', tech: 'Conexión segura vía API/Webhooks entre el Frontend y el CRM actual para transmisión de datos de conversión en tiempo real.', corp: 'Automatizamos su embudo de ventas. Cada solicitud de cotización viaja inmediatamente a su sistema comercial para atención instantánea.' },
      { id: '3.3.2', title: 'GA4 & Tag Manager', tech: 'Parametrización de eventos de conversión clave (clics, descargas) y gestión centralizada de scripts de seguimiento.', corp: 'Proporcionamos inteligencia de negocios basada en datos para medir con precisión el rendimiento exacto de cada país.' }
    ]
  },
  { 
    id: 'seo_int', 
    label: '3.4 SEO & IA', 
    icon: Search,
    intro: 'Estrategia técnica avanzada estructurada específicamente para dominar los resultados de búsqueda orgánica e Inteligencia Artificial:',
    items: [
      { id: '3.4.10', title: 'Posicionamiento GEO-IA', tech: 'Implementación de etiquetas Hreflang y marcado geográfico JSON-LD avanzada para indexación soberana.', corp: 'Garantizamos que ChatGPT y Gemini entiendan la presencia regional de Powest y recomienden la URL nativa correcta.' },
      { id: '3.4.2', title: 'Optimización de Imágenes (WebP)', tech: 'Conversión automática a WebP y Lazy Loading sirviendo recursos desde el Backend centralizado de WordPress.', corp: 'Reducimos el peso de la página y aseguramos que el catálogo visual cargue al instante evitando abandonos por demoras.' }
    ]
  },
  { 
    id: 'doc', 
    label: '3.5 Documentación', 
    icon: FileText,
    intro: 'Independencia tecnológica total mediante la entrega de toda la documentación operativa y estratégica:',
    items: [
      { id: '3.5.1', title: 'Workbook de Configuración', tech: 'Documentación de entorno Headless, variables de entorno y credenciales cifradas de APIs integradas.', corp: 'Entregamos el ADN técnico para que su equipo de TI tenga control absoluto de la arquitectura.' },
      { id: '3.5.3', title: 'Manual de Administración No-Code', tech: 'Guías operativas paso a paso para actualización de inventarios, banners y SEO sin conocimientos de programación.', corp: 'Manual del día a día para que marketing y ventas operen el catálogo de forma autónoma e inmediata.' }
    ]
  },
  { 
    id: 'qa', 
    label: '3.6 Control de Calidad', 
    icon: CheckCircle2,
    intro: 'Validación técnica rigurosa en el ambiente de Staging previo al despliegue a producción:',
    items: [
      { id: '3.6.1', title: 'QA Multipaís End-to-End', tech: 'Simulación de peticiones con IPs geolocalizadas para confirmar la lógica de enrutamiento y renderizado regional.', corp: 'Aseguramos que el ecosistema funcione a la perfección sin importar desde dónde se conecte su cliente.' },
      { id: '3.6.6', title: 'Bitácora de Pruebas', tech: 'Documento formal de QA detallando casos de prueba, resultados y firma técnica de aprobación.', corp: 'Certificamos que el sistema está listo para salir al aire, eliminando cualquier margen de error.' }
    ]
  },
  { 
    id: 'training', 
    label: '3.7 Capacitación Pro', 
    icon: Users2,
    intro: 'Plan estratégico de transferencia de conocimiento para asegurar la operación autónoma:',
    items: [
      { id: '3.7.4', title: 'Plan 24 Horas (12 Sesiones)', tech: '5 Sesiones Sincrónicas en vivo + 7 Sesiones Asincrónicas prácticas en el ambiente de Staging.', corp: 'Metodología balanceada para entender la plataforma y practicar con escenarios reales sin quitar tiempo operativo.' }
    ]
  }
];

export const Scope = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black tracking-[0.2em] text-[var(--color-purple)] uppercase mb-6 shadow-sm font-ui">
            <Cpu className="w-4 h-4 text-[var(--color-lime)]" />
            <span>PÁGINA 3: ALCANCE TÉCNICO</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-[1.05] font-titles uppercase">
            3. ALCANCE TÉCNICO Y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">FUNCIONAL WEB:</span> <br />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-gray-100 pl-8 py-2">
            <p className="text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Despliegue integral de un ecosistema digital institucional multilatina (Colombia, México y Ecuador) bajo arquitectura Headless CMS de alto rendimiento.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">
          
          {/* Sidebar - MEJORADO: Usabilidad, Tamaño y Color */}
          <div className="flex flex-col gap-3 sticky top-32">
            <div className="flex items-center gap-3 mb-6 ml-6">
               <Database className="w-5 h-5 text-black" />
               <p className="text-[12px] font-black text-black uppercase tracking-[0.4em] font-ui">Módulos</p>
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between gap-4 px-8 py-5 rounded-[4rem] transition-all duration-500 text-left relative group border ${
                  activeTab === tab.id 
                    ? 'bg-black text-white border-black shadow-2xl scale-[1.02]' 
                    : 'bg-transparent text-gray-700 border-transparent hover:bg-gray-50 hover:text-black'
                }`}
              >
                <div className="flex items-center gap-4">
                  <tab.icon className={`w-5 h-5 shrink-0 transition-colors duration-300 ${activeTab === tab.id ? 'text-[var(--color-lime)]' : 'text-gray-400 group-hover:text-black'}`} />
                  <span className={`font-black uppercase tracking-widest transition-all duration-300 font-ui ${activeTab === tab.id ? 'text-[13px] text-white' : 'text-[11px] text-gray-600'}`}>
                    {tab.label}
                  </span>
                </div>
                {activeTab === tab.id && (
                  <motion.div layoutId="scopeActiveDot" className="w-2.5 h-2.5 bg-[var(--color-lime)] rounded-full shadow-[0_0_15px_rgba(232,255,0,0.8)]" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="relative pt-4">
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
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-black leading-none uppercase tracking-tighter font-titles">{currentTab.label}</h2>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-4xl border-b border-gray-100 pb-12 italic font-body">
                    {currentTab.intro}
                  </p>
                </div>

                {/* Scope Items List */}
                <div className="space-y-32">
                  {currentTab.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className="group"
                    >
                      <div className="grid md:grid-cols-[100px_1fr] gap-8">
                        {/* Number Display */}
                        <div className="flex flex-col items-center">
                          <span className="text-5xl font-black text-gray-100 group-hover:text-[var(--color-lime)] transition-colors duration-700 select-none font-titles">
                             {item.id.split('.').pop()}
                          </span>
                          <div className="w-1.5 h-full bg-gray-50 group-hover:bg-[var(--color-lime)]/20 transition-all duration-700 min-h-[60px] rounded-full mt-4" />
                        </div>

                        <div className="space-y-10">
                          <h4 className="text-xl md:text-2xl font-black text-black tracking-tighter leading-none group-hover:text-[var(--color-purple)] transition-colors font-ui uppercase">
                            {item.title}
                          </h4>
                          
                          <div className="grid md:grid-cols-2 gap-12">
                            {/* Technical Specification */}
                            <div className="space-y-4">
                              <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] mb-2 block font-ui">Detalle Técnico</span>
                              <div className="p-8 rounded-[3rem] bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500">
                                <p className="text-base text-gray-600 font-bold leading-relaxed italic font-body">
                                  {item.tech}
                                </p>
                              </div>
                            </div>
                            
                            {/* Business Value */}
                            <div className="space-y-4">
                              <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] mb-2 block font-ui">Explicación Corporativa</span>
                              <div className="p-8 border-l-4 border-gray-100">
                                <p className="text-base text-gray-500 font-medium leading-relaxed font-body">
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
                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
                   <div className="space-y-2">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest font-ui">Siguiente Módulo</p>
                      <h2 className="text-2xl font-black text-black tracking-tighter font-titles uppercase">4. SOPORTE Y GARANTÍAS</h2>
                   </div>
                   <Link 
                     to="/soporte"
                     className="flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--color-purple)] transition-all shadow-xl group border border-black font-ui"
                   >
                     <span>Ir a Soporte Técnico</span>
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
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
