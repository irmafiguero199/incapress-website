# Inca Press — Official Website

Official website of **Inca Press**, a registered 501(c)(3) nonprofit organization
(EIN **93-3263220**) based in Columbia, Missouri. Inca Press publishes and
distributes free educational books and runs literacy programs for children and
families across mid-Missouri.

- **Live site:** https://incapress.sbs
- **Email:** admin@incapress.sbs
- **Address:** 309 Defoe Dr, Columbia, MO 65203-0209

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router DOM 6
- React Helmet Async (per-page SEO titles, descriptions, canonicals)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Deployment

The site is a static Vite build. Deploy the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or the hosting of
incapress.sbs). Make sure the host serves `https://incapress.sbs` as the
canonical domain and that `public/sitemap.xml` and `public/robots.txt` are
reachable at the domain root.

## Google Search Console

Replace the content of the `google-site-verification` meta tag in
`index.html` with the verification code from Google Search Console, then
request indexing of https://incapress.sbs/.

## Project Structure

See the repository layout: `src/pages` holds all routes, `src/components`
holds shared UI, `src/seo/OrganizationSchema.jsx` injects the Schema.org
NGO JSON-LD (including the EIN as `taxID`), and `src/data/org.js` is the
single source of truth for organization data.
