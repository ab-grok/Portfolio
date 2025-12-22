"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pic from "../public/self_sitting.png";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  //organize into languages: ts, tailwind; frameworks: React.js, Next.js; Database: PosrgreSQL;hosting: Vercel, CloudFlare
  const skills = [
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "PostgreSQL",
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={pic}
              alt="A portrait of AB"
              className="w-full h-auto rounded-lg neon-glow"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About <span className="text-gradient-1">Me</span>
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              I'm a client first software engineer. My goal is digitally
              depicting your mind's creation. I spent a large portion of my life
              honing and perfecting programming concepts that transform complex
              problems into elegant, scalable software solutions. As a result
              I've mastered skills in various languages and frameworks that I
              utilise in creating products that embody the life of a business.
            </p>

            <p className="text-lg text-gray-200 mb-12 leading-relaxed">
              I prioritise writing code that is not only functional but also
              maintainable and comprehensible to every stakeholder independent
              of expertise -- enabling innovative scrutiny.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-6 py-3 bg-card text-card-foreground rounded-lg border border-primary/30 text-base hover:border-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
