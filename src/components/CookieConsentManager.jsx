import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import { cookieConsentConfig } from '../config/cookieConsentConfig';

const CookieConsentManager = () => {
  useEffect(() => {
    // Global verfügbar machen für Debugging/Tests
    window.CookieConsent = CookieConsent;

    // Prüfen, ob CookieConsent bereits initialisiert ist, um Dopplungen zu vermeiden
    if (!document.getElementById('cc--main')) {
      CookieConsent.run(cookieConsentConfig);
    }
  }, []);

  return null; // Diese Komponente rendert nichts Sichtbares, das macht die Library
};

export default CookieConsentManager;
