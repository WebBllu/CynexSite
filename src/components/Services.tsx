import { motion } from 'motion/react';
import { Layout, Globe, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} className="text-brand-red group-hover:text-black transition-colors" />,
    title: 'Landing Pages Letais',
    description: 'Páginas otimizadas para converter. Tráfego pago, lançamentos e links da bio.',
  },
  {
    icon: <Globe size={32} className="text-brand-red group-hover:text-black transition-colors" />,
    title: 'Sites Institucionais',
    description: 'Design exclusivo e presença dominante para fortalecer a autoridade da sua marca.',
  },
  {
    icon: <Smartphone size={32} className="text-brand-red group-hover:text-black transition-colors" />,
    title: 'Responsividade Extrema',
    description: 'Adaptação perfeita em qualquer tela. Seu arsenal pronto para celular, tablet ou desktop.',
  },
  {
    icon: <Gauge size={32} className="text-brand-red group-hover:text-black transition-colors" />,
    title: 'Performance & SEO',
    description: 'Código limpo, ultrarrápido e preparado para dominar os rankings do Google.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative bg-black border-y border-brand-red/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
          >
            NOSSO <span className="text-brand-red glitch-text" data-text="ARSENAL">ARSENAL</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-mono"
          >
            Sistemas completos e focados em alta conversão para o seu negócio dominar a internet.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-8 bg-brand-surface border border-brand-red/20 group hover:border-brand-red hover:bg-brand-red/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Scanline decoration */}
              <div className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs text-brand-red/50">SYS_{index + 1}</div>
              
              <div className="mb-6 inline-block p-4 rounded-sm bg-brand-red/10 border border-brand-red/30 group-hover:bg-brand-red transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 uppercase font-mono tracking-wide">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
