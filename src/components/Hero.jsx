import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';

const Hero = () => {
  return (
    // pt-28 md:pt-32, pb-12 md:pb-16
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <HeroBackgroundAnimation />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left" // Mobile Center, Desktop Left
        >
          <div className="inline-block px-4 py-1 bg-[var(--color-secondary)] text-[var(--color-dark)] rounded-full text-sm font-bold mb-6 shadow-sm">
            ✨ Ihr Kosmetikstudio in Aue-Bad Schlema
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            Gesund & Schön <br/>
            <span className="font-hand text-[var(--color-accent)] block mt-2">im Marktgässchen</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg drop-shadow-sm mx-auto lg:mx-0" style={{ textShadow: '0 1px 5px rgba(255,255,255,0.8)' }}>
            Wir vereinen fachliche Kompetenz mit purem Wohlfühl-Ambiente. 
            Gönnen Sie sich eine Auszeit für Körper und Seele.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#kontakt" className="px-8 py-4 bg-[var(--color-dark)] text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-2 min-h-[50px]">
              Termin vereinbaren <ArrowRight size={20} />
            </a>
            <a href="#leistungen" className="px-8 py-4 bg-white border-2 border-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary)]/10 transition-all text-center min-h-[50px] flex items-center justify-center">
              Leistungen entdecken
            </a>
          </div>
        </motion.div>

        {/* IMAGE CONTENT - Jetzt auch auf Mobile sichtbar! */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-3/4 sm:w-full aspect-square max-w-[400px] lg:max-w-[600px] mx-auto">
             <div className="absolute inset-0 bg-[var(--color-primary)] rounded-blob rotate-6 opacity-20"></div>
             <img 
               src="/2025-07-01 (12).webp" 
               alt="Gesichtsbehandlung" 
               className="relative w-full h-full object-cover rounded-blob shadow-2xl z-10"
               fetchPriority="high"
             />
             {/* Badge: Auf Mobile etwas kleiner/angepasst */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 -left-4 lg:bottom-10 lg:-left-10 bg-white p-3 lg:p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3 max-w-[160px] lg:max-w-[200px]"
             >
               <div className="p-2 bg-green-100 rounded-full text-green-600">
                 <CheckCircle size={20} className="lg:w-6 lg:h-6" />
               </div>
               <div className="text-xs lg:text-sm font-bold text-gray-800">
                 Professionelle Pflege
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hidden sm:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
