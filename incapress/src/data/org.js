// Single source of truth for Inca Press organization data.
export const ORG = {
  name: 'Inca Press',
  legalName: 'Inca Press',
  ein: '93-3263220',
  taxStatus: '501(c)(3) Public Charity',
  irsDeterminationDate: 'December 2022',
  founded: 2021,
  incorporated: 'June 2022',
  stateOfIncorporation: 'Missouri',
  address: {
    street: '309 Defoe Dr',
    city: 'Columbia',
    state: 'MO',
    zip: '65203-0209',
    country: 'United States',
  },
  email: 'admin@incapress.sbs',
  phone: '(573) 555-0142',
  phoneHref: '+15735550142',
  domain: 'https://incapress.sbs',
  missionShort:
    'Inca Press publishes and gives away free, high-quality educational books — and builds the literacy programs that help mid-Missouri families use them.',
  mission:
    'Inca Press exists to close the book gap in mid-Missouri. We write, print, and distribute free, high-quality educational books to children, families, and educators in under-resourced communities, and we pair every book with the literacy support that turns pages into progress.',
  vision:
    'A mid-Missouri where every child — regardless of income, language, or ZIP code — owns a growing home library and reads with confidence.',
  category: 'Education & Literacy',
  population: 'Children ages 0–18 and their families, educators, and adult learners in under-resourced communities',
  serviceArea: 'Columbia and Boone County, Missouri, with outreach across mid-Missouri',
  social: {
    facebook: 'https://www.incapress.sbs',
    instagram: 'https://www.instagram.com/incapress',
    twitter: 'https://x.com/incapress',
    linkedin: 'https://www.linkedin.com/company/inca-press',
  },
}

export const ADDRESS_LINE = ORG.address.street + ', ' + ORG.address.city + ', ' + ORG.address.state + ' ' + ORG.address.zip

export const STATS = [
  { value: '52,000+', label: 'Free books distributed since 2021' },
  { value: '13,500', label: 'Children reached across mid-Missouri' },
  { value: '87', label: 'School & community partners' },
  { value: '340', label: 'Active volunteers' },
]

export const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/registration-information', label: 'Registration' },
  { to: '/contact', label: 'Contact' },
]

