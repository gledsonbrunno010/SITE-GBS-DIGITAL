import React from 'react';
import { Clock, PenTool, TrendingUp, Smartphone, Shield, BarChart3 } from 'lucide-react';
import { Benefit } from '../types';
import { Button } from './Button';

const benefitsList: Benefit[] = [
  {
    title: "Entrega Rápida",
    description: "Criamos seu site em até 48 Horas para você posicionar sua empresa de forma profissional o quanto antes.",
    icon: Clock
  },
  {
    title: "Design Persuasivo",
    description: "Copies que tocam emocionalmente, criando conexão e urgência para converter visitantes em clientes fiéis.",
    icon: PenTool
  },
  {
    title: "Valor Percebido Alto",
    description: "Aqui você tem um site Premium, valorizando ainda mais a sua empresa.",
    icon: TrendingUp
  },
  {
    title: "Otimização Total",
    description: "SEO otimizado para o Google, carregamento ultrarrápido e responsividade móvel perfeita.",
    icon: Smartphone
  },
  {
    title: "Segurança e Suporte",
    description: "Integrações seguras com ferramentas de vendas e suporte contínuo para sua tranquilidade.",
    icon: Shield
  },
  {
    title: "Foco em Leads",
    description: "Perfeito para empresas ou vendedores autônomos, com elementos estrategicamente posicionados para gerar contatos.",
    icon: BarChart3
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-gbs-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Por Que Escolher a <span className="text-gbs-green">GBS Digital</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Somos especialistas em criação de sites para empresas. Aqui seu investimento se paga sozinho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div
              key={index}
              className="bg-gbs-card p-8 rounded-2xl border border-gbs-green/50 md:border-white/5 -translate-y-2 md:translate-y-0 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.2)] md:shadow-none md:hover:border-gbs-green/50 transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.2)] group"
            >
              <div className="bg-gbs-green md:bg-gbs-black w-14 h-14 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-gbs-green transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-black md:text-gbs-green md:group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button text="Quero Meu Site Profissional" variant="secondary" />
        </div>
      </div>
    </section>
  );
};