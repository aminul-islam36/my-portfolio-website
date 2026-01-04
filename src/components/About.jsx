import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About
          <span className="text-gradient"> Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent-pink to-blue-500 opacity-70 blur-md"
            />
            <div className="absolute inset-1 rounded-full bg-background-light dark:bg-background-dark z-10"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-2 z-20 rounded-full overflow-hidden border-4 border-white/10 glow-effect"
            >
              <img
                alt="Meriem working on code"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0fAiLddi_xgFmKjThYvcQB5Ime15WiEzH1rPJO4qir3WE0bWX9UYSdOtIvFbnIV2-LRNC19-KPbBPzDE0Sy4n5K5n5XsWctC2B4hiqIZ0XvsgdzdLg4SRnRBKC_8g1E7nnkml7vnLEVFZCx4_AFX9FvhooWIuJi3GrEuktG04HIYt1z9Jpr7FNRgQmFpwRQuRNJyNAR2_sx4Kn2QysQ3rwzVeSIbYeRZWkKN9J_vUJ8yonbQOjBsEknhc5Za1W0RQXElijqid_c"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6">
          <motion.h3 variants={itemVariants} className="text-3xl font-semibold">
            I'm a Full Stack Developer based in
            <span className="text-primary"> Morocco</span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="space-y-4 text-lg leading-relaxed opacity-80"
          >
            <motion.p variants={itemVariants}>
              Hello! I'm Meriem, a passionate developer with a knack for
              crafting robust and scalable web applications. My journey in tech
              started with a simple curiosity about how websites work.
            </motion.p>
            <motion.p variants={itemVariants}>
              With over 4 years of experience, I specialize in building
              efficient frontend interfaces and powerful backend systems.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-4 py-6"
          >
            {[
              {
                number: "04+",
                label: "Years Experience",
                color: "text-primary",
              },
              {
                number: "50+",
                label: "Projects Completed",
                color: "text-accent-pink",
              },
              { number: "20+", label: "Happy Clients", color: "text-blue-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card bg-base-200 shadow-lg text-center p-4"
              >
                <span className={`block text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.number}
                </span>
                <span className="text-sm opacity-70">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary gap-2"
            >
              Download CV
              <Download className="h-4 w-4" />
            </motion.button>

            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Mail className="w-5 h-5" />, label: "Email" },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-ghost btn-circle"
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-20 pt-10 border-t border-gray-200 dark:border-white/5 text-center"
      >
        <p className="text-sm uppercase tracking-widest opacity-70 mb-8 font-semibold">
          Technologies I work with
        </p>
        <div className="flex justify-center flex-wrap gap-8 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {["🌐", "🎨", "⚡", "⚛️", "🟢", "💨", "🐙"].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-4xl cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
