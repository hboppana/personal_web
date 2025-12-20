'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        setIsHidden(window.scrollY > 0);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector(
        '[data-site-header="true"]'
      ) as HTMLElement | null;
      const offset = header?.offsetHeight ?? 0;
      const extra = 12;
      const top = element.getBoundingClientRect().top + window.scrollY - offset - extra;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          data-site-header="true"
          className="fixed left-0 right-0 top-2 sm:top-3 z-50 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-transparent backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[76rem] items-center justify-between px-6 sm:px-8 lg:px-10 py-4 sm:py-5">
            {/* Left: avatar + titles */}
            <div className="flex items-center gap-3.5 pl-1">
              <div
                aria-hidden="true"
                className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[1px] shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
              >
                <div className="h-full w-full rounded-full bg-black/35 ring-1 ring-white/10" />
                <div className="pointer-events-none absolute -inset-2 bg-[conic-gradient(from_220deg,rgba(168,85,247,0.25),rgba(236,72,153,0.25),rgba(59,130,246,0.25),rgba(168,85,247,0.25))] mix-blend-screen opacity-70" />
              </div>
              <div className="flex flex-col leading-tight gap-0.5">
                <span className="font-sans text-[0.95rem] font-semibold tracking-tight text-slate-100">
                  Hemanshu Boppana
                </span>
                <span className="text-[0.75rem] text-gray-400">
                  Computer Science &amp; Statistics @ UF
                </span>
              </div>
            </div>

            {/* Right: nav links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[0.95rem] sm:text-base">
              {links.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  className={[
                    'inline-flex items-center justify-center rounded-full border border-transparent px-3 py-2 font-semibold tracking-tight text-gray-300 transition-colors focus:outline-none',
                    'hover:text-white hover:underline underline-offset-4 decoration-2 decoration-purple-400',
                  ].join(' ')}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
