import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, BookOpen, Truck, Users, GraduationCap, HeartHandshake, BadgeCheck } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { ORG, ADDRESS_LINE, STATS, PROGRAMS, UPCOMING_EVENTS, TESTIMONIALS } from '../data/org.js'

const icons = [Truck, BookOpen, GraduationCap, Users, HeartHandshake, BookOpen]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Inca Press — Free Books & Literacy Programs | Columbia, MO</title>
        <meta
          name="description"
          content="Inca Press is a 501(c)(3) nonprofit (EIN 93-3263220) publishing and distributing free educational books and running literacy programs across mid-Missouri."
        />
        <link rel="canonical" href="https://incapress.sbs/" />
      </Helmet>

      <Hero stats={STATS} />

      {/* Mission summary */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Mission"
            title="Every child deserves a shelf of their own"
            subtitle={ORG.mission}
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <BookOpen className="mx-auto h-10 w-10 text-sun-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">We publish</h3>
              <p className="mt-2 text-sm leading-relaxed">
                Original educational books and community-authored works, printed and designed by our in-house publishing team.
              </p>
            </div>
            <div className="card text-center">
              <Truck className="mx-auto h-10 w-10 text-sun-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">We distribute</h3>
              <p className="mt-2 text-sm leading-relaxed">
                Free books through our bookmobile, book fairs, classroom grants, and partner food pantries across mid-Missouri.
              </p>
            </div>
            <div className="card text-center">
              <Users className="mx-auto h-10 w-10 text-sun-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">We teach</h3>
              <p className="mt-2 text-sm leading-relaxed">
                Family literacy workshops, summer reading challenges, and bilingual reading circles that turn books into habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal identity band — EIN + address always visible */}
      <section className="border-y border-ocean-800 bg-ocean-900 py-8">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-ocean-100 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="inline-flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-sun-400" aria-hidden="true" />
            Inca Press is a registered 501(c)(3) nonprofit organization &middot; Federal EIN {ORG.ein}
          </p>
          <p>Registered office: {ADDRESS_LINE}</p>
          <Link to="/registration-information" className="font-bold text-sun-400 underline-offset-4 hover:underline">
            View registration details
          </Link>
        </div>
      </section>

      {/* Programs preview */}
      <section className="bg-ocean-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Programs that put books in hands"
            subtitle="Six free programs serving children, families, and educators across Columbia, Boone County, and mid-Missouri."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => {
              const Icon = icons[i % icons.length]
              return (
                <article key={p.slug} className="card flex flex-col overflow-hidden p-0">
                  <img src={p.image} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-ocean-50 p-2">
                        <Icon className="h-5 w-5 text-ocean-700" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold">{p.title}</h3>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed">{p.summary}</p>
                    <Link
                      to="/programs"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ocean-700 hover:text-ocean-500"
                    >
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get Involved"
            title="Upcoming events"
            subtitle="All events are free and open to the public. Bring a bag — you will leave with books."
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
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sun-600">{e.location}</p>
                  <p className="mt-2 text-sm leading-relaxed">{e.description}</p>
                  <p className="mt-1 text-xs text-slate-500">{e.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="bg-ocean-950 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            dark
            eyebrow="Community Voices"
            title="What mid-Missouri says about us"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <figure key={t.name} className="rounded-2xl bg-ocean-900 p-7 ring-1 ring-ocean-800">
                <blockquote className="text-lg italic leading-relaxed text-ocean-50">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-sun-400">
                  {t.name} <span className="font-normal text-ocean-200">— {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/impact" className="btn-primary">
              See Our Impact <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
