import blkImg from '../images/blk.png';
import profImg from '../images/prof.png';
import calcuImg from '../images/calcu.png';
import frontImg from '../images/front.png';
import nitflexImg from '../images/nitflex.png';
import pandaImg from '../images/panda.png';

export default function Projects() {
  const projects = [
    {
      title: "BLK Cosmetics E-Commerce",
      desc: "Fully responsive online beauty store with product browsing, cart management, and smooth checkout flow.",
      tags: ["HTML", "CSS", "JavaScript","Vue"],
      image: blkImg
    },
    {
      title: "Personal Portfolio",
      desc: "Lightweight, fast-loading portfolio with subtle animations and optimized accessibility.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: profImg
    },
    {
      title: "Calculator App",
      desc: "Clean, colorful calculator interface with basic arithmetic operations and responsive design.",
      tags: [ "Tailwind"],
      image: calcuImg
    },
    {
      title: "Front-End Development Landing",
      desc: "Professional service landing page highlighting web development skills and project offerings.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: frontImg
    },
    {
      title: "Netflix Clone",
      desc: "Streaming platform replica with movie browsing, category filtering, and interactive UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: nitflexImg
    },
    {
      title: "Food Delivery Platform",
      desc: "Panda-inspired food ordering interface with sign-up prompts and restaurant listings.",
      tags: ["React", "Tailwind"],
      image: pandaImg
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Soft matcha ambient glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-green-600 mb-3">
            MY WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-6">
            Featured <span className="text-green-700 drop-shadow-[0_0_8px_rgba(34,197,94,0.2)]">Projects</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-transparent mx-auto mb-4"></div>
          <p className="text-green-700 max-w-xl mx-auto">
            A collection of clean, responsive, and functional builds I’ve created.
          </p>
        </div>

        {/* Projects Grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
            >
              {/* Matcha corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500 z-10"></div>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500 z-10"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500 z-10"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500 z-10"></div>

              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden border-b border-green-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-green-700 mb-4 leading-relaxed text-sm">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs text-green-800 bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}