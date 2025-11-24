import React, { useEffect } from 'react';

const Datenschutz = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[var(--color-bg)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg prose prose-lg max-w-none">
          <h1>Datenschutzerklärung</h1>
          
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
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
