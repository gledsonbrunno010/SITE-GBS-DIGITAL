import React from 'react';
import { Step } from '../types';
import { Button } from './Button';

const steps: Step[] = [
  {
    number: "01",
    title: "Contato Inicial via WhatsApp",
    description: "Você clica no botão, nos envia uma mensagem rápida e iniciamos o diálogo."
  },
  {
    number: "02",
    title: "Entendimento das Necessidades",
    description: "Identificamos seus objetivos, público-alvo e estilo preferido em uma conversa ágil."
  },
  {
    number: "03",
    title: "Design e Desenvolvimento",
    description: "Nossa equipe especialista cria seu layout e estrutura o site com foco em conversão."
  },
  {
    number: "04",
    title: "Entrega em 48 Horas",
    description: "Seu site vai ao ar pronto para vender. Receba o link e comece a divulgar."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-gbs-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gbs-green/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Como Funciona Nossa <br/>
              <span className="text-gbs-green">Criação de Sites</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Liberte-se da frustração de sites amadores e abrace o sucesso profissional. Nosso processo é otimizado para quem não tem tempo a perder.
            </p>
            
            <div className="bg-gbs-card p-6 rounded-xl border-l-4 border-gbs-green mb-8">
              <p className="text-white font-medium">
                "Evite meses de espera – ganhe tempo e vantagem competitiva imediata no seu mercado."
              </p>
            </div>

            <Button text="Iniciar Projeto Agora" variant="primary" />
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gbs-dark rounded-full border border-white/10 flex items-center justify-center text-gbs-green font-bold text-xl group-hover:bg-gbs-green group-hover:text-black transition-all duration-300">
                  {step.number}
                </div>
                <div className="flex-1 bg-gbs-dark/50 p-6 rounded-xl hover:bg-gbs-dark transition-colors border border-transparent hover:border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};