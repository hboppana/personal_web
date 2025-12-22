'use client';

import { motion, useInView } from 'framer-motion';
import { createElement, useMemo, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { DiMsqlServer } from 'react-icons/di';
import { FaJava } from 'react-icons/fa6';
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

type SkillGroup = 'Frontend' | 'Backend' | 'MLOps' | 'Tools' | 'Languages';

const skillGroups: SkillGroup[] = ['Frontend', 'Backend', 'MLOps', 'Tools', 'Languages'];

type SkillIcon = IconType | string;

type Skill = {
  name: string;
  group: SkillGroup;
  icon: SkillIcon;
};

function SkillIcon({ icon, className }: { icon: SkillIcon; className?: string }) {
  if (typeof icon === 'string') {
    return (
      <span aria-hidden="true" className={className}>
        {icon}
      </span>
    );
  }

  return createElement(icon, {
    'aria-hidden': true,
    focusable: false,
    className,
  });
}

const skills: Skill[] = [
  { name: 'React', group: 'Frontend' as const, icon: SiReact },
  { name: 'Next.js', group: 'Frontend' as const, icon: SiNextdotjs },
  { name: 'Tailwind', group: 'Frontend' as const, icon: SiTailwindcss },

  { name: 'Node.js', group: 'Backend' as const, icon: SiNodedotjs },
  { name: 'PostgreSQL', group: 'Backend' as const, icon: SiPostgresql },
  { name: 'MongoDB', group: 'Backend' as const, icon: SiMongodb },

  { name: 'PyTorch', group: 'MLOps' as const, icon: SiPytorch },
  { name: 'TensorFlow', group: 'MLOps' as const, icon: SiTensorflow },
  { name: 'Keras', group: 'MLOps' as const, icon: SiKeras },
  { name: 'OpenCV', group: 'MLOps' as const, icon: SiOpencv },
  { name: 'Pandas', group: 'MLOps' as const, icon: SiPandas },

  { name: 'Docker', group: 'Tools' as const, icon: SiDocker },
  { name: 'AWS', group: 'Tools' as const, icon: SiAmazonwebservices },
  { name: 'Azure', group: 'Tools' as const, icon: VscAzureDevops },
  { name: 'Google Cloud', group: 'Tools' as const, icon: SiGooglecloud },
  { name: 'Git', group: 'Tools' as const, icon: SiGit },
  { name: 'Jupyter Notebooks', group: 'Tools' as const, icon: SiJupyter },

  { name: 'Python', group: 'Languages' as const, icon: SiPython },
  { name: 'C++', group: 'Languages' as const, icon: SiCplusplus },
  { name: 'Java', group: 'Languages' as const, icon: FaJava },
  { name: 'SQL', group: 'Languages' as const, icon: DiMsqlServer },
  { name: 'TypeScript', group: 'Languages' as const, icon: SiTypescript },
  { name: 'JavaScript', group: 'Languages' as const, icon: SiJavascript },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-120px' });
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
        {/* On-enter sweep */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <motion.div
            aria-hidden="true"
            initial={{ x: -760, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 760,
                    opacity: [0, 0.55, 0],
                  }
                : { x: -760, opacity: 0 }
            }
            transition={{ duration: 1.05, ease: easeOut }}
            className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-purple-500/0 via-purple-400/55 to-cyan-400/0 blur-2xl mix-blend-screen"
          />

          <motion.div
            aria-hidden="true"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={
              isInView
                ? {
                    scale: [0.95, 1.06, 1],
                    opacity: [0, 0.35, 0],
                  }
                : { scale: 0.96, opacity: 0 }
            }
            transition={{ duration: 0.85, ease: easeOut, delay: 0.04 }}
            className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400/0 via-purple-300/18 to-blue-400/0 blur-2xl mix-blend-screen"
          />
        </motion.div>

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

            <div className="mt-6 flex flex-col gap-2 sm:gap-3">
              <h2 className="text-5xl sm:text-6xl font-sans font-semibold tracking-tight text-slate-100">
                My{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10, filter: 'blur(6px)', clipPath: 'inset(0 100% 0 0)' }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0% 0 0)' }
                    : { opacity: 0, y: 10, filter: 'blur(6px)', clipPath: 'inset(0 100% 0 0)' }
                }
                transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
                className="text-base sm:text-lg font-medium text-white/70 tracking-tight"
              >
                Just a few things I&apos;ve worked with...
              </motion.p>
            </div>

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
                        <SkillIcon icon={skill.icon} className="h-6 w-6 text-white/85" />
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
