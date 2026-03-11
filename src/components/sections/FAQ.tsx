import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, AlertCircle } from 'lucide-react';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

const faqs = [
  {
    question: "¿Por qué PharmaPlus necesita un mantenimiento especializado en Headless y no un soporte estándar?",
    answer: "Una arquitectura Headless (React + Node + Supabase) desacopla el frontend del backend. Un soporte estándar de WooCommerce no tiene la capacidad de rastrear errores de sincronización de API, fugas de memoria en el renderizado o inconsistencias en la base de datos Supabase. Sin este mantenimiento, el riesgo de 'órdenes fantasma' y caídas silenciosas aumenta exponencialmente."
  },
  {
    question: "¿Qué riesgos corremos si no auditamos el stock entre WooCommerce y Supabase mensualmente?",
    answer: "El desajuste de inventario es el error más costoso en e-commerce. Sin la auditoría mensual incluida en la Opción B, PharmaPlus corre el riesgo de vender productos sin stock real, generando devoluciones, mala reputación y bloqueos en pasarelas de pago por disputas."
  },
  {
    question: "¿Cómo se justifica la inversión de $1.500.000 (Opción B) frente a contratar por hora?",
    answer: "La tarifa por hora suelta es de $65.000. La Opción B ofrece hasta 50 horas, lo que reduce el costo real a $30.000/hora, un ahorro del 53%. Además, incluye monitoreo preventivo 24/7 que evita caídas que costarían millones en ventas perdidas, algo que el pago por hora reactivo no cubre."
  },
  {
    question: "¿Qué garantiza que el tiempo de respuesta de 2-8 horas se cumpla en emergencias?",
    answer: "En la Opción B, establecemos un SLA (Acuerdo de Nivel de Servicio) contractual. Tengo herramientas de monitoreo en tiempo real conectadas a mi dispositivo personal. Si el servidor cae o el checkout falla, recibo una alerta inmediata para intervenir, asegurando la continuidad de las ventas."
  },
  {
    question: "¿Las 'Mejoras Continuas' de la Opción B incluyen desarrollo de nuevas funcionalidades?",
    answer: "Sí. A diferencia de un mantenimiento pasivo, la Opción B permite usar la bolsa de horas para implementar mejoras de UX, optimización de velocidad (Core Web Vitals) o nuevas secciones promocionales. No es solo 'mantener que no se caiga', es 'hacer que venda más'."
  },
  {
    question: "¿Qué sucede con la seguridad de los datos de los pacientes en esta arquitectura?",
    answer: "La seguridad es crítica. El plan incluye la aplicación mensual de parches de seguridad en todas las capas (Frontend, Backend, Base de Datos). Sin esto, las librerías desactualizadas son puertas traseras para ataques que podrían comprometer la base de datos de clientes de PharmaPlus."
  },
  {
    question: "¿Si no usamos todas las horas del mes, se acumulan?",
    answer: "Las horas son recursos reservados exclusivamente para PharmaPlus cada mes para garantizar disponibilidad. No son acumulables, lo que nos obliga a ser proactivos: si no hay fallos, usaremos ese tiempo en optimizar el código y mejorar la conversión para asegurar que siempre reciban valor por su inversión."
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
                Respuestas técnicas sobre la urgencia y el alcance del servicio de mantenimiento para la infraestructura de PharmaPlus.
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
