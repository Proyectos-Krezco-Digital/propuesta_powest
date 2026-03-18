import { motion } from 'framer-motion';
import { Brain, Wallet, Trophy, CheckCircle2, Zap } from 'lucide-react';
import { Section } from '../layout/Section';
import { MaxWidthWrapper } from '../layout/MaxWidthWrapper';

export const Trust = () => {
  return (
    <Section id="trust" className="bg-white py-24">
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Features List */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-gray-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              EL SENIORITY IMPORTA
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight"
            >
              ¿Por qué un <br />
              Perfil Senior?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed"
            >
              Un desarrollador Junior o Mid puede romper la caché de Vercel o corromper la DB de Supabase por desconocer la arquitectura Headless. Mi propuesta elimina ese riesgo.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Conocimiento de Dominio",
                  desc: "Entiendo las 'fórmulas' de integración de SAP y Pasarelas Regionales.",
                  icon: Brain
                },
                {
                  title: "Arquitectura de Costos",
                  desc: "Optimización constante de Vercel para evitar sobrecostos.",
                  icon: Wallet
                },
                {
                  title: "Visión Estratégica",
                  desc: "No solo código; roadmap de producto y expansión.",
                  icon: Trophy
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-lime)] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black group-hover:text-[var(--color-purple)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Circular Graphic (Reference Style) */}
          <div className="relative flex justify-center items-center py-12 md:py-0">
             {/* Circular Pattern */}
             <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full flex items-center justify-center z-10 shadow-2xl">
                   <div className="text-center">
                      <div className="text-[var(--color-lime)] font-bold text-3xl">10+</div>
                      <div className="text-white text-xs uppercase tracking-wider">Años Exp.</div>
                   </div>
                </div>

                {/* Orbiting Dots Ring 1 */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 animate-spin-slow"></div>
                
                {/* Orbiting Dots Ring 2 */}
                <div className="absolute inset-12 rounded-full border border-gray-100"></div>

                {/* Floating Elements mimicking the reference graphic */}
                {[...Array(12)].map((_, i) => (
                   <motion.div
                      key={i}
                      className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-black' : 'bg-[var(--color-purple)]'}`}
                      style={{
                         top: `${50 + 40 * Math.sin(i * 0.5)}%`,
                         left: `${50 + 40 * Math.cos(i * 0.5)}%`,
                      }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                   />
                ))}

                {/* Senior Verdict Card Overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -right-4 md:right-0 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs z-20"
                >
                  <p className="text-black font-medium italic mb-4">
                    "Powest es un <span className="bg-[var(--color-lime)] px-1">Ferrari tecnológico</span>. Necesita alta ingeniería."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-lime)] flex items-center justify-center shrink-0 shadow-sm">
                      <Zap className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black uppercase tracking-wider">iAnGo</div>
                      <div className="text-[10px] text-gray-500 font-medium">Agencia de Ingeniería</div>
                    </div>
                  </div>
                </motion.div>
             </div>
          </div>

        </div>
      </MaxWidthWrapper>
    </Section>
  );
};
