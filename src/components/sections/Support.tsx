import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Headphones, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  XCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const supportSections = [
  {
    id: '4.1',
    title: 'Tiempo de garantía del desarrollo: 6 meses',
    icon: ShieldCheck,
    tech: 'Cobertura integral de 6 meses estrictamente sobre el código fuente construido, entregado y aprobado (Frontend en Next.js y Backend en WordPress Multisite). Esta garantía aplica exclusivamente para la corrección de fallos (bugs) sobre la versión final liberada.',
    corp: 'Respaldamos al 100% la calidad de la ingeniería que entregamos. Durante medio año, Powest cuenta con nuestra garantía total sobre el funcionamiento estructural de la plataforma aprobada. Es importante aclarar que esto no incluye desarrollos nuevos o funcionalidades adicionales durante este periodo. Si a futuro desean nuevas integraciones u otro tipo de mantenimiento evolutivo, ofrecemos propuestas personalizadas con un fee mensual o paquetes de horas de desarrollo.',
    color: 'bg-[var(--color-purple)]',
    iconColor: 'text-white'
  },
  {
    id: '4.2',
    title: 'Alcance del soporte post salida a producción',
    icon: Zap,
    tech: 'Despliegue de un esquema de estabilización crítica (Hypercare) durante la primera semana máxima post-lanzamiento en producción. Este esquema se ejecutará mediante sesiones diarias de mínimo 40 minutos para el monitoreo de performance y asistencia en vivo al equipo operativo.',
    corp: 'No los dejamos solos al momento de salir al aire. Estaremos codo a codo con su equipo durante la primera semana, dedicando sesiones diarias de 40 minutos para asegurar que la plataforma opere perfectamente en el entorno real y resolviendo cualquier duda operativa al instante.',
    color: 'bg-[var(--color-lime)]',
    iconColor: 'text-black'
  },
  {
    id: '4.3',
    title: 'SLA (Tiempos de atención y solución) 24/7',
    icon: Clock,
    tech: 'Implementación de un SLA 24/7 enlazado a la garantía de 6 meses, exclusivo para incidentes críticos que comprometan la disponibilidad del sitio en vivo (caídas de entorno estrictamente atribuibles a nuestro código). Las fallas no críticas o problemas de conexión originados por la caída de plataformas de terceros quedan excluidas de la respuesta inmediata y se gestionarán bajo programación regular.',
    corp: 'Nuestra prioridad es que su ecosistema digital nunca deje de vender. Si ocurre una emergencia crítica que "tumbe" la página por causa de nuestro desarrollo, nuestro equipo intervendrá inmediatamente (24/7) para mantener el sitio en vivo. Sin embargo, para incidentes menores o fallas que dependan de sistemas externos, el soporte se agenda y soluciona mediante un cronograma de trabajo estándar en horarios hábiles.',
    color: 'bg-black',
    iconColor: 'text-white'
  },
  {
    id: '4.4',
    title: 'Qué tipo de incidentes cubre',
    icon: AlertCircle,
    tech: 'La garantía cubre exclusivamente anomalías funcionales (bugs) sobre el desarrollo ya implementado y aprobado, desajustes críticos de renderizado que impidan la navegación, y errores en la arquitectura propia entregada que afecten la operabilidad del ecosistema.',
    corp: 'En perfecta alineación con el punto anterior, cubrimos cualquier problema que se oriente directamente en la estructura que nosotros construimos. Esto asegura que la base del proyecto funcione con la misma precisión del día del lanzamiento, separando claramente nuestra responsabilidad técnica frente a las fallas naturales que puedan tener plataformas de terceros.',
    color: 'bg-gray-100',
    iconColor: 'text-black'
  },
  {
    id: '4.5',
    title: 'Canales de atención',
    icon: MessageSquare,
    tech: 'Centralización y trazabilidad de solicitudes a través de tres canales oficiales corporativos: WhatsApp (para reportes ágiles), Correo Electrónico (para formalización de requerimientos) y Trello (para gestión de tickets y seguimiento de estado de los incidentes).',
    corp: 'Establecemos líneas de comunicación directas, organizadas y sin burocracia. Sus líderes podrán reportar cualquier eventualidad de forma rápida por WhatsApp o correo, y tendrán visibilidad total del avance de la solución a través de tableros compartidos en Trello.',
    color: 'bg-[var(--color-purple)]',
    iconColor: 'text-white'
  },
  {
    id: '4.6',
    title: 'Qué NO cubre el soporte',
    icon: XCircle,
    tech: 'La cobertura excluye expresamente el desarrollo de nuevas funcionalidades, diseño de nuevas interfaces, carga masiva de inventario adicional, y la resolución de fallos causados por interrupciones de servicios de terceros o alteraciones al código fuente por parte de personal ajeno a iAnGo.',
    corp: 'Para mantener la estabilidad del ecosistema que les entregaremos, el soporte base no incluye trabajos de evolución ni la reparación de daños causados si alguien externo intenta modificar la programación. Cualquier necesidad de crecimiento o soporte fuera del alcance aprobado, se cotizará con nuestra tarifa de Hora de Especialista de $100.000 COP.',
    color: 'bg-red-50',
    iconColor: 'text-red-500'
  }
];

export const Support = () => {
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
            <Headphones className="w-3.5 h-3.5 text-[var(--color-lime)]" />
            <span>PÁGINA 4: SOPORTE Y GARANTÍAS</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-black leading-[1.05] font-titles uppercase">
            4. SOPORTE Y GARANTÍAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 italic">POST IMPLEMENTACIÓN:</span> <br />
            <span className="text-[var(--color-purple)] italic tracking-tighter">POWEST MULTILATINA</span>
          </h1>
          <div className="h-1.5 w-24 bg-[var(--color-lime)] rounded-full mb-8" />
          <div className="border-l-4 border-gray-100 pl-8 py-2">
            <p className="text-lg text-gray-500 leading-relaxed font-medium italic text-balance font-body">
              Garantizamos el respaldo absoluto sobre la arquitectura y el código entregado. Nuestro esquema de soporte protege la continuidad del negocio y asegura la estabilidad del ecosistema multidominio.
            </p>
          </div>
        </motion.div>

        {/* Support Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {supportSections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 transition-all duration-700 group flex flex-col"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <section.icon className={`w-6 h-6 ${section.iconColor}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black leading-tight uppercase font-ui">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-8 flex-grow">
                {/* Technical Card */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-[var(--color-purple)] uppercase tracking-[0.4em] block font-ui">Detalle Técnico</span>
                  <div className="p-6 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
                    <p className="text-base text-gray-600 font-bold leading-relaxed italic font-body">
                      {section.tech}
                    </p>
                  </div>
                </div>

                {/* Corporate Explanation */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] block font-ui">Explicación Corporativa</span>
                  <div className="border-l-4 border-[var(--color-lime)] pl-6 py-1">
                    <p className="text-base text-gray-500 font-medium leading-relaxed font-body">
                      {section.corp}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <Link 
            to="/inversion"
            className="flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--color-purple)] transition-all group shadow-xl font-ui"
          >
            <span>Ir a la Inversión del Proyecto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-[var(--color-lime)]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
