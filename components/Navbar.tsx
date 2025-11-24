import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, WHATSAPP_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gbs-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <img src="/assets/images/logo.png" alt="GBS Digital Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tighter text-white">GBS <span className="text-gbs-green">Digital</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gbs-green transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              className="bg-gbs-green text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all transform hover:scale-105"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gbs-green focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gbs-card border-t border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-white hover:text-gbs-green border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={WHATSAPP_LINK}
                className="flex items-center justify-center w-full bg-gbs-green text-black px-4 py-3 rounded-lg font-bold"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};