export const PROGRAMS = [
  {
    slug: 'free-book-distribution',
    title: 'Free Book Distribution',
    image: '/images/prog-bookmobile.jpg',
    summary:
      'Our volunteer-run bookmobile and community book fairs place brand-new, age-appropriate books directly into children’s hands — free of charge, no strings attached.',
    details:
      'Inca Press sources and purchases new books in bulk from publisher overstock and educator catalogs, then distributes them through weekly bookmobile stops at apartment communities, laundromats, food pantries, and school events across Columbia and Boone County. Every child chooses their own books, because choice is what builds readers. In 2025 alone, this program placed more than 21,000 books into children’s hands.',
    eligibility: 'Open to all children and families in mid-Missouri; no application, ID, or proof of income required.',
    area: 'Columbia, Boone County, and adjacent mid-Missouri counties.',
  },
  {
    slug: 'literacy-workshops',
    title: 'Family Literacy Workshops',
    image: '/images/prog-workshop.jpg',
    summary:
      'Hands-on workshops that give parents and caregivers practical, proven strategies for reading aloud and building early literacy at home.',
    details:
      'Led by retired teachers and reading specialists, our six-part workshop series covers dialogic reading, phonemic awareness games, building a home reading routine, and choosing books children actually want to read. Workshops run in English and Spanish at elementary schools, Head Start centers, and public housing community rooms. Childcare and dinner are provided so whole families can attend.',
    eligibility: 'Free and open to parents, caregivers, and early-childhood educators in mid-Missouri.',
    area: 'Partner sites across Columbia, Hallsville, Centralia, and Ashland.',
  },
  {
    slug: 'community-publishing',
    title: 'Community Publishing',
    image: '/images/prog-publishing.jpg',
    summary:
      'We help local students, seniors, and first-time authors turn their own stories into real, printed books — and then give those books back to the community.',
    details:
      'Through after-school writing clubs, senior-center memoir projects, and our annual Young Authors Anthology, Inca Press guides participants from first draft to a professionally printed paperback. Authors keep their copyright; we cover editing, design, and printing. Finished books join our free distribution catalog, so a fifth-grader’s story about Columbia can end up on another child’s bookshelf across town.',
    eligibility: 'Open to students in grades 3–12, older adults, and community writers; free of charge.',
    area: 'Columbia Public Schools sites, Daniel Boone Regional Library branches, and senior centers.',
  },
  {
    slug: 'classroom-book-grants',
    title: 'Classroom Book Grants',
    image: '/images/prog-grants.jpg',
    summary:
      '$500 starter libraries for pre-K through 3rd grade classrooms in high-poverty schools, refreshed annually with diverse, high-interest titles.',
    details:
      'Teachers in schools where 60% or more of students qualify for free or reduced-price lunch can apply each August for a Classroom Book Grant. Each grant funds roughly 50 new titles chosen by the teacher, plus a classroom read-aloud kit. Since 2023, we have funded 96 classrooms across 23 mid-Missouri schools — and teachers report an average 40% increase in voluntary reading time within the first semester.',
    eligibility: 'Pre-K–3rd grade teachers at Title I and high-poverty schools in mid-Missouri.',
    area: 'Public and charter schools in Boone, Callaway, Cole, and Howard counties.',
  },
  {
    slug: 'summer-reading-challenge',
    title: 'Summer Reading Challenge',
    image: '/images/gallery-4.jpg',
    summary:
      'A free, eight-week summer program that keeps reading skills sharp during school break, with milestone prizes and weekly bookmobile visits.',
    details:
      'Summer slide costs low-income students up to two months of reading growth each year. Our Summer Reading Challenge fights back with a self-paced reading log, weekly bookmobile stops in low-access neighborhoods, free books at every milestone, and a finale celebration at Stephens Lake Park. In summer 2026, 2,140 children participated and 78% completed the full eight weeks.',
    eligibility: 'Free for all children ages 4–14 in mid-Missouri; registration opens each May.',
    area: 'Columbia neighborhoods, Boone County, and partner summer meal sites.',
  },
  {
    slug: 'english-learner-reading-circles',
    title: 'Reading Circles for English Learners',
    image: '/images/gallery-2.jpg',
    summary:
      'Weekly bilingual reading circles where newcomer and English-learner families practice reading together in a welcoming, low-pressure setting.',
    details:
      'Facilitated by bilingual volunteers — many of them retired educators and MU education students — our reading circles pair picture books with conversation practice for children and adults together. Each family takes home the week’s book to build a bilingual home library. Circles currently run in Spanish, Arabic, and Dari, serving about 90 families per week.',
    eligibility: 'Free; open to refugee, immigrant, and English-learner families in the Columbia area.',
    area: 'Columbia Public Schools family centers and the Inca Press office at 309 Defoe Dr.',
  },
]

export const PARTNERS = [
  'Daniel Boone Regional Library',
  'Columbia Public Schools',
  'The Food Bank for Central and Northeast Missouri',
  'Boys & Girls Clubs of Columbia',
  'United Way of Central Missouri',
  'Missouri Humanities Council',
  'Head Start of Columbia',
  'True North of Columbia',
]

