import type { Metadata } from "next";
import ThemeToggle from "../../components/ThemeToggle";

export const metadata: Metadata = {
  title: "VectorDB — Hemanshu Boppana",
  description: "A writeup on building a vector database from scratch in C++.",
};

export default function VectorDBPost() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <header>
        <a
          href="/blog"
          className="prose-link text-sm text-muted no-underline opacity-70 transition-opacity hover:opacity-100"
        >
          ← back
        </a>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">VectorDB</h1>
        <p className="mt-2 text-lg leading-relaxed text-muted">
          A writeup on building a vector database from scratch in C++. Coming
          soon.
        </p>
      </header>

      {/* Article content goes here. */}

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
