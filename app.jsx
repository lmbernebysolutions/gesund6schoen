import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Star, Menu, X, ChevronDown, 
  CheckCircle, Sparkles, ArrowRight, Mail, Heart 
} from 'lucide-react';

// --- 1. Design Tokens & Global Styles Injection ---
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Lato:wght@300;400;700&family=Caveat:wght@400;700&display=swap');

    :root {
      --color-primary: #e2e477;
      --color-primary-dark: #c5ca47;
      --color-secondary: #d6eaf1;
      --color-secondary-dark: #b2d6e3;
      --color-accent: #C5A065;
      --color-dark: #1A1A1A;
      --color-body: #4A4A4A;
      --color-bg: #FAFAFA;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Lato', sans-serif;
      color: var(--color-body);
      background-color: var(--color-bg);
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Quicksand', sans-serif;
      color: var(--color-dark);
    }

    .font-hand {
      font-family: 'Caveat', cursive;
    }

    .blob-shape {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-dark);
      border-radius: 4px;
    }
  `}} />
);

// --- 2. Components ---

// 2.1 Navigation (Sticky & Glassmorphic)
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Kosmetik', href: '#kosmetik' },
    { name: 'Fußpflege', href: '#fusspflege' },
    { name: 'Nageldesign', href: '#nageldesign' },
    { name: 'LDM® Medical', href: '#ldm' },
    { name: 'Über Mich', href: '#ueber-mich' }, // Updated Text
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
           <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--color-primary)] group-hover:scale-105 transition-transform">
              <img src="/408546382_885268359830304_2573747060122933847_n.jpg" alt="Logo" className="object-cover w-full h-full" />
           </div>
           <div className="leading-tight">
             <span className="block font-bold text-lg text-[var(--color-dark)]">Gesund & Schön</span>
             <span className="block text-xs font-hand text-[var(--color-accent)] text-lg">im Marktgässchen</span>
           </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-wider hover:text-[var(--color-primary-dark)] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+4915735603381" className="px-6 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
            <Phone size={18} />
            <span>01573 5603381</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[var(--color-dark)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[var(--color-primary)] hover:pl-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+4915735603381" className="mt-4 w-full py-3 bg-[var(--color-primary)] text-center rounded-xl font-bold">
                Anrufen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// 2.2 Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/2025-07-01.webp" 
          alt="Studio Ambiente" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-secondary)] rounded-full blur-3xl opacity-40 z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full blur-3xl opacity-30 z-0"
      />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 bg-[var(--color-secondary)] text-[var(--color-dark)] rounded-full text-sm font-bold mb-6">
            ✨ Ihr Kosmetikstudio in Aue-Bad Schlema
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Gesund & Schön <br/>
            <span className="font-hand text-[var(--color-accent)]">im Marktgässchen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Ich vereine medizinische Kompetenz mit purem Wohlfühl-Ambiente. 
            Gönnen Sie sich eine Auszeit für Körper und Seele.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="px-8 py-4 bg-[var(--color-dark)] text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl flex items-center gap-2">
              Termin vereinbaren <ArrowRight size={20} />
            </a>
            <a href="#leistungen" className="px-8 py-4 bg-white border-2 border-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary)]/10 transition-all">
              Leistungen entdecken
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
             <div className="absolute inset-0 bg-[var(--color-primary)] rounded-blob rotate-6 opacity-20"></div>
             <img 
               src="/2025-07-01 (12).webp" 
               alt="Gesichtsbehandlung" 
               className="relative w-full h-full object-cover rounded-blob shadow-2xl z-10"
             />
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3 max-w-[200px]"
             >
               <div className="p-2 bg-green-100 rounded-full text-green-600">
                 <CheckCircle size={24} />
               </div>
               <div className="text-sm font-bold text-gray-800">
                 Zertifizierte Behandlungen
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

// 2.3 Services
const Services = () => {
  const services = [
    {
      id: 'kosmetik',
      title: 'Ganzheitliche Kosmetik',
      desc: 'Ein Mix aus medizinischem Anspruch und Wellness. Hautbildverbesserung für Sie & Ihn.',
      image: '/2025-07-01 (9).webp',
      color: 'var(--color-primary)',
      bg: 'bg-green-50'
    },
    {
      id: 'fusspflege',
      title: 'Fußpflege & Mobil',
      desc: 'Kosmetische Fußpflege auf höchstem Niveau. Mein USP: Ich komme auch zu Ihnen nach Hause!',
      image: '/2025-07-01 (4).webp',
      color: 'var(--color-secondary)',
      bg: 'bg-blue-50',
      badge: 'Hausbesuche möglich'
    },
    {
      id: 'nageldesign',
      title: 'Kreatives Nageldesign',
      desc: 'Ästhetik pur. Lassen Sie Ihre Hände sprechen mit individuellen Designs und Pflege.',
      image: '/2025-07-01 (10).webp',
      color: 'var(--color-accent)',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <section id="leistungen" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[var(--color-accent)] font-hand text-2xl block mb-2">Meine Kompetenz</span>
          <h2 className="text-4xl font-bold mb-4">Drei Säulen für Ihre Schönheit</h2>
          <p className="text-gray-600">Jeder Bereich meines Studios ist darauf spezialisiert, Ihnen das beste Ergebnis zu liefern.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[var(--color-dark)] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300`} style={{ backgroundColor: service.color }} />
              </div>
              <div className={`p-8 ${service.bg} h-full`}>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <a href="#kontakt" className="inline-flex items-center gap-2 font-bold text-[var(--color-dark)] group-hover:translate-x-2 transition-transform">
                  Termin anfragen <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2.4 LDM® Medical-SPA (UPDATED CONTENT & CONTRAST)
