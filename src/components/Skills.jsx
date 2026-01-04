import React from "react";
import { Code, Database, Cloud, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind", icon: "💨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "Express", icon: "🚀" },
        { name: "Go", icon: "🔵" },
        { name: "GraphQL", icon: "🔗" },
        { name: "REST API", icon: "🔌" },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Nginx", icon: "🌐" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", icon: "📝" },
        { name: "Figma", icon: "🎨" },
        { name: "Jira", icon: "📋" },
        { name: "Vercel", icon: "▲" },
        { name: "Jest", icon: "🧪" },
        { name: "Bash", icon: "💻" },
      ],
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
          Expertise
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Technical
          <span className="text-gradient"> Proficiency</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="opacity-70 max-w-2xl mx-auto text-lg"
        >
          Technologies, tools, and platforms I use to build scalable web
          applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card bg-base-200 shadow-xl"
          >
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="card-title">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="card bg-base-300 hover:bg-base-100 transition-all cursor-pointer"
                  >
                    <div className="card-body p-3 items-center text-center">
                      <span className="text-2xl mb-1">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
