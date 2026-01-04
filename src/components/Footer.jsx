import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="footer footer-center bg-base-200 text-base-content p-10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Connect Section */}
        <motion.div variants={containerVariants} className="text-center">
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-6"
          >
            Connect with me
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="btn btn-circle btn-ghost hover:btn-primary"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="link link-hover"
              href={link.href}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Copyright */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 w-full border-t border-base-300 pt-6"
        >
          <motion.p variants={itemVariants} className="text-sm opacity-70">
            © {currentYear} Meriem. All rights reserved.
          </motion.p>
          <motion.div variants={containerVariants} className="flex gap-6">
            <motion.a
              variants={itemVariants}
              className="link link-hover text-sm opacity-70"
              href="#"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              variants={itemVariants}
              className="link link-hover text-sm opacity-70"
              href="#"
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
