import biuDms from "@/public/biu-dms.png";
import portfolio from "@/public/portfolio.png";
import underConstruction from "@/public/website_construction_2.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: StaticImageData;
  imageAlt: string;
  tags: string[];
  technologies: string[];
  features: string[];
  challenges: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Records Management System",
    link: "http://biu-dms.vercel.app",
    description:
      "A records management system that enables data exchange in a multi user platform",
    fullDescription:
      "A comprehensive next.js application designed to streamline multi personnel interaction. It integrated then top-tier mechanisms for security (like data encryption), access control (in user roles), UI/UX (in minimalistic fluidity). This platform enables the secure sharing and storage of confidential data with selected enterprise members.",
    image: biuDms,
    imageAlt: "project interface grid",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    technologies: ["React", "TypeScript", "Next.js", "PostgreSQL"],
    features: [
      "Data Management",
      "Interactive layered access architecture",
      "Multi-user platform",
    ],
    challenges:
      "It is a basic prototype hastily engineered as a university project.",
  },
  {
    id: "project-2",
    title: "Portfolio Website",
    link: "http://ab-grok.uk",
    description:
      "A Personal website mainly for showcasing projects and serving as an online calling card",
    fullDescription:
      "A next-generation futuristic portfolio web application that showcases my dev works and ideas, provides a bio and serves as a calling card for potential clients or collaborators.",
    image: portfolio,
    imageAlt: "AB's Portfolio",
    tags: ["Next.js", "Tailwind", "framer-motion", "card tilt effect"],
    technologies: [
      "Next.js",
      "Next.js",
      "Tailwind",
      "framer-motion",
      "card tilt effect",
      "TypeScript",
      "PostgreSQL",
    ],
    features: [
      "AI-driven theming",
      "Responsive UI",
      "Mobile first layout",
      "Futuristic tones",
    ],
    challenges: "None yet",
  },
  {
    id: "project-3",
    title: "ScreenShooter",
    description:
      "A web crawler that fetches html and screenshot data on set time intervals.",
    fullDescription:
      "A web crawler that fetches html and screenshot data on set time intervals.",
    image: underConstruction,
    imageAlt: "Website under construction",
    tags: ["Node.js", "Next.js", "PostgreSQL"],
    technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
    features: ["Real-time collaboration features for code review teams"],
    challenges:
      "Sorting database interaction -- reiteratively querying dynamically created tables and the following cleanup process.",
  },
];
