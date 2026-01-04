import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 py-20"
    >
      {/* Content */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 space-y-8 text-center md:text-left order-2 md:order-1"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
          >
            👋 Welcome to my portfolio
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <span className="text-gradient">Meriem</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Crafting modern, responsive, and user-friendly websites with passion
          and precision. Transforming ideas into seamless digital experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg gap-3 btn-gradient shadow-lg"
          >
            Download Resume
            <Download className="h-5 w-5" />
          </motion.button>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline btn-lg"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center md:justify-start gap-8 pt-8"
        >
          {[
            { number: "4+", label: "Years Experience" },
            { number: "50+", label: "Projects" },
            { number: "20+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center items-center relative order-1 md:order-2"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-r from-primary/30 to-secondary/20 blur-[60px] rounded-full"
        />

        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 glow-effect bg-gradient-to-br from-primary/20 to-secondary/20"
          >
            <img
              alt="Meriem - Full Stack Developer"
              className="w-full h-full object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VUZc0VfVgZBo0CxizFIGvET2j5Z1bM2nLA21cTtWcDZjmCbbHMou-nMs5ek8NwUZRsyfmWW44gKBaHAxhczFm7_Gw58q-BtIvkm7pcUo1i-crVyR4b7GCFID0a_OyTpjo-FFhDIoN5J8t0n4YYGNS-T3fz1i7dJT3GPZV2gklj7zr49CbMz0O070GEl7DJNYTsKP18mskdGErBEkivBfxTgOdqWSj6exnk5hDeyv0IBoylYfJ-DZ5yyAMYORuTMNh01H1xBM3n8"
            />
          </motion.div>

          {/* Tech Icons */}
          {[
            { icon: "JS", color: "text-yellow-400", position: "top-4 -left-4" },
            { icon: "⚛", color: "text-sky-400", position: "bottom-4 -right-4" },
            {
              icon: "HTML",
              color: "text-orange-500",
              position: "top-4 right-4",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className={`absolute ${tech.position} z-20`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900/90 border border-white/20 flex items-center justify-center tech-icon-glow backdrop-blur-sm"
              >
                <span className={`${tech.color} text-xl md:text-2xl font-bold`}>
                  {tech.icon}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
