import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

export const NextSteps = () => {
  return (
    <Section id="next-steps" padding="sm" background="secondary" className="">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
          >
            Próximos Pasos Sugeridos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                step: "01",
                title: "Definir Alcance",
                desc: "¿Cuántas funcionalidades nuevas prevemos al mes?"
              },
              {
                step: "02",
                title: "Acuerdo de Respuesta",
                desc: "Definir tiempos para emergencias (ej: < 4 horas para caídas)."
              },
              {
                step: "03",
                title: "Formalización",
                desc: "Documentar el fee mensual y comenzar el primer ciclo."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/30">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          
        </div>
      </MaxWidthWrapper>
    </Section>
  );
};
