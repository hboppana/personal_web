'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResumePreview from './ResumePreview';

export default function Hero() {
  const resumePdfHref = '/Hemanshu_Boppana_Resume.pdf';
  const resumeDownloadHref = '/resume';

  const [showScrollCue, setShowScrollCue] = useState(true);
  const [scrollCueMode, setScrollCueMode] = useState<'idle' | 'arrived'>('idle');

  const phrases = useMemo(
    () => ['I love building.', 'I love contributing.', 'I love coding.'],
    []
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex] ?? '';
    const atEnd = typedText === fullText;
    const atStart = typedText.length === 0;

    const baseDelay = isDeleting ? 35 : 55;
    const pauseDelay = 900;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (atEnd) {
          setIsDeleting(true);
          return;
        }
        setTypedText(fullText.slice(0, typedText.length + 1));
        return;
      }

      if (atStart) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }
      setTypedText(fullText.slice(0, typedText.length - 1));
    }, atEnd && !isDeleting ? pauseDelay : baseDelay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, phrases, typedText]);

  useEffect(() => {
    const heroEl = document.getElementById('home');
    const nextEl = document.getElementById('skills');

    if (!heroEl || !nextEl) return;

    let isHeroVisible = true;
    let isNextVisible = false;
    let hideTimeout: number | undefined;

    const update = () => {
      if (hideTimeout) window.clearTimeout(hideTimeout);

      if (isHeroVisible && !isNextVisible) {
        setScrollCueMode('idle');
        setShowScrollCue(true);
        return;
      }

      if (isNextVisible) {
        setScrollCueMode('arrived');
        setShowScrollCue(true);
        hideTimeout = window.setTimeout(() => setShowScrollCue(false), 420);
        return;
      }

      setShowScrollCue(false);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.6 }
    );

    const nextObserver = new IntersectionObserver(
      ([entry]) => {
        isNextVisible = entry?.isIntersecting ?? false;
        update();
      },
      { threshold: 0.25 }
    );

    heroObserver.observe(heroEl);
    nextObserver.observe(nextEl);

    return () => {
      if (hideTimeout) window.clearTimeout(hideTimeout);
      heroObserver.disconnect();
      nextObserver.disconnect();
    };
  }, []);

  const scrollToNextSection = () => {
    const nextEl = document.getElementById('skills');
    if (!nextEl) return;

    const headerOffset = 96;
    const rect = nextEl.getBoundingClientRect();
    const top = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-10 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          {/* Left: copy */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight mb-4 text-slate-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
              >
                Hey there! My name is{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Hemanshu Boppana
                </span>
                .
              </motion.h1>

              <motion.p
                className="mb-2 text-lg sm:text-xl md:text-2xl text-gray-200 font-mono tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <span className="text-gray-200">{typedText}</span>
                <span className="cursor-blink align-baseline text-purple-300">|</span>
              </motion.p>

              <motion.div
                className="mt-12 sm:mt-14 flex flex-wrap items-center gap-3 lg:mt-16 lg:translate-y-4 xl:translate-y-4"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <a
                  href="https://github.com/hboppana"
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
                      <path d="M12 .5C5.73.5.75 5.79.75 12.31c0 5.22 3.44 9.64 8.21 11.2.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.67-4.04-1.67-.55-1.44-1.34-1.82-1.34-1.82-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.3 1.86 1.3 1.08 1.92 2.84 1.37 3.53 1.05.11-.81.42-1.37.76-1.68-2.67-.31-5.48-1.38-5.48-6.14 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.57.12-3.28 0 0 1.01-.33 3.3 1.28a11.1 11.1 0 0 1 3-.42c1.02 0 2.05.14 3 .42 2.28-1.61 3.29-1.28 3.29-1.28.65 1.71.24 2.97.12 3.28.77.87 1.23 1.98 1.23 3.34 0 4.77-2.81 5.82-5.49 6.13.43.39.81 1.16.81 2.34 0 1.69-.02 3.05-.02 3.46 0 .33.22.72.83.6 4.76-1.56 8.2-5.98 8.2-11.2C23.25 5.79 18.27.5 12 .5z" />
                    </svg>
                  </span>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/hemanshu-boppana-213845282/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white hover:underline underline-offset-4 decoration-2 decoration-blue-400/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/85 transition-all duration-200 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:animate-[linkedin-flash_0.7s_ease-in-out_1]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.29V9h3.41v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.35 4.22 5.41v6.34zM5.27 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.05 20.45H3.48V9h3.57v11.45z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: resume card */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="w-full max-w-sm">
              <div className="mb-12 sm:mb-14 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <ResumePreview pdfUrl={resumePdfHref} className="h-[26rem] w-full" />
              </div>

              <div className="flex justify-center">
                <a
                  href={resumeDownloadHref}
                  className="group relative inline-flex w-fit min-w-50 items-center justify-center gap-1 overflow-hidden rounded-full bg-transparent px-10 py-9 text-lg font-semibold tracking-tight text-white/90 transition-colors hover:text-white hover:underline underline-offset-4 decoration-2 decoration-purple-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/80"
                >
                  <span className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient-shift_2.2s_ease-in-out_infinite] transition-transform duration-200 group-hover:-translate-y-0.5">
                    Download Resume
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#resume-link-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <defs>
                      <linearGradient
                        id="resume-link-gradient"
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                      >
                        <stop offset="0%" stopColor="rgb(233 213 255)" />
                        <stop offset="50%" stopColor="rgb(216 180 254)" />
                        <stop offset="100%" stopColor="rgb(233 213 255)" />
                        <animate
                          attributeName="x1"
                          values="0%;100%;0%"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="x2"
                          values="100%;0%;100%"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </linearGradient>
                    </defs>
                    <path d="M7 17L17 7" />
                    <path d="M10 7h7v7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <AnimatePresence>
        {showScrollCue && (
          <motion.div
            key={scrollCueMode}
            className="fixed inset-x-0 bottom-6 z-30 flex justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <motion.button
              type="button"
              onClick={scrollToNextSection}
              className="group grid h-11 w-11 place-items-center rounded-full bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:ring-2 hover:ring-purple-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
              aria-label="Scroll to next section"
              animate={
                scrollCueMode === 'idle'
                  ? { y: [0, -6, 0] }
                  : { scale: [1, 1.08, 0.96] }
              }
              transition={
                scrollCueMode === 'idle'
                  ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.35, ease: 'easeOut' }
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                {scrollCueMode === 'idle' ? (
                  <motion.svg
                    key="down"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-purple-300/90 transition-colors group-hover:text-purple-200"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path d="M6 10l6 6 6-6" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="check"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-purple-300/90"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
