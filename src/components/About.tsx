import { motion } from 'motion/react';
import { Target, Users, Zap, Code2 } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Inovação',
    description: 'Tecnologias modernas para entregar sites rápidos, seguros e bonitos em qualquer tela.',
  },
  {
    icon: Users,
    title: 'Atendimento direto',
    description: 'Você fala direto com quem desenvolve. Sem intermediários, sem enrolação.',
  },
  {
    icon: Target,
    title: 'Preço justo',
    description: 'Soluções acessíveis sem abrir mão de um design premium e exclusivo.',
  },
];

const founders = [
  { name: 'Erick Venâncio', initials: 'EV', role: 'Co-fundador · Desenvolvedor' },
  { name: 'Paulo Silas', initials: 'PS', role: 'Co-fundador · Desenvolvedor' },
];

export default function About() {
  return (
    <section id="sobre" className="py-28 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">// Sobre nós</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">
              NOSSA{' '}
              <span className="fire-text-gradient glitch-text" data-text="ORIGEM">
                ORIGEM
              </span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-mono leading-relaxed">
              <p>
                A <strong className="text-brand-red">CynexCode</strong> nasceu da paixão de dois desenvolvedores,
                formados juntos em Desenvolvimento de Sistemas, que decidiram transformar código em resultado para
                negócios reais.
              </p>
              <p>
                Nossa missão é <span className="text-white">democratizar a presença online</span>: autônomos e pequenas
                empresas merecem um site profissional, com design de ponta, para conquistar clientes no digital.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur hover:border-brand-red/50 transition-colors"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-brand-red to-brand-darkred flex items-center justify-center font-mono font-bold text-white text-lg ring-2 ring-brand-red/30">
                    {f.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg uppercase leading-tight">{f.name}</p>
                    <p className="text-xs font-mono text-gray-500">{f.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative grid gap-5">
            <div className="absolute -inset-10 bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative cyber-card p-6 border border-brand-red/20 bg-black/70 flex gap-6 items-start hover:bg-brand-red/10 hover:border-brand-red hover:-translate-x-2 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="p-3 rounded-lg bg-brand-red/10 border border-brand-red/30 shrink-0 text-brand-red group-hover:bg-brand-red group-hover:text-black transition-colors">
                  <pillar.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide font-mono">{pillar.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{pillar.description}</p>
                </div>
                <span className="absolute top-3 right-4 font-mono text-xs text-brand-red/40">0{index + 1}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex items-center gap-3 p-4 rounded-xl border border-dashed border-brand-red/30 font-mono text-sm text-gray-400"
            >
              <Code2 size={18} className="text-brand-red shrink-0" />
              Cada linha de código escrita pensando no crescimento do seu negócio.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
