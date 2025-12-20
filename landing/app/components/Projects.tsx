'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: '🛍️',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    link: '#',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, message encryption, and multi-user support.',
    image: '💬',
    technologies: ['React', 'WebSocket', 'OpenAI', 'Node.js'],
    link: '#',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization platform with interactive charts, custom reports, and real-time metrics tracking.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    link: '#',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team collaboration features.',
    image: '✅',
    technologies: ['TypeScript', 'Tailwind', 'Supabase', 'Prisma'],
    link: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg mb-16">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon/Image placeholder */}
                <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                  {project.image}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-mono text-gray-300 group-hover:border-white/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className={`inline-flex items-center gap-2 text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text ${project.gradient} transition-all`}
                >
                  View Project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
