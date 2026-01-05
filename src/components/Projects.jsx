import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online stores. Features include real-time inventory tracking, sales analytics visualization, and order processing workflows.",
      icon: "fas fa-shopping-cart",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "TaskFlow Pro",
      description:
        "A collaborative task management application enabling teams to organize projects with drag-and-drop Kanban boards, real-time updates, and team chat integration.",
      icon: "fas fa-tasks",
      category: "Productivity",
      technologies: ["React", "Redux", "Node.js", "Socket.io"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Synapse AI Writer",
      description:
        "An AI-powered content generation tool that helps marketers create blog posts, social media captions, and ad copy. Integrates with OpenAI API for text generation.",
      icon: "fas fa-magic",
      category: "AI / ML",
      technologies: ["Vue.js", "Python", "FastAPI", "OpenAI API"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "CoinWatch",
      description:
        "A real-time cryptocurrency portfolio tracker. Users can monitor price changes, set alerts, and view historical data charts powered by D3.js.",
      icon: "fab fa-bitcoin",
      category: "Finance",
      technologies: ["Angular", "RxJS", "Firebase", "D3.js"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="mb-24 scroll-mt-20">
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
            My Work
          </div>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Projects
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Explore a selection of my recent projects, showcasing my expertise
            in building scalable web applications and solving complex problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(127, 19, 236, 0.15)",
              }}
              className="group relative flex flex-col rounded-2xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image/Icon Area */}
              <div className="relative h-60 overflow-hidden bg-[#2a2430]">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent z-10"></div>

                {/* Animated Background */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center bg-[#2a2430]"
                >
                  <motion.i
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`${project.icon} text-surface-border text-8xl opacity-30`}
                  ></motion.i>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/60 text-xs text-white backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-5`}
                ></motion.div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8 pt-2">
                <motion.h3
                  whileHover={{ color: "#A855F7" }}
                  className="text-2xl font-bold text-white mb-3 transition-colors"
                >
                  {project.title}
                </motion.h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20"
                    href="#"
                  >
                    <i className="fas fa-eye"></i>
                    Live Demo
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#302839] hover:bg-[#3e344a] text-white text-sm font-bold transition-all border border-transparent hover:border-slate-600"
                    href="#"
                  >
                    <i className="fas fa-code"></i>
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-white font-bold bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
            href="#"
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
