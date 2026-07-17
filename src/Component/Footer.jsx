const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-green-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-green-700 hover:text-green-900 transition-colors duration-300">
          © 2026 Krys Developer. All rights reserved.
        </p>
        <p className="text-green-700 hover:text-green-900 transition-colors duration-300">
          Designed and built by <span className="text-green-700 font-semibold drop-shadow-[0_0_4px_rgba(34,197,94,0.2)]">Krys</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;