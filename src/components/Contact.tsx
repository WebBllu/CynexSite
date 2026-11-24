import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Copy, CheckCircle2, ArrowUpRight, PenLine } from 'lucide-react';
import { CONTACTS, EMAILS, INSTAGRAM, QUICK_MESSAGES, whatsappLink } from '../data/site';
import { useContactModal } from '../context/ContactModalContext';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  const emailSubject = encodeURIComponent('Quero construir meu site - CynexCode');
  const emailBody = encodeURIComponent(
    'Olá equipe da CynexCode! Tudo bem?\n\nVim pelo site de vocês e tenho interesse em construir um site para o meu negócio. Gostaria de saber mais sobre orçamento e como funciona o processo.\n\nAguardo o retorno!',
  );

  return (
    <section id="contato" className="py-28 relative overflow-hidden cyber-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="section-tag">// Contato</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter"
          >
            INICIAR{' '}
            <span className="fire-text-gradient glitch-text" data-text="OPERAÇÃO">
              OPERAÇÃO
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-mono"
          >
            Escolha com quem quer falar e envie uma mensagem pronta com um clique — ou personalize do seu jeito.
          </motion.p>
        </div>

        {/* WhatsApp */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CONTACTS.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cyber-card p-7 md:p-8 border border-white/10 bg-black/70 backdrop-blur-sm hover:border-[#25D366]/60 hover:shadow-[0_0_40px_rgba(37,211,102,0.12)] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center">
                  <WhatsAppIcon size={28} />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide text-white leading-tight">{c.name}</h3>
                  <p className="text-xs font-mono text-[#25D366] uppercase tracking-widest">{c.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 pl-4 rounded-xl border border-white/10 bg-black mb-4">
                <a
                  href={whatsappLink(c.phone, QUICK_MESSAGES[0].build(c))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg text-white hover:text-[#25D366] transition-colors"
                >
                  {c.display}
                </a>
                <button
                  onClick={() => handleCopy(c.display)}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                  aria-label={`Copiar número ${c.name}`}
                >
                  {copied === c.display ? <CheckCircle2 size={18} className="text-[#25D366]" /> : <Copy size={18} />}
                </button>
              </div>

              <p className="text-sm font-mono text-gray-400 mb-5">{c.description}</p>

              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-gray-500 mb-3">Mensagens prontas</p>
              <div className="grid gap-2 mb-6">
                {QUICK_MESSAGES.map((q) => (
                  <a
                    key={q.id}
                    href={whatsappLink(c.phone, q.build(c))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-mono text-gray-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white transition-all"
                  >
                    <span>💬 {q.label}</span>
                    <ArrowUpRight size={16} className="text-[#25D366] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              <button
                onClick={() => openContactModal({ contactId: c.id })}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-black font-bold uppercase tracking-widest font-mono px-5 py-4 transition-colors"
              >
                <PenLine size={16} /> Escrever mensagem personalizada
              </button>
            </motion.div>
          ))}
        </div>

        {/* Instagram + E-mail */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
          <motion.a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-7 border border-white/10 bg-black/70 flex items-center gap-5 group hover:border-[#E1306C]/60 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(225,48,108,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[2px] group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <Instagram size={26} className="text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold uppercase tracking-widest font-mono text-white">Instagram</h3>
              <p className="text-[#E1306C] font-bold text-lg font-mono">{INSTAGRAM.handle}</p>
              <p className="text-xs font-mono text-gray-500">Veja nossos projetos e novidades</p>
            </div>
            <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="cyber-card p-7 border border-white/10 bg-black/70 backdrop-blur-sm hover:border-brand-red/60 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-brand-red/10 border border-brand-red/30">
                <Mail size={24} className="text-brand-red" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest font-mono">E-mail</h3>
            </div>
            <div className="space-y-2">
              {EMAILS.map((email) => (
                <div
                  key={email}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-black hover:border-brand-red/40 transition-colors"
                >
                  <a
                    href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                    className="text-gray-300 hover:text-brand-red transition-colors truncate font-mono text-sm"
                  >
                    {email}
                  </a>
                  <button
                    onClick={() => handleCopy(email)}
                    className="text-gray-500 hover:text-white p-1 transition-colors ml-2"
                    aria-label="Copiar e-mail"
                  >
                    {copied === email ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
