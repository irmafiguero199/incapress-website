import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { ORG, ADDRESS_LINE, NAV_LINKS, PROGRAMS } from '../data/org.js'

const socials = [
  { icon: Facebook, label: 'Facebook', href: ORG.social.facebook },
  { icon: Instagram, label: 'Instagram', href: ORG.social.instagram },
  { icon: Twitter, label: 'X (Twitter)', href: ORG.social.twitter },
  { icon: Linkedin, label: 'LinkedIn', href: ORG.social.linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-100">
      <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Inca Press logo" className="h-10 w-10" />
              <span className="font-display text-2xl font-bold text-white">Inca Press</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ocean-200">{ORG.missionShort}</p>
            <p className="mt-4 text-sm text-ocean-200">
              A registered 501(c)(3) nonprofit organization.
              <br />
              Federal EIN: <span className="font-bold text-white">{ORG.ein}</span>
            </p>
            <p className="mt-2 text-sm text-ocean-200">
              Founded {ORG.founded} &middot; Incorporated in {ORG.stateOfIncorporation}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={'Inca Press on ' + label}
                  className="rounded-full bg-ocean-800 p-2.5 text-ocean-100 transition hover:bg-sun-500 hover:text-ocean-950"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-sun-400">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[...NAV_LINKS, { to: '/donate', label: 'Donate' }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ocean-200 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-sun-400">Programs</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROGRAMS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to="/programs" className="text-ocean-200 transition hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-sun-400">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                <span>
                  {ORG.address.street}
                  <br />
                  {ORG.address.city}, {ORG.address.state} {ORG.address.zip}
                  <br />
                  {ORG.address.country}
                </span>
              </li>
              <li>
                <a href={'mailto:' + ORG.email} className="flex gap-2.5 transition hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                  {ORG.email}
                </a>
              </li>
              <li>
                <a href={'tel:' + ORG.phoneHref} className="flex gap-2.5 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                  {ORG.phone}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ocean-300">
              Office hours: Monday–Friday, 9:00 AM – 5:00 PM CT. Warehouse and bookmobile hours vary by route.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ocean-800 pt-6 text-xs text-ocean-300 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Inca Press. All rights reserved. Inca Press is a 501(c)(3) tax-exempt
            organization (EIN {ORG.ein}). Donations are tax-deductible to the extent allowed by law.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-ocean-400">
          {ADDRESS_LINE} &middot; {ORG.email} &middot; incapress.sbs
        </p>
      </div>
    </footer>
  )
}
