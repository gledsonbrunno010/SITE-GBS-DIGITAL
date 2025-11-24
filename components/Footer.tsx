import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gbs-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/assets/images/logo.png" alt="GBS Digital Logo" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-bold text-white">GBS <span className="text-gbs-green">Digital</span></span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Especialistas em criar presença digital de alto impacto para empresas e vendedores. Transformamos visitantes em clientes em tempo recorde.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gbs-card flex items-center justify-center text-gray-400 hover:bg-gbs-green hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} className="w-10 h-10 rounded-full bg-gbs-card flex items-center justify-center text-gray-400 hover:bg-gbs-green hover:text-black transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:contato@gbsdigital.com" className="w-10 h-10 rounded-full bg-gbs-card flex items-center justify-center text-gray-400 hover:bg-gbs-green hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#beneficios" className="text-gray-400 hover:text-gbs-green transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-gbs-green transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-gbs-green transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-gbs-green transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 flex items-start gap-3">
                <Phone size={18} className="mt-1 text-gbs-green" />
                <span>+55 61 99192-2993</span>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <Mail size={18} className="mt-1 text-gbs-green" />
                <span>contato@gbsdigital.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 GBS Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};