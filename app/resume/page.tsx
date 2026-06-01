import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Resume — Hemanshu Boppana",
  description: "Resume of Hemanshu Boppana.",
};

// Drop your PDF at public/resume.pdf to wire this up.
const RESUME_PATH = "/resume.pdf";

export default function Resume() {
  return (
    <main
      id="top"
      className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10 sm:py-12"
    >
      <header className="flex items-center justify-between gap-4">
        <a
          href="/"
          className="prose-link text-sm text-muted no-underline opacity-70 transition-opacity hover:opacity-100"
        >
          ← back
        </a>

        <a
          href={RESUME_PATH}
          download
          className="prose-link inline-flex items-center gap-1.5 text-sm no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          download
        </a>
      </header>

      <h1 className="mt-6 text-2xl font-bold tracking-tight">Resume</h1>

      {/* Inline PDF via the browser's native viewer */}
      <div className="mt-4 flex-1 overflow-hidden rounded-lg border border-rule">
        <iframe
          src={RESUME_PATH}
          title="Hemanshu Boppana resume"
          className="h-full min-h-[75vh] w-full"
        />
      </div>

      {/* Fallback for browsers/devices that won't render the PDF inline */}
      <p className="mt-3 text-sm text-muted">
        Can&apos;t see the resume?{" "}
        <a className="prose-link" href={RESUME_PATH} target="_blank" rel="noreferrer">
          Open it in a new tab
        </a>
        .
      </p>

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
