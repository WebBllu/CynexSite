import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Quanto custa um site?',
    a: 'Depende do tipo de projeto, da quantidade de páginas e das funcionalidades. Chame a gente no WhatsApp, conte o que você precisa e enviamos um orçamento sem compromisso.',
  },
  {
    q: 'Quanto tempo leva para ficar pronto?',
    a: 'O prazo é definido no orçamento conforme a complexidade. Landing pages costumam ser bem mais rápidas que sites com várias páginas. Você acompanha todas as etapas.',
  },
  {
    q: 'O site vai funcionar bem no celular?',
    a: 'Sim! Todos os nossos sites são 100% responsivos e pensados primeiro para o celular, de onde vem a maior parte dos acessos hoje.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não se preocupe. Te orientamos em todo o processo de registro de domínio (ex.: seunegocio.com.br) e na hospedagem para colocar o site no ar.',
  },
  {
    q: 'Vou aparecer no Google?',
    a: 'Desenvolvemos com boas práticas de SEO (código limpo, velocidade, títulos e descrições otimizadas), o que ajuda seu site a ser encontrado nas buscas.',
  },
  {
    q: 'E se eu precisar alterar algo depois?',
    a: 'É só chamar! Você fala direto com quem desenvolveu o seu site para ajustes, atualizações ou novas funcionalidades.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-tag">// Dúvidas frequentes</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
          >
            PERGUNTAS <span className="text-brand-red">&</span> RESPOSTAS
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'border-brand-red/50 bg-brand-red/5' : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">{item.q}</span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-brand-red transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 font-mono text-sm text-gray-400 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
