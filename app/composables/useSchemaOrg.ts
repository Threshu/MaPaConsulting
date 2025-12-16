export const useSchemaOrg=() => {
  const { locale }=useI18n();

  const localBusinessSchema={
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mapa-unternehmensberatung.de',
    name: 'MaPa Consulting',
    legalName: 'MaPa Doradztwo Biznesowe',
    url: 'https://mapa-unternehmensberatung.de',
    logo: 'https://mapa-unternehmensberatung.de/assets/img/portrait_tranparent.png',
    image: 'https://mapa-unternehmensberatung.de/og-image.jpg',
    description: locale.value==='de'
      ? 'Unternehmensberatung für operative Exzellenz, Prozessoptimierung und KI-Implementierung'
      :locale.value==='en'
        ? 'Business consulting for operational excellence, process optimization and AI implementation'
        :'Doradztwo biznesowe w zakresie doskonałości operacyjnej, optymalizacji procesów i wdrażania AI',
    telephone: '+491759030149',
    email: 'info@mapa-unternehmensberatung.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lindenstraße 2',
      addressLocality: 'Esselbach',
      postalCode: '97839',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.9167',
      longitude: '9.4667'
    },
    areaServed: ['DE', 'EU'],
    knowsLanguage: ['de', 'en', 'pl'],
    founder: {
      '@type': 'Person',
      name: 'Mario Pape',
      jobTitle: 'Managing Director | COO | CTO | Interim Manager'
    },
    sameAs: [
      'https://www.linkedin.com/in/mario-pape'
    ]
  };

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(localBusinessSchema)
      }
    ]
  });
};
