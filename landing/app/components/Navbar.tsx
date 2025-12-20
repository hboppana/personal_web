'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <motion.div 
          className="text-xl font-serif font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Hemanshu Boppana
        </motion.div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {['home', 'skills', 'experience', 'projects'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative text-gray-300 hover:text-white transition-colors capitalize"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {section}
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
