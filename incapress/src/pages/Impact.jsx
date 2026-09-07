import { Helmet } from 'react-helmet-async'
import { Quote, Handshake } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { STATS, TESTIMONIALS, PARTNERS } from '../data/org.js'

export default function Impact() {
  return (
    <>
      <Helmet>
        <title>Our Impact — Inca Press</title>
        <meta
          name="description"
          content="Impact numbers, testimonials, and community partners of Inca Press, a 501(c)(3) literacy nonprofit (EIN 93-3263220) serving mid-Missouri since 2021."
        />
        <link rel="canonical" href="https://incapress.sbs/impact" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Our Impact</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Numbers that tell a story</h1>
          <p className="mt-5 text-lg text-ocean-100">
            Behind every statistic is a child choosing their first chapter book, a teacher restocking a bare shelf, or
            a grandparent holding a book they wrote themselves.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-ocean-50 p-8 text-center ring-1 ring-ocean-100">
                <dd className="text-4xl font-bold text-ocean-800">{s.value}</dd>
                <dt className="mt-2 text-sm text-slate-600">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { value: '96', label: 'Classrooms funded with starter libraries since 2023' },
              { value: '2,140', label: 'Children in the 2026 Summer Reading Challenge' },
              { value: '90', label: 'Families served weekly by bilingual reading circles' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-ocean-950 p-8 text-center">
                <dd className="text-4xl font-bold text-sun-400">{s.value}</dd>
                <dt className="mt-2 text-sm text-ocean-200">{s.label}</dt>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Testimonials" title="In their own words" />
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card relative">
                <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-sun-500 p-1.5 text-ocean-950" aria-hidden="true" />
                <blockquote className="mt-4 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-ocean-800">
                  {t.name} <span className="font-normal text-slate-500">— {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Community"
            title="Our partners"
            subtitle="Inca Press works alongside schools, libraries, and service organizations across mid-Missouri."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <Handshake className="h-5 w-5 shrink-0 text-sun-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-ocean-900">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
