import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-[var(--color-dark)] text-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Kontakt Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-8 bg-[var(--color-primary)] rounded-full block"></span>
              Kontakt
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-[var(--color-primary)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Gesund & Schön</p>
                  <p className="text-gray-300">Marktgässchen 4</p>
                  <p className="text-gray-300">08280 Aue-Bad Schlema</p>
                  <a 
                    href="https://maps.google.com/?q=Gesund+und+Schön+Marktgässchen+4+Aue-Bad+Schlema" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] text-sm mt-2 inline-block hover:underline"
                  >
                    Route planen →
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full text-[var(--color-primary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Telefon & WhatsApp</p>
                  <a href="tel:+4915735603381" className="font-bold text-xl text-white hover:text-[var(--color-primary)] transition-colors">
                    01573 5603381
                  </a>
                  <p className="mt-1">
                    <a href="mailto:gesundundschoen5@gmail.com" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                      gesundundschoen5@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-full text-[#E1306C]"> {/* Instagram Pink */}
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Folgen Sie uns</p>
                  <a 
                    href="https://www.instagram.com/ges.undschoen/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-white hover:text-[#E1306C] transition-colors"
                  >
                    @ges.undschoen
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-8 bg-[var(--color-secondary)] rounded-full block"></span>
              Öffnungszeiten
            </h3>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-bold text-gray-200">Montag - Freitag</span>
                  <span className="text-[var(--color-primary)] font-bold">nach Vereinbarung</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-gray-400">Samstag & Sonntag</span>
                  <span className="text-gray-500">Geschlossen</span>
                </li>
              </ul>
              <div className="mt-6 flex items-start gap-3 text-sm text-gray-300 bg-white/5 p-4 rounded-xl">
                <Clock size={18} className="shrink-0 mt-0.5 text-[var(--color-primary)]" />
                <p>
                  Um Wartezeiten zu vermeiden und uns volle Zeit für Sie zu nehmen, arbeiten wir ausschließlich mit Terminen.
                </p>
              </div>
            </div>
          </div>

          {/* Karte */}
          <div className="lg:col-span-1 h-full min-h-[300px] rounded-3xl overflow-hidden relative border-4 border-white/10 shadow-xl">
             <iframe 
               title="Standort Karte"
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight="0" 
               marginWidth="0" 
               style={{ filter: 'grayscale(100%) invert(90%)' }}
               src="https://maps.google.com/maps?q=Gesund+und+Schön+Marktgässchen+4+Aue-Bad+Schlema&t=&z=15&ie=UTF8&iwloc=&output=embed"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-4 border-[var(--color-primary)]/20 rounded-3xl"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Gesund & Schön. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
