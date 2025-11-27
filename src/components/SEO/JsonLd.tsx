import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * JSON-LD Structured Data Component
 *
 * Provides schema.org structured data for search engines:
 * - WebSite: Identifies the site
 * - Event: Documents the 28-A blackout event
 * - BreadcrumbList: Improves SERP appearance
 */

const SITE_URL = 'https://apagon-28-a.miguelangelcolmenero.es/';

interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface EventSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  eventStatus: string;
  eventAttendanceMode?: string;
  location: {
    '@type': string;
    name: string;
    address?: {
      '@type': string;
      addressCountry: string[];
    };
  };
  organizer?: {
    '@type': string;
    name: string;
  };
}

interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function JsonLd() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'es';

  // Language-specific content
  const content = {
    es: {
      siteName: 'Cronología del Apagón del 28-A',
      siteDescription:
        'Cronología completa del apagón masivo que afectó a España y Portugal el 28 de abril de 2025.',
      eventName: 'Apagón del 28-A',
      eventDescription:
        'Apagón eléctrico masivo que afectó a España y Portugal el 28 de abril de 2025, causando interrupciones generalizadas del suministro eléctrico.',
      locationName: 'España y Portugal',
      breadcrumbHome: 'Inicio'
    },
    en: {
      siteName: '28-A Blackout Timeline',
      siteDescription:
        'Complete timeline of the massive blackout that affected Spain and Portugal on April 28, 2025.',
      eventName: '28-A Blackout',
      eventDescription:
        'Massive power blackout that affected Spain and Portugal on April 28, 2025, causing widespread electricity supply disruptions.',
      locationName: 'Spain and Portugal',
      breadcrumbHome: 'Home'
    }
  };

  const lang: 'es' | 'en' = currentLang === 'en' ? 'en' : 'es';
  const text = content[lang];

  // 1. WebSite Schema
  const websiteSchema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: text.siteName,
    url: SITE_URL,
    description: text.siteDescription,
    inLanguage: ['es', 'en']
  };

  // 2. Event Schema
  const eventSchema: EventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: text.eventName,
    description: text.eventDescription,
    startDate: '2025-04-28',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: text.locationName,
      address: {
        '@type': 'PostalAddress',
        addressCountry: ['ES', 'PT']
      }
    }
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema: BreadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: text.breadcrumbHome,
        item: SITE_URL
      }
    ]
  };

  return (
    <Helmet>
      {/* WebSite Schema */}
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

      {/* Event Schema */}
      <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
