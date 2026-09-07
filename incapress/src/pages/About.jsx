import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BadgeCheck, Scale, HandHeart, Lightbulb, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, ADDRESS_LINE, TIMELINE } from '../data/org.js'

const VALUES = [
  { icon: HandHeart, title: 'Access first', text: 'Every program we run is free. No applications, no income tests, no fine print. If a child wants a book, they get a book.' },
  { icon: Users, title: 'Community-led', text: 'Columbia residents shape what we publish, where the bookmobile stops, and which programs grow. Our volunteers and partner organizations co-design everything.' },
  { icon: Lightbulb, title: 'Evidence-based', text: 'Our workshops and reading circles use methods backed by reading research — dialogic reading, choice-based distribution, and consistent access to high-interest books.' },
  { icon: Scale, title: 'Transparent', text: 'We publish our EIN, annual reports, Form 990 summaries, and board minutes so every donor and family can see exactly how resources are used.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Inca Press</title>
        <meta
          name="description"
          content="The story, values, and legal information of Inca Press, a 501(c)(3) nonprofit publisher and literacy organization (EIN 93-3263220) based in Columbia, Missouri."
        />
        <link rel="canonical" href="https://incapress.sbs/about" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">About Inca Press</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            A garage full of donated books became mid-Missouri’s free bookstore on wheels.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ocean-100">
            In the fall of 2021, middle-school reading teacher Sarah Lindqvist watched her students lose access to
            libraries during pandemic closures. She and four retired teachers collected 400 donated books in a
            Columbia garage and handed them out at a food pantry pop-up. The books were gone in one afternoon — and
            Inca Press was born.
          </p>
        </div>
      </section>

      {/* Legal information — prominent */}
      <section className="border-b border-slate-200 bg-sun-50 py-10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-sun-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-1 h-10 w-10 shrink-0 text-sun-500" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold">Legal &amp; registration information</h2>
                <p className="mt-2 text-sm leading-relaxed">
                  Inca Press is a Missouri nonprofit corporation and a federally recognized tax-exempt public charity
                  under Section 501(c)(3) of the Internal Revenue Code, with federal determination received in{' '}
                  {ORG.irsDeterminationDate}. Incorporated in {ORG.incorporation}. All donations are tax-deductible to
                  the extent allowed by law.
                </p>
              </div>
            </div>
            <div className="grid shrink-0 gap-3 text-sm sm:grid-cols-2 lg:text-right">
              <div className="rounded-xl bg-ocean-950 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-wide text-ocean-300">Federal EIN</p>
                <p className="text-2xl font-bold text-sun-400">{ORG.ein}</p>
              </div>
              <div className="rounded-xl bg-ocean-950 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-wide text-ocean-300">Registered address</p>
                <p className="mt-1 font-semibold leading-snug">{ADDRESS_LINE}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Story"
            title="Milestones on the shelf"
            subtitle="From 400 donated books to more than 52,000 distributed across mid-Missouri."
          />
          <ol className="relative border-l-2 border-ocean-200 pl-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-sun-500 ring-4 ring-sun-100" />
                <p className="text-sm font-bold uppercase tracking-wide text-sun-600">{t.year}</p>
                <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                <p className="mt-2 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ocean-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What Guides Us" title="Our core values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card">
                <v.icon className="h-9 w-9 text-sun-500" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/registration-information" className="btn-outline">
              Full registration &amp; governance details
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
