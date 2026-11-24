const items = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Design Responsivo',
  'SEO',
  'UI / UX',
  'Alta Performance',
  'Integração WhatsApp',
  'Landing Pages',
  'Lojas Virtuais',
];

export default function TechMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-brand-red/15 bg-black overflow-hidden mask-fade-x" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-lg md:text-xl font-bold uppercase tracking-widest font-mono text-gray-500 whitespace-nowrap"
          >
            {item}
            <span className="text-brand-red">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
