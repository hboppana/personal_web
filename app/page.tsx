import ThemeToggle from "./components/ThemeToggle";

/* ------------------------------------------------------------------ *
 * Placeholder content. Swap these out for real copy section by section.
 * ------------------------------------------------------------------ */

const experience = [
  { org: "Company / Lab", role: "Role title", period: "Mon Year – Present" },
  { org: "Company / Lab", role: "Role title", period: "Mon Year – Mon Year" },
  { org: "Company / Lab", role: "Role title", period: "Mon Year – Mon Year" },
];

const projects = [
  {
    name: "Project one",
    blurb: "One-line description of what it is.",
    links: [
      { label: "live", href: "#" },
      { label: "code", href: "#" },
    ],
  },
  {
    name: "Project two",
    blurb: "One-line description of what it is.",
    links: [{ label: "code", href: "#" }],
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
            <h1 className="text-2xl font-bold tracking-tight">
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
          className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full border border-rule bg-[var(--rule)] text-lg font-bold text-muted sm:h-28 sm:w-28"
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
        <ul className="mt-4 space-y-5">
          {experience.map((item, i) => (
            <li key={i}>
              <p className="text-lg">
                <span className="font-bold">{item.org}</span>
                <span className="text-muted"> — {item.role}</span>
              </p>
              <p className="text-sm text-muted">{item.period}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12 scroll-mt-8">
        <h2 className="section-label">Projects</h2>
        <ul className="mt-4 space-y-5">
          {projects.map((p, i) => (
            <li key={i}>
              <p className="text-lg">
                <span className="font-bold">{p.name}</span>
                <span className="text-muted"> — {p.blurb}</span>
              </p>
              <p className="mt-1 flex gap-x-4 text-sm">
                {p.links.map((l) => (
                  <a key={l.label} className="prose-link" href={l.href}>
                    {l.label}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
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
