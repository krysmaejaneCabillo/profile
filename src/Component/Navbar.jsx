import { useEffect, useState } from "react";

export default function Navbar({ setActive, active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id, name) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(name);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-green-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-xl font-bold text-green-800 tracking-wide cursor-pointer" 
          onClick={() => scrollToSection('hero', 'Home')}
        >
          &lt;/&gt; K R Y S
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <span 
            onClick={() => scrollToSection('hero', 'Home')} 
            className={`cursor-pointer transition-colors duration-300 ${
              active === "Home" ? 'text-green-800 border-b-2 border-green-600 pb-1' : 'text-green-700 hover:text-green-900'
            }`}
          >
            Home
          </span>
          <span 
            onClick={() => scrollToSection('about', 'About')} 
            className={`cursor-pointer transition-colors duration-300 ${
              active === "About" ? 'text-green-800 border-b-2 border-green-600 pb-1' : 'text-green-700 hover:text-green-900'
            }`}
          >
            About
          </span>
          <span 
            onClick={() => scrollToSection('skills-section', 'Skills')} 
            className={`cursor-pointer transition-colors duration-300 ${
              active === "Skills" ? 'text-green-800 border-b-2 border-green-600 pb-1' : 'text-green-700 hover:text-green-900'
            }`}
          >
            Skills
          </span>
          <span 
            onClick={() => scrollToSection('projects', 'Projects')} 
            className={`cursor-pointer transition-colors duration-300 ${
              active === "Projects" ? 'text-green-800 border-b-2 border-green-600 pb-1' : 'text-green-700 hover:text-green-900'
            }`}
          >
            Projects
          </span>
          <span 
            onClick={() => scrollToSection('contact', 'Contact')} 
            className={`cursor-pointer transition-colors duration-300 ${
              active === "Contact" ? 'text-green-800 border-b-2 border-green-600 pb-1' : 'text-green-700 hover:text-green-900'
            }`}
          >
            Contact
          </span>
          <span 
            onClick={() => scrollToSection('contact', 'Contact')} 
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            Hire Me
          </span>
        </div>

        <button
          className="md:hidden text-2xl text-green-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-5 py-5 flex flex-col gap-4">
          <span 
            onClick={() => scrollToSection('hero', 'Home')} 
            className={`py-2 pl-4 border-l-2 cursor-pointer transition-colors duration-300 ${
              active === "Home" ? 'text-green-800 border-green-600 font-medium' : 'text-green-700 border-transparent hover:border-green-300'
            }`}
          >
            Home
          </span>
          <span 
            onClick={() => scrollToSection('about', 'About')} 
            className={`py-2 pl-4 border-l-2 cursor-pointer transition-colors duration-300 ${
              active === "About" ? 'text-green-800 border-green-600 font-medium' : 'text-green-700 border-transparent hover:border-green-300'
            }`}
          >
            About
          </span>
          <span 
            onClick={() => scrollToSection('skills-section', 'Skills')} 
            className={`py-2 pl-4 border-l-2 cursor-pointer transition-colors duration-300 ${
              active === "Skills" ? 'text-green-800 border-green-600 font-medium' : 'text-green-700 border-transparent hover:border-green-300'
            }`}
          >
            Skills
          </span>
          <span 
            onClick={() => scrollToSection('projects', 'Projects')} 
            className={`py-2 pl-4 border-l-2 cursor-pointer transition-colors duration-300 ${
              active === "Projects" ? 'text-green-800 border-green-600 font-medium' : 'text-green-700 border-transparent hover:border-green-300'
            }`}
          >
            Projects
          </span>
          <span 
            onClick={() => scrollToSection('contact', 'Contact')} 
            className={`py-2 pl-4 border-l-2 cursor-pointer transition-colors duration-300 ${
              active === "Contact" ? 'text-green-800 border-green-600 font-medium' : 'text-green-700 border-transparent hover:border-green-300'
            }`}
          >
            Contact
          </span>
          <span 
            onClick={() => scrollToSection('contact', 'Contact')} 
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-center mt-2 cursor-pointer"
          >
            Hire Me
          </span>
        </div>
      )}
    </nav>
  );
}