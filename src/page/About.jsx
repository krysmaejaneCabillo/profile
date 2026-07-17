const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Soft matcha ambient glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-green-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-green-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-green-600 mb-3 border-l-2 border-green-400 pl-4">
            GET TO KNOW ME
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-6">
            About <span className="text-green-700 drop-shadow-[0_0_8px_rgba(34,197,94,0.2)]">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-transparent"></div>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-green-700 mb-6 leading-relaxed text-lg">
            I’m a passionate web developer based in Florida Kapalong Davao del Norte, Philippines, dedicated to crafting exceptional digital experiences that blend creativity with clean, efficient code.
          </p>
          <p className="text-green-700 mb-6 leading-relaxed text-lg">
            With over 4 years of hands-on experience, I specialize in building responsive, high-performance websites and web applications using modern technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-green-700 mb-6 leading-relaxed text-lg">
            I believe great design and functionality go hand in hand — every project I work on is built to be fast, accessible, and visually striking, while staying true to your unique vision and goals.
          </p>
          <p className="text-green-700 leading-relaxed text-lg">
            When I’m not coding, I explore new tools, refine my craft, and help small businesses and creators bring their ideas to life on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;