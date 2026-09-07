import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Heart, BadgeCheck, Landmark, Building2, Mail } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, ADDRESS_LINE } from '../data/org.js'

const AMOUNTS = [10, 25, 50, 100, 250, 500]

export default function Donate() {
  const [freq, setFreq] = useState('once')
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const [done, setDone] = useState(false)
  const finalAmount = custom ? Number(custom) : amount

  return (
    <>
      <Helmet>
        <title>Donate — Inca Press</title>
        <meta
          name="description"
          content="Donate to Inca Press, a 501(c)(3) nonprofit organization (EIN 93-3263220). Your tax-deductible gift puts free books into the hands of children across mid-Missouri."
        />
        <link rel="canonical" href="https://incapress.sbs/donate" />
      </Helmet>
      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Donate</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">$10 puts 5 new books on a child&rsquo;s shelf</h1>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm ring-1 ring-white/25">
            <BadgeCheck className="h-4 w-4 text-sun-400" aria-hidden="true" />
            501(c)(3) tax-deductible donation &middot; EIN {ORG.ein}
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <SectionHeader align="left" eyebrow="Make a Gift" title="Donation form" />
            {done ? (
              <div className="card border-leaf-500 bg-leaf-500/5">
                <h3 className="text-xl font-bold text-leaf-600">
                  Thank you for your generous {freq === 'monthly' ? 'monthly ' : ''}pledge of ${finalAmount}!
                </h3>
                <p className="mt-2 leading-relaxed">
                  To complete your donation, please mail a check payable to <strong>Inca Press</strong> to{' '}
                  {ADDRESS_LINE}, including a note with your name and email address. You will receive a written tax
                  receipt referencing our EIN {ORG.ein}. Secure online card processing will be added to this page
                  soon; for assistance in the meantime, email{' '}
                  <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setDone(true)
                }}
                className="card space-y-6"
              >
                <div className="flex gap-2">
                  {[['once', 'One-time'], ['monthly', 'Monthly']].map(([v, l]) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setFreq(v)}
                      className={
                        'rounded-full px-6 py-2.5 text-sm font-bold transition ' +
                        (freq === v ? 'bg-ocean-950 text-white' : 'bg-ocean-50 text-ocean-800 hover:bg-ocean-100')
                      }
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {AMOUNTS.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => {
                        setAmount(a)
                        setCustom('')
                      }}
                      className={
                        'rounded-xl border-2 py-3 text-lg font-bold transition ' +
                        (!custom && amount === a
                          ? 'border-sun-500 bg-sun-50 text-sun-700'
                          : 'border-slate-200 text-slate-600 hover:border-sun-300')
                      }
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <div>
                  <label htmlFor="custom-amount" className="mb-1.5 block text-sm font-semibold">
                    Custom amount (USD)
                  </label>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="input-field"
                    placeholder="Enter another amount"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="donor-first" className="mb-1.5 block text-sm font-semibold">First name</label>
                    <input id="donor-first" required className="input-field" autoComplete="given-name" />
                  </div>
                  <div>
                    <label htmlFor="donor-last" className="mb-1.5 block text-sm font-semibold">Last name</label>
                    <input id="donor-last" required className="input-field" autoComplete="family-name" />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="mb-1.5 block text-sm font-semibold">Email address</label>
                    <input id="donor-email" required type="email" className="input-field" autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="donor-zip" className="mb-1.5 block text-sm font-semibold">ZIP code (optional)</label>
                    <input id="donor-zip" className="input-field" autoComplete="postal-code" />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  Complete ${finalAmount || 0} {freq === 'monthly' ? 'monthly' : ''} donation
                </button>
                <p className="text-xs leading-relaxed text-slate-500">
                  Inca Press is a 501(c)(3) nonprofit organization, EIN {ORG.ein}. Donations are tax-deductible to the
                  extent allowed by law. No goods or services are provided in exchange for a general donation. See our{' '}
                  <a href="/privacy-policy" className="underline">Privacy Policy</a> for how we handle donor information.
                </p>
              </form>
            )}
          </div>
          <div className="space-y-6 lg:col-span-2">
            <div className="card space-y-5">
              <h3 className="text-lg font-bold">Other ways to give</h3>
              <p className="flex gap-3 text-sm leading-relaxed">
                <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <span>
                  <strong>Check by mail:</strong> Send to Inca Press, {ADDRESS_LINE}. Memo line: &ldquo;General
                  fund&rdquo; or a specific program name.
                </span>
              </p>
              <p className="flex gap-3 text-sm leading-relaxed">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <span>
                  <strong>Employer matching:</strong> Ask your HR or giving platform to match your gift — our EIN is{' '}
                  {ORG.ein} and our legal name is Inca Press.
                </span>
              </p>
              <p className="flex gap-3 text-sm leading-relaxed">
                <Heart className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <span>
                  <strong>Legacy giving:</strong> Name Inca Press in your will, trust, or IRA beneficiary designation.
                  Email us for sample bequest language.
                </span>
              </p>
              <p className="flex gap-3 text-sm leading-relaxed">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <span>
                  <strong>Questions:</strong>{' '}
                  <a href={'mailto:' + ORG.email} className="font-semibold text-ocean-700 underline">{ORG.email}</a>{' '}
                  or <a href={'tel:' + ORG.phoneHref} className="font-semibold text-ocean-700 underline">{ORG.phone}</a>
                </span>
              </p>
            </div>
            <div className="rounded-2xl bg-ocean-950 p-7 text-white">
              <h3 className="font-bold">Your gift at work</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ocean-100">
                <li><strong className="text-sun-400">$10</strong> — 5 new picture books for one child</li>
                <li><strong className="text-sun-400">$25</strong> — a bilingual book set for a reading circle family</li>
                <li><strong className="text-sun-400">$50</strong> — a classroom read-aloud kit</li>
                <li><strong className="text-sun-400">$100</strong> — books for 10 bookmobile families</li>
                <li><strong className="text-sun-400">$500</strong> — one full Classroom Book Grant</li>
              </ul>
              <p className="mt-5 border-t border-ocean-800 pt-4 text-xs leading-relaxed text-ocean-300">
                Inca Press &middot; EIN {ORG.ein} &middot; {ADDRESS_LINE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
