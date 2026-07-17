import logo from '../images/me.jpg';

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-4 bg-gradient-to-br from-green-50 to-white text-green-900 relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Text Content */}
        <div className="max-w-xl w-full">
          <p className="text-xs uppercase tracking-widest text-green-600 mb-4 border-l-2 border-green-400 pl-4">
            I'M A WEB DEVELOPER
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <span className="text-green-700">Krys</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700">I build clean, functional things for the web.</h2>
          <p className="text-green-700 mb-8 leading-relaxed border-l border-green-300 pl-5">
            Passionate about creating smooth, accessible digital experiences with modern tools and thoughtful design.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button onClick={scrollToProjects} className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              View My Work
            </button>
            <button className="bg-white hover:bg-green-50 text-green-700 px-7 py-3 rounded-lg font-medium border border-green-300 transition-all duration-300">
              Download CV
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-green-500">I WORK WITH:</span>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind"].map((tech, i) => (
                <span key={i} className="text-green-800 bg-green-100 px-3 py-1 rounded-md text-sm hover:bg-green-200 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image + Small Floating Code Card (no blocking!) */}
        <div className="relative flex-shrink-0">
          {/* Main Profile Image — fully visible */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-green-200">
            <img 
              src={logo} 
              alt="Krys - Web Developer" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* ✅ Small, semi-transparent code card — never blocks the image */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-gray-900/70 backdrop-blur-sm rounded-md p-2 md:p-3 shadow-lg border border-gray-700/30 max-w-[60%]">
            <pre className="text-[10px] md:text-xs font-mono leading-relaxed whitespace-pre-wrap">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">developer</span>{' '}= {'{'}
              <br />
              {'  '}<span className="text-blue-300">name</span>: <span className="text-green-300">"Krys"</span>,
              <br />
              {'  '}<span className="text-blue-300">skills</span>: [
              <span className="text-green-300">"HTML"</span>,{' '}
              <span className="text-green-300">"CSS"</span>,{' '}
              <span className="text-green-300">"JS"</span>,{' '}
              <span className="text-green-300">"React"</span>],
              <br />
              {'  '}<span className="text-blue-300">passion</span>: <span className="text-green-300">"building things for the web"</span>
              <br />
              {'}'};
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}