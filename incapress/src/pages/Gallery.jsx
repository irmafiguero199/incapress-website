import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, CalendarDays } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/org.js'

export default function Gallery() {
  const cats = ['All', ...new Set(GALLERY_ITEMS.map((g) => g.category))]
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter)

  return (
    <>
      <Helmet>
        <title>Gallery — Inca Press</title>
        <meta
          name="description"
          content="Photos and highlights from Inca Press book fairs, bookmobile routes, author showcases, and volunteer events across Columbia, Missouri (EIN 93-3263220)."
        />
        <link rel="canonical" href="https://incapress.sbs/gallery" />
      </Helmet>
      <section className="bg-ocean-950 py-20 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Gallery</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Moments from the field</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ocean-100">
          Book fairs, bookmobile stops, author nights, and the volunteers who make it all happen.
        </p>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  'rounded-full px-5 py-2 text-sm font-bold transition ' +
                  (filter === c ? 'bg-ocean-950 text-white' : 'bg-ocean-50 text-ocean-800 hover:bg-ocean-100')
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <figure key={g.title} className="card overflow-hidden p-0">
                <img src={g.image} alt={g.title} className="h-52 w-full object-cover" loading="lazy" />
                <figcaption className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-sun-600">{g.category}</span>
                  <h3 className="mt-1 text-lg font-bold">{g.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {g.date}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {g.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{g.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
