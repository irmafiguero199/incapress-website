import { Helmet } from 'react-helmet-async'
import { MapPin, Users, CalendarDays } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { PROGRAMS, UPCOMING_EVENTS } from '../data/org.js'

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs — Inca Press</title>
        <meta
          name="description"
          content="Free books, family literacy workshops, community publishing, classroom grants, summer reading, and bilingual reading circles from Inca Press (EIN 93-3263220)."
        />
        <link rel="canonical" href="https://incapress.sbs/programs" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Our Programs</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Six free ways we build readers</h1>
          <p className="mt-5 text-lg text-ocean-100">
            Every Inca Press program is free for participants and funded by individual donors, community grants, and
            in-kind support from our partners.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl space-y-16 px-4 sm:px-6 lg:px-8">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.slug}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img src={p.image} alt={p.title} className="w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-600">Program {String(i + 1).padStart(2, '0')}</p>
                <h2 className="mt-2 text-3xl font-bold">{p.title}</h2>
                <p className="mt-4 leading-relaxed">{p.details}</p>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="flex items-start gap-2.5">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-sun-500" aria-hidden="true" />
                    <span><strong>Eligibility:</strong> {p.eligibility}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-500" aria-hidden="true" />
                    <span><strong>Service area:</strong> {p.area}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ocean-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mark Your Calendar"
            title="Upcoming program events"
            subtitle="Schedules for bookmobile routes and workshop series are published in our monthly newsletter."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {UPCOMING_EVENTS.map((e) => (
              <div key={e.title} className="card flex gap-5">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-ocean-950 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-sun-400">
                    {e.date.split(' ')[0].slice(0, 3)}
                  </span>
                  <span className="text-xl font-bold">{e.date.split(' ')[1].replace(',', '')}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{e.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-sun-600">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> {e.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{e.description}</p>
                  <p className="mt-1 text-xs text-slate-500">{e.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