export const BOARD = [
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

export const STAFF = [
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

export const TESTIMONIALS = [
  { quote: 'My daughter picked her very own chapter book from the bookmobile and read the whole thing in two days. She had never finished a book before. Now she has a shelf full.',
    name: 'Keisha R.', role: 'Parent, Columbia, MO' },
  { quote: 'The Classroom Book Grant changed my classroom culture. Kids who avoided reading now argue over who gets the new book first. I have never seen anything work this fast.',
    name: 'Mr. Dan Keller', role: '2nd Grade Teacher, Columbia Public Schools' },
  { quote: 'As a newcomer, the reading circle was the first place my son and I felt at home here. He practices English with the books, and I practice too.',
    name: 'Fatima H.', role: 'Reading Circle Participant' },
  { quote: 'They printed my memoir. At 78, I am a published author, and my grandchildren read my stories at school. Inca Press gave me that.',
    name: 'Walter Simmons', role: 'Community Publishing Author' },
]

export const TIMELINE = [
  { year: '2021', title: 'The garage beginnings',
    text: 'Founder Sarah Lindqvist and four retired teachers sort 400 donated books in a Columbia garage and hand them out at a food pantry pop-up. Every book goes in one afternoon.' },
  { year: '2022', title: 'Incorporation & 501(c)(3)',
    text: 'Inca Press is incorporated in Missouri and receives its federal 501(c)(3) determination from the IRS (EIN 93-3263220). The first board of directors is seated.' },
  { year: '2023', title: '10,000th book & first grants',
    text: 'We distribute our 10,000th free book and launch the Classroom Book Grants program, funding 18 classrooms in its first semester.' },
  { year: '2024', title: 'The bookmobile hits the road',
    text: 'A donated delivery van becomes the Inca Press bookmobile, launching weekly stops at apartment communities, laundromats, and food pantries.' },
  { year: '2025', title: 'Community Publishing launches',
    text: 'Our first Young Authors Anthology prints 1,200 copies written by Columbia students. Senior memoir projects begin at three senior centers.' },
  { year: '2026', title: 'Growing to 52,000 books',
    text: 'Cumulative distribution passes 52,000 books. Reading circles expand to Arabic and Dari, serving 90 families a week across Columbia.' },
]

export const UPCOMING_EVENTS = [
  { date: 'September 12, 2026', title: 'Fall Book Fair at Douglass Park', location: 'Douglass Park, Columbia, MO',
    description: 'Free books for every child, face painting, and read-aloud sessions on the hour. Rain date September 19.' },
  { date: 'September 26, 2026', title: 'Family Literacy Workshop — Session 1', location: 'Shepard Boulevard Elementary, Columbia, MO',
    description: 'First session of our six-part fall workshop series for parents and caregivers. Dinner and childcare provided.' },
  { date: 'October 3, 2026', title: 'Community Book Drive', location: 'Inca Press, 309 Defoe Dr, Columbia, MO',
    description: 'Drop off gently used children’s books at our warehouse. Volunteers will sort them the same day for the holiday distribution.' },
  { date: 'October 17, 2026', title: 'Author Showcase Night', location: 'Daniel Boone Regional Library, Columbia, MO',
    description: 'Young Authors Anthology contributors read their work aloud. Printed anthologies are free for attendees.' },
]

export const NEWS_ARTICLES = [
  { date: 'August 22, 2026', category: 'Programs',
    title: 'Summer Reading Challenge wraps with record 2,140 participants',
    excerpt: 'Seventy-eight percent of enrolled children completed all eight weeks, and bookmobile stops handed out 6,400 books between June and August.',
    body: 'The 2026 Summer Reading Challenge closed on August 15 with 2,140 children enrolled — a 30% increase over 2025. Weekly bookmobile visits to ten Columbia neighborhoods kept books flowing all summer, and 78% of participants hit every weekly milestone. The finale at Stephens Lake Park featured read-alouds, free anthologies, and a raffle of 40 new bicycles donated by a local shop. Registration for summer 2027 opens in May.' },
  { date: 'July 10, 2026', category: 'Growth',
    title: 'Inca Press surpasses 52,000 cumulative books distributed',
    excerpt: 'The milestone book — a copy of our Young Authors Anthology — went to a second grader at Russell Boulevard Elementary during a bookmobile visit.',
    body: 'Since handing out 400 books from a garage in 2021, Inca Press has now distributed more than 52,000 free books across mid-Missouri. Program Director Amina Diallo credited the volunteer network: 340 volunteers sort, sticker, and box thousands of books every Saturday so kids can choose their own stories. The organization projects 65,000 books by the end of 2027.' },
  { date: 'May 30, 2026', category: 'Programs',
    title: 'Reading circles expand with new Arabic and Dari groups',
    excerpt: 'Weekly bilingual reading circles now serve about 90 families, pairing picture books with conversation practice for children and adults together.',
    body: 'Following a successful pilot, Inca Press added Arabic and Dari reading circles in partnership with Columbia Public Schools family centers. Facilitators — many of them bilingual retired educators — guide families through a picture book and conversation practice, and every family takes the book home. Circles meet Tuesdays and Thursdays at the Inca Press office, 309 Defoe Dr.' },
  { date: 'April 14, 2026', category: 'Community',
    title: 'Second annual Author Showcase fills the library auditorium',
    excerpt: 'Thirty student authors from the Young Authors Anthology read their original work to a standing-room crowd at Daniel Boone Regional Library.',
    body: 'More than 300 attendees heard fifth through eighth graders read poems, short stories, and memoir excerpts from the 2026 Young Authors Anthology. Each young author received ten copies of their work to share, and anthologies were free for all attendees. Community Publishing Manager Grace Nguyen announced the program will add a summer writing intensive in 2027 for high school students.' },
  { date: 'February 3, 2026', category: 'Funding',
    title: 'Classroom Book Grants awarded to 28 teachers for spring semester',
    excerpt: 'Each grant funds a 50-title starter library plus a read-aloud kit, reaching an estimated 560 students in 14 mid-Missouri schools.',
    body: 'The spring 2026 Classroom Book Grant cycle awarded 28 grants to pre-K through 3rd grade teachers in Title I schools across Boone, Callaway, and Cole counties. Teachers select their own titles from an educator catalog, with priority on diverse characters and high-interest nonfiction. Since 2023, the program has funded 96 classrooms, and participating teachers report a 40% average increase in voluntary reading time within one semester.' },
  { date: 'January 12, 2026', category: 'Governance',
    title: 'Inca Press publishes its 2025 annual report and financial summary',
    excerpt: 'The report details program outcomes, reviewed financials, and the organization’s Form 990 filing, available on the Registration Information page.',
    body: 'Inca Press released its 2025 annual report, covering 19,800 books distributed, 96 funded classrooms, and a volunteer network of 340. The report includes a summary of the organization’s IRS Form 990 filing, board meeting minutes, and financial statements reviewed by an independent CPA. Copies are available by request at admin@incapress.sbs and a summary is posted on this website’s Registration Information page.' },
]

export const GALLERY_ITEMS = [
  { image: '/images/gallery-1.jpg', category: 'Book Fairs', title: 'Spring Book Fair 2026',
    date: 'April 25, 2026', location: 'Albert-Oakland Park, Columbia, MO',
    description: 'Our largest fair yet: 1,900 children chose 4,200 free books across 22 tables staffed by 60 volunteers.' },
  { image: '/images/gallery-2.jpg', category: 'Programs', title: 'Story Time Saturdays — Winter Series',
    date: 'February 7 – March 28, 2026', location: 'Inca Press office, 309 Defoe Dr, Columbia, MO',
    description: 'Eight weeks of bilingual read-alouds for toddlers and preschoolers, with free board books at every session.' },
  { image: '/images/gallery-3.jpg', category: 'Publishing', title: 'Author Showcase Night',
    date: 'April 14, 2026', location: 'Daniel Boone Regional Library, Columbia, MO',
    description: 'Thirty young authors from the 2026 anthology read their original work to over 300 community members.' },
  { image: '/images/gallery-4.jpg', category: 'Programs', title: 'Summer Reading Kickoff',
    date: 'June 6, 2026', location: 'Stephens Lake Park, Columbia, MO',
    description: 'The 2026 Summer Reading Challenge opened with free books, music, and 2,000 reading logs claimed in one morning.' },
  { image: '/images/prog-bookmobile.jpg', category: 'Bookmobile', title: 'Bookmobile Route 4 Launch',
    date: 'May 16, 2026', location: 'Oakland Middle School neighborhood, Columbia, MO',
    description: 'Our fourth weekly route brought first-time bookmobile service to three apartment communities in south Columbia.' },
  { image: '/images/about.jpg', category: 'Volunteers', title: 'Saturday Sorting Crew Milestone',
    date: 'March 14, 2026', location: 'Inca Press warehouse, 309 Defoe Dr, Columbia, MO',
    description: 'Volunteers processed their 100,000th donated book — cleaned, stickered, and boxed for the next distribution.' },
]
