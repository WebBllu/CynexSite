import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code2, Smartphone, Gauge, Search, MessageCircle } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

const words = ['AO SEU ESTILO', 'QUE VENDE', 'QUE CONVERTE', 'PROFISSIONAL'];

const highlights = [
  { icon: Smartphone, label: '100% Responsivo' },
  { icon: Gauge, label: 'Ultrarrápido' },
  { icon: Search, label: 'Pronto para o Google' },
  { icon: MessageCircle, label: 'Integrado ao WhatsApp' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden cyber-grid">
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-fire/30 rounded-full blur-[150px] animate-fire-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red/40 rounded-full blur-[150px] animate-fire-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center w-full">
        {/* Texto */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-black/50 backdrop-blur-md mb-8 uppercase font-mono tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-xs font-bold text-gray-300">Agenda aberta para novos projetos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter mb-6 uppercase leading-[0.95]"
          >
            SEU SITE <br />
            <span className="relative inline-block h-[1em] min-w-[6ch] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45 }}
                  className="fire-text-gradient inline-block whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-mono"
          >
            Criamos sites modernos, rápidos e feitos sob medida para autônomos e pequenas empresas que querem{' '}
            <span className="text-white">vender mais na internet</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => openContactModal()}
              className="group cyber-button bg-brand-red hover:bg-brand-fire px-8 py-4 text-white font-bold text-lg transition-all neon-glow"
            >
              <div className="cyber-button-content font-mono uppercase tracking-widest">
                Quero meu site
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a
              href="#servicos"
              className="cyber-button px-8 py-4 border border-brand-red/50 bg-black/40 text-brand-red hover:bg-brand-red hover:text-white transition-all font-bold text-lg backdrop-blur-md"
            >
              <div className="cyber-button-content font-mono uppercase tracking-widest">Ver serviços</div>
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-x-8 gap-y-3"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-mono text-gray-400">
                <Icon size={16} className="text-brand-red" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="animate-float">
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 backdrop-blur shadow-[0_30px_80px_rgba(255,0,0,0.2)] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/60">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs font-mono text-gray-500">
                  https://<span className="text-gray-300">seunegocio</span>.com.br
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-7">
                <p><span className="text-brand-red">const</span> <span className="text-white">site</span> = {'{'}</p>
                <p className="pl-6"><span className="text-gray-400">design:</span> <span className="text-[#febc2e]">'exclusivo'</span>,</p>
                <p className="pl-6"><span className="text-gray-400">mobile:</span> <span className="text-[#28c840]">true</span>,</p>
                <p className="pl-6"><span className="text-gray-400">seo:</span> <span className="text-[#febc2e]">'otimizado'</span>,</p>
                <p className="pl-6"><span className="text-gray-400">whatsapp:</span> <span className="text-[#28c840]">true</span>,</p>
                <p className="pl-6"><span className="text-gray-400">resultado:</span> <span className="text-[#febc2e]">'mais clientes'</span></p>
                <p>{'}'};</p>
                <p className="mt-2"><span className="text-brand-red">deploy</span>(<span className="text-white">site</span>);<span className="inline-block w-2 h-5 bg-brand-red ml-1 align-middle animate-blink" /></p>
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl border border-white/5 bg-gradient-to-br from-brand-red/20 to-transparent p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-red/20 flex items-center justify-center">
                    <Code2 className="text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-2/3 rounded bg-white/20 mb-2" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">100</p>
                    <p className="text-[10px] font-mono text-gray-500 uppercase">Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges flutuantes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-10 top-16 glass rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <Smartphone size={18} className="text-brand-red" />
            <span className="text-sm font-mono text-gray-200">Mobile first</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -right-6 bottom-24 glass rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span className="text-sm font-mono text-gray-200">Novo cliente via WhatsApp</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
