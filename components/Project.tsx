"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    /* group utility can't be used with @apply -> that's why it's added to the className here */
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article>
        <div className="group-odd:ml-[19rem]">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={`Image of ${title} project`}
          quality={95}
          className="project-image"
        />
      </article>
    </motion.div>
  );
}
