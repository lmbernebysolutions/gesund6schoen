import React from 'react';
import { Helmet } from 'react-helmet-async';

export const BusinessStructuredData = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Gesund & Schön",
        "image": "https://www.gesund-und-schoen-aue.de/logo-gesund-und-schoen.jpg",
        "@id": "https://www.gesund-und-schoen-aue.de",
        "url": "https://www.gesund-und-schoen-aue.de",
        "telephone": "+4915735603381",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Altmarkt 5",
            "addressLocality": "Aue-Bad Schlema",
            "postalCode": "08280",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.5851,
            "longitude": 12.7061
        },
        "sameAs": [
            "https://www.instagram.com/ges.undschoen/",
            "https://maps.google.com/?q=Gesund+und+Schön+Marktgässchen+4+Aue-Bad+Schlema"
        ],
        "priceRange": "$$"
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};
