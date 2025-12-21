'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

type SkillGroup = 'Frontend' | 'Backend' | 'MLOps' | 'Tools' | 'Languages';

const skillGroups: SkillGroup[] = ['Frontend', 'Backend', 'MLOps', 'Tools', 'Languages'];

const skills = [
  { name: 'React', category: 'Frontend', group: 'Frontend' as const, icon: '⚛️' },
  { name: 'Next.js', category: 'Framework', group: 'Frontend' as const, icon: '▲' },
  { name: 'Tailwind', category: 'CSS', group: 'Frontend' as const, icon: '💨' },

  { name: 'Node.js', category: 'Backend', group: 'Backend' as const, icon: '🟢' },
  { name: 'PostgreSQL', category: 'Database', group: 'Backend' as const, icon: '🐘' },

  { name: 'PyTorch', category: 'DevOps', group: 'MLOps' as const, icon: '🔥' },
  { name: 'TensorFlow', category: 'DevOps', group: 'MLOps' as const, icon: '🧠' },
  { name: 'Keras', category: 'DevOps', group: 'MLOps' as const, icon: '🧬' },
  { name: 'OpenCV', category: 'DevOps', group: 'MLOps' as const, icon: '👁️' },
  { name: 'Pandas', category: 'DevOps', group: 'MLOps' as const, icon: '🐼' },

  { name: 'Docker', category: 'DevOps', group: 'Tools' as const, icon: '🐳' },
  { name: 'AWS', category: 'Cloud', group: 'Tools' as const, icon: '☁️' },
  { name: 'Azure', category: 'Cloud', group: 'Tools' as const, icon: '🟦' },
  { name: 'Google Cloud', category: 'Cloud', group: 'Tools' as const, icon: '🌥️' },
  { name: 'Git', category: 'DevOps', group: 'Tools' as const, icon: '🌿' },
  { name: 'Jupyter Notebooks', category: 'DevOps', group: 'Tools' as const, icon: '📓' },

  { name: 'Python', category: 'Language', group: 'Languages' as const, icon: '🐍' },
  { name: 'C++', category: 'Language', group: 'Languages' as const, icon: '➕' },
  { name: 'Java', category: 'Language', group: 'Languages' as const, icon: '☕' },
  { name: 'SQL', category: 'Language', group: 'Languages' as const, icon: '🗄️' },
  { name: 'TypeScript', category: 'Language', group: 'Languages' as const, icon: '📘' },
  { name: 'JavaScript', category: 'Language', group: 'Languages' as const, icon: '🟨' },
];

type SkillCategory = (typeof skills)[number]['category'];

const categoryAccent: Record<SkillCategory, { dot: string; glow: string; border: string }> = {
  Frontend: {
    dot: 'bg-purple-400',
    glow: 'from-purple-500/25 via-pink-500/10 to-blue-500/20',
    border: 'group-hover:border-purple-400/50',
  },
  Language: {
    dot: 'bg-blue-400',
    glow: 'from-blue-500/25 via-cyan-500/10 to-purple-500/15',
    border: 'group-hover:border-blue-400/45',
  },
  Backend: {
    dot: 'bg-emerald-400',
    glow: 'from-emerald-500/20 via-cyan-500/10 to-blue-500/15',
    border: 'group-hover:border-emerald-400/45',
  },
  Framework: {
    dot: 'bg-pink-400',
    glow: 'from-pink-500/20 via-purple-500/10 to-blue-500/15',
    border: 'group-hover:border-pink-400/45',
  },
  CSS: {
    dot: 'bg-cyan-400',
    glow: 'from-cyan-500/25 via-blue-500/10 to-purple-500/15',
    border: 'group-hover:border-cyan-400/45',
  },
  Database: {
    dot: 'bg-violet-400',
    glow: 'from-violet-500/20 via-purple-500/10 to-blue-500/10',
    border: 'group-hover:border-violet-400/45',
  },
  DevOps: {
    dot: 'bg-amber-300',
    glow: 'from-amber-400/20 via-purple-500/10 to-blue-500/10',
    border: 'group-hover:border-amber-300/45',
  },
  Cloud: {
    dot: 'bg-sky-400',
    glow: 'from-sky-500/20 via-cyan-500/10 to-purple-500/10',
    border: 'group-hover:border-sky-400/45',
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const [activeGroup, setActiveGroup] = useState<SkillGroup>('Frontend');

  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const filteredSkills = useMemo(
    () => skills.filter((skill) => skill.group === activeGroup),
    [activeGroup]
  );

  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-10 py-20 overflow-hidden"
    >
      {/* Hero-consistent ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/25 blur-3xl animate-float" />
        <div
          className="absolute top-24 right-[-14rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-3xl animate-float"
          style={{ animationDelay: '1.8s' }}
        />
        <div
          className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl animate-float"
          style={{ animationDelay: '3.6s' }}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
      </div>

      <div className="relative z-10 w-full max-w-6xl" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.55fr] lg:items-start"
        >
          {/* Left: header */}
          <motion.div variants={item} className="lg:pt-8">

            <h2 className="mt-6 text-5xl sm:text-6xl font-sans font-semibold tracking-tight text-slate-100">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Skills
              </span>
              
            </h2>

          </motion.div>

          {/* Right: tabs + framed grid */}
          <motion.div variants={item} className="lg:pt-6">
            {/* Free-floating category tabs */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {skillGroups.map((group) => {
                const isActive = group === activeGroup;
                return (
                  <button
                    key={group}
                    type="button"
                    onClick={() => setActiveGroup(group)}
                    className={[
                      'group relative inline-flex items-center justify-center px-5 py-2.5 text-base sm:text-lg font-semibold tracking-tight',
                      'appearance-none bg-transparent border-0 shadow-none',
                      'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70',
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white',
                    ].join(' ')}
                  >
                    {!isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-white/45 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="skills-active-underline"
                        transition={{ duration: 0.22, ease: easeOut }}
                        className="absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-white/85"
                      />
                    )}
                    {group}
                  </button>
                );
              })}
            </div>

            {/* Free-floating skills grid */}
            <div aria-hidden="true" className="h-8 sm:h-8 lg:h-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 lg:gap-4">
              {filteredSkills.map((skill) => {
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6 }}
                    className={[
                      'group relative px-1.5 py-2 transition-transform',
                      'focus-within:outline-none',
                    ].join(' ')}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/10 text-2xl">
                        <span>{skill.icon}</span>
                      </div>

                      <div className="relative inline-block">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                          {skill.name}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-purple-400/0 via-purple-300/90 to-purple-400/0"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-2 left-0 right-0 h-px bg-purple-300/70 blur-md"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
