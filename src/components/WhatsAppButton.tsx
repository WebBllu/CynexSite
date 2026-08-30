import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      href="https://wa.me/5511999999999?text=Ol%C3%A1%20equipe%20da%20CynexCode!%20Acessei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto%20web.%20Podemos%20conversar%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-black border border-[#25D366] text-[#25D366] cyber-card shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#25D366] hover:text-black hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 cyber-card bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
    </motion.a>
  );
}
