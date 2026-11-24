import { motion } from 'motion/react';
import {
  LayoutTemplate,
  Building2,
  ShoppingBag,
  QrCode,
  Palette,
  RefreshCw,
  Check,
  ArrowUpRight,
  Smartphone,
  Search,
  Gauge,
  MessageCircle,
  LifeBuoy,
} from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    projectType: 'Landing Page',
    description: 'Páginas de alta conversão para anúncios, lançamentos e link da bio.',
    features: ['Foco total em conversão', 'Botões direto para o WhatsApp', 'Ideal para tráfego pago'],
  },
  {
    icon: Building2,
    title: 'Sites Institucionais',
    projectType: 'Site Institucional',
    description: 'Presença profissional que transmite confiança e autoridade para sua marca.',
    features: ['Páginas sob medida', 'Apresentação de serviços', 'Mapa, contato e redes sociais'],
  },
  {
    icon: ShoppingBag,
    title: 'Lojas Virtuais',
    projectType: 'Loja Virtual',
    description: 'Vitrine online para mostrar seus produtos e vender todos os dias.',
    features: ['Catálogo de produtos', 'Pedidos pelo WhatsApp', 'Visual que valoriza o produto'],
  },
  {
    icon: QrCode,
    title: 'Cardápios & Catálogos',
    projectType: 'Cardápio / Catálogo Digital',
    description: 'Cardápio ou catálogo digital acessível por QR Code, lindo no celular.',
    features: ['Acesso por QR Code', 'Fácil de atualizar', 'Perfeito para delivery'],
  },
  {
    icon: Palette,
    title: 'Portfólios',
    projectType: 'Portfólio',
    description: 'Mostre seus trabalhos com um portfólio marcante e memorável.',
    features: ['Galeria de projetos', 'Design autoral', 'Contato em um clique'],
  },
  {
    icon: RefreshCw,
    title: 'Redesign de Sites',
    projectType: 'Redesign de site',
    description: 'Seu site antigo de cara nova: mais moderno, rápido e responsivo.',
    features: ['Visual atualizado', 'Mais velocidade', 'Melhor experiência no celular'],
  },
];

const included = [
  { icon: Smartphone, label: 'Design responsivo' },
  { icon: Search, label: 'SEO otimizado' },
  { icon: Gauge, label: 'Carregamento rápido' },
  { icon: MessageCircle, label: 'Integração com WhatsApp' },
  { icon: LifeBuoy, label: 'Suporte com os devs' },
];

export default function Services() {
  const { openContactModal } = useContactModal();

  return (
    <section id="servicos" className="py-28 relative bg-black border-y border-brand-red/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-red/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="section-tag">// Serviços</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter"
          >
            NOSSO{' '}
            <span className="text-brand-red glitch-text" data-text="ARSENAL">
              ARSENAL
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-mono"
          >
            Escolha o tipo de site ideal para o seu negócio. Clique em um serviço e já fale com a gente.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="cyber-card p-8 bg-brand-surface border border-brand-red/20 group hover:border-brand-red hover:bg-brand-red/5 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-3 opacity-40 font-mono text-xs text-brand-red/60">
                SYS_0{index + 1}
              </div>

              <div className="mb-6 inline-flex w-fit p-4 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-red group-hover:bg-brand-red group-hover:text-black transition-colors duration-300">
                <service.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 uppercase font-mono tracking-wide">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-mono text-gray-300">
                    <Check size={16} className="text-brand-red shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openContactModal({ projectType: service.projectType })}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest font-mono text-brand-red group-hover:text-white transition-colors"
              >
                Quero esse
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
        >
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
            Todo projeto inclui
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {included.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 font-mono text-sm text-gray-300">
                <Icon size={18} className="text-brand-red" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
