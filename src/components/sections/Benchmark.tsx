import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const benchmarks = [
  {
    feature: 'Velocidad de Carga (LCP)',
    standard: '2.5s - 4.0s',
    powest: '0.8s - 1.2s',
    winner: 'powest',
  },
  {
    feature: 'Límite de Productos',
    standard: '~500 SKUs (Lento)',
    powest: 'Escalabilidad Ilimitada',
    winner: 'powest',
  },
  {
    feature: 'Control de Datos',
    standard: 'Dependencia de Proveedor',
    powest: 'Propiedad Total (Supabase)',
    winner: 'powest',
  },
  {
    feature: 'Seguridad',
    standard: 'Plugins Vulnerables',
    powest: 'Serverless Protegido',
    winner: 'powest',
  },
  {
    feature: 'Infraestructura',
    standard: 'Monolítica',
    powest: 'Headless (Edge)',
    winner: 'powest',
  },
];

export const Benchmark = () => {
  return (
    <section id="benchmark" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wide uppercase text-sm"
          >
            Rendimiento Superior
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-gray-900"
          >
            Powest vs. Estándar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Por qué su infraestructura actual está en el top 5% del mercado.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur-md"
        >
          <div className="grid grid-cols-3 bg-gray-50/80 p-6 border-b border-gray-100 font-bold text-gray-900">
            <div className="col-span-1">Característica</div>
            <div className="col-span-1 text-center text-gray-500">E-commerce Estándar</div>
            <div className="col-span-1 text-center text-blue-600">Powest (Headless)</div>
          </div>
          <div className="divide-y divide-gray-100">
            {benchmarks.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-6 items-center hover:bg-blue-50/30 transition-colors"
              >
                <div className="col-span-1 font-medium text-gray-800">{item.feature}</div>
                <div className="col-span-1 text-center text-gray-500 flex justify-center items-center gap-2">
                   {item.winner === 'standard' ? <CheckCircle2 className="w-5 h-5 text-green-500"/> : <XCircle className="w-5 h-5 text-red-300"/>}
                   {item.standard}
                </div>
                <div className="col-span-1 text-center text-blue-700 font-bold flex justify-center items-center gap-2 bg-blue-50/50 py-2 rounded-lg">
                   {item.winner === 'powest' ? <CheckCircle2 className="w-5 h-5 text-blue-600"/> : <XCircle className="w-5 h-5 text-red-300"/>}
                   {item.powest}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
