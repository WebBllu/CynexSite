// Central de informações de contato e mensagens da CynexCode.
// Altere aqui e o site inteiro é atualizado.

export const INSTAGRAM = {
  handle: '@cynexcode',
  url: 'https://instagram.com/cynexcode',
};

export const EMAILS = ['cinexcode@gmail.com', 'erickwbsites@gmail.com'];

export type ContactId = 'adm' | 'web';

export interface Contact {
  id: ContactId;
  name: string;
  role: string;
  phone: string; // formato internacional, só números (usado no wa.me)
  display: string; // formato exibido no site
  description: string;
}

export const CONTACTS: Contact[] = [
  {
    id: 'adm',
    name: 'ADM Cynex',
    role: 'Atendimento & Orçamentos',
    phone: '5511975394168',
    display: '+55 11 97539-4168',
    description: 'Orçamentos, prazos, formas de pagamento e parcerias.',
  },
  {
    id: 'web',
    name: 'Cynex WEB',
    role: 'Projetos & Suporte Técnico',
    phone: '5511921165789',
    display: '+55 11 92116-5789',
    description: 'Dúvidas técnicas, novos projetos e atualizações do seu site.',
  },
];

export const getContact = (id: ContactId) => CONTACTS.find((c) => c.id === id) ?? CONTACTS[0];

export const PROJECT_TYPES = [
  'Landing Page',
  'Site Institucional',
  'Loja Virtual',
  'Cardápio / Catálogo Digital',
  'Portfólio',
  'Redesign de site',
  'Outro projeto',
];

export interface QuickMessage {
  id: string;
  label: string;
  build: (contact: Contact) => string;
}

// Mensagens prontas que o cliente pode enviar com um clique.
export const QUICK_MESSAGES: QuickMessage[] = [
  {
    id: 'orcamento',
    label: 'Quero um orçamento',
    build: (c) =>
      `Olá, ${c.name}! 👋\n\nVim pelo site da CynexCode e gostaria de um orçamento para construir o site do meu negócio.\n\nPodemos conversar? 🚀`,
  },
  {
    id: 'landing',
    label: 'Quero uma landing page',
    build: (c) =>
      `Olá, ${c.name}! 👋\n\nQuero criar uma landing page profissional para divulgar meu produto/serviço e atrair mais clientes.\n\nComo funciona o processo com vocês?`,
  },
  {
    id: 'loja',
    label: 'Quero vender online',
    build: (c) =>
      `Olá, ${c.name}! 🛒\n\nQuero ter um site para mostrar e vender meus produtos online.\n\nVocês podem me ajudar a montar a minha loja?`,
  },
  {
    id: 'redesign',
    label: 'Renovar meu site',
    build: (c) =>
      `Olá, ${c.name}! ✨\n\nJá tenho um site, mas quero deixá-lo mais moderno, rápido e bonito no celular.\n\nPodemos conversar sobre um redesign?`,
  },
];

export const DEFAULT_MESSAGE = QUICK_MESSAGES[0];

export function whatsappLink(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

interface ProjectMessageInput {
  contact: Contact;
  name: string;
  business: string;
  projectType: string;
  details: string;
}

// Monta a mensagem personalizada a partir do formulário.
export function buildProjectMessage({ contact, name, business, projectType, details }: ProjectMessageInput) {
  const n = name.trim();
  const b = business.trim();
  const d = details.trim();

  const lines: string[] = [`Olá, ${contact.name}! 👋`, ''];

  if (n && b) lines.push(`Meu nome é *${n}* e falo pela *${b}*.`);
  else if (n) lines.push(`Meu nome é *${n}*.`);
  else if (b) lines.push(`Falo em nome da *${b}*.`);

  lines.push(`Vim pelo site da CynexCode e quero construir um projeto de *${projectType}* com vocês.`);

  if (d) lines.push('', `📝 *Sobre o projeto:* ${d}`);

  lines.push('', 'Podemos conversar sobre orçamento e prazos? 🚀');

  return lines.join('\n');
}
