import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Landmark, FileText, ShieldCheck, Download, BadgeCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, ADDRESS_LINE } from '../data/org.js'

export default function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information — Inca Press</title>
        <meta
          name="description"
          content="Federal and state registration details for Inca Press: EIN 93-3263220, 501(c)(3) determination, Missouri incorporation, registered address, board, and annual reports."
        />
        <link rel="canonical" href="https://incapress.sbs/registration-information" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Transparency</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Registration Information</h1>
          <p className="mt-5 text-lg text-ocean-100">
            Everything donors, partners, and verification services need to confirm who we are — in one place.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
          {/* Federal tax information */}
          <div className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 bg-ocean-50 px-8 py-5">
              <Landmark className="h-6 w-6 text-ocean-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Federal Tax Information</h2>
            </div>
            <div className="grid gap-8 p-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Employer Identification Number (EIN)</p>
                <p className="mt-2 text-5xl font-bold tracking-tight text-ocean-900">{ORG.ein}</p>
                <p className="mt-3 text-sm leading-relaxed">
                  Inca Press is recognized by the Internal Revenue Service as a tax-exempt public charity under
                  Section 501(c)(3) of the Internal Revenue Code. Our federal tax-exempt determination was received
                  in {ORG.irsDeterminationDate}.
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Donations to Inca Press are tax-deductible to the extent permitted by law. No goods or services are
                  provided in exchange for general donations unless expressly stated.
                </p>
              </div>
              <dl className="space-y-4 rounded-xl bg-ocean-950 p-6 text-sm text-ocean-100">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Legal name</dt>
                  <dd className="mt-0.5 text-lg font-bold text-white">Inca Press</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Federal tax status</dt>
                  <dd className="mt-0.5 font-semibold">{ORG.taxStatus}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">IRS determination</dt>
                  <dd className="mt-0.5 font-semibold">{ORG.irsDeterminationDate}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">NTEE category</dt>
                  <dd className="mt-0.5 font-semibold">Education — Literacy &amp; Libraries (B92)</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Year founded</dt>
                  <dd className="mt-0.5 font-semibold">{ORG.founded}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* State registration */}
          <div className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 bg-ocean-50 px-8 py-5">
              <ShieldCheck className="h-6 w-6 text-ocean-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold">State Registration</h2>
            </div>
            <div className="p-8">
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">State of incorporation</dt>
                  <dd className="mt-1 text-lg font-bold">{ORG.stateOfIncorporation}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Date of incorporation</dt>
                  <dd className="mt-1 text-lg font-bold">{ORG.incorporated}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Charitable solicitation registration</dt>
                  <dd className="mt-1 text-lg font-bold">Registered in Missouri — current and in good standing</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Entity file number</dt>
                  <dd className="mt-1 text-lg font-bold">Available upon written request to {ORG.email}</dd>
                </div>
              </dl>
              <div className="mt-6 rounded-xl bg-sun-50 p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <BadgeCheck className="h-5 w-5 text-sun-600" aria-hidden="true" />
                  Registered address
                </h3>
                <address className="mt-2 text-sm not-italic leading-relaxed">
                  Inca Press
                  <br />
                  {ORG.address.street}
                  <br />
                  {ORG.address.city}, {ORG.address.state} {ORG.address.zip}
                  <br />
                  {ORG.address.country}
                </address>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 bg-ocean-50 px-8 py-5">
              <FileText className="h-6 w-6 text-ocean-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Governance &amp; Leadership</h2>
            </div>
            <div className="p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Board President', 'Dr. Mariana Whitfield'],
                  ['Vice President', 'James Okafor'],
                  ['Treasurer', 'Elena Vasquez'],
                  ['Secretary', 'David Kim'],
                  ['Executive Director', 'Sarah Lindqvist'],
                  ['Board meetings', 'Third Tuesday of each month, 5:30 PM, 309 Defoe Dr, Columbia, MO'],
                ].map(([role, name]) => (
                  <li key={role} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{role}</p>
                    <p className="mt-1 font-semibold text-ocean-900">{name}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed">
                Full bios are on our <Link to="/team" className="font-semibold text-ocean-700 underline">Team page</Link>.
                Board meeting minutes, our bylaws, and our conflict-of-interest policy are available on request.
              </p>
            </div>
          </div>

          {/* Annual reports & 990 */}
          <div className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 bg-ocean-50 px-8 py-5">
              <Download className="h-6 w-6 text-ocean-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Annual Reports &amp; IRS Form 990</h2>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                {[
                  ['2025 Annual Report & Form 990 summary (published January 2026)', true],
                  ['2024 Annual Report & Form 990 summary', true],
                  ['2023 Annual Report & Form 990 summary', true],
                  ['IRS determination letter (2022)', true],
                ].map(([label]) => (
                  <li key={label} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 px-5 py-3.5">
                    <span className="text-sm font-semibold">{label}</span>
                    <a
                      href={'mailto:' + ORG.email + '?subject=Document%20request:%20' + encodeURIComponent(label)}
                      className="shrink-0 text-sm font-bold text-ocean-700 underline"
                    >
                      Request copy
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                We post each year’s Form 990 on schedule and make our determination letter available to any donor or
                partner who asks. Email{' '}
                <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a> and
                we will respond within two business days.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-ocean-950 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Verify us independently</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ocean-200">
              You can confirm Inca Press and our EIN {ORG.ein} through the IRS Tax Exempt Organization Search
              (TEOS), GuideStar by Candid, or the Missouri Secretary of State business entity search. Our registered
              address is {ADDRESS_LINE}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
