import React from 'react';
import { Gift, Sparkles, Activity } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Specials = () => {
  const offers = [
    {
      icon: <Sparkles className="text-[var(--color-primary)]" size={32} />,
      title: "Augenpflegeset",
      desc: "Dieses besondere Set vereint die exklusive Pflege der Aloe Vera Augenpflege mit einer belebenden Augen-Vibrationsmassage. Perfekt für strahlende Augenblicke und eine erfrischte Augenpartie.",
      image: "/IMG_7474.webp",
      color: "bg-green-50"
    },
    {
      icon: <Activity className="text-[var(--color-secondary)]" size={32} />,
      title: "Spezialbehandlung: Problemfüße",
      desc: "Pilzinfektion an Nägeln oder Füßen? Für uns kein Problem! Wir bieten professionelle Anti-Mykose-Pflege, Nagelprothetik und Schwielenbehandlung. (Privatleistung - keine Rezeptabrechnung). Auch im Hausbesuch.",
      image: "/IMG_7476.webp",
      color: "bg-blue-50"
    },
    {
      icon: <Gift className="text-[var(--color-accent)]" size={32} />,
      title: "Gutscheine & Geschenke",
      desc: "Machen Sie Ihren Liebsten eine Freude! Bei uns erhalten Sie Gutscheine, Adventskalender, exklusive Pflegesets und liebevoll verpackte Geschenke für jeden Anlass.",
      image: "/IMG_7475.webp",
      color: "bg-orange-50"
    }
  ];

  return (
    <section id="angebote" className="pt-24 md:pt-32 pb-20 md:pb-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Besonderheiten"
          title="Aktuelles & Angebote"
          subtitle="Entdecken Sie unsere speziellen Pflege-Sets und exklusiven Services."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm">
                  {offer.icon}
                </div>
              </div>
              
              <div className={`p-8 flex-1 flex flex-col ${offer.color}`}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-dark)]">{offer.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {offer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
