import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gbs-black via-gbs-black/90 to-gbs-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gbs-green/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Oferta badge - centered on mobile */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gbs-green/30 bg-gbs-green/10 text-gbs-green text-xs font-bold uppercase tracking-wider">
                Oferta Limitada: Entrega em 48h
              </div>
            </div>

            {/* Headline - centered on mobile */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-center lg:text-left">
              Fechamos o Site da Sua Empresa em até <span className="text-transparent bg-clip-text bg-gradient-to-r from-gbs-green to-white">48 Horas</span>
            </h1>

            {/* Hero image - visible on mobile, below headline */}
            <div className="lg:hidden relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15)] border border-white/10">
              <img
                src="/assets/images/hero-new.png"
                alt="Michael Cardoso - GBS Digital"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gbs-green/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl text-center lg:text-left lg:mx-0 mx-auto">
              Atendemos dentistas, Consórcio, empresas de Comunicação Visual e Imobiliárias com site feito em 48 horas.
            </p>

            {/* Quote box */}
            <div className="border-l-4 border-gbs-green pl-6 py-2 bg-white/5 rounded-r-lg">
              <p className="text-gray-300 italic font-medium">
                "Seu concorrente tem um site enquanto sua empresa deixa dinheiro na mesa. Entrego em 48 horas um site que converte leads em clientes reais no seu whatsapp."
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button text="Fale Conosco Agora" variant="primary" />
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400 px-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gbs-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gbs-green"></span>
                </span>
                Disponível para novos projetos
              </div>
            </div>
          </motion.div>

          {/* Desktop hero image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15)] border border-white/10 group">
              <img
                src="/assets/images/hero-new.png"
                alt="Michael Cardoso - GBS Digital"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gbs-green/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gbs-card p-6 rounded-lg border border-gbs-green/30 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white">48h</div>
                <div className="text-sm text-gray-400 leading-tight">
                  Tempo médio<br />de entrega
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};