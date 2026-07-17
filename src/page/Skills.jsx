import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animate bars when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "bootstrap", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Vite", level: 85 },
  ];

  return (
    <section id="skills-section" className="py-20 px-4 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* Soft matcha ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-green-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[380px] h-[380px] bg-green-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-green-600 mb-3">
            MY EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-6">
            Technologies I <span className="text-green-700 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">Master</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-transparent mx-auto mb-4"></div>
          <p className="text-green-700 max-w-xl mx-auto">
            Tools and languages I use to bring ideas to life with precision and creativity.
          </p>
        </div>

        {/* Skills Bars */}
        <div className="max-w-3xl mx-auto space-y-7">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-5 border border-green-200 hover:border-green-400 transition-all duration-500 relative rounded-xl"
            >
              {/* Matcha corner ornaments */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500"></div>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-green-400/60 group-hover:border-green-600 transition-colors duration-500"></div>

              {/* Skill Name & Percentage */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-green-900 font-medium uppercase tracking-wider group-hover:text-green-700 transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-green-700 font-bold drop-shadow-[0_0_4px_rgba(34,197,94,0.2)]">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-green-100 border border-green-200 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-green-700 via-green-500 to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-[1200ms] ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : "0%", 
                    transitionDelay: `${index * 150}ms` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;