import { motion } from 'framer-motion'
import { useState } from 'react'
import { Title } from './Title'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = project => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      image: 'https://i.ibb.co.com/C31VY735/Screenshot-20.png',
      description:
        'A comprehensive dashboard for managing online stores with real-time inventory tracking, sales analytics visualization, and order processing workflows. Built with modern technologies to provide seamless user experience and robust performance.',
      icon: 'fas fa-shopping-cart',
      category: 'Full Stack',
      technologies: ['Next.js', 'Tailwind', 'firebase'],
      gradient: 'from-blue-500 to-cyan-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Global LinkHub',
      image: 'https://i.ibb.co.com/8nDD7NWq/Screenshot-21.png',
      description:
        'A powerful link management platform that allows users to create, organize, and share collections of links. Features include custom link previews, analytics tracking, and collaborative sharing capabilities.',
      icon: 'fas fa-link',
      category: 'Full Stack',
      technologies: ['Next.js', 'mongodb', 'Tailwind', 'express'],
      gradient: 'from-green-500 to-teal-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Asset Verce Dashboard',
      image: 'https://i.ibb.co.com/9HtZ3dx7/Screenshot-23.png',
      description:
        'A sophisticated asset management system designed for tracking and managing digital assets. Includes features for asset categorization, performance monitoring, and detailed reporting with interactive charts.',
      icon: 'fas fa-chart-line',
      category: 'Full Stack',
      technologies: ['Next.js', 'mongodb', 'Tailwind', 'node.js'],
      gradient: 'from-purple-500 to-indigo-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'TaskFlow Pro',
      image: 'https://i.ibb.co.com/q3jrf2Ft/Screenshot-22.png',
      description:
        'A collaborative task management application enabling teams to organize projects with drag-and-drop Kanban boards, real-time updates, and team chat integration. Perfect for agile development teams.',
      icon: 'fas fa-tasks',
      category: 'Productivity',
      technologies: ['React', 'Next.js', 'Node.js'],
      gradient: 'from-green-500 to-emerald-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Synapse AI Writer',
      image: 'https://i.ibb.co.com/G4NyG2QK/Screenshot-31.png',
      description:
        'An AI-powered content generation tool that helps marketers create blog posts, social media captions, and ad copy. Integrates with OpenAI API for intelligent text generation and content optimization.',
      icon: 'fas fa-magic',
      category: 'AI / ML',
      technologies: ['React.js', 'Next.js', 'mongodb'],
      gradient: 'from-purple-500 to-pink-500',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'CoinWatch',
      description:
        'A real-time cryptocurrency portfolio tracker that allows users to monitor price changes, set alerts, and view historical data charts. Features advanced analytics and portfolio performance tracking.',
      icon: 'fab fa-bitcoin',
      category: 'Finance',
      technologies: ['Node.js', 'Next.js', 'Firebase', 'mongodb'],
      gradient: 'from-orange-500 to-red-500',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id='projects' className='py-10 scroll-mt-10'>
      {/* Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]'></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='relative z-10 max-w-7xl mx-auto'
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col items-center text-center space-y-4 mb-12'
        >
          <div className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider'>
            My Work
          </div>
          <Title>Featured Projects</Title>
          <p className='font-body text-slate-400 max-w-2xl text-lg leading-relaxed'>
            Explore a selection of my recent projects, showcasing my expertise
            in building scalable web applications and solving complex problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
        >
          {projects.map(project => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                boxShadow: '0 20px 40px rgba(127, 19, 236, 0.15)',
              }}
              className='group relative flex flex-col rounded-xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl w-full min-h-[400px]'
            >
              {/* Project Image/Icon Area */}
              <div className='relative h-40 sm:h-48 overflow-hidden bg-[#2a2430]'>
                {project.image ? (
                  <>
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  </>
                ) : (
                  <>
                    {/* Fallback Icon Background */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className='w-full h-full flex items-center justify-center bg-[#2a2430]'
                    >
                      <motion.i
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className={`${project.icon} text-surface-border text-6xl opacity-30`}
                      ></motion.i>
                    </motion.div>
                    {/* Gradient Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-5`}
                    ></motion.div>
                  </>
                )}

                {/* Category Badge */}
                <div className='absolute top-3 right-3 z-20'>
                  <span className='px-3 py-1 rounded-full bg-black/70 text-xs text-white backdrop-blur-sm border border-white/20 font-medium'>
                    {project.category}
                  </span>
                </div>

                {/* Bottom Gradient */}
                <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent z-10'></div>
              </div>

              {/* Project Content */}
              <div className='flex flex-col flex-1 p-4 sm:p-5'>
                <motion.h3
                  whileHover={{ color: '#A855F7' }}
                  className='font-title text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 transition-colors line-clamp-2'
                >
                  {project.title}
                </motion.h3>

                <p className='font-body text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-3'>
                  {project.description.length > 100
                    ? `${project.description.slice(0, 100)}...`
                    : project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5'>
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className='px-2 sm:px-2.5 py-0.5 sm:py-1 capitalize rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex items-center gap-2 sm:gap-3 mt-auto'>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(project)}
                    className='flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30'
                  >
                    <i className='fas fa-eye text-xs'></i>
                    <span className='hidden xs:inline sm:inline'>
                      Live Demo
                    </span>
                    <span className='xs:hidden sm:hidden'>Demo</span>
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-surface-border/50 hover:bg-surface-border text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all border border-surface-border hover:border-primary/30'
                    href='#'
                  >
                    <i className='fab fa-github text-xs'></i>
                    <span className='hidden xs:inline sm:inline'>Code</span>
                    <span className='xs:hidden sm:hidden'>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div variants={itemVariants} className='text-center mt-12'>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center justify-center px-8 py-4 text-white font-bold bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300'
            href='#'
          >
            <span>View All Projects</span>
            <i className='fas fa-arrow-right ml-2'></i>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects
