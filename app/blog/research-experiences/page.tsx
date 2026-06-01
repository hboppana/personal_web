import type { Metadata } from "next";
import ThemeToggle from "../../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Research Experiences — Hemanshu Boppana",
  description: "A writeup on my research experiences.",
};

export default function ResearchExperiencesPost() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <header>
        <a
          href="/blog"
          className="prose-link text-sm text-muted no-underline opacity-70 transition-opacity hover:opacity-100"
        >
          ← back
        </a>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          Research Experiences
        </h1>
        <p className="mt-2 text-lg leading-relaxed text-muted">
          A writeup on my research experiences. Coming soon.
        </p>
      </header>

      {/* Article content goes here. */}

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
