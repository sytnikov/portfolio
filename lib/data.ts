import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import galleryImg from "@/public/gallery.png";
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
    title: "Full-stack Development Trainee",
    location: "Integrify Academy | Helsinki, FI",
    description:
      "Graduated as a full-stack developer after 6 months of training. Main focus on MERN stack.",
    icon: React.createElement(FaReact),
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
    title: "Image Gallery",
    description:
      "Interactive high-perfomance image gallery displaying pictures from the Pexels library. Designed to provide users with the neat image search functionality.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    imageUrl: galleryImg,
  },
  {
    title: "Tennis Products E-Store",
    description:
      "E-commerce platform for selling tennis-related produce providing product CRUD operations, user profiling, cart, sorting, filtering and searching functionality, and an admin dashboard.",
    tags: ["React", "TypeScript", "Redux", "Express.js", "MongoDB", "Material UI"],
    imageUrl: tennisStoreImg,
  },
  {
    title: "Ticket Tracker",
    description:
      "Ticket tracking app allowing to create new tickets and delete them once they are completed. It has features like user authentication and protected action routes.",
    tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    imageUrl: ticketsImg,
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Resend"
] as const;
