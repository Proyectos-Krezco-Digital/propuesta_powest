import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, AlertCircle } from 'lucide-react';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

const faqs = [
  {
    question: "¿Por qué el ecosistema de Powest necesita un mantenimiento especializado en Dokploy y no un soporte estándar?",
    answer: "Una arquitectura Headless (Next.js + Supabase + SAP) requiere gestión de contenedores Docker y optimización de base de datos vectorial. Un soporte estándar no tiene la capacidad de rastrear errores de sincronización de API profunda, fugas de memoria en el renderizado o inconsistencias en la base de datos Supabase. Sin este mantenimiento, el riesgo de fallos en el checkout y caídas silenciosas aumenta exponencialmente."
  },
  {
    question: "¿Qué riesgos corremos si no auditamos el stock entre SAP Business One y el E-commerce mensualmente?",
    answer: "El desajuste de inventario es el error más costoso en operaciones B2B. Sin la auditoría mensual, el ecosistema de Powest corre el riesgo de vender productos sin stock real o con precios desactualizados, generando reprocesos logísticos y afectando la relación con los distribuidores."
  },
  {
    question: "¿Cómo se justifica la inversión del Fee Mensual de $1.200.000 frente a contratar por hora?",
    answer: "La tarifa de especialista por hora suelta es de $100.000. El fee mensual garantiza disponibilidad inmediata y monitoreo preventivo 24/7. Este modelo proactivo evita caídas críticas que costarían millones en ventas perdidas por inactividad del Autoagente o el B2B, algo que el pago por hora reactivo no puede cubrir."
  },
  {
    question: "¿Qué garantiza que el tiempo de respuesta se cumpla en emergencias críticas?",
    answer: "Establecemos un SLA (Acuerdo de Nivel de Servicio) contractual. Contamos con herramientas de monitoreo en tiempo real conectadas directamente a nuestro equipo de ingeniería. Si el servidor cae o la integración con SAP se interrumpe, recibimos una alerta inmediata para intervenir sin esperar a un ticket de soporte."
  },
  {
    question: "¿Las 'Mejoras Continuas' incluyen evolución del Autoagente AI?",
    answer: "Sí. El fee no es solo para que 'no se caiga'. Incluye el re-entrenamiento del Autoagente con nuevos documentos, optimización de prompts y ajustes en la lógica de cierre de ventas por WhatsApp según la retroalimentación del mercado regional."
  },
  {
    question: "¿Qué sucede con la seguridad de la información corporativa en esta arquitectura?",
    answer: "La seguridad es nuestra prioridad. Al usar una nube privada administrada por Dokploy, los datos de Powest no están en 'la nube pública' de un SaaS compartido. Aplicamos parches de seguridad mensuales en todas las capas para blindar la integración con su ERP."
  },
  {
    question: "¿Si no usamos todas las horas de soporte del mes, se acumulan?",
    answer: "Las horas son recursos de ingeniería reservados exclusivamente para Powest cada mes para garantizar arranque inmediato. No son acumulables, lo que nos impulsa a la proactividad: si no hay fallos, usamos ese tiempo en optimizar el SEO técnico y la velocidad de respuesta para asegurar que siempre reciban el máximo retorno por su inversión."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white py-24 border-t border-gray-100">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-16">
          {/* Header Column */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Preguntas Frecuentes & <span className="text-[var(--color-lime)] bg-black px-2">Garantías</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Respuestas técnicas sobre el alcance y la gestión del ecosistema de ingeniería para Powest.
              </p>
              
              <div className="p-6 bg-black rounded-2xl border border-gray-800 shadow-xl">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-[var(--color-lime)] shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">¿Urgencia Crítica?</h3>
                    <p className="text-gray-400 text-sm">
                      La infraestructura actual requiere atención inmediata para evitar desincronización de datos.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Accordion Column */}
          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex justify-between items-center gap-4 ${
                      openIndex === index 
                        ? 'bg-black text-white shadow-2xl shadow-black/10 scale-[1.02]' 
                        : 'bg-white hover:bg-gray-50 border border-gray-100 text-black'
                    }`}
                  >
                    <span className={`text-lg font-bold ${openIndex === index ? 'text-white' : 'text-black'}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 p-2 rounded-full transition-colors ${
                      openIndex === index ? 'bg-[var(--color-lime)] text-black' : 'bg-gray-100 text-black'
                    }`}>
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-2 pl-8 border-l-2 border-[var(--color-lime)] ml-6 my-2">
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
};
