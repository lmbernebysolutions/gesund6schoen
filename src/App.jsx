import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Studio from './components/Studio';
import Services from './components/Services';
import LDMSection from './components/LDMSection';
import Products from './components/Products';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Studio />
        <Services />
        <LDMSection />
        <Products />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
