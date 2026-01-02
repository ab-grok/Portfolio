"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import pic from "../public/portrait.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const [picHovered, setPicHovered] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    function updateWidth() {
      setMobileView(window.innerWidth < 640);
    }
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //organize into languages: ts, tailwind; frameworks: React.js, Next.js; Database: PosrgreSQL;hosting: Vercel, CloudFlare
  const skills = [
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "PostgreSQL",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="bg-background px-8 py-64 select-none lg:px-50"
    >
      <div className="mx-auto max-w-7xl lg:container">
        <motion.div
          className="grid items-center gap-16 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0 }}
        >
          {/* Image */}
          <motion.div
            initial={
              mobileView ? { opacity: 0, y: -100 } : { opacity: 0, x: -100 }
            }
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onMouseEnter={() => setPicHovered(true)}
            onMouseLeave={() => setPicHovered(false)}
          >
            <Image
              src={pic}
              alt="AB"
              placeholder="blur"
              className="animate-neon-glow-pulse h-auto w-full rounded-2xl object-contain lg:h-150"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={
              mobileView ? { opacity: 0, y: -100 } : { opacity: 0, x: 100 }
            }
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-foreground mb-8 text-4xl font-bold md:text-5xl">
              About <span className="text-gradient-1">Me</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              I'm a client-first software engineer. My goal is digitally
              depicting your mind's creation. I spend a decisive portion of my
              development hours working on seamless integrations for required
              components — prioritizing the product's ease of use .
            </p>

            <p className="mb-12 text-lg leading-relaxed text-gray-200">
              Armed with 2+ years of deep programming concepts, a drive for
              learning, and a style choice of contemporary art. My designs aim
              to transform complex problems into minimalistic, responsive, and
              scalable software solutions.
            </p>

            {/* Skills */}
            <div>
              <h4
                className={cn(
                  "text-gradient-1 mb-6 text-3xl font-semibold transition-all delay-[3s] duration-1000",
                  picHovered && "animate-bounce",
                )}
              >
                Skills
              </h4>
              <div ref={skillsRef} className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className={cn(
                      "hover:translate bg-card text-card-foreground border-primary/30 hover:border-primary cursor-default rounded-lg border px-6 py-3 text-base transition-colors",
                    )}
                    initial={{ y: 50, opacity: 0, scale: 0.8 }}
                    animate={
                      skillsInView
                        ? { y: 0, opacity: 1, scale: 1 }
                        : { y: 0, opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
