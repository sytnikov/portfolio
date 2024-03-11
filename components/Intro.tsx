"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import profilePic from "../public/portrait.png";

export default function Intro() {
  return (
    <section>
      <div className="standard-flex">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="portrait image"
              quality={95}
              priority={true}
              className="portrait-pic"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 -left-2 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <span className="font-bold">Hey, I'm Alexey.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience in IT. I enjoy
        building <span className="italic">web apps</span>. My focus is on{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="standard-flex flex-col sm:flex-row gap-3 px-4 text-m font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className="btn btn-primary group">
          Contact me{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1.5 transition" />
        </Link>
        <a
          href="/alexey-sytnikov-resume.pdf"
          download
          className="btn btn-secondary"
        >
          Download CV <HiDownload className="opacity-75" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexey-sytnikov/"
          target="_blank"
          className="btn btn-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sytnikov"
          target="_blank"
          className="btn btn-icon"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
