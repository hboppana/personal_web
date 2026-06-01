import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Blog — Hemanshu Boppana",
  description: "Writing by Hemanshu Boppana.",
};

/* Placeholder posts. Each will eventually link to its own article page. */
const posts = [
  { title: "Placeholder post one", href: "#", date: "Coming soon" },
  { title: "Placeholder post two", href: "#", date: "Coming soon" },
];

export default function Blog() {
  return (
    <main id="top" className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <header>
        <a
          href="/"
          className="prose-link text-sm text-muted no-underline opacity-70 transition-opacity hover:opacity-100"
        >
          ← back
        </a>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-lg leading-relaxed text-muted">
          Notes and writing. Placeholder for now.
        </p>
      </header>

      <ul className="mt-10 space-y-5">
        {posts.map((post, i) => (
          <li key={i}>
            <a className="prose-link text-lg" href={post.href}>
              {post.title}
            </a>
            <p className="text-sm text-muted">{post.date}</p>
          </li>
        ))}
      </ul>

      {/* Fixed bottom-right light/dark icon toggle */}
      <ThemeToggle />
    </main>
  );
}
