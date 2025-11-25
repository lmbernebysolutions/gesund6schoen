import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
      >
        <span className="font-bold text-[var(--color-dark)]">{question}</span>
        {isOpen ? <ChevronUp className="text-[var(--color-primary-dark)]" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LDMMedical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Ist die LDM-Behandlung schmerzhaft?",
      answer: "Nein, absolut nicht. Die Behandlung ist sehr sanft und wird oft als angenehme, warme Massage empfunden. Viele Kunden entspannen dabei so sehr, dass sie einschlafen."
    },
    {
      question: "Wie viele Sitzungen sind notwendig?",
      answer: "Schon nach der ersten Behandlung ist oft ein sofortiger 'Glow'-Effekt sichtbar (Moonshine Lift). Für nachhaltige Hautbildverbesserungen (z.B. bei Akne oder Falten) empfehlen wir eine Kur von 6 bis 10 Behandlungen im Abstand von 1-2 Wochen."
    },
    {
      question: "Gibt es Ausfallzeiten nach der Behandlung?",
      answer: "Nein, es gibt keine Ausfallzeiten ('Downtime'). Sie sind sofort wieder gesellschaftsfähig. Rötungen treten extrem selten auf, meist sieht die Haut direkt frischer und praller aus."
    },
    {
      question: "Kann LDM mit anderen Behandlungen kombiniert werden?",
      answer: "Ja, LDM eignet sich hervorragend als Vor- oder Nachbehandlung zu anderen kosmetischen Verfahren (z.B. Ausreinigung), um die Wirkung zu verstärken und Rötungen zu minimieren."
    }
  ];

  // FAQ Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      <Helmet>
        <title>LDM® Medical-SPA Aue | Hautverjüngung & Akne-Behandlung</title>
        <meta name="description" content="LDM® Medical-SPA in Aue-Bad Schlema: Innovative Ultraschall-Technologie gegen Falten, Akne und für straffe Haut. Sofort sichtbare Ergebnisse ohne OP." />
        <link rel="canonical" href="https://gesundschoen-aue.de/leistungen/ldm-medical" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[var(--color-primary)] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold mb-8 hover:underline hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              High-Tech Kosmetik
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              LDM® Medical-SPA in Aue <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-white">
                Hautverjüngung ohne OP
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Erleben Sie die Zukunft der Kosmetik: Lokale Dynamische Mikromassage (LDM®) für sofort sichtbar straffere Haut und effektive Behandlung von Hautproblemen.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Wie funktioniert es? */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-dark)] flex items-center gap-3">
                <Sparkles className="text-[var(--color-primary-dark)]" />
                Wie funktioniert LDM®?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  LDM® (Lokale Dynamische Mikromassage) ist eine innovative Ultraschall-Technologie, die sich deutlich von herkömmlichen Ultraschall-Behandlungen unterscheidet. Während klassischer Ultraschall mit konstanten Frequenzen arbeitet, nutzt LDM® einen schnellen Frequenzwechsel (bis zu 1000 Mal pro Sekunde) zwischen zwei Frequenzen (z.B. 1 MHz und 3 MHz oder 10 MHz).
                </p>
                <p className="mt-4">
                  Dieser schnelle Wechsel erzeugt eine <strong>Mikromassage im Gewebe</strong>, die biochemische Prozesse aktiviert:
                </p>
                <ul className="list-none space-y-3 mt-6 pl-0">
                  <li className="flex items-start gap-3">
                    <Check className="shrink-0 text-[var(--color-primary-dark)] mt-1" size={20} />
                    <span><strong>Kollagen-Aufbau:</strong> Stimuliert die Fibroblasten zur Neubildung von Kollagen und Elastin.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="shrink-0 text-[var(--color-primary-dark)] mt-1" size={20} />
                    <span><strong>Feuchtigkeits-Boost:</strong> Erhöht den Hyalurongehalt in der Haut (Turgor).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="shrink-0 text-[var(--color-primary-dark)] mt-1" size={20} />
                    <span><strong>Balance (MMPs):</strong> Reguliert Matrix-Metalloproteinasen, die für den Gewebeabbau verantwortlich sind – bremst also die Hautalterung.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Anwendungsgebiete */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-[var(--color-dark)]">Anwendungsgebiete</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-xl mb-4 text-[var(--color-primary-dark)]">Anti-Aging & Beauty</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Faltenreduktion</li>
                    <li>• Hautstraffung (Gesicht & Körper)</li>
                    <li>• Moonshine Lift (Sofort-Effekt)</li>
                    <li>• Bindegewebsstraffung</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-xl mb-4 text-blue-500">Dermatologische Kosmetik</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Akne & Hautunreinheiten</li>
                    <li>• Akne-Narben</li>
                    <li>• Dehnungsstreifen</li>
                    <li>• Couperose (begleitend)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-dark)] flex items-center gap-3">
                <HelpCircle className="text-[var(--color-primary-dark)]" />
                Häufige Fragen
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Sticky CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Image Box */}
              <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                <img 
                  src="/ldm-wellcomet-ultraschall-geraet.webp" 
                  alt="LDM Wellcomet Gerät" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold">Modernste Technologie für Ihre Haut.</p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-[var(--color-primary)]/10 p-8 rounded-3xl border border-[var(--color-primary)]/20">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-dark)]">Interesse geweckt?</h3>
                <p className="text-gray-700 mb-6">
                  Vereinbaren Sie jetzt Ihren Termin für eine LDM®-Behandlung und spüren Sie den Unterschied.
                </p>
                <a 
                  href="tel:+4915735603381" 
                  className="block w-full py-3 bg-[var(--color-dark)] text-white text-center rounded-xl font-bold hover:bg-black transition-colors shadow-lg"
                >
                  Termin vereinbaren
                </a>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Beratung ist kostenlos.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default LDMMedical;

