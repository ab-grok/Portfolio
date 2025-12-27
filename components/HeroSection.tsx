"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [buttonAnim, setButtonAnim] = useState({ a: false, b: false });

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewWork = () => {
    setTimeout(() => {
      setButtonAnim({ a: true, b: false });

      setTimeout(() => {
        setButtonAnim({ a: true, b: true });

        setTimeout(() => {
          setButtonAnim({ a: false, b: false });
        }, 5000);
      }, 0);
    }, 0);
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          about="Hero section"
          src="/hero_anim.mp4"
          poster="/hero_pic.png"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <div className="via-background/50 to-background absolute inset-0 bg-linear-to-b from-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
        <motion.h1
          className="mb-8 text-5xl font-bold text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient-1">Software Engineer</span>
        </motion.h1>

        <motion.p
          className="mb-12 text-xl font-light text-white md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting digital experiences with AI.
        </motion.p>

        <motion.div
          initial={{ scale: 0, opacity: 0, y: -70 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onMouseDown={handleViewWork}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className={` ${buttonAnim.a && "-translate-y-2 scale-60 delay-0 duration-0"} ${buttonAnim.b && "translate-y-20 duration-0"} bg-primary text-hidden text-primary-foreground animate-neon-pulse neon-glow-2 cursor-pointer from-blue-600 to-pink-600 px-12 py-6 text-base font-normal transition-all duration-1000 hover:scale-x-105 hover:bg-linear-to-b`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.1 }}
            >
              View My Work
            </motion.span>
            <ChevronDown className="ml-2 h-5 w-5" strokeWidth={1.5} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
