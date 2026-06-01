import ThemeToggle from "./components/ThemeToggle";
import Stepper from "./components/Stepper";
import LogoBadge from "./components/LogoBadge";

/* ------------------------------------------------------------------ *
 * Placeholder content. Swap these out for real copy section by section.
 * Drop experience logos in /public/logos (filenames below).
 * ------------------------------------------------------------------ */

const experience = [
  {
    org: "Adaptive Learning & Optimization Lab @ University of Florida",
    role: "Undergraduate Researcher",
    period: "Present",
    logo: "/uflorida.png",
    fallback: "ALO",
    bullets: [
      "Researching differential privacy and AI fairness under Dr. My T. Thai.",
    ],
  },
  {
    org: "Diploy",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Present",
    logo: "/diploy.png",
    fallback: "DP",
    bullets: [
      "Building an AI-powered resume builder and data pipelines for labor-market analytics.",
    ],
  },
  {
    org: "iHeal Lab @ University of Florida",
    role: "Machine Learning Researcher",
    period: "Mar 2025 – Present",
    logo: "/uf_ic3.png",
    fallback: "iH",
    bullets: [
      "Building and evaluating ML models for heart failure and delirium prediction.",
    ],
  },
  {
    org: "AIR Lab @ University of Florida",
    role: "Research Engineer",
    period: "Feb 2025 – Sep 2025",
    logo: "/uflorida.png",
    fallback: "AIR",
    bullets: [
      "Built data pipelines and ETL workflows for misinformation-detection research.",
    ],
  },
];

const projects = [
  {
    name: "VectorDB",
    bullets: [
      "A vector database built from scratch in C++ for fast semantic search.",
    ],
    links: [
      { label: "code", href: "https://github.com/hboppana/vectordbproject" },
      { label: "blog", href: "/blog/vectordb" },
    ],
  },
  {
    name: "Explainable",
    bullets: [
      "An AI tool that explains complex academic topics over web and phone.",
    ],
    links: [
      { label: "live", href: "https://explainable-mu.vercel.app/" },
      { label: "code", href: "https://github.com/eren-s-chang/explainable" },
    ],
  },
  {
    name: "Personal Tutoring Platform",
    bullets: [
      "A tutoring marketplace with payments, scheduling, and serverless infra.",
    ],
    links: [
      { label: "live", href: "https://tutor-website-beta-six.vercel.app/" },
      { label: "code", href: "https://github.com/hboppana/tutor-website" },
    ],
  },
];

const aboutMe = [
  "Placeholder bullet — something about your interests.",
  "Placeholder bullet — a hobby or what you're into.",
  "Placeholder bullet — anything that makes you, you.",
];

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      {/* Header: name + social logos (right of name) + inline nav, photo */}
      <header className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          {/* Name (clickable -> back to top) with social logos to its right */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              <span className="typewriter">Hemanshu Boppana</span>
            </h1>
            <a
              href="https://github.com/hboppana"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground opacity-70 transition-opacity hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.79.75 12.31c0 5.22 3.44 9.64 8.21 11.2.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.67-4.04-1.67-.55-1.44-1.34-1.82-1.34-1.82-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.3 1.86 1.3 1.08 1.92 2.84 1.37 3.53 1.05.11-.81.42-1.37.76-1.68-2.67-.31-5.48-1.38-5.48-6.14 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.57.12-3.28 0 0 1.01-.33 3.3 1.28a11.1 11.1 0 0 1 3-.42c1.02 0 2.05.14 3 .42 2.28-1.61 3.29-1.28 3.29-1.28.65 1.71.24 2.97.12 3.28.77.87 1.23 1.98 1.23 3.34 0 4.77-2.81 5.82-5.49 6.13.43.39.81 1.16.81 2.34 0 1.69-.02 3.05-.02 3.46 0 .33.22.72.83.6 4.76-1.56 8.2-5.98 8.2-11.2C23.25 5.79 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/hemanshu-boppana-213845282/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground opacity-70 transition-colors hover:text-[#0a66c2] hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.29V9h3.41v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.35 4.22 5.41v6.34zM5.27 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.05 20.45H3.48V9h3.57v11.45z" />
              </svg>
            </a>
          </div>

          <nav className="mt-3 flex flex-wrap items-center gap-x-3 text-sm text-muted">
            <a className="prose-link" href="#experience">experience</a>
            <span aria-hidden="true">·</span>
            <a className="prose-link" href="#projects">projects</a>
            <span aria-hidden="true">·</span>
            <a className="prose-link" href="/blog">blog</a>
          </nav>
        </div>

        {/* Headshot. Drop your image at public/headshot.jpg to replace the placeholder. */}
        <div
          aria-label="Headshot placeholder"
          className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full border border-rule bg-[var(--rule)] text-base font-bold text-muted sm:h-28 sm:w-28 sm:text-lg"
        >
          {/* When you add public/headshot.jpg, replace the line below with:
              <img src="/headshot.jpg" alt="Hemanshu Boppana" className="h-full w-full object-cover" /> */}
          HB
        </div>
      </header>

      {/* Intro */}
      <section className="mt-8 space-y-4 text-lg leading-relaxed">
        <p>
          Hi, I&apos;m Hemanshu! I&apos;m a rising senior at the{" "}
          <span className="uf-gradient">University of Florida </span> studying
          Computer Science with a minor in Statistics. I&apos;m an engineer with
          interests in AI, high-performance systems, and software development.
          Take a look at some of my work!
        </p>
        <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base">
          <a
            className="prose-link inline-flex items-center gap-1.5"
            href="/resume"
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
            resume
          </a>
          <a
            className="prose-link inline-flex items-center gap-1.5"
            href="/coursework"
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
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            coursework
          </a>
        </p>
        <p className="text-base">
          personal email: <span className="font-bold">hboppana01@gmail.com</span>
          <br></br>
          university email: <span className="font-bold"> hboppana@ufl.edu</span>
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-12 scroll-mt-8">
        <h2 className="section-label">Experience</h2>
        <div className="mt-5">
          <Stepper
            steps={experience.map((item) => ({
              indicator: (
                <LogoBadge
                  src={item.logo}
                  alt={`${item.org} logo`}
                  fallback={item.fallback}
                />
              ),
              content: (
                <>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-lg font-bold">{item.role}</p>
                    <p className="text-sm text-muted">{item.period}</p>
                  </div>
                  <p className="text-base text-muted">{item.org}</p>
                  <ul className="custom-bullets mt-2 space-y-1.5 pl-6 text-base leading-relaxed">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </>
              ),
            }))}
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12 scroll-mt-8">
        <h2 className="section-label">Projects</h2>
        <div className="mt-5">
          <Stepper
            steps={projects.map((p) => ({
              indicator: (
                <span className="relative grid size-10 shrink-0 place-items-center">
                  <span className="step-ring absolute size-3 rounded-full bg-foreground/30" />
                  <span className="step-dot size-2.5 rounded-full bg-foreground" />
                </span>
              ),
              content: (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <p className="text-lg font-bold">{p.name}</p>
                    <span className="flex gap-x-4 text-sm">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          className="prose-link"
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                        </a>
                      ))}
                    </span>
                  </div>
                  <ul className="custom-bullets mt-2 space-y-1.5 pl-6 text-base leading-relaxed">
                    {p.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </>
              ),
            }))}
          />
        </div>
      </section>

      {/* Personal Deets */}
      <section className="mt-12 scroll-mt-8">
        <h2 className="section-label">Personal Deets</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-relaxed marker:text-muted">
          {aboutMe.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
