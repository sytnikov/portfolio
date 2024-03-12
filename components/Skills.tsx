"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="!max-w-[50rem]">
      <h2>My skills</h2>
      <ul className="justify-center">
        {skillsData.map((skill, index) => (
          <motion.li 
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}

          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