const LDMSection = () => {
  const features = [
    "Faltenreduktion", "Hautstraffung", "Hautverjüngung", "Moonshine Lift",
    "Akne / Hautunreinheiten", "Akne-Narben", "Dehnungsstreifen", "Cellulite-Reduktion"
  ];

  return (
    <section id="ldm" className="py-24 bg-[var(--color-dark)] text-white relative overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-secondary),_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              High-Tech Behandlung
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              LDM® Medical-SPA <br/>
              <span className="text-[var(--color-secondary)] text-3xl block mt-2 font-normal">Für einen wirklich glamourösen Auftritt</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Neue, exklusive Behandlungsmethoden, die schnell überzeugende Ergebnisse liefern, sind gefragter denn je. 
                Der innovative <strong>LDM® Medical-SPA</strong> ist eines der kosmetischen Ultraschallgeräte der LDM®-Serie von Wellcomet® 
                und bietet Behandlungen auf höchstem Niveau.
              </p>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3">Technologie: LDM® Plus & 10 MHz</h4>
                <p className="text-sm text-gray-200">
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
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img src="/2025-07-01 (8).webp" alt="LDM Behandlung" className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Application List */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Anwendungen</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
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
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--color-secondary)]">
              <Sparkles className="shrink-0" size={20} /> Wirkung auf das Gewebe
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed">
              Das Zauberwort heißt <strong>"Balance"</strong>! Ist das Gleichgewicht zwischen Aufbau und Abbau im Bindegewebe gestört, altert die Haut. LDM® Plus hilft, dieses Gleichgewicht im Gewebe zu verbessern. Das Ergebnis? Eine gesündere, schöner aussehende Haut.
            </p>
          </div>
          <div className="p-8 bg-[#2a2a22] rounded-2xl border border-[var(--color-primary)]/30 shadow-lg">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--color-primary)]">
              <div className="w-5 h-5 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[10px] shrink-0">MHz</div> 
              Wirkung auf Fettgewebe
            </h4>
            <p className="text-sm text-gray-100 leading-relaxed">
              Mit der TWL-Methode erreichen spezifische 1 MHz und 3 MHz Frequenzen effektiv tieferes Fettgewebe. Diätresistente Fettdepots können "ausgepumpt" (drainiert) und die Lipolyse lokal stimuliert werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2.5 About & Studio Gallery (UPDATED: One Person Team)
