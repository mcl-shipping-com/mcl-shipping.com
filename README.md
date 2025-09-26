# MCL Shipping – Next.js + Tailwind (Bilingual, Dark Mode)

A polished, production-ready starter for **MCL Shipping** with bilingual UI (English/Arabic & RTL), dark mode, pricing, tracking (mock API), contact form (API route), SEO (OpenGraph/Twitter), sitemap/robots, and CI workflow.

## Quick Start
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy
### Vercel (recommended)
1. Push this repo to GitHub.
2. Import to Vercel → Framework preset: **Next.js** (Node 20).
3. Add environment variables from `.env.example` as needed.
4. Deploy.

### GitHub Actions CI
- Builds on every push/PR to `main` via `.github/workflows/ci.yml`.

## Structure
```
src/
  app/
    api/contact/route.ts     # Contact POST handler (placeholder)
    api/track/route.ts       # Tracking GET mock
    sitemap.ts               # SEO
    robots.ts                # SEO
    page.tsx                 # Home
    (pages)/{services,pricing,tracking,about,contact}/page.tsx
  components/                # Navbar, Footer, Hero, Pricing, Tracking, Section
  i18n.ts                    # Translations + RTL
  styles/globals.css         # Tailwind utilities
public/
  logo.svg, favicon.ico
```

## Customize
- Edit texts in `src/i18n.ts`.
- Colors: `tailwind.config.js` (brand palette) + CSS utilities in `globals.css`.
- Replace `/public/logo.svg` with your real logo.
- Hook `/api/contact` to SendGrid/Mailgun; `/api/track` to EasyPost/Shippo.

## Commands
```bash
npm run dev     # Dev server
npm run build   # Production build
npm start       # Start production server
npm run lint    # Lint
```

## License
MIT
