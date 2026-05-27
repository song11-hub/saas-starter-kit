const items = [
  {
    title: "Authentication",
    description: "Email/password and Google OAuth out of the box. Powered by NextAuth.js with JWT sessions and secure password hashing.",
  },
  {
    title: "Payments",
    description: "Stripe subscription integration with webhooks. Free, Pro, and Enterprise tiers ready to customize.",
  },
  {
    title: "Team Management",
    description: "Invite team members, manage roles, and collaborate. Owners, admins, and members with granular permissions.",
  },
  {
    title: "Dashboard",
    description: "Clean, responsive dashboard with dark mode support. Built with Tailwind CSS and Radix UI primitives.",
  },
  {
    title: "Database",
    description: "Prisma ORM with SQLite for zero-config development. Swap to PostgreSQL in production with one line change.",
  },
  {
    title: "Type-Safe",
    description: "Full TypeScript support with strict mode. End-to-end type safety from database queries to UI components.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
          Everything you need
        </h2>
        <p className="mt-4 text-lg text-center text-slate-600 dark:text-slate-400">
          Skip the boilerplate. Focus on your product.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
