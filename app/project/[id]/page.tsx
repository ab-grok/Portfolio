"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Ghost } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectDetailPage() {
  const [visitSite, setVisitSite] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="bg-background text-foreground flex min-h-screen items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-foreground mb-8 text-4xl font-bold">
            Project Not Found
          </h1>
          <Button
            onClick={() => router.push("/")}
            className="hover:bg-primary text-primary-foreground h-12 font-normal transition-all duration-200 active:scale-98"
            variant="link"
          >
            <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="bg-background/60 border-border fixed top-0 right-0 left-0 z-50 border-b shadow-sm shadow-black backdrop-blur-sm">
        <div className="container mx-auto flex justify-between px-8 py-7.5">
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            className="text-foreground text-md hover:bg-accent hover:text-accent-foreground bg-transparent font-normal"
          >
            <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Portfolio
          </Button>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button
              className="transition-colors duration-500 hover:bg-pink-500 hover:text-white"
              onMouseDown={() => setVisitSite(true)}
              onMouseUp={() => setVisitSite(false)}
              variant="link"
            >
              Visit Site
              <ExternalLink size={50} className="sroke-foreground stroke-3" />
            </Button>
          </a>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-foreground text-gradient-1 mb-8 h-20 bg-white text-5xl font-bold md:text-6xl">
              {project.title}
            </h1>

            <div className="mb-12">
              <Image
                src={project.image}
                alt={project.imageAlt}
                placeholder="blur"
                className="neon-glow h-auto w-full rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-foreground mb-6 text-3xl font-semibold">
                  Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-200">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-3xl font-semibold">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-card text-card-foreground border-primary/30 rounded-lg border px-6 py-3 text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-3xl font-semibold">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-lg text-gray-200"
                    >
                      <span className="text-primary mt-1 mr-3">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-3xl font-semibold">
                  Challenges & Solutions
                </h2>
                <p className="text-lg leading-relaxed text-gray-200">
                  {project.challenges}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
