import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const About = () => {
  const imageWithReview = (
    <div className="relative w-full lg:h-full">
      <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-[var(--color-primary)] rounded-blob z-0 transform -rotate-3 hidden lg:block"></div>
      
            <div className="relative z-10 w-full rounded-blob shadow-xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full">
                <img 
                  src="/2025-07-01 (9).webp" 
                  alt="Die Inhaberin" 
                  className="w-full h-full object-cover object-[25%_center]"
                />
              </div>

      {/* Social Proof Badge */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 z-20 bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[280px]"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="text-3xl lg:text-4xl font-bold text-[var(--color-dark)]">4.9</div>
          <div>
            <div className="flex text-yellow-400 text-xs lg:text-sm">
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Google Rezensionen</p>
          </div>
        </div>
        
        <a 
          href="https://g.page/r/..." 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs lg:text-sm font-bold rounded-lg border border-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          Bewertung abgeben <ExternalLink size={12} />
        </a>
      </motion.div>
    </div>
  );

  return (
    <section id="ueber-mich" className="pt-24 pb-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* DESKTOP BILD (Links) - Nur auf Desktop sichtbar */}
          <div className="hidden lg:block lg:w-1/2 relative h-[600px]">
            {imageWithReview}
          </div>
          
          {/* TEXT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-[var(--color-accent)] font-hand text-2xl block mb-2">Über mich & Vertrauen</span>
            <h2 className="text-4xl font-bold mb-4">Schönheit & <span className="font-hand text-5xl ml-2 text-[var(--color-accent)]">Balance</span></h2>
            
            <div className="mb-6">
              <div className="h-1 w-32 bg-[var(--color-primary)] rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-8 text-gray-600 text-lg">
              {/* Erster Textblock */}
              <div>
                <p className="mb-4">
                  Unser Kosmetikstudio steht für verantwortungsvolle, kundenorientierte Pflege und individuelle Behandlungen, 
                  die Schönheit und Wohlbefinden in Einklang bringen.
                </p>
                <p>
                  Mit modernster Technologie und bewährten Methoden bieten wir ganzheitliche Anwendungen von Kopf bis Fuß – für gesunde Haut und innere Balance. 
                  In entspannter, persönlicher Atmosphäre nehmen wir uns Zeit für Ihre Bedürfnisse.
                </p>
              </div>

              {/* MOBILE BILD (Mitte) - Nur auf Mobile sichtbar, zwischen den Texten */}
              <div className="lg:hidden w-full max-w-md mx-auto my-12 relative">
                {imageWithReview}
              </div>

              {/* Ayurveda Block (Unten) */}
              <p className="font-medium text-[var(--color-dark)] pt-2">
                <span className="text-xl mr-2">🌱</span>
                Aktuell erweitern wir unser Wissen in der Ausbildung zum geprüften <strong>Ayurveda-Gesundheitsberater</strong>, 
                um Ihre ganzheitliche Gesundheit noch besser zu unterstützen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

