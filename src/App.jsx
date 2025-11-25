import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsentManager from './components/CookieConsentManager';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import LDMMedical from './pages/LDMMedical';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <CookieConsentManager />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/ldm-medical" element={<LDMMedical />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;