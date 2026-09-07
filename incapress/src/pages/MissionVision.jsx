import { Helmet } from 'react-helmet-async'
import { Target, Eye, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG } from '../data/org.js'

const GOALS = [
  { title: 'Distribute 100,000 free books by 2028', detail: 'Scale bookmobile routes from four to eight and add two annual book fairs in rural mid-Missouri counties.' },
  { title: 'Reach every Title I elementary school in mid-Missouri', detail: 'Grow Classroom Book Grants from 96 to 200 funded classrooms, prioritizing schools with no full-time librarian.' },
  { title: 'Publish 40 community-authored titles', detail: 'Expand Community Publishing with a teen editorial board and a senior memoir fellowship at five senior centers.' },
  { title: 'Serve 200 families weekly in reading circles', detail: 'Add Somali and Pashto circles and train 60 bilingual volunteer facilitators by 2027.' },
  { title: 'Achieve 90% on-time Form 990 filing and 100% board giving', detail: 'Maintain audited-level financial discipline and publish our annual report every January without exception.' },
]

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission &amp; Vision — Inca Press</title>
        <meta
          name="description"
          content="The mission, vision, and 2026–2030 strategic goals of Inca Press, a 501(c)(3) literacy nonprofit (EIN 93-3263220) in Columbia, Missouri."
        />
        <link rel="canonical" href="https://incapress.sbs/mission-vision" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Mission &amp; Vision</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Why we do what we do</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-t-4 border-sun-500 bg-ocean-50 p-10">
              <Target className="h-10 w-10 text-sun-500" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed">{ORG.mission}</p>
            </div>
            <div className="rounded-2xl border-t-4 border-ocean-700 bg-ocean-950 p-10 text-white">
              <Eye className="h-10 w-10 text-sun-400" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold text-white">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-ocean-100">{ORG.vision}</p>
            </div>
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Strategic Plan 2026–2030"
              title="Five goals we are publicly committing to"
              subtitle="Our board reviews progress against these goals at every quarterly meeting, and our annual report discloses where we stand."
            />
            <div className="space-y-4">
              {GOALS.map((g, i) => (
                <div key={g.title} className="card flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun-100 text-lg font-bold text-sun-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{g.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{g.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-ocean-50 p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <CheckCircle2 className="h-6 w-6 text-leaf-500" aria-hidden="true" />
                Who we serve
              </h3>
              <p className="mt-3 leading-relaxed">
                {ORG.population}. Our service area is {ORG.serviceArea}. Every program is free, and no one is asked
                for proof of income, immigration status, or residency to receive a book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
