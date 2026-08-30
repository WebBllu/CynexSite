import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-red/20 py-4 shadow-xl' : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/Favicon.jpg" alt="CynexCode Logo" className="w-10 h-10 object-cover rounded-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="text-2xl font-bold tracking-tighter uppercase font-mono">
            CYNEX<span className="text-brand-red">CODE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-widest font-mono"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="cyber-button bg-brand-red/10 border border-brand-red/30 hover:bg-brand-red text-brand-red hover:text-white transition-all duration-300 neon-glow"
          >
            <div className="cyber-button-content px-5 py-2.5 font-bold text-sm uppercase tracking-widest font-mono">
              Fale Conosco
            </div>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-red hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md border-b border-brand-red/20 flex flex-col p-6 gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-brand-red text-lg font-bold uppercase tracking-widest font-mono"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 rounded-sm bg-brand-red text-white font-bold text-center w-full uppercase tracking-widest font-mono"
            >
              Fale Conosco
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
