import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import ContactModal from '../components/ContactModal';
import type { ContactId } from '../data/site';

interface OpenOptions {
  contactId?: ContactId;
  projectType?: string;
}

interface ContactModalContextValue {
  openContactModal: (options?: OpenOptions) => void;
}

const ContactModalContext = createContext<ContactModalContextValue>({
  openContactModal: () => {},
});

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OpenOptions>({});

  const openContactModal = useCallback((opts: OpenOptions = {}) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={close}
        initialContactId={options.contactId}
        initialProjectType={options.projectType}
      />
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
