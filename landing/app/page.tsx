import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-4">Your Name</h1>
          <p className="text-2xl text-gray-400">Software Engineer</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <p className="text-gray-400">Skills content will go here</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <p className="text-gray-400">Experience content will go here</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <p className="text-gray-400">Projects content will go here</p>
        </div>
      </section>
    </div>
  );
}
