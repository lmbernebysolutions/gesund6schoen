import React from 'react';
import SectionHeader from './SectionHeader';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Gehwol & Fußpflege',
      desc: 'Medizinische Pflege für Ihre Füße.',
      image: '/2025-07-01 (1).webp',
      featured: false
    },
    {
      id: 2,
      name: 'Charlotte Meentzen',
      desc: 'Naturkosmetik für echte Schönheit.',
      image: '/2025-07-01 (2).webp',
      featured: true
    },
    {
      id: 3,
      name: 'Jet Set Beauty',
      desc: 'Exklusive Pflege für Hände und Nägel.',
      image: '/2025-07-01 (6).webp',
      featured: false
    }
  ];

  return (
    // Adjusted pb-20 for mobile to match other sections
    <section id="produkte" className="pb-20 md:pb-32 pt-48 md:pt-56 bg-white relative overflow-hidden">
      {/* Dekorativer Hintergrund-Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-secondary)]/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Verwendete Marken"
          title="Unsere Marken"
          subtitle="Qualität, die unter die Haut geht."
        />

        {/* Mobile: Horizontal Scroll / Desktop: Grid */}
        <div className="relative">
          {/* Swipe Indication for Mobile */}
          <div className="md:hidden absolute -top-8 right-0 flex items-center gap-1 text-xs font-bold text-gray-400 animate-pulse">
            <span>Swipe</span> <ChevronRight size={14} />
          </div>

          {/* Added pt-4 to container to prevent cropping of scaled items */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 pt-4 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-12 md:items-start md:overflow-visible md:pb-0 md:px-0 md:pt-0 scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[80vw] md:w-auto snap-center group text-center relative">
                {/* Runde Bühne für das Bild */}
                <div 
                  className={`
                    relative w-64 h-64 md:w-72 md:h-72 mx-auto mb-8 rounded-full flex items-center justify-center 
                    transition-all duration-500 overflow-hidden
                    ${product.featured 
                      ? 'border-4 border-[var(--color-primary)] shadow-2xl scale-105' 
                      : 'border border-gray-100 shadow-lg group-hover:shadow-xl'}
                  `}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-3 text-[var(--color-dark)]">{product.name}</h4>
                  <p className="text-gray-600 leading-relaxed px-4">{product.desc}</p>
                  
                  {/* Kleiner Indikator für Bestseller beim Featured Product */}
                  {product.featured && (
                    <div className="mt-4 inline-block px-4 py-1 bg-[var(--color-primary)]/20 text-[var(--color-dark)] text-xs font-bold uppercase tracking-wider rounded-full">
                      Premium Partner
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
