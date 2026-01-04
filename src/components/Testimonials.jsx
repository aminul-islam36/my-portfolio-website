import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
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

  const testimonials = [
    {
      quote:
        "Meriem transformed our outdated platform into a sleek, high-performing web application. Her technical skills are top-notch.",
      name: "Alex Lewis",
      position: "Product Manager, TechFlow",
      initials: "AL",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "Working with Meriem was an absolute pleasure. She delivered ahead of schedule and the code quality was impeccable.",
      name: "Sarah Jenkins",
      position: "CTO, Innovate Inc",
      initials: "SJ",
      gradient: "from-secondary to-purple-600",
    },
    {
      quote:
        "The level of creativity and problem-solving Meriem brought to our e-commerce site was impressive.",
      name: "Michael Ross",
      position: "Founder, E-Shopify",
      initials: "MR",
      gradient: "from-orange-400 to-red-500",
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
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-gradient">What Clients Say</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="opacity-70 max-w-2xl mx-auto text-lg"
        >
          Collaborating with passionate people to build exceptional digital
          products.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card bg-base-200 shadow-xl"
          >
            <div className="card-body relative">
              <Quote className="absolute top-4 right-4 text-3xl text-primary/40" />

              <p className="mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="avatar placeholder">
                  <div
                    className={`bg-gradient-to-br ${testimonial.gradient} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold`}
                  >
                    <span>{testimonial.initials}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm opacity-70">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
