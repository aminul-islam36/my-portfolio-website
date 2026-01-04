import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online stores with real-time inventory tracking and sales analytics.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      category: "Full Stack",
      icon: "🛒",
    },
    {
      title: "TaskFlow Pro",
      description:
        "Collaborative task management with drag-and-drop Kanban boards and real-time team chat integration.",
      tags: ["React", "Redux", "Node.js", "Socket.io"],
      category: "Productivity",
      icon: "✅",
    },
    {
      title: "Synapse AI Writer",
      description:
        "AI-powered content generation tool for marketers. Integrates with OpenAI API for text generation.",
      tags: ["Vue.js", "Python", "FastAPI", "OpenAI API"],
      category: "AI / ML",
      icon: "✨",
    },
    {
      title: "CoinWatch",
      description:
        "Real-time cryptocurrency portfolio tracker with price alerts and historical data charts.",
      tags: ["Angular", "RxJS", "Firebase", "D3.js"],
      category: "Finance",
      icon: "₿",
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20"
    >
      <motion.div variants={containerVariants} className="text-center mb-16">
        <motion.div
          variants={itemVariants}
          className="badge badge-primary badge-lg mb-4"
        >
          My Work
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Featured
          <span className="text-gradient"> Projects</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="opacity-70 max-w-2xl mx-auto text-lg"
        >
          Recent projects showcasing my expertise in building scalable web
          applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card bg-base-200 shadow-xl"
          >
            <figure className="relative h-48 bg-base-300">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl opacity-60">{project.icon}</span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="badge badge-neutral">{project.category}</div>
              </div>
            </figure>

            <div className="card-body">
              <h3 className="card-title text-xl hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="opacity-70 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="badge badge-primary badge-outline"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="card-actions justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline gap-2"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
