export default function handler(req, res) {
  const services = [
    {
      id: "ldm-anti-aging",
      title: "LDM® Medical Spa Anti-Aging",
      description: "Hochfrequente Ultraschall-Behandlung zur Hautstraffung in Aue. Sofort sichtbare Ergebnisse ohne OP.",
      price: "89.00",
      image: "https://www.gesundschoen-aue.de/ldm-medical-spa-gesichtsbehandlung-aue.webp", // Replace with real image path if different
      link: "https://www.gesundschoen-aue.de/ldm-medical"
    },
    {
      id: "nagelpilz-laser",
      title: "Nagelpilz Laser-Behandlung",
      description: "Effektive Laser-Therapie gegen Nagelpilz. Preis pro Sitzung.",
      price: "49.00",
      image: "https://www.gesundschoen-aue.de/problemfusse-nagelpilz-behandlung.webp", // Replace with real image path if different
      link: "https://www.gesundschoen-aue.de/"
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
    <channel>
      <title>Gesund & Schön Aue - Dienstleistungen</title>
      <link>https://www.gesundschoen-aue.de</link>
      <description>Medizinische Kosmetik und Podologie</description>
      ${services.map(s => `
        <item>
          <g:id>${s.id}</g:id>
          <g:title>${s.title}</g:title>
          <g:description>${s.description}</g:description>
          <g:price>${s.price} EUR</g:price>
          <g:link>${s.link}</g:link>
          <g:image_link>${s.image}</g:image_link>
          <g:availability>in_stock</g:availability>
          <g:condition>new</g:condition>
          <g:google_product_category>4866</g:google_product_category> 
          <g:brand>Gesund & Schön</g:brand>
        </item>
      `).join('')}
    </channel>
  </rss>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
