import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { WHATSAPP_LINK } from './constants';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gbs-black text-white selection:bg-gbs-green selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gbs-green text-black p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:scale-110 transition-all duration-300 animate-bounce group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}

export default App;