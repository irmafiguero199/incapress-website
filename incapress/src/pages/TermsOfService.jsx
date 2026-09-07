import { Helmet } from 'react-helmet-async'
import { ORG, ADDRESS_LINE } from '../data/org.js'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Inca Press</title>
        <meta
          name="description"
          content="The terms of service of Inca Press, a 501(c)(3) nonprofit organization (EIN 93-3263220) located at 309 Defoe Dr, Columbia, MO 65203-0209."
        />
        <link rel="canonical" href="https://incapress.sbs/terms-of-service" />
      </Helmet>
      <section className="bg-ocean-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Legal</p>
          <h1 className="mt-3 text-4xl font-bold">Terms of Service</h1>
          <p className="mt-3 text-sm text-ocean-200">Last updated: September 1, 2026</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="legal-doc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2>1. Agreement to these terms</h2>
          <p>
            These Terms of Service govern your use of the website operated by Inca Press at incapress.sbs (the
            &ldquo;Site&rdquo;). Inca Press is a nonprofit corporation incorporated in Missouri and recognized by the
            Internal Revenue Service as a 501(c)(3) tax-exempt organization, EIN <strong>{ORG.ein}</strong>, with its
            registered office at <strong>{ADDRESS_LINE}</strong>. By accessing or using the Site, you agree to be bound
            by these terms.
          </p>

          <h2>2. Organization information</h2>
          <p>
            The Site is the official website of Inca Press. Key organizational details are published on our
            Registration Information page, including our EIN ({ORG.ein}), date of incorporation, and governing board.
            Donations to Inca Press are tax-deductible to the extent permitted by law.
          </p>

          <h2>3. Acceptable use</h2>
          <p>You agree to use the Site only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Violate any applicable federal, state, or local law or regulation.</li>
            <li>Infringe the rights of any person or organization.</li>
            <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its hosting infrastructure.</li>
            <li>Submit false, misleading, or fraudulent information through our forms.</li>
          </ul>

          <h2>4. Donations</h2>
          <p>
            Donation pledges submitted through the Site are completed as described on the Donate page, including by
            mailed check payable to Inca Press at {ADDRESS_LINE}. Inca Press issues written tax receipts for all
            donations, referencing EIN {ORG.ein}. Online card processing may be added in the future; donors will
            never be charged without explicit confirmation of amount and method.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            The Site content — including text, illustrations, the Inca Press name and logo, and program materials —
            is the property of Inca Press or its licensors and is protected by copyright and trademark law. Books
            published through our Community Publishing program remain the property of their authors, who retain
            copyright in their works.
          </p>
          <p>
            You may share links to our pages and quote brief excerpts with attribution to Inca Press and a link to
            incapress.sbs. Other reproduction requires our prior written permission.
          </p>

          <h2>6. Accuracy of information</h2>
          <p>
            We work hard to keep program details, event dates, and impact figures current and accurate. Event details
            may change due to weather or scheduling; the latest information is always available by contacting us at{' '}
            <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a>.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. Inca Press
            does not warrant that the Site will be uninterrupted or error-free. Nothing on the Site constitutes
            professional, legal, tax, or financial advice.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Inca Press and its directors, officers, employees, and volunteers
            shall not be liable for any indirect, incidental, or consequential damages arising from your use of the
            Site.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Missouri, without regard to conflict-of-law
            principles. Any dispute arising from the Site shall be resolved in the state or federal courts located in
            Boone County, Missouri.
          </p>

          <h2>10. Changes to these terms</h2>
          <p>
            We may revise these Terms of Service at any time. The &ldquo;last updated&rdquo; date above reflects the
            most recent revision. Continued use of the Site after changes constitutes acceptance of the revised
            terms.
          </p>

          <h2>11. Contact</h2>
          <p>Questions about these Terms of Service may be directed to:</p>
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
