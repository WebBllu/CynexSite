import { Instagram, Mail } from 'lucide-react';
import { CONTACTS, EMAILS, INSTAGRAM, DEFAULT_MESSAGE, whatsappLink } from '../data/site';
import WhatsAppIcon from './icons/WhatsAppIcon';

const links = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Processo', href: '#processo' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-red/20 bg-black pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <img
                src="./Favicon.jpg"
                alt="CynexCode Logo"
                className="w-10 h-10 object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold tracking-tighter uppercase font-mono">
                CYNEX<span className="text-brand-red">CODE</span>
              </span>
            </a>
            <p className="text-gray-400 font-mono text-sm max-w-sm mb-6">
              Sites modernos, rápidos e sob medida para autônomos e pequenas empresas.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-brand-red/20 bg-black hover:bg-brand-red hover:text-black transition-colors text-brand-red"
                aria-label={`Instagram ${INSTAGRAM.handle}`}
              >
                <Instagram size={20} />
              </a>
              <a
                href={whatsappLink(CONTACTS[0].phone, DEFAULT_MESSAGE.build(CONTACTS[0]))}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-brand-red/20 bg-black hover:bg-[#25D366] hover:text-black transition-colors text-brand-red"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={`mailto:${EMAILS[0]}`}
                className="p-3 rounded-lg border border-brand-red/20 bg-black hover:bg-brand-red hover:text-black transition-colors text-brand-red"
                aria-label="E-mail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Navegação</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="font-mono text-gray-300 hover:text-brand-red transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Contato</h4>
            <ul className="space-y-4">
              {CONTACTS.map((c) => (
                <li key={c.id}>
                  <a
                    href={whatsappLink(c.phone, DEFAULT_MESSAGE.build(c))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <WhatsAppIcon size={18} className="text-[#25D366] mt-1" />
                    <span>
                      <span className="block font-mono text-gray-200 group-hover:text-[#25D366] transition-colors">
                        {c.display}
                      </span>
                      <span className="block text-xs font-mono text-gray-500 uppercase">{c.name}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={INSTAGRAM.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-gray-200 hover:text-brand-red transition-colors"
                >
                  <Instagram size={18} className="text-brand-red" />
                  {INSTAGRAM.handle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAILS[0]}`}
                  className="flex items-center gap-3 font-mono text-gray-200 hover:text-brand-red transition-colors"
                >
                  <Mail size={18} className="text-brand-red" />
                  {EMAILS[0]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-brand-red/20 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-brand-red/60 text-xs font-mono uppercase tracking-widest">
            &copy; {currentYear} CynexCode. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
            Desenvolvido por <span className="text-white">Erick Venâncio</span> &{' '}
            <span className="text-white">Paulo Silas</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
