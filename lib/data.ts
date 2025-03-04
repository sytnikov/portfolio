import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import galleryImg from "@/public/gallery.png";
import generatorImg from "@/public/image-generator.png";
import tennisStoreImg from "@/public/tennis-store.png";
import ticketsImg from "@/public/tickets.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-stack Freelance Developer",
    location: "Remotely | Helsinki, FI",
    description:
      "Completed 5+ full-stack projects with a focus on React (Next.js) framework.",
    icon: React.createElement(FaReact),
    date: "2023-present",
  },
  {
    title: "Full-stack Development Trainee",
    location: "Integrify Academy | Helsinki, FI",
    description:
      "Graduated as a full-stack developer after 6 months of training. Main focus on MERN stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Product Team Lead",
    location: "Marble Technologies Oy | Helsinki, FI",
    description:
      "Built 2 SaaS products from ground up. Hired and managed a product team, made 5x growth in 2 years",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
  {
    title: "Customer Success Lead",
    location: "Marble Technologies Oy | Helsinki, FI",
    description:
      "Managed and supported 10.000+ international users. Decreased the number of tickets by 50%.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generator",
    description:
      "This Chrome extension allows users to input a prompt and receive a set of AI-generated images based on the description. The extension communicates with the image generation model through a backend proxy server using REST API.",
    tags: ["React", "TypeScript", "Express.js", "Webpack", "MaterialUI"],
    imageUrl: generatorImg,
    url: "https://chromewebstore.google.com/detail/chatgpt-image-generator/nnpdeoblieaeppbbemdbdbpajcpoogcp",
  },
  {
    title: "Image Gallery",
    description:
      "Interactive high-perfomance image gallery displaying pictures from the Pexels library. Designed to provide users with the neat image search functionality.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    imageUrl: galleryImg,
    url: "https://gallery.sytnikov.dev/",
  },
  {
    title: "Tennis Products E-Store",
    description:
      "E-commerce platform for selling tennis-related produce providing product CRUD operations, user profiling, cart, sorting, filtering and searching functionality, and an admin dashboard.",
    tags: ["React", "TypeScript", "Redux", "Express.js", "MongoDB", "Material UI"],
    imageUrl: tennisStoreImg,
    url: "https://tennis-store.sytnikov.dev/",
  },
  {
    title: "Ticket Tracker",
    description:
      "Ticket tracking app allowing to create new tickets and delete them once they are completed. It has features like user authentication and protected action routes.",
    tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    imageUrl: ticketsImg,
    url: "https://tickets.sytnikov.dev/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Supabase",
  "Redux Toolkit",
  "AWS",
  "Docker",
  "CI/CD",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "TablePlus",
  "Jest",
  "Python",
  "Git",
  "CLI Scripting",
  "Tailwind CSS",
  "Material UI",
  "Framer Motion",
  "Zod",
  "Resend",
  "React Email"
] as const;
