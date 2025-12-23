import biuDms from "@/public/biu-dms.png";
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
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Records Management System",
    description:
      "A records management system that incorporates an access-level based control mechanism in a multi-user platform where users (primarily academic staff) share and store, manage, and retrieve text, files, and other kinds of data",
    fullDescription:
      "A comprehensive next.js application designed to streamline the interaction in a coworker or interdependent personnel framework. It integrated then top-tier mechanisms for security (like data encryption), access (in assigned user roles), UI/UX (in minimalistic fluidity). This platform enables the secure sharing and storage of confidential data with selected enterprise members.",
    image: biuDms,
    imageAlt: "project interface grid",
    tags: ["NextJS", "TypeScript", "PostgreSQL"],
    technologies: ["React", "TypeScript", "NextJS", "PostgreSQL"],
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
    title: "portfolio",
    description: "Portfolio website featuring previously undergone projects",
    fullDescription:
      "A next-generation futuristic portfolio web application that showcases my dev works and ideas, provides a bio and serves as a calling card for potential clients or collaborators.",
    image: underConstruction,
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
    challenges: "",
  },
  {
    id: "project-3",
    title: "ScreenShooter",
    description:
      "A web crawler that fetches html and screenshot data recurrently.",
    fullDescription:
      "A web crawler that fetches html and screenshot data recurrently.",
    image: underConstruction,
    imageAlt: "Website under construction",
    tags: ["Node.js", "Next.js", "PostgreSQL"],
    technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
    features: ["Real-time collaboration features for code review teams"],
    challenges: "",
  },
];
