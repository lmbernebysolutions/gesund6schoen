import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Body-Scroll-Lock für Mobile Menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Über uns', href: '#ueber-mich', type: 'hash' },
    { name: 'Studio', href: '#studio', type: 'hash' },
    { name: 'Leistungen', href: '#leistungen', type: 'hash' },
    { name: 'LDM Medical', href: '/leistungen/ldm-medical', type: 'page' },
    { name: 'Aktuelles', href: '#angebote', type: 'hash' },
    { name: 'Marken', href: '#produkte', type: 'hash' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verbessertes Scroll-Spy ohne IntersectionObserver für mehr Zuverlässigkeit
  useEffect(() => {
    const handleScrollSpy = () => {
      // Wir nutzen einen Offset (z.B. 1/3 der Bildschirmhöhe), um zu bestimmen, 
      // welche Section "aktiv" ist (d.h. welche den Hauptfokus hat).
      const scrollPosition = window.scrollY + window.innerHeight / 3; 

      const sectionElements = links
        .filter(link => link.type === 'hash')
        .map(link => {
        const id = link.href.substring(1);
        return document.getElementById(id);
      }).filter(Boolean);

      let current = '';

      // Wir prüfen von oben nach unten, welche Section wir gerade passiert haben.
      // Die letzte Section, deren Top-Position <= scrollPosition ist, gewinnt.
      for (const section of sectionElements) {
        // Kleiner Puffer für exaktes Matching
        if (section.offsetTop - 100 <= scrollPosition) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative flex items-center">
        
        {/* Linker Bereich: Logo & Text */}
        <Link to="/" className="flex items-center gap-3 group relative z-10 flex-shrink-0">
           <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full border-4 border-[var(--color-primary)] group-hover:scale-105 transition-transform -ml-2 md:-ml-4">
              <img src="/logo-gesund-und-schoen.jpg" alt="Logo" className="object-cover w-full h-full" loading="eager" />
           </div>
           <div className="leading-tight">
             <span className="block font-bold text-xl md:text-2xl text-[var(--color-dark)]">Gesund & Schön</span>
             <span className="block text-base md:text-lg font-hand text-[var(--color-accent)]">im Marktgässchen</span>
           </div>
        </Link>

        {/* Mittlerer Bereich: Desktop Menu 
            flex-1 sorgt dafür, dass dieser Bereich den gesamten verfügbaren Platz zwischen Logo und Telefon einnimmt.
            justify-center zentriert die Links darin. */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center px-4">
          {links.map((link) => {
            const isActive = isHome && activeSection === link.href.substring(1);
            // Wenn wir auf Home sind, nutzen wir normale Anker-Links (scrolling)
            // Wenn wir auf Unterseiten sind, nutzen wir absolute Pfade zur Home-Seite mit Hash (/#...)
            const targetHref = isHome ? link.href : `/${link.href}`;
            
            // Auf Unterseiten nutzen wir <Link> (oder <a> mit Hash, da React Router HashLinks nativ nicht immer perfekt unterstützt ohne Extra-Lib)
            // Am einfachsten: Immer <a> nutzen für Hashes, da <Link to="/#..."> einen Reload machen kann oder Hash nicht springt.
            // Wir nutzen hier einfach <a> für beides, da es externe Navigation ist.
            
            return (
              <a 
                key={link.name} 
                href={targetHref} 
                className={`text-xs xl:text-sm font-semibold uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all 
                  ${isActive 
                    ? 'text-[var(--color-primary-dark)] after:w-full' 
                    : 'hover:text-[var(--color-primary-dark)] after:w-0 hover:after:w-full'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Rechter Bereich: Telefon Button
            Kein ml-auto nötig, da der mittlere Bereich (flex-1) alles wegschiebt. */}
        <div className="hidden lg:block flex-shrink-0">
          <a href="tel:+4915735603381" className="px-6 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
            <Phone size={18} />
            <span>01573 5603381</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden ml-auto text-[var(--color-dark)]" onClick={() => setIsOpen(!isOpen)}>
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
              {links.map((link) => {
                const isActive = link.type === 'hash' 
                  ? (isHome && activeSection === link.href.substring(1))
                  : location.pathname === link.href;

                let targetHref = link.href;
                if (link.type === 'hash' && !isHome) {
                  targetHref = `/${link.href}`;
                }
                
                if (link.type === 'page') {
                   return (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-all 
                        ${isActive ? 'text-[var(--color-primary)] pl-2' : 'hover:text-[var(--color-primary)] hover:pl-2'}`}
                    >
                      {link.name}
                    </Link>
                   );
                }

                return (
                  <a 
                    key={link.name} 
                    href={targetHref} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all 
                      ${isActive ? 'text-[var(--color-primary)] pl-2' : 'hover:text-[var(--color-primary)] hover:pl-2'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
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

export default Navigation;
