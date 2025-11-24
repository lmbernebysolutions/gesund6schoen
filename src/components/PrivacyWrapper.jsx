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
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      {placeholderImage && (
        <img 
          src={placeholderImage} 
          alt="Platzhalter" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
        />
      )}
      
      <div className="relative z-10 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-sm max-w-[90%] w-full border border-gray-200">
        <ShieldAlert size={28} className="mx-auto mb-2 text-[var(--color-primary-dark)]" />
        <h3 className="text-sm font-bold mb-1 text-gray-800">Externer Inhalt</h3>
        <p className="text-gray-500 mb-3 text-xs leading-tight">
          {placeholderText || `Inhalt von ${service} gesperrt.`}
        </p>
        <button 
          onClick={handleAccept}
          className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] text-xs uppercase tracking-wide rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm w-full"
        >
          Laden
        </button>
        <p className="mt-2 text-[10px] text-gray-400">
          Aktiviert "Marketing"-Cookies.
        </p>
      </div>
    </div>
  );
};

export default PrivacyWrapper;
