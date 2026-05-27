import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">SaaS Kit</span>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Get started
          </Link>
        </nav>
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-500">
        Built with Next.js, NextAuth, Prisma, and Tailwind CSS.
      </footer>
    </>
  );
}
