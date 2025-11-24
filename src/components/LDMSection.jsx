import React from 'react';
import { Sparkles } from 'lucide-react';
import ShapeDivider from './ShapeDivider';

const LDMSection = () => {
  const features = [
    "Faltenreduktion", "Hautstraffung", "Hautverjüngung", "Moonshine Lift",
    "Akne / Hautunreinheiten", "Akne-Narben", "Dehnungsstreifen", "Cellulite-Reduktion"
  ];

  return (
    <section id="ldm" className="py-20 lg:py-32 bg-[var(--color-dark)] text-white relative" style={{ overflow: 'visible' }}>
      
      {/* ------------------- SHAPE DIVIDERS ------------------- */}
      
      {/* TOP Divider: Ragt nach OBEN in die weiße Sektion.
          Der SVG-Pfad füllt den unteren Bereich. Das passt perfekt: 
          Der dunkle Boden verbindet sich mit dieser Sektion. */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-99%)', height: '120px', zIndex: 10 }}>
        <ShapeDivider color="var(--color-dark)" />
      </div>

      {/* BOTTOM Divider: Ragt nach UNTEN in die weiße Sektion.
          Wir rotieren ihn um 180 Grad.
          Dadurch ist die Füllung jetzt OBEN und verbindet sich mit dieser Sektion. */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(99%) rotate(180deg)', height: '120px', zIndex: 10 }}>
        <ShapeDivider color="var(--color-dark)" />
      </div>

      {/* ------------------------------------------------------- */}

      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-secondary),_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT: Zentriert auf Mobile, Links auf Desktop */}
          <div className="text-center lg:text-left">
            <span className="text-[var(--color-secondary)] font-hand text-2xl block mb-2">
              High-Tech Behandlung
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              LDM® Medical-SPA <br/>
              <span className="text-[var(--color-secondary)] text-3xl block mt-2 font-normal">Für einen wirklich glamourösen Auftritt</span>
            </h2>
            
            {/* Dekor-Linie: Zentriert auf Mobile */}
            <div className="mt-6 mb-8">
              <div className="h-1 w-32 bg-[var(--color-secondary)] rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Neue, exklusive Behandlungsmethoden, die schnell überzeugende Ergebnisse liefern, sind gefragter denn je. 
                Der innovative <strong>LDM® Medical-SPA</strong> ist eines der kosmetischen Ultraschallgeräte der LDM®-Serie von Wellcomet® 
                und bietet Behandlungen auf höchstem Niveau.
              </p>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left"> {/* Box Text kann linksbündig bleiben, wirkt technischer */}
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 text-center lg:text-left">Technologie: LDM® Plus & 10 MHz</h4>
                <p className="text-sm text-gray-200 text-center lg:text-left">
                  Der Behandlungserfolg resultiert aus zwei modernen Technologien. Die zusätzliche <strong>10 MHz Frequenz</strong> wirkt fast ausschließlich 
                  auf die oberen Hautschichten (Epidermis/Dermis) mit einer Halbwertstiefe von nur ca. 0,3 cm und moduliert effektiv dynamische Prozesse.
                </p>
              </div>

              <p className="text-sm italic opacity-80">
                Beinhaltet auch ein spezielles Upgrade für Körperanwendungen mit der TWL-Methode (Thixotropie-Washout-Lipolyse).
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual Representation of Tech/Beauty */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[500px] lg:h-[600px]">
              <img 
                src="/wellcomet.webp" 
                alt="LDM® Medical-SPA von Wellcomet®" 
                className="w-full h-full object-cover object-bottom opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
              
              {/* Floating Application List */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] text-center lg:text-left">Anwendungen</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-left"> {/* List items sollten linksbündig bleiben für Lesbarkeit */}
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Balance Accordion/Grid - FIX: Improved Text Contrast */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#252525] rounded-2xl border border-[var(--color-secondary)]/30 shadow-lg">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--color-secondary)] justify-center lg:justify-start">
              <Sparkles className="shrink-0" size={20} /> Wirkung auf das Gewebe
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed text-center lg:text-left">
              Das Zauberwort heißt <strong>"Balance"</strong>! Ist das Gleichgewicht zwischen Aufbau und Abbau im Bindegewebe gestört, altert die Haut. LDM® Plus hilft, dieses Gleichgewicht im Gewebe zu verbessern. Das Ergebnis? Eine gesündere, schöner aussehende Haut.
            </p>
          </div>
          <div className="p-8 bg-[#2a2a22] rounded-2xl border border-[var(--color-primary)]/30 shadow-lg">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--color-primary)] justify-center lg:justify-start">
              <div className="w-5 h-5 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[10px] shrink-0">MHz</div> 
              Wirkung auf Fettgewebe
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed text-center lg:text-left">
              Mit der TWL-Methode erreichen spezifische 1 MHz und 3 MHz Frequenzen effektiv tieferes Fettgewebe. Diätresistente Fettdepots können "ausgepumpt" (drainiert) und die Lipolyse lokal stimuliert werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LDMSection;
