import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionHeader from './SectionHeader';

const Studio = () => {
  const [index, setIndex] = useState(-1);

  const studioImages = [
    "/2025-07-01 (2).webp",
    "/2025-07-01 (3).webp",
    "/2025-07-01 (4).webp",
    "/2025-07-01 (7).webp",
  ];

  const slides = studioImages.map(src => ({ src }));

  const ImageOverlay = () => (
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <Maximize2 className="text-white drop-shadow-md" size={32} />
    </div>
  );

  return (
    // Padding deutlich reduziert für harmonischere Abstände zu About (oben) und Services (unten)
    <section id="studio" className="pt-12 pb-12 md:pt-20 md:pb-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Das Ambiente"
          title="Einblick in mein Studio"
          subtitle="Sauberkeit, Hygiene und ein Ambiente zum Wohlfühlen."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {/* Großes Bild - Links */}
          <motion.div 
            className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl md:rounded-3xl h-[300px] md:h-[600px] cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(0)}
          >
            <img src={studioImages[0]} alt="Studio 1" className="w-full h-full object-cover" />
            <ImageOverlay />
          </motion.div>
          
          {/* Klein 1 - Rechts Oben */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[145px] md:h-[290px] cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(1)}
          >
            <img src={studioImages[1]} alt="Studio 2" className="w-full h-full object-cover" />
            <ImageOverlay />
          </motion.div>
          
          {/* Klein 2 - Rechts Mitte */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[145px] md:h-[290px] cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(2)}
          >
            <img src={studioImages[2]} alt="Studio 3" className="w-full h-full object-cover" />
            <ImageOverlay />
          </motion.div>
          
          {/* Breites Bild - Unten */}
          <motion.div 
            className="col-span-2 md:col-span-2 relative overflow-hidden rounded-2xl md:rounded-3xl h-[150px] md:h-[290px] cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIndex(3)}
          >
            <img src={studioImages[3]} alt="Studio 4" className="w-full h-full object-cover" />
            <ImageOverlay />
          </motion.div>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  );
};

export default Studio;
