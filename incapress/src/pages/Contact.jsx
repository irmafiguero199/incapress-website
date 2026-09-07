import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Clock, BadgeCheck, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, ADDRESS_LINE } from '../data/org.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General question', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

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
        <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Contact details + nonprofit info box */}
          <div className="space-y-6 lg:col-span-2">
            <div className="card space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Mailing &amp; office address</h3>
                  <address className="mt-1 text-sm not-italic leading-relaxed">
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
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href={'mailto:' + ORG.email} className="text-sm font-semibold text-ocean-700 underline">
                    {ORG.email}
                  </a>
                  <p className="mt-1 text-xs text-slate-500">We reply within two business days.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a href={'tel:' + ORG.phoneHref} className="text-sm font-semibold text-ocean-700 underline">
                    {ORG.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Office hours</h3>
                  <p className="text-sm leading-relaxed">
                    Monday–Friday: 9:00 AM – 5:00 PM CT
                    <br />
                    Saturday: 9:00 AM – 12:00 PM (volunteer sorting)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-ocean-950 p-7 text-white">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <BadgeCheck className="h-5 w-5 text-sun-400" aria-hidden="true" />
                Nonprofit information
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Organization</dt>
                  <dd className="font-semibold">Inca Press</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Federal EIN</dt>
                  <dd className="text-xl font-bold text-sun-400">{ORG.ein}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Tax status</dt>
                  <dd>501(c)(3) public charity — donations tax-deductible</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ocean-300">Registered address</dt>
                  <dd>{ADDRESS_LINE}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-ocean-300">
                Full registration and governance details are on our{' '}
                <a href="/registration-information" className="font-semibold text-sun-300 underline">
                  Registration Information
                </a>{' '}
                page.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <SectionHeader align="left" eyebrow="Send a Message" title="Contact form" />
            {sent ? (
              <div className="card border-leaf-500 bg-leaf-500/5">
                <h3 className="text-xl font-bold text-leaf-600">Message received — thank you!</h3>
                <p className="mt-2 leading-relaxed">
                  Your message has been recorded. A member of the Inca Press team will reply to{' '}
                  <strong>{form.email}</strong> within two business days. For urgent matters, call us at{' '}
                  <a href={'tel:' + ORG.phoneHref} className="font-semibold text-ocean-700 underline">
                    {ORG.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold">Your name</label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold">Email address</label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      placeholder="you@example.org"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold">Topic</label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="input-field"
                  >
                    <option>General question</option>
                    <option>Programs &amp; eligibility</option>
                    <option>Donations &amp; corporate matching</option>
                    <option>Volunteering</option>
                    <option>Press &amp; media</option>
                    <option>Registration &amp; Form 990 requests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>
                <p className="text-xs text-slate-500">
                  By submitting this form you agree to our Privacy Policy. We use your information only to respond to
                  your inquiry and never sell it to third parties.
                </p>
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
