"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: process.env.NEXT_PUBLIC_LINKEDIN,
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: process.env.NEXT_PUBLIC_X,
      label: "X",
    },
    {
      icon: FaInstagram,
      href: process.env.NEXT_PUBLIC_IG,
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" ref={ref} className="bg-background px-8 py-32">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground mb-8 text-center text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient-1">Connect</span>
          </h2>

          <p className="mb-16 text-center text-lg text-gray-200">
            Have a project in mind or want to collaborate? You can contact me!
          </p>

          <form onSubmit={handleSubmit} className="mb-16 space-y-8">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card text-card-foreground focus:border-primary h-14 border-gray-700 text-base"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card text-card-foreground focus:border-primary h-14 border-gray-700 text-base"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card text-card-foreground focus:border-primary resize-none border-gray-700 text-base"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              // pulse animation on in view and after a certain period
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 w-full text-base font-normal"
            >
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className="text-center">
            <p className="mb-8 text-lg text-gray-200">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-gray-300 transition-colors"
                  aria-label={social.label}
                >
                  {/* scale with hover */}
                  <social.icon className="h-8 w-8" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
