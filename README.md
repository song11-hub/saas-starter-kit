> **🚀 Download instantly:** [Get it on Gumroad](https://1285770837308.gumroad.com/l/nextjs-saas-starter-kit) | Star this repo for updates

# SaaS Starter Kit

Production-ready Next.js starter kit for building SaaS products. Authentication, payments, team management, and a beautiful dashboard — all wired up and ready to go.

## Features

- **Authentication** — Email/password + Google OAuth via NextAuth.js v5
- **Payments** — Stripe subscription integration (Free, Pro, Enterprise)
- **Team Management** — Create teams, invite members, manage roles
- **Dashboard** — Clean, responsive UI with dark mode
- **Database** — Prisma ORM with SQLite (swap to PostgreSQL in production)
- **TypeScript** — Strict mode, end-to-end type safety
- **Tailwind CSS** — Utility-first styling with custom theme

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local .env
# Edit .env with your values

# Set up the database
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AUTH_SECRET` | Yes | Random string for session encryption |
| `GOOGLE_CLIENT_ID` | No | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | No | Google OAuth client secret |
| `NEXT_PUBLIC_APP_URL` | Yes | Your app URL (default: http://localhost:3000) |
| `STRIPE_SECRET_KEY` | No | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | No | Stripe webhook secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe publishable key |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Login & register pages
│   ├── (dashboard)/        # Protected dashboard pages
│   ├── api/                # API routes
│   └── page.tsx            # Landing page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── auth/               # Auth forms
│   ├── dashboard/          # Dashboard components
│   └── landing/            # Landing page sections
├── lib/                    # Core libraries
│   ├── auth.ts             # NextAuth config
│   ├── db.ts               # Prisma client
│   └── utils.ts            # Utility functions
└── types/                  # TypeScript types
```

## Tech Stack

- [Next.js 16](https://nextjs.org) — React framework
- [NextAuth.js v5](https://authjs.dev) — Authentication
- [Prisma](https://prisma.io) — Database ORM
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [TypeScript](https://typescriptlang.org) — Type safety

## License

MIT — build anything you want.
