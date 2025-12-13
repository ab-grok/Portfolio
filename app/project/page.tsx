"use client";

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">Project Not Found</h1>
          <Button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal"
          >
            <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-8 py-6">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground font-normal"
          >
            <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Portfolio
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-gradient-1">
              {project.title}
            </h1>
            
            <div className="mb-12">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto rounded-lg neon-glow"
                loading="lazy"
              />
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-semibold text-foreground mb-6">Overview</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-foreground mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-card text-card-foreground rounded-lg border border-primary/30 text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-foreground mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-lg text-gray-200">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-foreground mb-6">Challenges & Solutions</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
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
