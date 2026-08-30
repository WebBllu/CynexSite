import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Zap size={24} className="text-brand-red" />,
    title: 'Inovação',
    description: 'Utilizamos as tecnologias mais recentes para garantir sites rápidos e modernos.',
  },
  {
    icon: <Users size={24} className="text-brand-red" />,
    title: 'Compromisso',
    description: 'Nosso sucesso é o seu sucesso. Entregamos projetos pontuais e de alta qualidade.',
  },
  {
    icon: <Target size={24} className="text-brand-red" />,
    title: 'Preço Justo',
    description: 'Soluções acessíveis sem abrir mão de um design premium e exclusivo.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">
              NOSSA <span className="fire-text-gradient glitch-text" data-text="ORIGEM">ORIGEM</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-mono leading-relaxed">
              <p>
                A <strong className="text-brand-red">CynexCode</strong> nasceu da paixão de dois desenvolvedores —{' '}
                <span className="text-white font-bold">Erick Venâncio</span> e{' '}
                <span className="text-white font-bold">Paulo Silas</span> —, formados 
                juntos em Desenvolvimento de Sistemas.
              </p>
              <p>
                Nossa missão é democratizar a presença online. Acreditamos que autônomos 
                e pequenas empresas merecem uma base tecnológica letal, com design 
                de ponta, para dominar o mercado digital.
              </p>
            </div>
          </motion.div>

          {/* Pillars Cards */}
          <div className="grid sm:grid-cols-1 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card p-6 border border-brand-red/20 bg-black/60 flex gap-6 items-start hover:bg-brand-red/10 hover:border-brand-red hover:-translate-x-2 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="p-3 rounded-sm bg-brand-red/10 border border-brand-red/30 shrink-0 group-hover:bg-brand-red group-hover:text-black transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide font-mono">{pillar.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
