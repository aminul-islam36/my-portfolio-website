import { motion } from "framer-motion";

const Footer = () => {
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      href: "#",
      hoverColor: "hover:bg-[#181717] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      href: "#",
      hoverColor: "hover:bg-[#0077b5] hover:text-white",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      href: "#",
      hoverColor: "hover:bg-[#EA4335] hover:text-white",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full border-t border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark/30 z-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-primary">Meriem</span>
              <span className="text-secondary">&lt;/&gt;</span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences. Let&apos;s build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-lg`}
                  href={social.href}
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
              >
                <i className="fas fa-envelope text-primary"></i>
                <span>hello@developer.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
              >
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Morocco</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
              >
                <i className="fas fa-clock text-primary"></i>
                <span>Available for freelance</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 dark:border-white/10 pt-8"
        >
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              © 2024 Meriem. All rights reserved. Built with ❤️ using React &
              Tailwind CSS
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6 text-sm">
              <motion.span
                whileHover={{ color: "#A855F7" }}
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
              >
                Privacy Policy
              </motion.span>
              <motion.span
                whileHover={{ color: "#A855F7" }}
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
              >
                Terms of Service
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        ></motion.div>
      </motion.div>

      {/* Connect Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center pt-10 pb-8 border-t border-gray-200 dark:border-white/5"
      >
        <motion.p
          variants={itemVariants}
          className="text-gray-500 dark:text-gray-400 mb-6 text-sm font-semibold uppercase tracking-widest"
        >
          Connect with me
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex items-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={`connect-${social.name}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent transition-all duration-300 ${social.hoverColor}`}
              href={social.href}
            >
              <i className={`${social.icon} text-xl`}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </footer>
  );
};

export default Footer;
