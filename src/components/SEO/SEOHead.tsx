import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { JsonLd } from './JsonLd';

const CANONICAL_URL = 'https://apagon-28-a.miguelangelcolmenero.es/';

export function SEOHead() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const metadata = {
    es: {
      title: 'Cronología del Apagón del 28-A | Timeline Completa',
      description:
        'Cronología completa del apagón masivo que afectó a España y Portugal el 28 de abril de 2025.',
      keywords: 'apagón 28A, blackout España, apagón Portugal, cronología apagón 2025'
    },
    en: {
      title: '28-A Blackout Timeline | Complete Timeline',
      description:
        'Complete timeline of the massive blackout that affected Spain and Portugal on April 28, 2025.',
      keywords: '28A blackout, Spain blackout, Portugal blackout, 2025 blackout timeline'
    }
  };

  const meta = metadata[currentLang as 'es' | 'en'] || metadata.es;

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={currentLang} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Language alternates */}
        <link rel="alternate" hrefLang="es" href={CANONICAL_URL} />
        <link rel="alternate" hrefLang="en" href={`${CANONICAL_URL}?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL_URL} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : 'en_US'} />
        <meta property="og:locale:alternate" content={currentLang === 'es' ? 'en_US' : 'es_ES'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        {/* Theme */}
        <meta name="theme-color" content="#1976d2" />
        <meta name="color-scheme" content="light dark" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <JsonLd />
    </HelmetProvider>
  );
}
