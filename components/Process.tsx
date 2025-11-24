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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lg:text-left">
              Criamos o seu site em <br />
              <span className="text-gbs-green">Tempo Record</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed text-center lg:text-left">
              Não espere mais para ter um site totalmente profissional e com poder de converter o usuário em Cliente Real para sua Empresa.
            </p>


            {/* Office scene image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg relative">
              {/* Background blur decoration behind the image */}
              <div className="absolute -inset-4 bg-gbs-green/10 rounded-full blur-[60px] -z-10"></div>
              <img
                src="/assets/images/process-office.png"
                alt="Equipe GBS Digital trabalhando"
                className="w-full h-auto relative z-10"
              />
            </div>

            <div className="bg-gbs-card p-6 rounded-xl border-l-4 border-gbs-green mb-8">
              <p className="text-white font-medium italic">
                "Não perca seus clientes para a concorrência por não ter um site profissional, entre em contato agora mesmo para ter seu site no ar."
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button text="Iniciar Projeto Agora" variant="primary" />
            </div>
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