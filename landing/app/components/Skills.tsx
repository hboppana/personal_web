'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', category: 'Language', icon: '📘' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Python', category: 'Language', icon: '🐍' },
  { name: 'Next.js', category: 'Framework', icon: '▲' },
  { name: 'Tailwind', category: 'CSS', icon: '💨' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg mb-12">Technologies I work with</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400 font-mono">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
