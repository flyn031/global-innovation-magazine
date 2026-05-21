# Global Innovation Magazine

**10 Things I Know** — innovation-focused interviews, est. 2013 Leicester UK.

## Quick Start

```bash
git clone <your-repo>
cd global-innovation-magazine
npm install
cp .env.example .env.local    # add your Anthropic API key
npm run dev                    # http://localhost:3000
```

## Deploy to Railway

1. Push to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add environment variable: `ANTHROPIC_API_KEY`
4. Railway auto-detects Next.js — builds and deploys automatically
5. Add custom domain in Railway settings → point your 123-reg domain there

## Domain Setup (123-reg → Railway)

1. In Railway: Settings → Domains → Add custom domain → `globalinnovationmagazine.com`
2. Railway gives you a CNAME target (something like `xxx.up.railway.app`)
3. In 123-reg DNS settings:
   - Delete any existing A records for `@`
   - Add CNAME: `www` → `xxx.up.railway.app`
   - Add CNAME: `@` → `xxx.up.railway.app` (or use ALIAS if available)
4. Wait 5-30 mins for DNS propagation

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Fonts**: Playfair Display, IBM Plex Sans, Source Serif 4
- **AI**: Claude API (Sonnet) for article generation
- **Hosting**: Railway (hobby plan)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with interview grid
│   ├── layout.tsx            # Root layout + fonts + nav
│   ├── about/page.tsx        # About page
│   ├── contribute/page.tsx   # 10 Things I Know submission form
│   ├── interview/[id]/       # Individual interview pages (SSG)
│   └── api/generate/route.ts # Claude API endpoint
├── components/
│   └── Nav.tsx               # Navbar
└── lib/
    ├── interviews.ts         # Interview data + types
    └── questions.ts          # Questions + categories
```
