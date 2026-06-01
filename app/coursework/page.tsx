import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Coursework — Hemanshu Boppana",
  description: "Coursework by semester — Hemanshu Boppana.",
};

/* Coursework grouped by semester, latest term first. */
const semesters = [
  {
    term: "Summer 2026",
    courses: ["MAP2302: Elementary Differential Equations", "QMB3302: Business Analytics and AI"],
  },
  {
    term: "Spring 2026",
    courses: ["COP4533: Algorithm Abstraction & Design", "CIS4301: Information and Database Systems 1", "COP4020: Programming Language Concepts", "CAP4641: Natural Language Processing", "ENC3246: Professional Communications for Engineers"],
  },
  {
    term: "Fall 2025",
    courses: ["CDA4324C: Cyber-Physical System Security", "COP4600: Operating Systems", "STA4211: Design of Experiments", "STA3032: Engineering Statistics", "AEB2810: People & Big Data"],
  },
  {
    term: "Spring 2025",
    courses: ["CEN3031: Intro to Software Engineering", "EEL3872: AI Fundamentals", "PHI3681: Ethics, Data, and Technology", "STA4322: Intro to Statistics Theory"],
  },
  {
    term: "Fall 2024",
    courses: ["CDA3101: Intro to Computer Organization", "COP3530: Data Structures & Algorithms", "MAD2502: Intro to Computational Math", "STA4210: Regression Analysis", "STA4321: Intro to Probability"],
  },
  {
    term: "Spring 2024",
    courses: ["COP3503C: Programming Fundamentals 2", "COT3100: Discrete Structures", "MAS3114: Computational Linear Algebra", "STA3100: Programming with Data in R", "IDS2935: War and the Human Condition"],
  },
  {
    term: "Fall 2023",
    courses: ["MAC2313: Analytic Geometry & Calculus 3", "COP3502: Programming Fundamentals 1", "COP2273: Python Programming for Engineers", "CGS3063: Computers and Modern Society"],
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
              {sem.courses.map((course, i) => {
                const [code, ...rest] = course.split(":");
                const title = rest.join(":").trim();
                return (
                  <li key={i}>
                    <span className="font-bold">{code}</span>
                    {title && <>: {title}</>}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
