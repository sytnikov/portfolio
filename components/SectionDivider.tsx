"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="divider"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
