import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, MapPin, Mail, Phone, BadgeCheck, Heart } from 'lucide-react'
import { ORG, NAV_LINKS } from '../data/org.js'

const linkCls = ({ isActive }) =>
  'block rounded-md px-3 py-2 text-sm font-semibold transition ' +
  (isActive ? 'text-sun-600' : 'text-ocean-900 hover:text-ocean-600')

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top utility bar: legal identity & contact info */}
      <div className="bg-ocean-950 text-ocean-100">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-sun-400" aria-hidden="true" />
              Registered 501(c)(3) Nonprofit &middot; EIN {ORG.ein}
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=309%20Defoe%20Dr%2C%20Columbia%2C%20MO%2065203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5 text-sun-400" aria-hidden="true" />
              {ORG.address.street}, {ORG.address.city}, {ORG.address.state} {ORG.address.zip}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href={'mailto:' + ORG.email} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-sun-400" aria-hidden="true" />
              {ORG.email}
            </a>
            <a href={'tel:' + ORG.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-sun-400" aria-hidden="true" />
              {ORG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Inca Press home">
            <img src="/logo.svg" alt="Inca Press logo" className="h-10 w-10" />
            <span className="font-display text-2xl font-bold text-ocean-950">Inca Press</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls}>
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-sun-500 px-5 py-2.5 text-sm font-bold text-ocean-950 transition hover:bg-sun-400"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate
            </Link>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-4 py-2 text-sm font-bold text-ocean-950"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-ocean-900 hover:bg-ocean-50"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 xl:hidden" aria-label="Mobile navigation">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
