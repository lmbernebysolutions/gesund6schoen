import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Studio from './components/Studio';
import Services from './components/Services';
import LDMSection from './components/LDMSection';
import Specials from './components/Specials';
import Products from './components/Products';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CookieConsentManager from './components/CookieConsentManager';
import LegalPages from './components/LegalPages';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <CookieConsentManager />
      <LegalPages />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Studio />
        <Services />
        <LDMSection />
        <Specials />
        <Products />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;