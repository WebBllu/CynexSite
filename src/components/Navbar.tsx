import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useContactModal } from '../context/ContactModalContext';

const navLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Processo', href: '#processo' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const { openContactModal } = useContactModal();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const startProject = () => {
    setIsMobileMenuOpen(false);
    openContactModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-dark/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red via-brand-fire to-brand-red origin-left"
        style={{ scaleX: progress }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="./Favicon.jpg"
            alt="CynexCode Logo"
            className="w-10 h-10 object-cover rounded-full ring-2 ring-brand-red/40 group-hover:ring-brand-red transition-all"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-2xl font-bold tracking-tighter uppercase font-mono">
            CYNEX<span className="text-brand-red">CODE</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/[0.02]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest font-mono transition-colors ${
                active === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-brand-red/20 border border-brand-red/40"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.name}</span>
            </a>
          ))}
        </nav>

        <button
          onClick={startProject}
          className="hidden lg:block cyber-button bg-brand-red hover:bg-brand-fire text-white transition-all duration-300 neon-glow"
        >
          <div className="cyber-button-content px-5 py-2.5 font-bold text-sm uppercase tracking-widest font-mono">
            Iniciar projeto
          </div>
        </button>

        <button
          className="lg:hidden text-brand-red hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-red/20"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg text-lg font-bold uppercase tracking-widest font-mono transition-colors ${
                    active === link.href ? 'bg-brand-red/15 text-white' : 'text-gray-300 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={startProject}
                className="mt-4 px-6 py-4 rounded-lg bg-brand-red text-white font-bold text-center w-full uppercase tracking-widest font-mono"
              >
                Iniciar projeto
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
