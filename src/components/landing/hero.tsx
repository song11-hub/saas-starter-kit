import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-24 px-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
        Ship your SaaS{" "}
        <span className="text-indigo-600 dark:text-indigo-400">in days</span>,
        not months
      </h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Production-ready Next.js starter kit with authentication, payments, team management,
        and a beautiful dashboard. Everything you need to launch your next SaaS product.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link href="/register">
          <Button size="lg">Get started</Button>
        </Link>
        <Link href="#features">
          <Button variant="outline" size="lg">Learn more</Button>
        </Link>
      </div>
    </section>
  );
}
