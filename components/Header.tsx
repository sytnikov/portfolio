"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { links } from "@/lib/data";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="header"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav>
        <ul>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center
                px-3 py-3 hover:text-gray-950 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
