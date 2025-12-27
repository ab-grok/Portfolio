"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [cardClicked, setCardClicked] = useState(false);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Reverse motion direction
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    router.push(`/project/${project.title.replaceAll(" ", "")}`);
  };

  return (
    <motion.div
      className="h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        setCardClicked(false);
        handleMouseLeave;
      }}
      style={{
        perspective: "1000px",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      onMouseDown={() => setCardClicked(true)}
      onMouseUp={() => setCardClicked(false)}
    >
      <Card
        className={`${cardClicked ? "scale-95" : "scale-100"} bg-card text-card-foreground hover:border-primary neon-glow-hover h-full max-h-150 border-2 border-gray-700 py-8 transition-all duration-300`}
        // put clickable link here
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <CardContent
          style={{
            transform: "translateZ(100px)",
          }}
          className="relative top-0 max-h-full w-auto overflow-hidden"
        >
          <div className="relative overflow-hidden">
            {/* use demo vid instead */}
            <Image
              src={project.image}
              alt={project.imageAlt}
              placeholder="blur"
              className="h-64 w-full object-cover backdrop-blur-md transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
            <div className="from-card absolute inset-0 bg-linear-to-t to-transparent opacity-60" />
          </div>

          <div className="p-4 sm:p-8">
            <div className="mb-4 flex items-start justify-between">
              {/* add clickable link here */}
              <h3 className="text-foreground text-2xl font-semibold">
                {project.title}
              </h3>
              <ExternalLink
                className="text-primary ml-4 h-6 w-6 shrink-0"
                strokeWidth={1.5}
              />
            </div>

            <p className="mb-6 h-15 overflow-y-scroll text-base leading-relaxed text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground rounded px-4 py-2 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
