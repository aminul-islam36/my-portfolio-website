import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Shorter loading time
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xl font-semibold text-primary"
          >
            Loading Portfolio...
          </motion.h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-white transition-colors duration-300 min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Simplified Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 dark:opacity-30 bg-grid-pattern bg-grid"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <section id="home" className="pt-20">
            <Hero />
          </section>

          <section id="about" className="py-16">
            <About />
          </section>

          <section className="py-16">
            <Testimonials />
          </section>

          <section id="skills" className="py-16">
            <Skills />
          </section>

          <section id="projects" className="py-16">
            <Projects />
          </section>

          <section id="contact" className="py-16">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 btn btn-circle btn-primary shadow-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
