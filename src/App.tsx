import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import CtaBanner from './components/CtaBanner';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ContactModalProvider } from './context/ContactModalContext';

export default function App() {
  return (
    <ContactModalProvider>
      <main className="min-h-screen bg-brand-dark flex flex-col">
        <Navbar />
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Process />
        <CtaBanner />
        <Faq />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ContactModalProvider>
  );
}
