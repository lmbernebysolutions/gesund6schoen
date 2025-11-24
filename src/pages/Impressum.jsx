import React, { useEffect } from 'react';

const Impressum = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[var(--color-bg)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg prose prose-lg max-w-none">
          <h1>Impressum</h1>
          
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
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
