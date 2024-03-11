"use client";

import { animate, motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2>About me</h2>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">
          Innovation Management and Automation
        </span>
        , I decided to pursue my career in IT and entrepreneurship. After 3
        years of running a startup, I realized my passion towards coding,
        switched a career and became a{" "}
        <span className="font-medium">full-stack web developer</span>.{" "}
      </p>
      <p>
        My favorite part of programming is
        <span className="italic"> making people's lives easier</span> by means
        of technologies. I{" "}
        <span className="underline">love seeing grateful customers</span> using
        the apps I created. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Mostly I write in TypeScript. I'm also familiar with Python, DevOps
        tools, and Cloud services, always looking to learn new technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing{" "}
        <span className="font-medium">sports</span>, learning{" "}
        <span className="font-medium">languages</span>, and immersing myself in{" "}
        <span className="font-medium">all things music-related</span>.
      </p>
    </motion.section>
  );
}
