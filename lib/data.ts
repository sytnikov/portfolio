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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
] as const;
