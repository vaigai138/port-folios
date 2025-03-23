import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          updateUnderline(section);
        }
      }
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateUnderline = (section) => {
    const ref = navRefs.current[section];
    if (ref) {
      setUnderlineStyle({
        left: ref.offsetLeft,
        width: ref.offsetWidth,
      });
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 bg-white z-50 transition-shadow ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-teal-600">
          Vaigai Vendhan<span className="text-gray-900">.</span>
        </h1>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium text-gray-800 relative">
          <div className="relative flex space-x-10">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                ref={(el) => (navRefs.current[section] = el)}
                className={`relative hover:text-purple-500 transition-all ${
                  activeSection === section ? "text-purple-600" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            {/* Moving Underline */}
            <div
              className="absolute bottom-[-4px] h-[3px] bg-purple-500 transition-all duration-300"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
              }}
            ></div>
          </div>
        </nav>

        {/* Download CV Button */}
        <button
  onClick={() => window.open("https://drive.google.com/file/d/1DX-ayAOhP0gBc25zrLdzVeXlroTmJZej/view", "_blank")}
  className="px-6 py-2 rounded-lg text-lg font-medium cursor-pointer transition-all bg-[#ededf2] hover:bg-[#009689] hover:text-white hidden md:block"
>
  Download CV
</button>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md flex flex-col space-y-4 text-lg font-medium text-gray-800 p-6 absolute w-full left-0">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-purple-500 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
