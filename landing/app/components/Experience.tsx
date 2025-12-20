'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and architecting solutions.',
    technologies: ['React', 'TypeScript', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2021 - 2023',
    description: 'Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment processes.',
    technologies: ['Next.js', 'Python', 'Docker'],
  },
  {
    title: 'Software Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and RESTful APIs. Collaborated with design teams to deliver pixel-perfect UIs.',
    technologies: ['JavaScript', 'Node.js', 'PostgreSQL'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg mb-16">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0 left-0' : 'md:left-0 left-0'} w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 md:translate-x-0 ${index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} ring-4 ring-black`}></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="ml-8 md:ml-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  <span className="text-cyan-400 font-mono text-sm">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-purple-400 mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
