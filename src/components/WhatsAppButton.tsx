import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUp, PenLine } from 'lucide-react';
import { CONTACTS, DEFAULT_MESSAGE, whatsappLink } from '../data/site';
import { useContactModal } from '../context/ContactModalContext';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="w-[300px] rounded-2xl overflow-hidden border border-white/10 bg-brand-surface shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="bg-[#075e54] px-5 py-4">
              <p className="font-bold text-white text-lg uppercase leading-tight">Fale com a CynexCode</p>
              <p className="text-xs text-white/80 font-mono">Normalmente respondemos rapidinho ⚡</p>
            </div>
            <div className="p-3 grid gap-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={whatsappLink(c.phone, DEFAULT_MESSAGE.build(c))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <span className="relative w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                    <WhatsAppIcon size={22} />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-brand-surface" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-white uppercase leading-tight">{c.name}</span>
                    <span className="block text-xs font-mono text-gray-400">{c.role}</span>
                  </span>
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openContactModal();
                }}
                className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-brand-red/40 text-brand-red hover:bg-brand-red hover:text-white py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <PenLine size={14} /> Personalizar mensagem
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTop && !open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 mr-1.5 rounded-full border border-brand-red/40 bg-black/80 backdrop-blur text-brand-red hover:bg-brand-red hover:text-white flex items-center justify-center transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
        aria-label={open ? 'Fechar contatos' : 'Fale conosco no WhatsApp'}
        aria-expanded={open}
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />}
        {open ? <X size={26} /> : <WhatsAppIcon size={28} />}
      </motion.button>
    </div>
  );
}
