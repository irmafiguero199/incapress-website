import { Helmet } from 'react-helmet-async'
import { ORG, ADDRESS_LINE } from '../data/org.js'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Inca Press</title>
        <meta
          name="description"
          content="The privacy policy of Inca Press, a 501(c)(3) nonprofit organization (EIN 93-3263220) located at 309 Defoe Dr, Columbia, MO 65203-0209."
        />
        <link rel="canonical" href="https://incapress.sbs/privacy-policy" />
      </Helmet>
      <section className="bg-ocean-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Legal</p>
          <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ocean-200">Last updated: September 1, 2026</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="legal-doc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2>Introduction</h2>
          <p>
            Inca Press (&ldquo;Inca Press,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) is a nonprofit organization
            recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code, with federal Employer
            Identification Number (EIN) <strong>{ORG.ein}</strong>. Our registered office is located at{' '}
            <strong>{ADDRESS_LINE}</strong>, and we can be reached at{' '}
            <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a> or{' '}
            <a href={'tel:' + ORG.phoneHref} className="font-semibold text-ocean-700 underline">{ORG.phone}</a>.
          </p>
          <p>
            This Privacy Policy explains what personal information we collect through our website at
            incapress.sbs, how we use it, how we protect it, and the choices you have. By using this website, you
            agree to the practices described here.
          </p>

          <h2>1. Information we collect</h2>
          <h3>Information you provide voluntarily</h3>
          <ul>
            <li>Contact form submissions: your name, email address, and message content.</li>
            <li>Newsletter subscriptions: your email address.</li>
            <li>Donation pledges: your name, email address, ZIP code, and donation amount.</li>
            <li>Volunteer or program inquiries: contact details and any information you choose to share.</li>
          </ul>
          <h3>Information collected automatically</h3>
          <p>
            Like most websites, our hosting provider may log standard technical data such as IP address, browser
            type, pages visited, and timestamps. We do not use this data to identify individual visitors.
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To respond to your inquiries and requests.</li>
            <li>To send our monthly newsletter (you may unsubscribe at any time).</li>
            <li>To process donations and issue tax receipts referencing our EIN {ORG.ein}.</li>
            <li>To coordinate volunteer activities and program enrollment.</li>
            <li>To comply with legal, tax, and accounting obligations applicable to a 501(c)(3) organization.</li>
          </ul>

          <h2>3. How we share your information</h2>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal information. We share information only in
            these limited circumstances:
          </p>
          <ul>
            <li>With service providers that help us operate (for example, email delivery), under confidentiality obligations.</li>
            <li>When required by law, regulation, or legal process.</li>
            <li>In connection with a merger or organizational restructuring, with notice to affected users.</li>
          </ul>

          <h2>4. Data security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information.
            However, no method of transmission over the Internet is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>5. Your rights and choices</h2>
          <ul>
            <li>You may request a copy of the personal information we hold about you.</li>
            <li>You may ask us to correct or delete your personal information, subject to legal retention requirements (for example, IRS recordkeeping for donations).</li>
            <li>You may unsubscribe from our newsletter at any time using the link in any email.</li>
          </ul>

          <h2>6. Children&rsquo;s privacy</h2>
          <p>
            Our programs serve children, but this website is directed to adults. We do not knowingly collect personal
            information from children under 13 through this website. If you believe a child has provided us personal
            information, contact us and we will delete it.
          </p>

          <h2>7. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;last updated&rdquo; date at the top of
            this page reflects the most recent revision.
          </p>

          <h2>8. Contact us</h2>
          <p>
            Questions about this Privacy Policy may be directed to:
          </p>
          <p>
            <strong>Inca Press</strong>
            <br />
            {ADDRESS_LINE}
            <br />
            Email: <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a>
            <br />
            Phone: <a href={'tel:' + ORG.phoneHref} className="font-semibold text-ocean-700 underline">{ORG.phone}</a>
            <br />
            EIN: {ORG.ein}
          </p>
        </div>
      </section>
    </>
  )
}
