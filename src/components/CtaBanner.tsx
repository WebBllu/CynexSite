import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function CtaBanner() {
  const { openContactModal } = useContactModal();

  return (
    <section className="px-6 md:px-12 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-brand-red/40 bg-gradient-to-br from-brand-darkred via-black to-black p-10 md:p-16"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/40 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-4">
              Seu concorrente já tem site.
              <br />
              <span className="fire-text-gradient">E você?</span>
            </h2>
            <p className="font-mono text-gray-300 text-lg max-w-xl">
              Clientes procuram no Google antes de comprar. Esteja lá com um site profissional e comece a ser
              encontrado.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <button
              onClick={() => openContactModal()}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-black font-bold uppercase tracking-widest font-mono px-8 py-5 text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.35)] w-full lg:w-auto"
            >
              <WhatsAppIcon size={22} />
              Construir meu site
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="font-mono text-xs text-gray-500 text-center lg:text-right">
              Orçamento sem compromisso · Resposta rápida
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
