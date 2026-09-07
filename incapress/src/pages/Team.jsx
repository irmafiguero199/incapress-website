import { Helmet } from 'react-helmet-async'
import { CalendarClock, Landmark } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const BOARD = [
  { name: 'Dr. Mariana Whitfield', role: 'Board President', initials: 'MW', color: 'from-ocean-600 to-leaf-500',
    bio: 'Retired professor of literacy education at the University of Missouri, where she directed the Reading Recovery program for 14 years. Mariana co-founded Inca Press in 2021 and chairs the program committee.' },
  { name: 'James Okafor', role: 'Vice President', initials: 'JO', color: 'from-sun-500 to-sun-700',
    bio: 'Owner of a Columbia-based logistics company and a longtime youth mentor. James leads the bookmobile operations committee and oversees our volunteer driver network.' },
  { name: 'Elena Vasquez', role: 'Treasurer', initials: 'EV', color: 'from-leaf-500 to-ocean-700',
    bio: 'CPA and former controller for a regional healthcare nonprofit. Elena chairs the finance and audit committee and prepares our annual IRS Form 990 review.' },
  { name: 'David Kim', role: 'Secretary', initials: 'DK', color: 'from-purple-500 to-ocean-800',
    bio: 'Youth services librarian with the Daniel Boone Regional Library. David advises on collection development and coordinates our reading-circle facilitator training.' },
  { name: 'Rev. Patricia Owens', role: 'Board Member', initials: 'PO', color: 'from-sun-600 to-leaf-600',
    bio: 'Pastor of a Columbia faith community and leader of its food pantry. Patricia connects Inca Press with pantry and shelter distribution sites across Boone County.' },
  { name: 'Marcus Bell', role: 'Board Member', initials: 'MB', color: 'from-ocean-500 to-purple-600',
    bio: 'Elementary school principal with 22 years in Columbia Public Schools. Marcus champions the Classroom Book Grants program and recruits teacher ambassadors.' },
]

const STAFF = [
  { name: 'Sarah Lindqvist', role: 'Executive Director & Founder', initials: 'SL', color: 'from-ocean-600 to-sun-500',
    bio: 'A former middle-school reading teacher, Sarah started Inca Press in 2021 with 400 donated books. She now leads a team of eight and still hosts Saturday story time every month.' },
  { name: 'Amina Diallo', role: 'Program Director', initials: 'AD', color: 'from-leaf-500 to-sun-600',
    bio: 'Amina oversees the bookmobile routes, family workshops, and reading circles. She previously managed family services at a Columbia Head Start center for nine years.' },
  { name: 'Tom Reilly', role: 'Volunteer Coordinator', initials: 'TR', color: 'from-purple-500 to-sun-500',
    bio: 'Tom recruits, trains, and schedules our 340 volunteers — from MU students to retired librarians. He built our Saturday sorting crew that processes 2,000 books per week.' },
  { name: 'Grace Nguyen', role: 'Publishing Manager', initials: 'GN', color: 'from-ocean-500 to-leaf-500',
    bio: 'Grace runs the Community Publishing program: editing, designing, and printing the books our community writes. She holds an MFA in book arts from the University of Iowa.' },
  { name: 'Roberto Fuentes', role: 'Bilingual Outreach Coordinator', initials: 'RF', color: 'from-sun-500 to-ocean-700',
    bio: 'Roberto leads our Spanish-language programming and builds relationships with immigrant and refugee-serving organizations across mid-Missouri.' },
  { name: 'Hannah Brooks', role: 'Operations Manager', initials: 'HB', color: 'from-leaf-600 to-purple-500',
    bio: 'Hannah keeps the warehouse, the van, and the calendar running. She manages book procurement, inventory, and our weekly partner deliveries.' },
]

function PersonCard({ person }) {
  return (
    <article className="card">
      <div className="flex items-center gap-4">
        <span
          className={'flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white ' + person.color}
          aria-hidden="true"
        >
          {person.initials}
        </span>
        <div>
          <h3 className="text-lg font-bold">{person.name}</h3>
          <p className="text-sm font-semibold text-sun-600">{person.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed">{person.bio}</p>
    </article>
  )
}

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team &amp; Board — Inca Press</title>
        <meta
          name="description"
          content="Meet the board of directors and staff of Inca Press, a 501(c)(3) literacy nonprofit (EIN 93-3263220) based in Columbia, Missouri."
        />
        <link rel="canonical" href="https://incapress.sbs/team" />
      </Helmet>

      <section className="bg-ocean-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-400">Our People</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">The board and staff behind the books</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Governance"
            title="Board of Directors"
            subtitle="Our volunteer board meets the third Tuesday of each month at the Inca Press office, 309 Defoe Dr, Columbia, MO. Meeting minutes are available on request."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Day to Day" title="Staff" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STAFF.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="card flex gap-4">
              <CalendarClock className="h-8 w-8 shrink-0 text-sun-500" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold">Board meetings</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  The board convenes at 5:30 PM on the third Tuesday of every month at 309 Defoe Dr, Columbia, MO.
                  Members of the community may observe meetings by emailing{' '}
                  <a href="mailto:admin@incapress.sbs" className="font-semibold text-ocean-700 underline">
                    admin@incapress.sbs
                  </a>{' '}
                  at least one week in advance.
                </p>
              </div>
            </div>
            <div className="card flex gap-4">
              <Landmark className="h-8 w-8 shrink-0 text-sun-500" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold">Governance documents</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Our bylaws, conflict-of-interest policy, and board meeting minutes are available on request. Annual
                  IRS Form 990 summaries and financial reports are posted on our Registration Information page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
