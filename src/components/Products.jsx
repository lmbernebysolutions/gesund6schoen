import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from './SectionHeader';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Gehwol & Allpresan',
      desc: 'Hochwertige Pflege für Ihre Füße.',
      image: '/regal-gehwol-fusspflege-produkte.webp',
      featured: false
    },
    {
      id: 2,
      name: 'Charlotte Meentzen',
      desc: 'Naturkosmetik für echte Schönheit.',
      image: '/kosmetiktisch-behandlungsplatz.webp',
      featured: true
    },
    {
      id: 3,
      name: 'Jet Set Beauty & Nailcode',
      desc: 'Exklusive Pflege für Hände und Nägel.',
      image: '/jet-set-beauty-produkte.webp',
      featured: false
    },
    {
      id: 4,
      name: 'arcaya',
      desc: 'Hochkonzentrierte Wirkstoffampullen.',
      image: '/arcaya-wirkstoffampullen.webp',
      featured: false
    }
  ];

  return (
    // Adjusted pb-20 for mobile to match other sections
    <section id="produkte" className="pb-20 md:pb-32 pt-20 md:pt-32 bg-white relative overflow-hidden">
      {/* Dekorativer Hintergrund-Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-secondary)]/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Verwendete Marken"
          title="Unsere Partner für Kosmetikprodukte"
          subtitle="Qualität, die unter die Haut geht."
        />

        {/* Mobile: Horizontal Scroll / Desktop: Grid */}
        <div className="relative">
          {/* Swipe Indication for Mobile */}
          <div className="md:hidden absolute -top-8 right-0 flex items-center gap-1 text-xs font-bold text-gray-400 animate-pulse">
            <span>Swipe</span> <ChevronRight size={14} />
          </div>

          {/* Added pt-4 to container to prevent cropping of scaled items */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 pt-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:items-start md:overflow-visible md:pb-0 md:px-0 md:pt-0 scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[70vw] md:w-auto snap-center group text-center relative">
                {/* Runde Bühne für das Bild */}
                <div
                  className={`
                    relative w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-8 rounded-full flex items-center justify-center 
                    transition-all duration-500 overflow-hidden bg-white
                    ${product.featured
                      ? 'border-4 border-[var(--color-primary)] shadow-2xl md:scale-100 lg:scale-105'
                      : 'border border-gray-100 shadow-lg group-hover:shadow-xl'}
                  `}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <Helmet>
                    <script type="application/ld+json">
                      {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageObject",
                        "contentUrl": `https://www.gesundschoen-aue.de${product.image}`,
                        "description": product.desc,
                        "name": product.name,
                        "representativeOfPage": "False",
                        "caption": `${product.name} kaufen in Aue`,
                        "author": {
                          "@type": "Organization",
                          "name": "Gesund & Schön"
                        }
                      })}
                    </script>
                  </Helmet>
                  <h4 className="font-bold text-xl mb-3 text-[var(--color-dark)]">{product.name}</h4>
                  <p className="text-gray-600 leading-relaxed px-2 text-sm">{product.desc}</p>

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

          {/* Text List of all partners for completeness */}
          <div className="mt-10 md:mt-16 text-center px-4">
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold mb-4 md:mb-6">Offizielle Kooperationspartner</p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-8 text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              <span className="whitespace-nowrap">Charlotte Meentzen</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span className="whitespace-nowrap">arcaya</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span className="whitespace-nowrap">Jet Set Beauty</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span className="whitespace-nowrap">Nailcode</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span className="whitespace-nowrap">Gehwol</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span className="whitespace-nowrap">Allpresan</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;