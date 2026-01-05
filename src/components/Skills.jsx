import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        {
          name: "TypeScript",
          icon: "fab fa-js-square",
          color: "text-blue-500",
        },
        { name: "Next.js", icon: "fas fa-arrow-right", color: "text-white" },
        {
          name: "Tailwind",
          icon: "fas fa-paint-brush",
          color: "text-teal-400",
        },
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-400" },
      ],
    },
    {
      title: "Backend Engineering",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "Python", icon: "fab fa-python", color: "text-yellow-300" },
        {
          name: "Express",
          icon: "fas fa-network-wired",
          color: "text-gray-400",
        },
        { name: "Go", icon: "fas fa-bolt", color: "text-cyan-300" },
        {
          name: "GraphQL",
          icon: "fas fa-project-diagram",
          color: "text-pink-500",
        },
        { name: "REST API", icon: "fas fa-exchange-alt", color: "text-white" },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "fas fa-cloud",
      skills: [
        { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-300" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-400" },
        { name: "Redis", icon: "fas fa-memory", color: "text-red-500" },
        { name: "AWS", icon: "fab fa-aws", color: "text-orange-400" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-600" },
        { name: "Nginx", icon: "fas fa-server", color: "text-white" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
        { name: "Figma", icon: "fab fa-figma", color: "text-purple-400" },
        { name: "Jira", icon: "fab fa-jira", color: "text-blue-500" },
        { name: "Vercel", icon: "fas fa-triangle", color: "text-white" },
        { name: "Jest", icon: "fas fa-vial", color: "text-red-700" },
        { name: "Bash", icon: "fas fa-terminal", color: "text-gray-200" },
      ],
    },
  ];

  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            Expertise
          </div>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Proficiency
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            A comprehensive overview of the technologies, tools, and platforms I
            leverage to build scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark/50 backdrop-blur-sm border border-surface-border hover:border-primary/50 transition-colors duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary"
                >
                  <i className={category.icon}></i>
                </motion.div>
                <h3 className="text-white text-xl font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#2a2430] border border-surface-border hover:border-primary/40 hover:bg-[#322b3a] transition-all cursor-default"
                  >
                    <motion.i
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`${skill.icon} ${skill.color} text-2xl`}
                    ></motion.i>
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Progress Bars */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl bg-surface-dark/30 backdrop-blur-sm border border-surface-border"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proficiency Levels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "Frontend Development", level: 95 },
              { skill: "Backend Development", level: 88 },
              { skill: "Database Design", level: 85 },
              { skill: "DevOps & Deployment", level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
