import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto p-6 md:p-10 prose prose-sm md:prose-base max-w-none">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const LegalPages = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleOpenImprint = (e) => {
      e.preventDefault();
      setActiveModal('imprint');
    };

    const handleOpenPrivacy = (e) => {
      e.preventDefault();
      setActiveModal('privacy');
    };

    // Event Listeners für Links mit speziellen IDs oder Data-Attributen
    const links = document.querySelectorAll('a[href="#impressum"], a[href="#datenschutz"], [data-cc="show-imprintModal"], [data-cc="show-privacyModal"]');
    
    links.forEach(link => {
      if (link.getAttribute('href') === '#impressum' || link.getAttribute('data-cc') === 'show-imprintModal') {
        link.addEventListener('click', handleOpenImprint);
      }
      if (link.getAttribute('href') === '#datenschutz' || link.getAttribute('data-cc') === 'show-privacyModal') {
        link.addEventListener('click', handleOpenPrivacy);
      }
    });

    // Globaler Event Listener für dynamisch erstellte Links (z.B. im Cookie Consent Modal)
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      if (target.getAttribute('data-cc') === 'show-imprintModal') {
        e.preventDefault();
        setActiveModal('imprint');
      }
      if (target.getAttribute('data-cc') === 'show-privacyModal') {
        e.preventDefault();
        setActiveModal('privacy');
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleOpenImprint);
        link.removeEventListener('click', handleOpenPrivacy);
      });
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {activeModal === 'imprint' && (
        <Modal isOpen={true} onClose={() => setActiveModal(null)} title="Impressum">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Gesund & Schön<br />
            Inhaberin: [Vorname Nachname]<br />
            Altmarkt 5<br />
            08280 Aue-Bad Schlema
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: 01573 5603381<br />
            E-Mail: gesundundschoen5@gmail.com
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [DE123456789 - Bitte nachtragen]
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Modal>
      )}

      {activeModal === 'privacy' && (
        <Modal isOpen={true} onClose={() => setActiveModal(null)} title="Datenschutzerklärung">
          <h3>1. Datenschutz auf einen Blick</h3>
          <h4>Allgemeine Hinweise</h4>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

          <h3>2. Hosting</h3>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h4>Vercel</h4>
          <p>Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>

          <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
          <h4>Datenschutz</h4>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h3>4. Datenerfassung auf dieser Website</h3>
          <h4>Cookies</h4>
          <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.</p>
          <p>Wir setzen <strong>Borlabs Cookie / Vanilla CookieConsent</strong> ein, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren.</p>

          <h3>5. Analyse-Tools und Werbung</h3>
          <h4>Google Analytics</h4>
          <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.</p>

          <h3>6. Plugins und Tools</h3>
          <h4>Google Maps</h4>
          <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.</p>
        
          <h4>Google Fonts (Lokales Hosting)</h4>
          <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default LegalPages;
