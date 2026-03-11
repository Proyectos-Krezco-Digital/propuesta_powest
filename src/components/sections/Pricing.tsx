import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

const plans = [
  {
    name: 'Opción A',
    subtitle: 'Soporte Vital',
    price: '$65.000',
    period: 'COP/Hora',
    description: 'Ideal para asegurar la estabilidad técnica básica del proyecto.',
    features: [
      '17 horas contratadas fijas al mes mínimo',
      'Mantenimiento preventivo',
      'Parches de seguridad y monitoreo',
      'Respuesta: 12-24 horas hábiles',
    ],
    highlight: false,
    tag: null,
    cta: 'Solicitar Soporte Vital',
  },
  {
    name: 'Opción B',
    subtitle: 'Evolución Activa',
    price: '$1.500.000',
    period: 'COP/Mes',
    description: 'EL MEJOR. Para PharmaPLus que está inciando y en crecimiento que necesitan mejoras constantes e implementaciones ganadoras',
    features: [
      'Hasta 50 horas de desarrollo y soporte mensual',
      'Mantenimiento + Mejoras continuas (CRO, SEO técnico, ajustes de UI)',
      'Auditoría mensual de stock WC vs Supabase',
      'Respuesta: 2-8 horas hábiles',
    ],
    highlight: true,
    tag: 'MÁS POPULAR',
    cta: 'Comenzar Evolución',
  },
];

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-[var(--bg-primary)] py-24">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Planes de Inversión Mensual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto"
          >
            Para asegurar la rentabilidad y estabilidad del proyecto, propongo tres niveles de inversión mensual
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 border ${
                plan.highlight 
                  ? 'bg-black border-gray-900 shadow-2xl shadow-black/10 transform md:-translate-y-4' 
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              {plan.tag && (
                <div className="absolute top-6 right-6">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    plan.highlight 
                      ? 'bg-[var(--color-lime)] text-black' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.tag === 'MÁS POPULAR' && <Star className="w-3 h-3 fill-current" />}
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-black'} mb-1`}>{plan.name}</h3>
                <p className={`text-lg font-medium mb-4 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{plan.subtitle}</p>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                  <span className={`text-sm font-medium ml-2 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
              </div>

              <p className={`${plan.highlight ? 'text-gray-300' : 'text-[var(--text-secondary)]'} mb-8 font-medium`}>{plan.description}</p>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlight ? 'bg-[var(--color-lime)]' : 'bg-gray-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-black' : 'text-gray-700'}`} />
                    </div>
                    <span className={plan.highlight ? 'text-white font-medium' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </Section>
  );
};
