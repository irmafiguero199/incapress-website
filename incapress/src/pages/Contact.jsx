import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Clock, BadgeCheck } from 'lucide-react'
import { ORG, ADDRESS_LINE } from '../data/org.js'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Inca Press</title>
        <meta
          name="description"
          content="Contact Inca Press, a 501(c)(3) nonprofit (EIN 93-3263220), at 309 Defoe Dr, Columbia, MO 65203-0209, admin@incapress.sbs, or (573) 555-0142."
        />
        <link rel="canonical" href="https://incapress.sbs/contact" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Contact</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">We would love to hear from you</h1>
          <p className="mt-5 text-lg text-ocean-100">
            Questions about programs, donations, volunteering, or the bookmobile schedule — reach out any way that
            works for you.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Contact Details Card */}
            <div className="card space-y-6">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Mailing &amp; office address</h3>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-slate-600">
                    Inca Press
                    <br />
                    {ORG.address.street}
                    <br />
                    {ORG.address.city}, {ORG.address.state} {ORG.address.zip}
                    <br />
                    {ORG.address.country}
                  </address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=309%20Defoe%20Dr%2C%20Columbia%2C%20MO%2065203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-ocean-700 underline"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-100 pt-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href={'mailto:' + ORG.email} className="text-sm font-semibold text-ocean-700 underline">
                    {ORG.email}
                  </a>
                  <p className="mt-1 text-xs text-slate-500">We reply within two business days.</p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-100 pt-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a href={'tel:' + ORG.phoneHref} className="text-sm font-semibold text-ocean-700 underline">
                    {ORG.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 border-t border-slate-100 pt-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Office hours</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Monday–Friday: 9:00 AM – 5:00 PM CT
                    <br />
                    Saturday: 9:00 AM – 12:00 PM (volunteer sorting)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Nonprofit Info Box */}
            <div className="flex flex-col justify-between rounded-2xl bg-ocean-950 p-8 text-white">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <BadgeCheck className="h-6 w-6 text-sun-400" aria-hidden="true" />
                  Nonprofit information
                </h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ocean-300">Organization</dt>
                    <dd className="mt-0.5 text-base font-semibold">Inca Press</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ocean-300">Federal EIN</dt>
                    <dd className="mt-0.5 text-2xl font-bold text-sun-400">{ORG.ein}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ocean-300">Tax status</dt>
                    <dd className="mt-0.5 text-slate-200">501(c)(3) public charity — donations tax-deductible</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ocean-300">Registered address</dt>
                    <dd className="mt-0.5 text-slate-200">{ADDRESS_LINE}</dd>
                  </div>
                </dl>
              </div>

              <p className="mt-8 border-t border-ocean-800 pt-5 text-xs leading-relaxed text-ocean-300">
                Full registration and governance details are on our{' '}
                <a href="/registration-information" className="font-semibold text-sun-300 underline">
                  Registration Information
                </a>{' '}
                page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
