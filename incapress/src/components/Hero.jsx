import { Link } from 'react-router-dom'
import { BadgeCheck, ArrowRight } from 'lucide-react'
import { ORG } from '../data/org.js'

export default function Hero({ stats }) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 text-white">
      <img
        src="/images/hero.jpg"
        alt="Inca Press — free books and literacy programs in mid-Missouri"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/80 via-ocean-950/40 to-transparent" />
      <div className="relative mx-auto max-w-8xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sun-300 ring-1 ring-white/25">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Registered 501(c)(3) Nonprofit &middot; EIN {ORG.ein}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Free books. Open minds. Stronger communities.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ocean-100 md:text-xl">
            Inca Press publishes and gives away free, high-quality educational books — and builds the literacy
            programs that help children and families across mid-Missouri put them to work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/donate" className="btn-primary">
              Support Our Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/programs" className="btn-secondary">
              Explore Programs
            </Link>
          </div>
        </div>

        {stats && (
          <dl className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur">
                <dd className="text-3xl font-bold text-sun-400">{s.value}</dd>
                <dt className="mt-1 text-sm text-ocean-100">{s.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
