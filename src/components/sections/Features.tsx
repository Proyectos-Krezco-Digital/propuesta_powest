import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Database, Truck, ShieldCheck, HeartPulse, Server, Lock } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Buscador Inteligente',
    description: 'Sincronización bidireccional WooCommerce <-> Supabase. Búsqueda instantánea entre miles de SKUs sin latencia.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Truck,
    title: 'Logística B2B',
    description: 'Integración avanzada con SAP Business One. Cálculo dinámico de fletes y lógica crítica de ruteo regional.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Pagos Blindados',
    description: 'Integración nativa con Pasarelas Regionales. Firmas criptográficas y prevención de fraude en tiempo real.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: HeartPulse,
    title: 'Experiencia B2B',
    description: 'Servicios de valor como Cotizador por WhatsApp y validaciones de seguridad empresarial.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Server,
    title: 'Infraestructura Edge',
    description: 'Despliegue en Vercel con ISR (Incremental Static Regeneration). Actualizaciones globales en segundos.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Lock,
    title: 'Seguridad y Compliance',
    description: 'Arquitectura Serverless protegida. Manejo de datos sensibles cumpliendo normativas internacionales.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wide uppercase text-sm"
          >
            Auditoría Técnica
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-gray-900"
          >
            Fórmulas Técnicas Implementadas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            El valor real de Powest reside en estas implementaciones personalizadas de alta ingeniería.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="glass" className="border-0 bg-white/60 hover:bg-white/90 hover:shadow-xl transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
