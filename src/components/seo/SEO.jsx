import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image, type = 'website' }) => {
  const siteTitle = 'Gesund & Schön Aue';
  const siteUrl = 'https://www.gesund-und-schoen-aue.de';
  const defaultImage = `${siteUrl}/logo-gesund-und-schoen.jpg`; // Default image, verify path

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || 'Exklusive Kosmetik & Podologie in Aue. LDM® Medical Spa, Anti-Aging & medizinische Fußpflege für Ihre Gesundheit & Schönheit.';
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
  const metaCanonical = canonical ? canonical : siteUrl + window.location.pathname;

  return (
    <Helmet>
      {/* Basic */}
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      <link rel='canonical' href={metaCanonical} />

      {/* Open Graph */}
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={metaCanonical} />
      <meta property='og:image' content={metaImage} />
      <meta property='og:site_name' content={siteTitle} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
    </Helmet>
  );
};

export default SEO;
