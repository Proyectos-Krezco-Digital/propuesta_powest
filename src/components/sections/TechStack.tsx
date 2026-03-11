import { motion } from 'framer-motion';

const techs = [
  { name: 'Next.js 14', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'Vercel', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  { name: 'Supabase', logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/supabase-icon-kpjasdqlnu8exakst6f44r.png/supabase-icon-5uqgeeqeknngv9las8zeef.png?_a=DATAiZAAZAA0' },
  { name: 'WooCommerce', logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg' },
  { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
];

export const TechStack = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">
          Potenciado por tecnología de clase mundial
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
