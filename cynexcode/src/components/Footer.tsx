import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-red/20 bg-black pt-16 pb-8 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        <a href="#" className="flex items-center gap-3 mb-6">
          <img src="/Favicon.jpg" alt="CynexCode Logo" className="w-8 h-8 object-cover rounded-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="text-2xl font-bold tracking-tighter uppercase font-mono">
            CYNEX<span className="text-brand-red">CODE</span>
          </span>
        </a>
        
        <p className="text-gray-400 font-mono text-sm mb-8 max-w-md">
          SISTEMA DESENVOLVIDO POR <span className="text-white font-bold">ERICK VENÂNCIO</span> & <span className="text-white font-bold">PAULO SILAS</span>.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <a
            href="https://instagram.com/cinexcode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-sm border border-brand-red/20 bg-black hover:bg-brand-red hover:text-black transition-colors text-brand-red"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:cinexcode@gmail.com"
            className="p-3 rounded-sm border border-brand-red/20 bg-black hover:bg-brand-red hover:text-black transition-colors text-brand-red"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="w-full h-[1px] bg-brand-red/20 mb-8" />

        <p className="text-brand-red/50 text-xs font-mono uppercase tracking-widest">
          &copy; {currentYear} CYNEXCODE. TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
