import { motion } from 'motion/react';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Conversa',
    description: 'Você chama a gente no WhatsApp, conta sobre seu negócio e seus objetivos.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Criamos o visual do site com a identidade da sua marca e você aprova.',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'Transformamos o design em um site rápido, responsivo e otimizado.',
  },
  {
    icon: Rocket,
    title: 'Lançamento',
    description: 'Colocamos seu site no ar e seguimos juntos para ajustes e suporte.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-tag">// Como funciona</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter"
          >
            DA IDEIA AO <span className="fire-text-gradient">AR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-mono"
          >
            Um processo simples e transparente, com você acompanhando cada etapa.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-black border border-brand-red/40 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-black group-hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300 rotate-45">
                  <step.icon size={28} className="-rotate-45" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-red text-white font-mono font-bold text-sm flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 uppercase font-mono tracking-wide">{step.title}</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
