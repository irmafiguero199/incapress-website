import { Helmet } from 'react-helmet-async'
import { ORG } from '../data/org.js'

export default function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.domain,
    logo: ORG.domain + '/logo.svg',
    image: ORG.domain + '/images/og-image.jpg',
    description:
      'Inca Press is a 501(c)(3) nonprofit organization (EIN 93-3263220) that publishes and distributes free educational books and runs literacy programs for children and families across mid-Missouri.',
    email: ORG.email,
    telephone: ORG.phone,
    taxID: ORG.ein,
    foundingDate: String(ORG.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.city,
      addressRegion: ORG.address.state,
      postalCode: ORG.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mid-Missouri, United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: ORG.email,
      telephone: ORG.phone,
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [ORG.social.facebook, ORG.social.instagram, ORG.social.twitter, ORG.social.linkedin],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
