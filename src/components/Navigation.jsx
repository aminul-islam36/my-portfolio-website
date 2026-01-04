import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6 py-4 md:px-12 flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a
          className="text-2xl font-bold tracking-tight group cursor-pointer"
          onClick={() => handleLinkClick("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary group-hover:text-secondary transition-colors duration-300">
            Meriem
          </span>
          <span className="text-secondary">&lt;/&gt;</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              className={`text-sm font-medium transition-all duration-300 cursor-pointer relative ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`}
              onClick={() => handleLinkClick(link.href)}
              whileHover={{ y: -2 }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="btn btn-ghost btn-circle"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`block py-3 px-4 rounded-lg text-base font-medium cursor-pointer ${
                    activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
