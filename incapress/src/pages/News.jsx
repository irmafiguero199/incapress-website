import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { NEWS_ARTICLES } from '../data/org.js'

export default function News() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <>
      <Helmet>
        <title>News &amp; Updates — Inca Press</title>
        <meta
          name="description"
          content="Latest news from Inca Press: program milestones, bookmobile expansions, grant awards, and annual reports from our 501(c)(3) literacy nonprofit (EIN 93-3263220)."
        />
        <link rel="canonical" href="https://incapress.sbs/news" />
      </Helmet>
      <section className="bg-ocean-950 py-20 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Newsroom</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">News &amp; updates</h1>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {NEWS_ARTICLES.map((a, i) => (
              <article key={a.title} className="card">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-sun-100 px-3 py-1 font-bold text-sun-700">{a.category}</span>
                  <time className="text-slate-500">{a.date}</time>
                </div>
                <h2 className="mt-3 text-xl font-bold md:text-2xl">{a.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{a.excerpt}</p>
                {openIdx === i && <p className="mt-3 leading-relaxed">{a.body}</p>}
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ocean-700 hover:text-ocean-500"
                >
                  {openIdx === i ? (
                    <>Read less <ChevronUp className="h-4 w-4" aria-hidden="true" /></>
                  ) : (
                    <>Read more <ChevronDown className="h-4 w-4" aria-hidden="true" /></>
                  )}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
