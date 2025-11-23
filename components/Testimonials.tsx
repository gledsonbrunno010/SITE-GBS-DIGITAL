import React from 'react';
import { Testimonial } from '../types';
import { Button } from './Button';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    role: "Diretor Comercial, TechSol B2B",
    quote: "A GBS Digital transformou minha presença online em 48 horas! A seriedade do site novo me ajudou a fechar contratos maiores. Agora, fecho mais negócios com confiança."
  },
  {
    name: "Mariana Costa",
    role: "Vendedora Independente",
    quote: "Eu tentava fazer sozinha e perdia clientes. Com o site da GBS, meus produtos ganharam uma vitrine profissional. O retorno foi imediato, estou muito feliz!"
  },
  {
    name: "Carlos Eduardo",
    role: "CEO, Logística Rápida",
    quote: "Velocidade impressionante. Precisávamos de um site para uma campanha urgente e eles entregaram antes do prazo com uma qualidade absurda. Recomendo de olhos fechados."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gbs-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-400">Sinta a confiança que vem de resultados reais.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gbs-black p-8 rounded-2xl relative border border-white/5 shadow-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gbs-green">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
            <Button text="Quero Resultados Como Estes" variant="outline" />
        </div>
      </div>
    </section>
  );
};