import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Gesund & Schön im Marktgässchen - Kosmetikstudio Aue-Bad Schlema</title>
        <meta name="description" content="Ihr Kosmetikstudio in Aue-Bad Schlema. 💆‍♀️ Ganzheitliche Kosmetik, Fußpflege & LDM® Medical-SPA. Jetzt Termin für Ihre Auszeit vereinbaren! 📞" />
        <link rel="canonical" href="https://gesundschoen-aue.de/" />
      </Helmet>
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
