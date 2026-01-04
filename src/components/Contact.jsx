import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@developer.com",
      href: "mailto:hello@developer.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15550000000",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      href: null,
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={itemVariants}>
            <div className="badge badge-primary badge-lg mb-4">Contact Me</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in
              <span className="text-gradient"> Touch</span>
            </h2>
            <p className="text-lg opacity-70 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="btn btn-circle btn-primary btn-outline">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{info.title}</h3>
                  {info.href ? (
                    <a href={info.href} className="link link-primary text-lg">
                      {info.value}
                    </a>
                  ) : (
                    <p className="opacity-70 text-lg">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="card bg-base-200 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input input-bordered input-primary"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input input-bordered input-primary"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Opportunity"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input input-bordered input-primary"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="textarea textarea-bordered textarea-primary resize-none"
                  />
                </div>

                <div className="form-control">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn btn-primary btn-lg gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
