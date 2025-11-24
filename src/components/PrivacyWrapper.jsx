import React, { useState, useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import { ShieldAlert } from 'lucide-react';

const PrivacyWrapper = ({ category, service, children, placeholderImage, placeholderText }) => {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // Prüfen beim Mounten
    if (CookieConsent.acceptedCategory(category)) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }

    // Event Listener für Änderungen (wenn User im Modal etwas ändert)
    const handleConsentChange = () => {
      if (CookieConsent.acceptedCategory(category)) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    };
    
    // Wir nutzen einen Custom Event Listener Ansatz, da vanilla-cookieconsent Events feuert
    window.addEventListener('cc:onChange', handleConsentChange);
    window.addEventListener('cc:onConsent', handleConsentChange);

    return () => {
      window.removeEventListener('cc:onChange', handleConsentChange);
      window.removeEventListener('cc:onConsent', handleConsentChange);
    };
  }, [category]);

  const handleAccept = () => {
    CookieConsent.acceptCategory(category);
  };

  if (isAllowed) {
    return children;
  }

  return (
    <div className="relative w-full h-full min-h-[300px] bg-gray-100 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border-4 border-white/10">
      {placeholderImage && (
        <img 
          src={placeholderImage} 
          alt="Platzhalter" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
        />
      )}
      
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md">
        <ShieldAlert size={48} className="mx-auto mb-4 text-[var(--color-primary-dark)]" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">Inhalt blockiert</h3>
        <p className="text-gray-600 mb-6 text-sm">
          {placeholderText || `Dieser Inhalt wird von einem Drittanbieter (${service}) geladen. Um ihn anzuzeigen, müssen Sie externe Inhalte akzeptieren.`}
        </p>
        <button 
          onClick={handleAccept}
          className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-full font-bold hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
        >
          Inhalt laden & zustimmen
        </button>
        <p className="mt-3 text-xs text-gray-400">
          Mit dem Laden stimmen Sie der Datenschutzerklärung von {service} zu.
        </p>
      </div>
    </div>
  );
};

export default PrivacyWrapper;
