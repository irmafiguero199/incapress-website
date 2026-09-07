import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ORG } from '../data/org.js'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Inca Press</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="bg-ocean-950 py-28 text-center text-white">
        <p className="text-7xl font-bold text-sun-400">404</p>
        <h1 className="mt-4 text-3xl font-bold">This page has moved or no longer exists</h1>
        <p className="mt-3 text-sm text-ocean-200">
          Inca Press — 501(c)(3) Nonprofit — EIN {ORG.ein} — 309 Defoe Dr, Columbia, MO 65203-0209
        </p>
        <Link to="/" className="btn-primary mt-8">Return Home</Link>
      </section>
    </>
  )
}
