'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Machine Learning Researcher',
    company: 'Intelligent Clinical Care Center (iHeal Lab) @ University of Florida',
    period: 'Mar 2025 - Present',
    description:
      'Developing and evaluating machine learning models for clinical risk prediction, focusing on building reliable pipelines and turning research ideas into practical, reproducible results.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Artificial Intelligence Research (AIR) Lab @ University of Florida',
    period: 'Feb 2025 - Sep 2025',
    description:
      'Built reliable web-scraping and data standardization pipelines to curate clean, analysis-ready news article corpora for fake-news detection research.',
  },
  {
    title: 'Founding Engineer',
    company: 'StreetSmart',
    period: 'Jun 2025 - Aug 2025',
    description:
      'Co-developed a computer vision–powered road-intelligence MVP that turns dashcam footage into interactive maps of road hazards using an end-to-end pipeline for scalable storage and visualization.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-120px' });

  const UF_TEXT = 'University of Florida';

  const renderCompany = (company: string) => {
    if (company.includes(UF_TEXT)) {
      const [before, after] = company.split(UF_TEXT);

      return (
        <>
          {before}
          <span className="animated-gradient-text bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            {UF_TEXT}
          </span>
          {after}
        </>
      );
    }

    if (company.toLowerCase().includes('streetsmart')) {
      return (
        <span className="animated-gradient-text bg-gradient-to-r from-emerald-300 via-green-400 to-white bg-clip-text text-transparent">
          {company}
        </span>
      );
    }

    return company;
  };

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
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
  };

  const timelineItem = {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-10 py-20 overflow-hidden"
    >
      {/* Hero/Skills-consistent ambient blobs */}
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
                  Experience
                </span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-white/70 tracking-tight">
                A quick snapshot of what I&apos;ve been doing.
              </p>
            </div>
          </motion.div>

          {/* Right: modern timeline */}
          <motion.div variants={item} className="lg:pt-6 space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}-${exp.period}`}
                variants={timelineItem}
                className="relative grid grid-cols-[2.25rem_1fr] gap-x-6 sm:grid-cols-[2.5rem_1fr] sm:gap-x-8 group"
              >
                {/* Timeline Graphics */}
                <div className="relative flex flex-col items-center pt-1">
                  {/* Dot */}
                  <div className="relative z-10 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-purple-400 to-blue-400 ring-2 ring-black/70 transition-all group-hover:ring-purple-400/25 group-hover:scale-105">
                    <div className="h-2 w-2 rounded-full bg-white/75" />
                  </div>
                  {/* Connecting Line */}
                  {index < experiences.length - 1 && (
                    <div className="mt-4 w-px flex-1 bg-gradient-to-b from-purple-400/60 via-blue-400/25 to-purple-400/10" />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 pb-2">
                  {/* Title + period */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {exp.title}
                    </h3>
                    <span className="relative -top-1 inline-flex items-center px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-400/20 text-xs font-mono text-purple-300">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-base text-white/60 mb-6 font-medium">{renderCompany(exp.company)}</p>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
