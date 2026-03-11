import { motion } from 'framer-motion';
import { Activity, TrendingUp, LineChart, ShieldCheck, Zap, RefreshCw, Search, Layers } from 'lucide-react';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

export const SLASection = () => {
  return (
    <Section id="sla" className="bg-[var(--bg-primary)]">
      <MaxWidthWrapper>
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black max-w-2xl leading-tight"
          >
            Niveles de Servicio (SLA) <br />
            <span className="text-gray-400">Diseñados para Escalar</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] max-w-3xl"
          >
            Estructura diseñada para cubrir desde la operatividad crítica hasta la expansión estratégica del negocio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Level 1: Vital */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="card group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity className="w-24 h-24 text-[var(--color-lime)]" />
            </div>
            
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-lime)] transition-colors duration-300">
              <Activity className="w-6 h-6 text-black" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-black">Nivel 1: Soporte Vital</h3>
            <p className="text-sm font-bold text-[var(--color-purple)] uppercase tracking-wide mb-6">Mantenimiento Base</p>
            
            <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed min-h-[40px]">
              Asegura que la farmacia esté abierta y funcionando 24/7.
            </p>
            
            <ul className="space-y-4 border-t border-gray-100 pt-6">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-black mt-0.5" />
                <span>Monitoreo de Infraestructura (Vercel, Supabase)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-black mt-0.5" />
                <span>Actualizaciones de Seguridad Críticas</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Zap className="w-5 h-5 text-black mt-0.5" />
                <span>Corrección inmediata de Bugs (Hotfixes)</span>
              </li>
            </ul>
          </motion.div>

          {/* Level 2: Evolution */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="card group relative overflow-hidden ring-1 ring-black/5"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-24 h-24 text-[var(--color-lime)]" />
            </div>

            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-lime)] transition-colors duration-300">
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-black">Nivel 2: Evolución</h3>
            <p className="text-sm font-bold text-[var(--color-purple)] uppercase tracking-wide mb-6">Desarrollo Proactivo</p>
            
            <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed min-h-[40px]">
              Asegura que la farmacia crezca y no se quede obsoleta.
            </p>
            
            <ul className="space-y-4 border-t border-gray-100 pt-6">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Search className="w-5 h-5 text-black mt-0.5" />
                <span>Optimización de Conversión (CRO)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Zap className="w-5 h-5 text-black mt-0.5" />
                <span>Mejoras constantes en SEO Técnico</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Layers className="w-5 h-5 text-black mt-0.5" />
                <span>Nuevas funcionalidades (Banners, Cupones)</span>
              </li>
            </ul>
          </motion.div>

          {/* Level 3: Strategy */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="card group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <LineChart className="w-24 h-24 text-[var(--color-lime)]" />
            </div>

            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-lime)] transition-colors duration-300">
              <LineChart className="w-6 h-6 text-black" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-black">Nivel 3: Estrategia</h3>
            <p className="text-sm font-bold text-[var(--color-purple)] uppercase tracking-wide mb-6">Consultoría</p>
            
            <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed min-h-[40px]">
              Visión a largo plazo y escalabilidad tecnológica.
            </p>
            
            <ul className="space-y-4 border-t border-gray-100 pt-6">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Activity className="w-5 h-5 text-black mt-0.5" />
                <span>Informe mensual de rendimiento</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-black mt-0.5" />
                <span>Roadmap Tecnológico (IA, Expansión)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-black mt-0.5" />
                <span>Arquitectura de Costos</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
};