const AboutAndStudio = () => {
  const studioImages = [
    "/2025-07-01 (3).webp", // Treatment room
    "/2025-07-01 (7).webp", // Manicure table
    "/2025-07-01 (5).webp", // Vouchers/Deco
    "/2025-07-01 (11).webp", // Hands
  ];

  return (
    <section id="ueber-mich" className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">
        {/* About Text */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-[var(--color-primary)] rounded-blob z-0 transform -rotate-3"></div>
            <img 
              src="/2025-07-01 (9).webp" 
              alt="Die Inhaberin" 
              className="relative z-10 w-full rounded-blob shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[var(--color-primary-dark)] font-bold uppercase tracking-widest text-sm">Über mich & Vertrauen</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Kompetenz trifft <span className="font-hand text-5xl ml-2 text-[var(--color-accent)]">Herzlichkeit</span></h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Ich stehe für eine persönliche, vertrauensvolle Atmosphäre. 
                Ich nehme mir Zeit für Sie – weg vom schnellen Massengeschäft, hin zur individuellen Beratung.
              </p>
              <p>
                Die Google-Rezensionen meiner Kunden sprechen für sich: Ich überzeuge durch Qualität, Hygiene und deutsche Standards.
              </p>
            </div>
            
            {/* Social Proof / Reviews Placeholder */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="text-4xl font-bold text-[var(--color-dark)]">4.9</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-sm text-gray-500">Basierend auf Google Rezensionen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Gallery */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Einblick in mein Studio</h3>
          <p className="text-gray-600">Sauberkeit, Hygiene und ein Ambiente zum Wohlfühlen.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
          {studioImages.map((img, i) => (
            <motion.div 
              key={i}
              className={`relative overflow-hidden rounded-2xl h-full ${i === 0 ? 'md:col-span-2' : ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={img} alt={`Studio ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2.6 Products (Masonry Style)
const Products = () => {
  return (
    <section id="produkte" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Unsere Marken</h2>
            <p className="text-gray-600">Qualität, die unter die Haut geht.</p>
          </div>
          <div className="hidden md:block h-1 w-32 bg-[var(--color-primary)] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-[#fafafa] p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
            <img src="/2025-07-01 (1).webp" alt="Produkte Regal" className="w-full h-48 object-contain mb-6 rounded-xl bg-white p-4" />
            <h4 className="font-bold text-xl mb-2">Gehwol & Fußpflege</h4>
            <p className="text-sm text-gray-500">Medizinische Pflege für Ihre Füße.</p>
          </div>
          
          {/* Product 2 - Featured */}
          <div className="bg-[var(--color-secondary)]/20 p-8 rounded-3xl text-center transform md:-translate-y-4 shadow-xl">
            <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold mb-4">Bestseller</div>
            <img src="/2025-07-01 (2).webp" alt="Charlotte Meentzen" className="w-full h-56 object-contain mb-6 rounded-xl bg-white p-4" />
            <h4 className="font-bold text-xl mb-2">Charlotte Meentzen</h4>
            <p className="text-sm text-gray-600">Naturkosmetik für echte Schönheit.</p>
          </div>

          {/* Product 3 */}
          <div className="bg-[#fafafa] p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
            <img src="/2025-07-01 (6).webp" alt="Jet Set Beauty" className="w-full h-48 object-contain mb-6 rounded-xl bg-white p-4" />
            <h4 className="font-bold text-xl mb-2">Jet Set Beauty</h4>
            <p className="text-sm text-gray-500">Exklusive Pflege für Hände und Nägel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2.7 Contact & Footer
const Footer = () => {
  return (
    <footer id="kontakt" className="bg-[var(--color-dark)] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Kontakt Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Kontakt & Anfahrt</h3>
            <address className="not-italic space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" />
                <p>Gesund und Schön im Marktgässchen<br/>Altmarkt 5<br/>08280 Aue-Bad Schlema</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0" />
                <a href="tel:+4915735603381" className="hover:text-[var(--color-primary)] transition-colors">01573 5603381</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0" />
                <a href="mailto:info@gesund-schoen.de" className="hover:text-[var(--color-primary)] transition-colors">info@gesund-schoen.de</a>
              </div>
            </address>
          </div>

          {/* Öffnungszeiten & CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Öffnungszeiten</h3>
            <div className="flex items-start gap-3 mb-6 text-gray-300">
              <Clock className="shrink-0 mt-1" />
              <p>
                Termine nach Vereinbarung.<br/>
                <span className="text-sm opacity-70 block mt-2">Ich möchte mich voll auf Ihre Behandlung konzentrieren. Bitte rufen Sie an oder schreiben Sie mir per WhatsApp.</span>
              </p>
            </div>
            <a href="tel:+4915735603381" className="w-full block text-center py-3 bg-white text-[var(--color-dark)] font-bold rounded-xl hover:bg-[var(--color-primary)] transition-colors">
              Jetzt anrufen
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-[var(--color-primary)] transition-colors cursor-pointer">
               <MapPin size={48} />
               <span className="ml-2 font-bold">Karte laden</span>
            </div>
            {/* In production: Replace with Google Maps Embed */}
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Altmarkt+5,08280+Aue-Bad+Schlema&zoom=15&size=400x300&sensor=false&key=YOUR_API_KEY_HERE" alt="Map" className="w-full h-full object-cover opacity-30" onError={(e) => e.target.style.display='none'} />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gesund & Schön. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2.8 Floating WhatsApp Button
const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/4915735603381" 
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    aria-label="Chat on WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-black text-xs px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Termin per WhatsApp
    </span>
  </a>
);

// --- 3. Main App Layout ---

export default function App() {
  return (
    <div className="app-container">
      <GlobalStyles />
      <Navigation />
      
      <main>
        <Hero />
        <AboutAndStudio />
        <Services />
        <LDMSection />
        <Products />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}