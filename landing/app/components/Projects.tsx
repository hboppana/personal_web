'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  imageSrc?: string;
  repoFullName: string;
};

const projects: Project[] = [
  {
    title: 'Tutor Website',
    description: 'A tutoring website concept with a clean landing experience.',
    githubUrl: 'https://github.com/hboppana/tutor-website',
    liveUrl: 'https://tutor-website-beta-six.vercel.app/',
    imageSrc: '/tutor-website-landing.png',
    repoFullName: 'hboppana/tutor-website',
  },
  {
    title: 'Gator Greetings',
    description: 'A fun web project for greeting messages and sharing vibes.',
    githubUrl: 'https://github.com/samgator/gator-greetings',
    imageSrc: '/gatorgreetings.png',
    repoFullName: 'samgator/gator-greetings',
  },
];

function githubOpenGraphImage(repoFullName: string) {
  // Public repo preview card. The middle segment can be any string; we keep it stable.
  return `https://opengraph.githubassets.com/1/${repoFullName}`;
}

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-120px' });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = useMemo(() => projects[activeIndex], [activeIndex]);

  const goTo = (index: number) => setActiveIndex(clampIndex(index, projects.length));
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-10 py-20 overflow-hidden"
    >
      {/* Skills/Experience-consistent ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl animate-float" />
        <div
          className="absolute top-24 right-[-14rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/18 blur-3xl animate-float"
          style={{ animationDelay: '1.8s' }}
        />
        <div
          className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl animate-float"
          style={{ animationDelay: '3.6s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
      </div>

      <div className="relative z-10 w-full max-w-7xl" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.8fr] lg:items-center"
        >
          {/* Left: header */}
          <motion.div variants={item} className="lg:pt-8 lg:pl-20">
            <div className="mt-6 flex flex-col gap-2 sm:gap-3">
              <h2 className="text-5xl sm:text-6xl font-sans font-semibold tracking-tight text-slate-100">
                My{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-white/70 tracking-tight">
                A few things I&apos;ve built.
              </p>
            </div>
          </motion.div>

          {/* Right: mega slideshow */}
          <motion.div variants={item} className="lg:pt-6">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={prev}
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                aria-label="Previous project"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-0.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-colors"
              >
                {/* Subtle gradient wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10" />
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative px-6 pt-6 pb-9 sm:px-8 sm:pt-8 sm:pb-12">
                  {/* Slide image */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <div className="relative aspect-[16/10] w-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeProject?.repoFullName ?? activeIndex}
                          initial={{ opacity: 0, scale: 0.985, filter: 'blur(10px)' }}
                          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
                          transition={{ duration: 0.45, ease: easeOut }}
                          className="absolute inset-0"
                        >
                          {activeProject && (
                            activeProject.imageSrc ? (
                              <div className="absolute inset-0 p-2 sm:p-4">
                                <Image
                                  src={activeProject.imageSrc}
                                  alt={`${activeProject.title} preview`}
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 760px"
                                  className="object-contain"
                                  priority={activeIndex === 0}
                                />
                              </div>
                            ) : (
                              <Image
                                src={githubOpenGraphImage(activeProject.repoFullName)}
                                alt={`${activeProject.title} preview`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 760px"
                                className="object-cover"
                                priority={activeIndex === 0}
                              />
                            )
                          )}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Slide content */}
                  <div className="mt-7 sm:mt-9 grid gap-5 sm:gap-6">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <AnimatePresence mode="wait">
                          <motion.h3
                            key={`${activeProject?.repoFullName ?? 'project'}-title`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35, ease: easeOut }}
                            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white"
                          >
                            {activeProject?.title}
                          </motion.h3>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                          <motion.p
                            key={`${activeProject?.repoFullName ?? 'project'}-desc`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35, ease: easeOut, delay: 0.02 }}
                            className="mt-2 text-base sm:text-lg text-white/70 leading-relaxed"
                          >
                            {activeProject?.description}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      {/* Index */}
                      <div className="shrink-0 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-mono text-white/60">
                        {activeIndex + 1} / {projects.length}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={activeProject?.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                        >
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/85 transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4"
                            >
                              <path d="M12 .5C5.73.5.75 5.79.75 12.31c0 5.22 3.44 9.64 8.21 11.2.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.67-4.04-1.67-.55-1.44-1.34-1.82-1.34-1.82-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.3 1.86 1.3 1.08 1.92 2.84 1.37 3.53 1.05.11-.81.42-1.37.76-1.68-2.67-.31-5.48-1.38-5.48-6.14 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.57.12-3.28 0 0 1.01-.33 3.3 1.28a11.1 11.0 0 0 1 3-.42c1.02 0 2.05.14 3 .42 2.28-1.61 3.29-1.28 3.29-1.28.65 1.71.24 2.97.12 3.28.77.87 1.23 1.98 1.23 3.34 0 4.77-2.81 5.82-5.49 6.13.43.39.81 1.16.81 2.34 0 1.69-.02 3.05-.02 3.46 0 .33.22.72.83.6 4.76-1.56 8.2-5.98 8.2-11.2C23.25 5.79 18.27.5 12 .5z" />
                            </svg>
                          </span>
                          GitHub
                        </a>

                        {activeProject?.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                          >
                            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/85 transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                              <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0 0-7.07 5 5 0 0 0-7.07 0L10.5 4.5" />
                                <path d="M14 11a5 5 0 0 0-7.07 0L5.5 12.5a5 5 0 0 0 0 7.07 5 5 0 0 0 7.07 0L13.5 19.5" />
                              </svg>
                            </span>
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <button
                type="button"
                onClick={next}
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                aria-label="Next project"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
