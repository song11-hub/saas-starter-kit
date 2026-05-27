# Setup Guide

## 1. Clone & Install

```bash
git clone <your-repo> my-saas
cd my-saas
npm install
```

## 2. Environment Variables

Copy `.env.local` to `.env` and fill in the values:

```bash
cp .env.local .env
```

Generate an `AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

For Google OAuth, create credentials at [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

## 3. Database

```bash
npx prisma db push
```

This creates a SQLite database at `prisma/dev.db`.

To switch to PostgreSQL, change the datasource in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## 4. Run

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## 5. Stripe Setup (Optional)

1. Create a [Stripe](https://stripe.com) account
2. Add your keys to `.env`
3. Create products in Stripe Dashboard
4. Update `STRIPE_PRICE_ID` references in the billing page

## 6. Deploy

Recommended: [Vercel](https://vercel.com) (zero-config for Next.js).

```bash
npm run build
npm start
```

## Customization

- **Brand colors**: Edit CSS variables in `src/app/globals.css`
- **Logo**: Replace text in `components/dashboard/sidebar.tsx` and `app/page.tsx`
- **Plans**: Edit the `plans` array in `app/(dashboard)/dashboard/billing/page.tsx`
- **Database**: Add models to `prisma/schema.prisma`, then run `npx prisma db push`
