import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Check, Sparkles, MessageSquareText } from 'lucide-react';
import {
  CONTACTS,
  PROJECT_TYPES,
  QUICK_MESSAGES,
  buildProjectMessage,
  getContact,
  whatsappLink,
  type ContactId,
} from '../data/site';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialContactId?: ContactId;
  initialProjectType?: string;
}

const inputClass =
  'w-full bg-black/70 border border-white/10 focus:border-brand-red focus:ring-2 focus:ring-brand-red/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-600 font-mono text-sm transition-all';

export default function ContactModal({ isOpen, onClose, initialContactId, initialProjectType }: Props) {
  const [contactId, setContactId] = useState<ContactId>('adm');
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [details, setDetails] = useState('');
  const [quickId, setQuickId] = useState<string | null>(null);

  // Aplica as opções iniciais toda vez que o modal abre
  useEffect(() => {
    if (!isOpen) return;
    setContactId(initialContactId ?? 'adm');
    if (initialProjectType) setProjectType(initialProjectType);
    setQuickId(null);
  }, [isOpen, initialContactId, initialProjectType]);

  // Fecha com ESC e trava o scroll da página
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  const contact = getContact(contactId);

  const message = useMemo(() => {
    const quick = QUICK_MESSAGES.find((q) => q.id === quickId);
    if (quick) return quick.build(contact);
    return buildProjectMessage({ contact, name, business, projectType, details });
  }, [contact, name, business, projectType, details, quickId]);

  const handleSend = () => {
    window.open(whatsappLink(contact.phone, message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  // Ao editar o formulário, volta para a mensagem personalizada
  const custom = <T,>(setter: (v: T) => void) => (v: T) => {
    setQuickId(null);
    setter(v);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-brand-surface border border-brand-red/30 rounded-t-3xl sm:rounded-3xl shadow-[0_0_80px_rgba(255,0,0,0.25)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 sm:p-8 pb-4 bg-brand-surface/95 backdrop-blur border-b border-white/5">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-red mb-2">
                  <Sparkles size={14} /> Vamos construir juntos
                </span>
                <h2 id="contact-modal-title" className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                  Monte sua mensagem
                </h2>
                <p className="text-gray-400 font-mono text-sm mt-1">
                  Escolha com quem falar, conte um pouco do seu projeto e envie direto pelo WhatsApp.
                </p>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 pt-6 grid gap-8">
              {/* 1. Contato */}
              <div>
                <p className="step-label">01 · Com quem você quer falar?</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {CONTACTS.map((c) => {
                    const active = c.id === contactId;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setContactId(c.id)}
                        className={`relative text-left p-4 rounded-xl border transition-all ${
                          active
                            ? 'border-[#25D366] bg-[#25D366]/10 shadow-[0_0_25px_rgba(37,211,102,0.15)]'
                            : 'border-white/10 bg-black/40 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              active ? 'bg-[#25D366] text-black' : 'bg-white/5 text-[#25D366]'
                            }`}
                          >
                            <WhatsAppIcon size={20} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-white text-lg leading-tight uppercase">{c.name}</p>
                            <p className="text-xs font-mono text-gray-400">{c.display}</p>
                          </div>
                          {active && <Check size={18} className="ml-auto text-[#25D366]" />}
                        </div>
                        <p className="text-xs font-mono text-gray-500 mt-3">{c.role}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Mensagens rápidas */}
              <div>
                <p className="step-label">02 · Mensagem rápida (opcional)</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_MESSAGES.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setQuickId(quickId === q.id ? null : q.id)}
                      className={`chip ${quickId === q.id ? 'chip-active' : ''}`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Personalizar */}
              <div className={`grid gap-4 transition-opacity ${quickId ? 'opacity-50' : ''}`}>
                <p className="step-label !mb-0">03 · Ou personalize sua mensagem</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    className={inputClass}
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => custom(setName)(e.target.value)}
                  />
                  <input
                    className={inputClass}
                    placeholder="Nome do seu negócio"
                    value={business}
                    onChange={(e) => custom(setBusiness)(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => custom(setProjectType)(t)}
                      className={`chip ${!quickId && projectType === t ? 'chip-active' : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <textarea
                  className={`${inputClass} min-h-[96px] resize-y`}
                  placeholder="Conte um pouco sobre o que você precisa (ex.: site para minha barbearia com agendamento pelo WhatsApp)"
                  value={details}
                  onChange={(e) => custom(setDetails)(e.target.value)}
                />
              </div>

              {/* Preview */}
              <div>
                <p className="step-label flex items-center gap-2">
                  <MessageSquareText size={14} /> Prévia da mensagem
                </p>
                <div className="rounded-2xl bg-[#0b141a] border border-white/5 p-4 sm:p-5">
                  <div className="ml-auto max-w-[95%] w-fit rounded-xl rounded-tr-sm bg-[#005c4b] px-4 py-3 text-sm text-gray-100 whitespace-pre-wrap leading-relaxed shadow">
                    {message.replace(/\*/g, '')}
                  </div>
                  <p className="text-right text-[10px] text-gray-500 mt-1 font-mono">para {contact.name} · {contact.display}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 p-6 sm:px-8 bg-brand-surface/95 backdrop-blur border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-xs font-mono text-gray-500">Você poderá editar a mensagem antes de enviar no WhatsApp.</p>
              <button
                onClick={handleSend}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-black font-bold uppercase tracking-widest font-mono px-6 py-4 transition-all shadow-[0_0_30px_rgba(37,211,102,0.35)]"
              >
                <WhatsAppIcon size={20} />
                Enviar para {contact.name}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
