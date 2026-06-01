import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Coursework — Hemanshu Boppana",
  description: "Coursework by semester — Hemanshu Boppana.",
};

/* Coursework grouped by semester. Fall 2023 onwards; fill in real courses. */
const semesters = [
  {
    term: "Fall 2023",
    courses: ["Placeholder course", "Placeholder course"],
  },
  {
    term: "Spring 2024",
    courses: ["Placeholder course", "Placeholder course"],
  },
  {
    term: "Fall 2024",
    courses: ["Placeholder course", "Placeholder course"],
  },
  {
    term: "Spring 2025",
    courses: ["Placeholder course", "Placeholder course"],
  },
  {
    term: "Fall 2025",
    courses: ["Placeholder course", "Placeholder course"],
  },
  {
    term: "Spring 2026",
    courses: ["Placeholder course", "Placeholder course"],
  },
];

export default function Coursework() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <header>
        <a
          href="/"
          className="prose-link text-sm text-muted no-underline opacity-70 transition-opacity hover:opacity-100"
        >
          ← back
        </a>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Coursework</h1>
        <p className="mt-2 text-lg leading-relaxed text-muted">
          Courses by semester.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {semesters.map((sem) => (
          <section key={sem.term}>
            <h2 className="section-label">{sem.term}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed marker:text-muted">
              {sem.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
