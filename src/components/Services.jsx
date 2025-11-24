import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Instagram, ExternalLink, Check, Leaf, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';
import SectionHeader from './SectionHeader';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  // Scroll-Lock wenn Modal offen ist
  useEffect(() => {
    if (selectedService || showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService, showGallery]);

  const services = [
    {
      id: 'kosmetik',
      title: 'Ganzheitliche Kosmetik',
      shortDesc: 'Hautbildverbesserung & Wellness für Sie & Ihn.',
      intro: 'Entdecken Sie individuelle Schönheit und Hautgesundheit in perfekter Harmonie. Unsere Behandlungen sind maßgeschneidert für Männer, Frauen und Jugendliche.',
      highlights: [
        { icon: <Sparkles size={20} />, text: 'Professionelle Hautanalyse & Pflegekonzepte' },
        { icon: <Leaf size={20} />, text: 'Produkte von Arcaya, Charlotte Meentzen & Declaré' },
        { icon: <Heart size={20} />, text: 'Klassische Anwendungen & Moderne Verfahren' }
      ],
      desc: `Ob gezielte Hautpflege, wohltuende Gesichtsbehandlungen oder schonende Haarentfernung – wir bieten Ihnen ganzheitliche Lösungen für Ihr Wohlbefinden. In entspannter Atmosphäre tanken Sie neue Energie, während wir Ihre Haut mit effektiven Methoden und verantwortungsvoller Pflege verwöhnen. Lassen Sie sich beraten und genießen Sie individuelle Behandlungen, die perfekt auf Ihre Bedürfnisse abgestimmt sind.`,
      image: '/2025-07-01 (8).webp',
      color: 'var(--color-primary)',
      bg: 'bg-green-50'
    },
    {
      id: 'fusspflege',
      title: 'Fußpflege & Mobil',
      shortDesc: 'Kosmetische Fußpflege (keine Podologie). Auch mobil!',
      intro: 'Unsere Fußpflege vereint Wohlbefinden und Gesundheit – für gepflegte, entspannte Füße in jeder Lebenslage.',
      highlights: [
        { icon: <Check size={20} />, text: 'Klassische Pediküre & ästhetische Verschönerung' },
        { icon: <Heart size={20} />, text: 'Spezielle Pflege für beanspruchte Füße' },
        { icon: <Sparkles size={20} />, text: 'Mobilservice: Wir kommen zu Ihnen nach Hause!' }
      ],
      desc: `Mit hochwertigen Produkten und sanften Techniken sorgen wir für langanhaltende Pflege, Geschmeidigkeit und Entspannung. Von der präzisen Nagel- und Hautpflege bis hin zur wohltuenden Massage – genießen Sie eine professionelle Behandlung, die nicht nur optisch überzeugt, sondern auch das Wohlgefühl steigert. Gönnen Sie sich und Ihren Füßen die Aufmerksamkeit, die sie verdienen!`,
      image: '/2025-07-01 (4).webp',
      color: 'var(--color-secondary)',
      bg: 'bg-blue-50',
      badge: 'Hausbesuche möglich'
    },
    {
      id: 'nageldesign',
      title: 'Kreatives Nageldesign',
      shortDesc: 'Ästhetik pur. Individuelle Designs & Pflege.',
      intro: 'Von business-tauglicher Eleganz bis hin zu kreativ ausgefallenen Designs – wir setzen Ihre Wünsche mit höchster Präzision um.',
      highlights: [
        { icon: <Sparkles size={20} />, text: 'Natürliche Looks & Extravagante Styles' },
        { icon: <Check size={20} />, text: 'Qualität & Haltbarkeit durch Profi-Produkte' },
        { icon: <Heart size={20} />, text: 'Individuelle Abstimmung für gesunde Nägel' }
      ],
      desc: `Qualität und Haltbarkeit stehen bei uns an erster Stelle. Durch den Einsatz hochwertiger Produkte und professioneller Techniken garantieren wir Ihnen langanhaltende, gepflegte Nägel. Lassen Sie sich inspirieren und verwöhnen – für perfekt gestaltete Nägel, die Ihre Persönlichkeit unterstreichen.`,
      image: '/2025-07-01 (10).webp',
      color: 'var(--color-accent)',
      bg: 'bg-orange-50',
      hasGallery: true
    },
    {
      id: 'massage',
      title: 'Wohltuende Massagen',
      shortDesc: 'Entspannung und Regeneration für Körper & Geist.',
      intro: 'Erleben Sie pure Entspannung und ganzheitliches Wohlbefinden. Lösen Sie Verspannungen und tanken Sie neue Energie.',
      highlights: [
        { icon: <Leaf size={20} />, text: 'Ganzheitliches Wohlbefinden für Körper & Geist' },
        { icon: <Check size={20} />, text: 'Gezielte Techniken gegen Verspannungen & Stress' },
        { icon: <Heart size={20} />, text: 'Wellness-Massage & belebende Fußmassage' }
      ],
      desc: `In einer entspannten Atmosphäre genießen Sie sanfte Berührungen oder tiefgehende Massagetechniken, die Ihre Muskulatur lockern und neue Energie schenken. Lassen Sie sich verwöhnen und erleben Sie die harmonische Verbindung von Erholung und Regeneration für spürbares Wohlbefinden. Jede Behandlung wird individuell auf Ihre Bedürfnisse zugeschnitten.`,
      image: '/2025-07-01 (5).webp',
      color: '#E6B89C',
      bg: 'bg-[#FFF8F0]'
    }
  ];

  const instaLinks = [
    "https://www.instagram.com/p/C9hNF7sKMEW/",
    "https://www.instagram.com/p/C9b_h50q1vB/",
    "https://www.instagram.com/p/C9b_UdhKNev/",
    "https://www.instagram.com/p/C9b_FIaqXt9/",
    "https://www.instagram.com/p/C9b-0sBKYk9/",
    "https://www.instagram.com/p/C8IL5zHKRvp/" // Neuer Link hinzugefügt
  ];

  return (
    <section id="leistungen" className="pt-20 md:pt-24 pb-48 md:pb-56 relative bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Meine Kompetenz"
          title="Vier Säulen für Ihre Schönheit"
          subtitle="Jeder Bereich meines Studios ist darauf spezialisiert, Ihnen das beste Ergebnis zu liefern."
        />

        <div className="relative">
           {/* Swipe Indication for Mobile */}
           <div className="md:hidden absolute -top-8 right-0 flex items-center gap-1 text-xs font-bold text-gray-400 animate-pulse">
             <span>Swipe</span> <ChevronRight size={14} />
           </div>

          {/* Mobile: Horizontal Scroll / Desktop: Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col
                group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white
              `}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[var(--color-dark)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {service.badge}
                  </div>
                )}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300`} style={{ backgroundColor: service.color }} />
              </div>
              
              <div className={`p-6 ${service.bg} flex-1 flex flex-col`}>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-dark)]">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.shortDesc}</p>
                
                <div className="mt-auto space-y-2">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2 px-4 bg-white border border-[var(--color-dark)]/10 rounded-xl text-sm font-bold text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    Mehr erfahren
                  </button>
                  
                  {service.hasGallery && (
                    <button 
                      onClick={() => setShowGallery(true)}
                      className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Instagram size={16} />
                      Beispiele ansehen
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal - Strukturierter Inhalt */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
            >
              <div className="relative h-48 md:h-64 shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 md:p-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6 md:p-8">
                <p className="text-lg md:text-xl text-[var(--color-dark)] font-medium mb-8 leading-relaxed">
                  {selectedService.intro}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-4">Highlights</h4>
                  <ul className="space-y-3">
                    {selectedService.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="text-[var(--color-primary-dark)]">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>{selectedService.desc}</p>
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex justify-end sticky bottom-0 bg-white pb-2">
                  <a 
                    href="#kontakt" 
                    onClick={() => setSelectedService(null)}
                    className="w-full md:w-auto px-8 py-4 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary-dark)] transition-colors inline-flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5"
                  >
                    Jetzt Termin vereinbaren <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Instagram Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGallery(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#fafafa] rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b bg-white flex justify-between items-center sticky top-0 z-10 shrink-0">
                <div className="flex items-center gap-2 text-[var(--color-dark)]">
                  <Instagram className="text-pink-500" />
                  <span className="font-bold text-lg">Unsere Werke</span>
                </div>
                <button onClick={() => setShowGallery(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {instaLinks.map((link, idx) => (
                    <div key={idx} className="flex justify-center">
                      <div className="w-full max-w-[328px] overflow-hidden rounded-xl shadow-sm">
                        <InstagramEmbed url={link} width="100%" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center pb-8">
                  <a 
                    href="https://www.instagram.com/ges.undschoen/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <Instagram size={20} />
                    Alle Werke auf Instagram ansehen <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
