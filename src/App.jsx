import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Slider from "./component/slider";
import Experience from "./component/HeaderItem";
import Projects from "./component/OtherProjects";
import Skills from "./component/Skills";
import ContactSection from "./component/ContactSection";

const navLinks = ["About", "Experience", "Skills", "Projects", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex items-center justify-between px-5 py-3 max-w-2xl mx-auto">


          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium text-gray-500 hover:text-[#00CEB3] transition-colors border-none bg-transparent p-0 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-gray-600 p-1"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="flex flex-col px-5 py-3 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm font-medium text-gray-600 hover:text-[#00CEB3] transition-colors text-left border-none bg-transparent p-0 cursor-pointer"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sections */}
      <section id="about"><Slider /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact"><ContactSection /></section>

      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Abrar Alzhrani · Front-End Engineer
      </footer>
    </div>
  );
}

export default App;
