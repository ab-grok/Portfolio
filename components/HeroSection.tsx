"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          about="Hero section"
          src="https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_1.mp4"
          poster="https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient-1">Software Engineer</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-white font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting digital experiences with AI assistance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base px-12 py-6 animate-neon-pulse neon-glow"
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" strokeWidth={1.5} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
