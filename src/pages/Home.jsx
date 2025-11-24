import React from 'react';
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
