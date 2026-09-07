import { useState } from 'react'
import { MailCheck, Send } from 'lucide-react'
import { ORG } from '../data/org.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <section className="bg-gradient-to-r from-ocean-800 to-ocean-950 py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">Stay in the loop</h2>
        <p className="mt-3 text-ocean-100">
          One email a month with bookmobile schedules, volunteer opportunities, and impact updates from Inca Press.
          No spam — and your information is never sold. See our Privacy Policy.
        </p>
        {subscribed ? (
          <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-sun-300 ring-1 ring-white/25">
            <MailCheck className="h-5 w-5" aria-hidden="true" />
            Thank you! You are on the list — the next update goes out on the first Tuesday of the month.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.org"
              className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-ocean-200 focus:border-sun-400 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0">
              <Send className="h-4 w-4" aria-hidden="true" />
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-ocean-300">
          Questions? Write to us at{' '}
          <a href={'mailto:' + ORG.email} className="font-semibold text-sun-300 underline">
            {ORG.email}
          </a>.
        </p>
      </div>
    </section>
  )
}
