import { motion } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden cyber-grid">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-fire/30 rounded-full blur-[150px] animate-fire-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red/40 rounded-full blur-[150px] animate-fire-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-darkred/20 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-brand-red/30 bg-black/50 backdrop-blur-md mb-8 uppercase font-mono tracking-widest"
        >
          <Code2 size={16} className="text-brand-red" />
          <span className="text-xs font-bold text-brand-red">
            WEB DESIGN . CODE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl uppercase"
        >
          SEU SITE <br />
          <span className="fire-text-gradient glitch-text" data-text="AO SEU ESTILO">AO SEU ESTILO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-mono"
        >
          Sites modernos, rápidos e de alta conversão. A presença digital letal que o seu negócio precisa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20equipe%20da%20CynexCode!%20Acessei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto%20web.%20Podemos%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group cyber-button bg-brand-red hover:bg-brand-fire px-8 py-4 text-white font-bold text-lg transition-all neon-glow relative overflow-hidden"
          >
            <div className="cyber-button-content font-mono uppercase tracking-widest">
              INICIAR PROJETO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          <a
            href="#servicos"
            className="cyber-button px-8 py-4 border border-brand-red/50 bg-black/40 text-brand-red hover:bg-brand-red hover:text-white transition-all font-bold text-lg backdrop-blur-md"
          >
            <div className="cyber-button-content font-mono uppercase tracking-widest">
              VER ARSENAL
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
