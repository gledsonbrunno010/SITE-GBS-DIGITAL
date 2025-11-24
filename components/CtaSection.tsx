import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gbs-green/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gbs-black via-transparent to-gbs-black"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Invista no Futuro Digital da Sua <span className="text-gbs-green">Empresa</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Geramos o seu site com preços acessíveis e garantimos que o investimento se auto-pagará, aumentando a receita da sua empresa.
        </p>

        <div className="bg-gbs-card border border-gbs-green/30 rounded-2xl p-8 md:p-12 mb-10 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gbs-green flex-shrink-0" />
              <span className="text-white">Economize tempo e estresse</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gbs-green flex-shrink-0" />
              <span className="text-white">Reduza custos com agências lentas</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gbs-green flex-shrink-0" />
              <span className="text-white">Site que vende por você 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gbs-green flex-shrink-0" />
              <span className="text-white">Suporte dedicado</span>
            </div>
          </div>
          <Button text="Fale com Especialista Agora" variant="primary" fullWidth className="md:w-auto" />
        </div>

        <p className="text-sm text-gray-500">
          Não perca mais vendas por não ter um site profissional. A hora é agora.
        </p>
      </div>
    </section>
  );
};