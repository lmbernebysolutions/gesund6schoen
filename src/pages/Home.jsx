import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/seo/SEO';
import { BusinessStructuredData } from '../components/seo/BusinessStructuredData';
import Hero from '../components/Hero';
import About from '../components/About';
import Studio from '../components/Studio';
import Services from '../components/Services';
import LDMSection from '../components/LDMSection';
import Specials from '../components/Specials';
import Products from '../components/Products';
import FloatingContact from '../components/FloatingContact';

const Home = () => {
  return (
    <main>
      <SEO
        title="Gesund & Schön im Marktgässchen - Kosmetikstudio Aue-Bad Schlema"
        description="Ihr Kosmetikstudio in Aue-Bad Schlema. 💆‍♀️ Ganzheitliche Kosmetik, Fußpflege & LDM® Medical-SPA. Jetzt Termin für Ihre Auszeit vereinbaren! 📞"
        canonical="https://gesundschoen-aue.de/"
      />
      <BusinessStructuredData />
      <Hero />
      <About />
      <Studio />
      <Services />
      <LDMSection />
      <Specials />
      <Products />
      <FloatingContact />
    </main>
  );
};

export default Home;
