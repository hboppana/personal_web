'use client';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-xl font-bold text-white">
          Your Name
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  );
}
