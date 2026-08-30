import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Copy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const emails = ['cinexcode@gmail.com', 'erickwbsites@gmail.com'];
  
  const emailSubject = encodeURIComponent("Interesse em Desenvolvimento de Site - CynexCode");
  const emailBody = encodeURIComponent("Olá equipe da CynexCode! Tudo bem?\n\nEstive navegando pelo site de vocês e fiquei interessado(a) nos serviços de desenvolvimento web. Gostaria de saber mais informações sobre orçamentos e como funciona o processo para criar um site moderno para o meu negócio.\n\nAguardo o retorno!");

  return (
    <section id="contato" className="py-24 relative overflow-hidden cyber-grid">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
          >
            INICIAR <span className="fire-text-gradient glitch-text" data-text="OPERAÇÃO">OPERAÇÃO</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto text-lg font-mono"
          >
            Pronto para implementar o código-fonte do seu sucesso? Acesse nossos canais de comunicação.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <motion.a
            href="https://instagram.com/cinexcode"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 border border-brand-red/20 bg-black/60 flex flex-col items-center justify-center text-center group hover:bg-brand-red/5 hover:border-brand-red hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 rounded-sm bg-gradient-to-tr from-brand-red to-brand-darkred p-[2px] mb-6 group-hover:scale-110 transition-transform relative z-10">
              <div className="w-full h-full bg-black rounded-sm flex items-center justify-center">
                <Instagram size={28} className="text-brand-red group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest font-mono">Instagram</h3>
            <p className="text-brand-red font-bold text-lg font-mono">@cinexcode</p>
          </motion.a>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-8 border border-brand-red/20 bg-black/60 flex flex-col justify-center backdrop-blur-sm hover:-translate-y-2 hover:border-brand-red hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-sm bg-brand-red/10 border border-brand-red/30">
                <Mail size={28} className="text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest font-mono">E-mail</h3>
            </div>
            
            <div className="space-y-4">
              {emails.map((email) => (
                <div key={email} className="flex items-center justify-between p-4 rounded-sm border border-brand-red/10 bg-black group hover:border-brand-red/50 transition-colors">
                  <a href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`} className="text-gray-400 hover:text-brand-red transition-colors truncate font-mono text-sm">
                    {email}
                  </a>
                  <button
                    onClick={() => handleCopy(email)}
                    className="text-brand-red/50 hover:text-brand-red p-2 transition-colors ml-2"
                    aria-label="Copiar email"
                  >
                    {copiedEmail === email ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20equipe%20da%20CynexCode!%20Acessei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto%20web.%20Podemos%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group cyber-button inline-block border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-lg transition-all"
          >
            <div className="cyber-button-content px-8 py-4 font-mono uppercase tracking-widest">
              ESTABELECER CONEXÃO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
