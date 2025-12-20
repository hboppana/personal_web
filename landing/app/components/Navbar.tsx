'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact', primary: true },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-transparent backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 sm:py-4">
        {/* Left: avatar + titles */}
        <div className="flex items-center gap-3.5">
          <div
            aria-hidden="true"
            className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-500/60 bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_10px_30px_rgba(15,23,42,0.9)]"
          >
            <div className="absolute -inset-1 bg-[conic-gradient(from_220deg,rgba(59,130,246,0.15),rgba(16,185,129,0.5),rgba(129,140,248,0.9),rgba(59,130,246,0.25))] mix-blend-screen opacity-80" />
          </div>
          <div className="flex flex-col leading-snug">
            <span className="text-[0.95rem] font-semibold tracking-[0.18em] uppercase text-slate-100">
              Hemanshu Boppana
            </span>
            <span className="text-[0.78rem] text-slate-400">
              Computer Science &amp; Statistics @ UF
            </span>
          </div>
        </div>

        {/* Right: nav links */}
        <div className="flex flex-wrap items-center gap-2.5 pl-3 sm:pl-5 text-[0.8rem] sm:text-[0.85rem]">
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              className={[
                'rounded-full border px-3.5 py-1.5 transition-colors',
                link.primary
                  ? 'border-indigo-500/80 bg-gradient-to-r from-indigo-500 to-indigo-600 text-indigo-50 shadow-[0_10px_30px_rgba(37,99,235,0.55)] hover:from-indigo-500 hover:to-indigo-500'
                  : 'border-transparent text-slate-400 hover:border-indigo-500/60 hover:text-slate-100 hover:bg-[radial-gradient(circle_at_top,_#111827,_#020617)]',
              ].join(' ')}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
